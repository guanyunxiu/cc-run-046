import type {
  ReplanEvent,
  ReplanReason,
  ReplanTriggers,
  Vec3
} from '@/types'
import type { DynamicEnvironment } from './dynamic-environment'
import { entityPosition } from './dynamic-environment'
import type { CostWeights, PlanParams } from '@/types'
import type { TrajectorySample } from './smoothing'
import { Random } from './rng'
import { dist } from '@/utils/math3d'
import { extensionAllowed } from './dynamics'

/** 在时间窗 [t0,t1] 上按固定步长线性插值采样轨迹 */
function sampleTrajectoryWindow(
  traj: TrajectorySample[],
  t0: number,
  t1: number,
  dt: number
): TrajectorySample[] {
  const out: TrajectorySample[] = []
  for (let t = t0; t <= t1 + 1e-9; t += dt) {
    if (t < traj[0].time || t > traj[traj.length - 1].time) continue
    // 二分
    let lo = 0
    let hi = traj.length - 1
    while (lo < hi - 1) {
      const mid = (lo + hi) >> 1
      if (traj[mid].time <= t) lo = mid
      else hi = mid
    }
    const a = traj[lo]
    const b = traj[Math.min(hi, traj.length - 1)]
    const span = b.time - a.time
    const k = span > 1e-9 ? (t - a.time) / span : 0
    out.push({
      position: {
        x: a.position.x + (b.position.x - a.position.x) * k,
        y: a.position.y + (b.position.y - a.position.y) * k,
        z: a.position.z + (b.position.z - a.position.z) * k
      },
      velocity: {
        x: a.velocity.x + (b.velocity.x - a.velocity.x) * k,
        y: a.velocity.y + (b.velocity.y - a.velocity.y) * k,
        z: a.velocity.z + (b.velocity.z - a.velocity.z) * k
      },
      speed: a.speed + (b.speed - a.speed) * k,
      time: t,
      s: a.s + (b.s - a.s) * k
    })
  }
  return out
}

/** 触发检测输入 */
export interface ReplanContext {
  env: DynamicEnvironment
  plan: PlanParams
  weights: CostWeights
  triggers: ReplanTriggers
  traj: TrajectorySample[]
  /** 当前仿真时刻（秒） */
  time: number
  /** 当前无人机位置/航向 */
  position: Vec3
  heading: number
  /** 原始计划总航程（用于剩余航程异常判定） */
  plannedTotalLength: number
  /** 触发冷却计时（秒），外部维护；本次返回新冷却 */
  cooldownLeft: number
}

export interface TriggerResult {
  triggered: boolean
  reason: ReplanReason | null
  detail: string
  /** 风险来源实体位置（用于高亮） */
  hazard?: Vec3
}

/**
 * 在线重规划触发条件检测（功能02）：
 * 1) 碰撞风险：前瞻时域内与移动障碍球/突发威胁圆柱真正侵入安全净空
 *    （按各自时间对齐的时空最近距离判定，而非“水平距离小于预警圈”）；
 * 2) 威胁接近：实体进入预警余量且相对距离仍在缩短（远离时不再触发）；
 * 3) 偏航过大 / 剩余航程异常（默认关闭）。
 *
 * 旧版“水平距离 < radius + warnDistance”在障碍还远（上百米）、高度不重叠、
 * 甚至正在远离时都会触发，导致整段航程反复重规划；这里整体收紧。
 */
export function checkReplanTriggers(ctx: ReplanContext): TriggerResult {
  const { env, plan, triggers, traj, time } = ctx
  if (!triggers.enabled || traj.length < 2) {
    return { triggered: false, reason: null, detail: '' }
  }
  // 冷却期内不再触发（由调用方在每次重规划后置位）：
  // 一次真正的冲突只规划一次，绕飞过程中不重复报。
  if (ctx.cooldownLeft > 0) {
    return { triggered: false, reason: null, detail: '' }
  }

  // 在 [time, time+lookahead] 上均匀重采样 0.5s 一步（不依赖原始轨迹点密度）
  const horizon = sampleTrajectoryWindow(
    traj,
    time,
    time + triggers.lookaheadTime,
    0.5
  )
  if (horizon.length < 2) return { triggered: false, reason: null, detail: '' }

  // 1) 真正的时空碰撞风险（移动障碍球 + 突发威胁圆柱）。
  //    - 已经侵入安全净空（gap<0）：前瞻时域内任意时刻都触发（需要提前绕飞）；
  //    - 仅净空不足（0<=gap<clearance）：最近点必须临近（≤近程时域）才触发，
  //      避免障碍还很远、擦肩而过时提前数秒反复重规划。
  const nearHorizon = Math.min(3.5, triggers.lookaheadTime)
  if (triggers.onCollisionRisk) {
    for (let i = 0; i < horizon.length - 1; i++) {
      const a = horizon[i]
      const b = horizon[i + 1]
      const segDur = Math.max(b.time - a.time, 1e-6)
      const oc = env.spacetimeClearance(
        a.position,
        b.position,
        a.time,
        b.time,
        8
      )
      if (Number.isFinite(oc.gap)) {
        const approachT = a.time + oc.u * segDur - time
        const imminent = approachT <= nearHorizon
        // 深度侵入（球体重叠超过小安全余量）视为确定碰撞，立即触发；
        // 边缘擦边/仅净空不足只在近遇临近时触发，避免数秒外反复规划。
        const hardConflict = oc.gap < -4
        if (hardConflict || (oc.gap < plan.clearance && imminent)) {
          return {
            triggered: true,
            reason: 'collision-risk',
            detail: `前瞻航段与移动障碍碰撞风险（净空 ${oc.gap.toFixed(0)}m，约 ${Math.max(0, approachT).toFixed(1)}s 后）`,
            hazard: nearestHazardAt(env, a, b, 'obstacle')
          }
        }
      }
      const th = env.spacetimeThreatClearance(
        a.position,
        b.position,
        a.time,
        b.time,
        8
      )
      if (Number.isFinite(th.gap)) {
        const approachT = a.time + th.u * segDur - time
        const imminent = approachT <= nearHorizon
        // 威胁圆柱是高代价场而非硬碰撞体：仅在近遇临近、且确实进入
        // 威胁半径（gap<0）或净空不足时才绕飞。
        if (th.gap < plan.clearance && imminent) {
          return {
            triggered: true,
            reason: 'collision-risk',
            detail: `前瞻航段将进入突发威胁区（侵入 ${(-th.gap).toFixed(0)}m，约 ${Math.max(0, approachT).toFixed(1)}s 后）`,
            hazard: nearestHazardAt(env, a, b, 'threat')
          }
        }
      }
    }
  }

  // 2) 威胁/障碍接近：进入预警余量，且最近距离仍在缩短（正在接近而非远离）。
  //    预警判定与碰撞口径一致：障碍看 3D 球心距离、威胁看同高度层水平距离，
  //    避免“同一高度平面但上下错开几十米”这类假预警。
  if (triggers.onThreatApproach && horizon.length >= 2) {
    const now0 = horizon[0]
    const later = horizon[Math.min(4, horizon.length - 1)]
    for (const e of env.dynamics) {
      const st0 = env.stateAt(e, now0.time)
      if (!st0.active) continue
      if (e.kind === 'threat') {
        // 高度层不重叠的威胁不预警
        if (now0.position.y < e.heightMin - 10 || now0.position.y > e.heightMax + 10) {
          continue
        }
        let dNow = Infinity
        let dLater = Infinity
        for (const h of [now0, later]) {
          const st = env.stateAt(e, h.time)
          const d = Math.hypot(
            h.position.x - st.position.x,
            h.position.z - st.position.z
          )
          if (h === now0) dNow = d
          else dLater = d
        }
        const warnAt = e.threatRadius + triggers.warnDistance
        if (dNow < warnAt && dLater <= dNow - 2) {
          return {
            triggered: true,
            reason: 'threat-approach',
            detail: `${e.name} 接近预警范围（${dNow.toFixed(0)}m）`,
            hazard: { ...st0.position }
          }
        }
      } else {
        let dNow = Infinity
        let dLater = Infinity
        for (const h of [now0, later]) {
          const st = env.stateAt(e, h.time)
          const d = Math.hypot(
            h.position.x - st.position.x,
            h.position.y - st.position.y,
            h.position.z - st.position.z
          )
          if (h === now0) dNow = d
          else dLater = d
        }
        const warnAt = e.radius + plan.clearance + triggers.warnDistance
        if (dNow < warnAt && dLater <= dNow - 2) {
          return {
            triggered: true,
            reason: 'threat-approach',
            detail: `${e.name} 进入预警范围（${dNow.toFixed(0)}m）`,
            hazard: { ...st0.position }
          }
        }
      }
    }
  }

  // 3) 偏航过大：实际航向与前瞻参考航向偏差
  if (triggers.onYawDeviation && horizon.length >= 3) {
    const ref = horizon[Math.min(4, horizon.length - 1)]
    const cur = horizon[0]
    const refYaw = Math.atan2(
      ref.position.x - cur.position.x,
      ref.position.z - cur.position.z
    )
    let dyaw = Math.abs(refYaw - ctx.heading) * (180 / Math.PI)
    if (dyaw > 180) dyaw = 360 - dyaw
    if (dyaw > triggers.yawThreshold) {
      return {
        triggered: true,
        reason: 'yaw-deviation',
        detail: `偏航 ${dyaw.toFixed(0)}° 超过阈值 ${triggers.yawThreshold}°`
      }
    }
  }

  // 4) 剩余航程异常：当前到终点参考航程与计划值偏差过大
  if (triggers.onRangeAnomaly) {
    let remain = 0
    for (let i = 0; i < horizon.length - 1; i++) {
      remain += dist(horizon[i].position, horizon[i + 1].position)
    }
    // 前瞻窗口之外到终点的剩余
    const lastH = horizon[horizon.length - 1]
    const lastIdx = traj.findIndex((s) => s === lastH)
    for (let i = Math.max(1, lastIdx + 1); i < traj.length; i++) {
      remain += dist(traj[i - 1].position, traj[i].position)
    }
    const expectedFromStart = ctx.plannedTotalLength
    const traveled = traj.length > 0 ? sampleS(traj, time) : 0
    const expectedRemain = Math.max(expectedFromStart - traveled, 1)
    if (remain > expectedRemain * (1 + triggers.rangeThreshold)) {
      return {
        triggered: true,
        reason: 'range-anomaly',
        detail: `剩余航程 ${remain.toFixed(0)}m 较计划 ${expectedRemain.toFixed(0)}m 偏长 ${(
          (remain / expectedRemain - 1) * 100
        ).toFixed(0)}%`
      }
    }
  }

  return { triggered: false, reason: null, detail: '' }
}

/** 在冲突航段 [a,b] 上找出最近的指定类型动态实体位置（用于风险点高亮） */
function nearestHazardAt(
  env: DynamicEnvironment,
  a: TrajectorySample,
  b: TrajectorySample,
  kind: 'obstacle' | 'threat'
): Vec3 | undefined {
  let best: Vec3 | undefined
  let bestD = Infinity
  const n = 4
  for (let i = 0; i <= n; i++) {
    const f = i / n
    const t = a.time + (b.time - a.time) * f
    const p: Vec3 = {
      x: a.position.x + (b.position.x - a.position.x) * f,
      y: a.position.y + (b.position.y - a.position.y) * f,
      z: a.position.z + (b.position.z - a.position.z) * f
    }
    for (const e of env.dynamics) {
      if (e.kind !== kind) continue
      const st = env.stateAt(e, t)
      if (!st.active) continue
      const d =
        kind === 'threat'
          ? Math.hypot(p.x - st.position.x, p.z - st.position.z)
          : Math.hypot(p.x - st.position.x, p.y - st.position.y, p.z - st.position.z)
      if (d < bestD) {
        bestD = d
        best = { ...st.position }
      }
    }
  }
  return best
}

function sampleS(traj: TrajectorySample[], time: number): number {
  for (let i = 0; i < traj.length - 1; i++) {
    if (traj[i + 1].time >= time) {
      const dt = traj[i + 1].time - traj[i].time
      const k = dt > 1e-6 ? (time - traj[i].time) / dt : 0
      return traj[i].s + (traj[i + 1].s - traj[i].s) * k
    }
  }
  return traj[traj.length - 1]?.s ?? 0
}

/** 局部重规划结果 */
export interface LocalReplanResult {
  success: boolean
  /** 新的局部路径（连接点 -> 回到原航线的接入点） */
  localPath: Vec3[]
  /** 搜索过程候选航迹（可视化） */
  candidates: Vec3[][]
  /** 局部代价：重规划前 */
  costBefore: number
  /** 局部代价：重规划后 */
  costAfter: number
  /** 接入点在原轨迹中的下标 */
  mergeIndex: number
  /** 耗时 ms */
  planMs: number
  message: string
}

/**
 * 局部在线重规划（功能02）：
 * 以无人机当前位置为起点，在原轨迹上取窗口远端为目标，
 * 用时空感知的 RRT 搜索绕开 t 时刻预测的移动障碍/突发威胁，
 * 返回的局部路径用于在窗口内替换原航迹。
 */
export function localReplan(
  env: DynamicEnvironment,
  plan: PlanParams,
  weights: CostWeights,
  traj: TrajectorySample[],
  time: number,
  windowRadius: number,
  seed = 42
): LocalReplanResult {
  const t0 = performance.now()
  // 当前轨迹下标
  let curIdx = 0
  for (let i = 0; i < traj.length; i++) {
    if (traj[i].time <= time) curIdx = i
  }
  const start = { ...traj[curIdx].position }
  const speed = Math.max(traj[curIdx].speed, plan.speedMin)

  // 沿原轨迹累计航程寻找窗口接入点
  let merge = curIdx + 1
  let acc = 0
  while (merge < traj.length - 1 && acc < windowRadius) {
    acc += dist(traj[merge].position, traj[merge + 1].position)
    merge++
  }
  const goal = { ...traj[Math.min(merge, traj.length - 1)].position }

  // 原窗口局部代价（重规划前）
  const costBefore = windowCost(
    env,
    traj.slice(curIdx, merge + 1).map((s) => s.position),
    plan,
    weights,
    time,
    speed
  )

  // 时空 RRT
  const result = spacetimeRRT(
    env,
    start,
    goal,
    plan,
    weights,
    time,
    speed,
    new Random(seed),
    traj[curIdx].time
  )

  const planMs = performance.now() - t0
  if (!result.path) {
    return {
      success: false,
      localPath: [],
      candidates: result.candidates,
      costBefore,
      costAfter: costBefore,
      mergeIndex: merge,
      planMs,
      message: '局部重规划未找到绕飞路径，保持原航线'
    }
  }

  const costAfter = windowCost(env, result.path, plan, weights, time, speed)
  return {
    success: true,
    localPath: result.path,
    candidates: result.candidates,
    costBefore,
    costAfter,
    mergeIndex: merge,
    planMs,
    message: `局部重规划完成：代价 ${costBefore.toFixed(0)} → ${costAfter.toFixed(0)}`
  }
}

/** 时空 RRT：扩展边按无人机到达时刻检查移动障碍碰撞 */
function spacetimeRRT(
  env: DynamicEnvironment,
  start: Vec3,
  goal: Vec3,
  plan: PlanParams,
  weights: CostWeights,
  tStart: number,
  speed: number,
  rng: Random,
  _absT0: number
): { path: Vec3[] | null; candidates: Vec3[][] } {
  interface Node {
    p: Vec3
    parent: number
    /** 从起点到达该节点的仿真时刻 */
    t: number
  }
  const nodes: Node[] = [{ p: start, parent: -1, t: tStart }]
  const candidates: Vec3[][] = []
  const maxN = Math.min(plan.tuning.maxSamples, 3000)
  // 局部搜索使用较小步长与走廊盒形采样，提高绕飞成功率
  const step = Math.min(plan.tuning.rrtStep, 32)
  const goalTol = step * 1.2

  // 起点-目标包围盒（带横向余量）
  const minX = Math.min(start.x, goal.x) - 160
  const maxX = Math.max(start.x, goal.x) + 160
  const minZ = Math.min(start.z, goal.z) - 160
  const maxZ = Math.max(start.z, goal.z) + 160
  const half = env.terrain.params.size / 2 - 4
  const loX = Math.max(-half, minX)
  const hiX = Math.min(half, maxX)
  const loZ = Math.max(-half, minZ)
  const hiZ = Math.min(half, maxZ)
  const loY = Math.max(25, Math.min(start.y, goal.y) - 70)
  const hiY = Math.min(env.maxAltitude, Math.max(start.y, goal.y) + 70)
  let goalIdx = -1

  const samplePoint = (): Vec3 => {
    if (rng.next() < Math.min(plan.tuning.goalBias + 0.1, 0.35)) return { ...goal }
    return {
      x: rng.range(loX, hiX),
      y: rng.range(loY, hiY),
      z: rng.range(loZ, hiZ)
    }
  }

  for (let iter = 0; iter < maxN; iter++) {
    const sample = samplePoint()
    let ni = 0
    let nd = Infinity
    for (let i = 0; i < nodes.length; i++) {
      const d =
        (nodes[i].p.x - sample.x) ** 2 +
        (nodes[i].p.y - sample.y) ** 2 +
        (nodes[i].p.z - sample.z) ** 2
      if (d < nd) {
        nd = d
        ni = i
      }
    }
    const node = nodes[ni]
    const d = dist(node.p, sample)
    const l = Math.min(step, d)
    if (l < plan.dynamics.minStep) continue
    const k = l / Math.max(d, 1e-9)
    const cand: Vec3 = {
      x: node.p.x + (sample.x - node.p.x) * k,
      y: Math.max(20, node.p.y + (sample.y - node.p.y) * k),
      z: node.p.z + (sample.z - node.p.z) * k
    }
    // 动力学（转弯/爬升）
    if (plan.dynamics.enforceInSearch) {
      const prev = node.parent >= 0 ? nodes[node.parent].p : null
      if (!extensionAllowed(plan.dynamics, prev, node.p, cand)) continue
    }
    const tArr = node.t + l / speed
    // 静态碰撞 + 时空动态碰撞（局部 RRT 用恒定巡航速度近似，时间对齐）
    if (
      !env.isSegmentFeasibleSpacetimeSpeed(
        node.p,
        cand,
        plan.clearance,
        node.t,
        speed
      )
    )
      continue
    const newIdx = nodes.length
    nodes.push({ p: cand, parent: ni, t: tArr })

    if (iter % 25 === 0) {
      candidates.push(trace(nodes, newIdx))
      if (candidates.length > 40) candidates.shift()
    }

    if (dist(cand, goal) <= goalTol) {
      const tGoal = tArr + dist(cand, goal) / speed
      if (
        env.isSegmentFeasibleSpacetimeSpeed(
          cand,
          goal,
          plan.clearance,
          tArr,
          speed
        )
      ) {
        nodes.push({ p: goal, parent: newIdx, t: tGoal })
        goalIdx = nodes.length - 1
        break
      }
    }
  }

  if (goalIdx < 0) return { path: null, candidates }
  const path = trace(nodes, goalIdx)
  candidates.push(path)
  void weights
  return { path, candidates }
}

function trace(nodes: { p: Vec3; parent: number }[], idx: number): Vec3[] {
  const out: Vec3[] = []
  let i = idx
  while (i >= 0) {
    out.push(nodes[i].p)
    i = nodes[i].parent
  }
  return out.reverse()
}

/** 局部窗口代价（含动态威胁） */
function windowCost(
  env: DynamicEnvironment,
  pts: Vec3[],
  plan: PlanParams,
  weights: CostWeights,
  tStart: number,
  speed: number
): number {
  let total = 0
  let t = tStart
  for (let i = 1; i < pts.length; i++) {
    const l = dist(pts[i - 1], pts[i])
    t += l / Math.max(speed, 1)
    const threat =
      ((env.totalThreatAt(pts[i - 1], t) + env.totalThreatAt(pts[i], t)) / 2) * l
    const nofly =
      ((env.noflyPenalty(pts[i - 1]) + env.noflyPenalty(pts[i])) / 2) * l
    total += l * weights.distance + threat * weights.threat + nofly * weights.nofly
  }
  void plan
  return total
}

/** 组装重规划事件记录 */
export function makeReplanEvent(
  reason: ReplanReason,
  detail: string,
  time: number,
  position: Vec3,
  costBefore: number,
  costAfter: number,
  planMs: number
): ReplanEvent {
  return {
    time,
    reason,
    detail,
    position: { ...position },
    costBefore: Math.round(costBefore),
    costAfter: Math.round(costAfter),
    planMs: Math.round(planMs * 10) / 10
  }
}

/** 供 UI/渲染：某时刻全部动态实体（含预测轨迹） */
export function dynamicForecast(
  env: DynamicEnvironment,
  time: number
): { id: string; position: Vec3; active: boolean; predicted: Vec3[] }[] {
  return env.dynamics.map((e) => {
    const st = env.stateAt(e, time)
    const predicted: Vec3[] = []
    if (st.active) {
      for (let i = 1; i <= 12; i++) {
        predicted.push(entityPosition(e, time + (e.predictHorizon * i) / 12))
      }
    }
    return { id: e.id, position: st.position, active: st.active, predicted }
  })
}
