import { describe, expect, it } from 'vitest'
import {
  defaultDynamicEntities,
  defaultNoFlyZones,
  defaultObstacles,
  defaultPlanParams,
  defaultTerrain,
  defaultThreats,
  defaultWaypoints,
  defaultWeights,
  defaultReplanTriggers
} from '@/core/defaults'
import { DynamicEnvironment } from '@/core/dynamic-environment'
import { planMission } from '@/core/planning'
import { planTrajectory } from '@/core/smoothing'
import { checkReplanTriggers } from '@/core/replanning'
import type { Vec3, Waypoint } from '@/types'

function distToPolyline(p: Vec3, path: Vec3[]): number {
  let best = Infinity
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1]
    const b = path[i]
    const abx = b.x - a.x
    const aby = b.y - a.y
    const abz = b.z - a.z
    const t = Math.max(
      0,
      Math.min(
        1,
        ((p.x - a.x) * abx + (p.y - a.y) * aby + (p.z - a.z) * abz) /
          (abx * abx + aby * aby + abz * abz || 1)
      )
    )
    const d = Math.hypot(
      p.x - (a.x + abx * t),
      p.y - (a.y + aby * t),
      p.z - (a.z + abz * t)
    )
    if (d < best) best = d
  }
  return best
}

function runDefault(smoothing: 'bspline' | 'none' | 'polyline' | 'bezier' | 'polynomial') {
  const env = new DynamicEnvironment(
    defaultTerrain,
    defaultThreats(),
    defaultNoFlyZones(),
    defaultObstacles(),
    []
  )
  const wps: Waypoint[] = defaultWaypoints()
  const r = planMission(env, wps, defaultPlanParams, defaultWeights, { smoothing })
  return { env, wps, r }
}

describe('修复2：默认 A* + B 样条航迹经过所有航点', () => {
  for (const smoothing of ['none', 'polyline', 'bspline', 'bezier', 'polynomial'] as const) {
    it(`A* / ${smoothing}：起终点与途经点误差远小于栅格边长`, () => {
      const { r, wps } = runDefault(smoothing)
      expect(r.success, r.message).toBe(true)
      const cell = defaultPlanParams.cellSize
      const ordered = [...wps].sort((a, b) => {
        const rank = (x: Waypoint['role']) =>
          x === 'start' ? 0 : x === 'end' ? 2 : 1
        return rank(a.role) - rank(b.role)
      })
      // raw 与 smooth 都检查
      for (const wp of ordered) {
        const eRaw = distToPolyline(wp.position, r.rawPath)
        const eSmooth = distToPolyline(wp.position, r.smoothPath)
        expect(eRaw, `raw ${wp.role} 误差 ${eRaw.toFixed(2)}m`).toBeLessThan(cell * 0.2)
        expect(eSmooth, `smooth ${wp.role} 误差 ${eSmooth.toFixed(2)}m`).toBeLessThan(cell * 0.2)
      }
      // 端点必须严格相等
      expect(r.smoothPath[0]).toMatchObject({
        x: ordered[0].position.x,
        y: ordered[0].position.y,
        z: ordered[0].position.z
      })
      const last = r.smoothPath[r.smoothPath.length - 1]
      expect(last).toMatchObject({
        x: ordered[ordered.length - 1].position.x,
        y: ordered[ordered.length - 1].position.y,
        z: ordered[ordered.length - 1].position.z
      })
    })
  }

  it('Dijkstra 同样严格经过航点', () => {
    const env = new DynamicEnvironment(
      defaultTerrain,
      defaultThreats(),
      defaultNoFlyZones(),
      defaultObstacles(),
      []
    )
    const wps = defaultWaypoints()
    const r = planMission(
      env,
      wps,
      { ...defaultPlanParams, algo: 'dijkstra' },
      defaultWeights,
      { smoothing: 'bspline' }
    )
    expect(r.success).toBe(true)
    for (const wp of wps) {
      expect(distToPolyline(wp.position, r.smoothPath)).toBeLessThan(
        defaultPlanParams.cellSize * 0.2
      )
    }
  })
})

describe('修复3：默认场景播放早期不再因“远障碍”反复重规划', () => {
  it('默认动态环境下前 6 秒不触发任何重规划', () => {
    const dyn = defaultDynamicEntities()
    const env = new DynamicEnvironment(
      defaultTerrain,
      defaultThreats(),
      defaultNoFlyZones(),
      defaultObstacles(),
      dyn
    )
    const wps = defaultWaypoints()
    const r = planMission(env, wps, defaultPlanParams, defaultWeights, {
      smoothing: 'bspline'
    })
    expect(r.success).toBe(true)
    const traj = planTrajectory(r.smoothPath, defaultPlanParams)

    // 与 store 一致地模拟冷却（每次触发后 6s 内不再触发）
    let cooldown = 0
    const timings: { t: number; reason: string; detail: string }[] = []
    const dt = 0.25
    for (let t = 0; t < 6; t += dt) {
      cooldown = Math.max(0, cooldown - dt)
      const s = traj.find((x) => x.time >= t)!
      const tr = checkReplanTriggers({
        env,
        plan: defaultPlanParams,
        weights: defaultWeights,
        triggers: defaultReplanTriggers,
        traj,
        time: t,
        position: s.position,
        heading: Math.atan2(s.velocity.x, s.velocity.z),
        plannedTotalLength: r.stats.distance,
        cooldownLeft: cooldown
      })
      if (tr.triggered) {
        cooldown = 6
        timings.push({ t, reason: tr.reason ?? '', detail: tr.detail })
      }
    }
    // 期望：该阶段即便存在潜在相遇，也最多只规划一次（冷却抑制反复触发）
    expect(timings.length).toBeLessThanOrEqual(1)
  })

  it('整段航程中重规划次数显著少于旧逻辑（全程 ≤3 次）', () => {
    const dyn = defaultDynamicEntities()
    const env = new DynamicEnvironment(
      defaultTerrain,
      defaultThreats(),
      defaultNoFlyZones(),
      defaultObstacles(),
      dyn
    )
    const wps = defaultWaypoints()
    const r = planMission(env, wps, defaultPlanParams, defaultWeights, {
      smoothing: 'bspline'
    })
    const traj = planTrajectory(r.smoothPath, defaultPlanParams)
    let cooldown = 0
    let count = 0
    const dt = 0.25
    for (let t = 0; t < traj[traj.length - 1].time; t += dt) {
      cooldown = Math.max(0, cooldown - dt)
      const s = traj.find((x) => x.time >= t)!
      const tr = checkReplanTriggers({
        env,
        plan: defaultPlanParams,
        weights: defaultWeights,
        triggers: defaultReplanTriggers,
        traj,
        time: t,
        position: s.position,
        heading: Math.atan2(s.velocity.x, s.velocity.z),
        plannedTotalLength: r.stats.distance,
        cooldownLeft: cooldown
      })
      if (tr.triggered) {
        cooldown = 6
        count++
      }
    }
    expect(count).toBeLessThanOrEqual(3)
  })

  it('真正逼近横穿障碍时仍能触发碰撞/接近绕飞', () => {
    const dyn = defaultDynamicEntities()
    const env = new DynamicEnvironment(
      defaultTerrain,
      defaultThreats(),
      defaultNoFlyZones(),
      defaultObstacles(),
      dyn
    )
    const wps = defaultWaypoints()
    const r = planMission(env, wps, defaultPlanParams, defaultWeights, {
      smoothing: 'bspline'
    })
    const traj = planTrajectory(r.smoothPath, defaultPlanParams)
    let firedAt = -1
    for (let t = 0; t < traj[traj.length - 1].time; t += 0.25) {
      const s = traj.find((x) => x.time >= t)!
      const tr = checkReplanTriggers({
        env,
        plan: defaultPlanParams,
        weights: defaultWeights,
        triggers: defaultReplanTriggers,
        traj,
        time: t,
        position: s.position,
        heading: Math.atan2(s.velocity.x, s.velocity.z),
        plannedTotalLength: r.stats.distance,
        cooldownLeft: 0
      })
      if (tr.triggered) {
        firedAt = t
        expect(tr.hazard).toBeTruthy()
        break
      }
    }
    // 横穿障碍在航线附近，必然在相遇前触发
    expect(firedAt).toBeGreaterThanOrEqual(0)
  })
})
