/**
 * The maturity scoring rule, as defined in the practice's CLAUDE.md and
 * implemented by the diagnostic tool. Phase is floored by the prerequisite
 * axes; it is never an average.
 */

/** Fixed vector order. */
export const AXES = ["data", "tooling", "workflow", "people", "governance", "leadership"] as const;
export type Axis = (typeof AXES)[number];

/** Each axis scores 0–4, in `AXES` order. */
export type Vector = readonly [number, number, number, number, number, number];

/** The two axes that floor the phase. */
export const PREREQUISITES: readonly Axis[] = ["data", "governance"];

export const PHASES = ["Unaware", "Experimenting", "Standardizing", "Integrating", "Transforming"] as const;

const isPrereq = (axis: Axis) => PREREQUISITES.includes(axis);

/** Modal value; ties break to the lower value (conservative). */
export function mode(values: readonly number[]): number {
  const counts = new Map<number, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  let best = Infinity;
  let bestCount = 0;
  counts.forEach((count, value) => {
    if (count > bestCount || (count === bestCount && value < best)) {
      best = value;
      bestCount = count;
    }
  });
  return best;
}

export type Reading = {
  phase: number;
  phaseName: (typeof PHASES)[number];
  /** min(data, governance). */
  cap: number;
  /** Mode of the four non-prerequisite axes. */
  modeOfOthers: number;
  /** Prerequisite axes holding the phase below the others' mode (empty if not capped). */
  cappedBy: Axis[];
  /** Lowest axis; ties go to a prerequisite, then to axis order. */
  binding: Axis;
  /** Shown only to make the point that averaging hides the floor. */
  average: number;
};

/** Phase = min(cap, mode(others)), with the cap and binding constraint that explain it. */
export function readVector(v: Vector): Reading {
  const score = (axis: Axis) => v[AXES.indexOf(axis)];
  const cap = Math.min(...PREREQUISITES.map(score));
  const modeOfOthers = mode(AXES.filter((a) => !isPrereq(a)).map(score));
  const phase = Math.min(cap, modeOfOthers);

  const binding = [...AXES].sort(
    (a, b) =>
      score(a) - score(b) ||
      Number(isPrereq(b)) - Number(isPrereq(a)) ||
      AXES.indexOf(a) - AXES.indexOf(b)
  )[0];

  return {
    phase,
    phaseName: PHASES[phase],
    cap,
    modeOfOthers,
    cappedBy: cap < modeOfOthers ? PREREQUISITES.filter((a) => score(a) === cap) : [],
    binding,
    average: v.reduce((sum, x) => sum + x, 0) / v.length,
  };
}
