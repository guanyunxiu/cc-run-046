import type { DynamicEntity, Vec3 } from '@/types'
import { Environment } from './environment'
import type {
  BuildingObstacle,
  NoFlyZone,
  TerrainParams,
  ThreatZone
} from '@/types'
import { clamp } from '@/utils/math3d'

export interface DynamicState {
  position: Vec3
  active: boolean
}

/**
 * 动态环境（功能02）：在静态 Environment 之上叠加
 * 移动障碍物（硬碰撞球）与突发/动态威胁（时变圆柱场）。
 * t=0 时动态实体退化为按初始状态判定，全局规划口径与迭代一一致
 * （默认场景中静态威胁与建筑承担主要约束）。
 */
export class DynamicEnvironment extends Environment {
  dynamics: DynamicEntity[]

  constructor(
    terrainParams: TerrainParams,
    threats: ThreatZone[],
    noflyZones: NoFlyZone[],
    obstacles: BuildingObstacle[],
    dynamics: DynamicEntity[] = []
  ) {
    super(terrainParams, threats, noflyZones, obstacles)
    this.dynamics = dynamics
  }

  /** 某实体在仿真时刻 t 的状态（位置 + 是否激活）。
   * 激活条件：实体总开关 active 且处于调度时间窗 [enableAt, disableAt)。 */
  stateAt(e: DynamicEntity, t: number): DynamicState {
      const active = e.active && t >= e.enableAt && t < e.disableAt
    return { position: entityPosition(e, t), active }
  }

  /** 当前激活的移动障碍状态（t 时刻） */
  activeObstacles(t: number): { entity: DynamicEntity; position: Vec3 }[] {
    const out: { entity: DynamicEntity; position: Vec3 }[] = []
    for (const e of this.dynamics) {
      if (e.kind !== 'obstacle') continue
      const st = this.stateAt(e, t)
      if (st.active) out.push({ entity: e, position: st.position })
    }
    return out
  }

  /** 点是否被移动障碍球（按 clearance 膨胀）阻挡；球心为实体位置 */
  hitsDynamicObstacle(p: Vec3, clearance: number, t: number): boolean {
    for (const e of this.dynamics) {
      if (e.kind !== 'obstacle') continue
      const st = this.stateAt(e, t)
      if (!st.active) continue
      const r = e.radius + clearance
      if (
        Math.hypot(
          p.x - st.position.x,
          p.y - st.position.y,
          p.z - st.position.z
        ) <= r
      ) {
        return true
      }
    }
    return false
  }

  /** 综合碰撞（静态 + 动态，时刻 t） */
  isBlockedAt(p: Vec3, clearance: number, t: number): boolean {
    if (this.isBlocked(p, clearance)) return true
    return this.hitsDynamicObstacle(p, clearance, t)
  }

  /** 动态威胁强度（t 时刻，激活的 threat 实体按圆柱场叠加） */
  dynamicThreatIntensity(p: Vec3, t: number): number {
    let sum = 0
    for (const e of this.dynamics) {
      if (e.kind !== 'threat') continue
      const st = this.stateAt(e, t)
      if (!st.active) continue
      if (p.y < e.heightMin || p.y > e.heightMax) continue
      const d = Math.hypot(p.x - st.position.x, p.z - st.position.z)
      if (d >= e.threatRadius) continue
      const f = 1 - d / e.threatRadius
      sum += (clamp(e.level, 1, 5) / 5) * f * f
    }
    return sum
  }

  /** 含动态威胁的总暴露强度 */
  totalThreatAt(p: Vec3, t: number): number {
    return this.threatIntensity(p) + this.dynamicThreatIntensity(p, t)
  }

  /**
   * 时空航段可行性（在线重规划核心）：
   * 无人机沿 a->b 由 t0 运动到 t1 时，是否与各时刻移动障碍碰撞。
   * 使用端点时刻线性插值（调用方按轨迹相邻采样点传入即可对齐）。
   */
  isSegmentFeasibleSpacetime(
    a: Vec3,
    b: Vec3,
    clearance: number,
    t0: number,
    t1: number,
    sampleStep = 8
  ): boolean {
    const length = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z)
    const steps = Math.max(1, Math.ceil(length / sampleStep))
    for (let i = 0; i <= steps; i++) {
      const f = i / steps
      const p: Vec3 = {
        x: a.x + (b.x - a.x) * f,
        y: a.y + (b.y - a.y) * f,
        z: a.z + (b.z - a.z) * f
      }
      if (this.isBlocked(p, clearance)) return false
      const time = t0 + (t1 - t0) * f
      if (this.hitsDynamicObstacle(p, clearance, time)) return false
    }
    return true
  }

  /** 时空航段可行性（恒定速度便捷重载） */
  isSegmentFeasibleSpacetimeSpeed(
    a: Vec3,
    b: Vec3,
    clearance: number,
    t0: number,
    speed: number,
    sampleStep = 8
  ): boolean {
    const length = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z)
    const t1 = t0 + length / Math.max(speed, 1)
    return this.isSegmentFeasibleSpacetime(a, b, clearance, t0, t1, sampleStep)
  }

  /**
   * 动态障碍物对已时间对齐航段（a@t0 -> b@t1）的时空最近距离。
   * 对线性运动实体用解析法求两匀速直线轨迹的最近距离（避免 0.5s
   * 离散步采样在很远距离上“恰好踩点”导致的虚警）；
   * patrol 等折线运动退化为密集采样。
   * 返回最近球心距减去障碍半径；Infinity 表示附近无激活障碍。
   */
  spacetimeClearance(
    a: Vec3,
    b: Vec3,
    t0: number,
    t1: number,
    sampleStep = 10
  ): { gap: number; u: number } {
    const dt = t1 - t0
    let best = Infinity
    let bestU = 0
    for (const e of this.dynamics) {
      if (e.kind !== 'obstacle') continue
      const st0 = this.stateAt(e, t0)
      const st1 = this.stateAt(e, t1)
      if (!st0.active && !st1.active) continue
      const consider = (cx: number, cy: number, cz: number, u: number) => {
        const d = Math.hypot(cx, cy, cz) - e.radius
        if (d < best) {
          best = d
          bestU = u
        }
      }
      if (e.motion !== 'patrol' && Math.abs(dt) > 1e-9) {
        // 相对匀速直线运动：r(u) = (b-e1) + ((a-e0)-(b-e1)) * u，u∈[0,1]
        const rx = b.x - st1.position.x
        const ry = b.y - st1.position.y
        const rz = b.z - st1.position.z
        const vx = a.x - st0.position.x - rx
        const vy = a.y - st0.position.y - ry
        const vz = a.z - st0.position.z - rz
        let u = -(rx * vx + ry * vy + rz * vz) / (vx * vx + vy * vy + vz * vz || 1)
        u = Math.max(0, Math.min(1, u))
        consider(rx + vx * u, ry + vy * u, rz + vz * u, u)
      } else {
        const length = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z)
        const steps = Math.max(1, Math.ceil(length / sampleStep))
        for (let i = 0; i <= steps; i++) {
          const f = i / steps
          const time = t0 + dt * f
          const st = this.stateAt(e, time)
          if (!st.active) continue
          consider(
            a.x + (b.x - a.x) * f - st.position.x,
            a.y + (b.y - a.y) * f - st.position.y,
            a.z + (b.z - a.z) * f - st.position.z,
            f
          )
        }
      }
    }
    return { gap: best, u: bestU }
  }

  /**
   * 动态突发威胁对已时间对齐航段（a@t0 -> b@t1）的最小侵入量（解析/采样）。
   * 高度不在威胁高度层内时忽略；返回值 = 水平距离 - threatRadius
   * （<0 表示已进入威胁圆柱），Infinity 表示附近没有激活的动态威胁。
   * 同时返回最近点时刻因子 u∈[0,1]，供触发时序判断。
   */
  spacetimeThreatClearance(
    a: Vec3,
    b: Vec3,
    t0: number,
    t1: number,
    sampleStep = 10
  ): { gap: number; u: number } {
    const dt = t1 - t0
    let best = Infinity
    let bestU = 0
    for (const e of this.dynamics) {
      if (e.kind !== 'threat') continue
      const consider = (px: number, py: number, pz: number, t: number, u: number) => {
        const st = this.stateAt(e, t)
        if (!st.active) return
        if (py < e.heightMin - 10 || py > e.heightMax + 10) return
        const d = Math.hypot(px - st.position.x, pz - st.position.z) - e.threatRadius
        if (d < best) {
          best = d
          bestU = u
        }
      }
      // 解析近遇（线性运动威胁/静止突发威胁都适用）
      const st0 = this.stateAt(e, t0)
      const st1 = this.stateAt(e, t1)
      if (Math.abs(dt) > 1e-9) {
        const rx = b.x - st1.position.x
        const rz = b.z - st1.position.z
        const vx = a.x - st0.position.x - rx
        const vz = a.z - st0.position.z - rz
        let u = -(rx * vx + rz * vz) / (vx * vx + vz * vz || 1)
        u = Math.max(0, Math.min(1, u))
        consider(
          a.x + (b.x - a.x) * u,
          a.y + (b.y - a.y) * u,
          a.z + (b.z - a.z) * u,
          t0 + dt * u,
          u
        )
      }
      const length = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z)
      const steps = Math.max(1, Math.ceil(length / sampleStep))
      for (let i = 0; i <= steps; i++) {
        const f = i / steps
        consider(
          a.x + (b.x - a.x) * f,
          a.y + (b.y - a.y) * f,
          a.z + (b.z - a.z) * f,
          t0 + dt * f,
          f
        )
      }
    }
    return { gap: best, u: bestU }
  }
}

/**
 * 实体在时刻 t 的位置：
 * - static：初始位置
 * - linear：position -> target 往返
 * - patrol：沿 patrolPoints 折线往返（乒乓）
 */
export function entityPosition(e: DynamicEntity, t: number): Vec3 {
  if (e.motion === 'static' || e.speed <= 0) return { ...e.position }
  const pts = e.motion === 'patrol' && e.patrolPoints.length >= 2
    ? e.patrolPoints
    : [e.position, e.target]
  if (pts.length < 2) return { ...e.position }

  // 各段长度与一圈（去+回）总长度
  const segLens: number[] = []
  let total = 0
  for (let i = 1; i < pts.length; i++) {
    const l = Math.hypot(
      pts[i].x - pts[i - 1].x,
      pts[i].y - pts[i - 1].y,
      pts[i].z - pts[i - 1].z
    )
    segLens.push(l)
    total += l
  }
  const cycle = total * 2
  if (cycle < 1e-6) return { ...pts[0] }

  let s = (e.speed * t) % cycle
  if (s < 0) s += cycle
  const forward = s < total
  if (!forward) s = cycle - s // 回程：距离反向映射

  // 沿正向折线定位
  let acc = 0
  for (let i = 0; i < segLens.length; i++) {
    if (s <= acc + segLens[i] || i === segLens.length - 1) {
      const local = Math.max(0, s - acc)
      const k = segLens[i] > 1e-9 ? local / segLens[i] : 0
      return {
        x: pts[i].x + (pts[i + 1].x - pts[i].x) * k,
        y: pts[i].y + (pts[i + 1].y - pts[i].y) * k,
        z: pts[i].z + (pts[i + 1].z - pts[i].z) * k
      }
    }
    acc += segLens[i]
  }
  return { ...pts[pts.length - 1] }
}

/** 预测轨迹点（t0 起 horizon 秒内，等间隔采样） */
export function predictPath(
  e: DynamicEntity,
  t0: number,
  horizon: number,
  samples = 24
): Vec3[] {
  const out: Vec3[] = []
  for (let i = 0; i <= samples; i++) {
    out.push(entityPosition(e, t0 + (horizon * i) / samples))
  }
  return out
}
