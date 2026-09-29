"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AXES, PREREQUISITES, type Axis, type Vector } from "@/lib/maturity";

const C = 200;
const R = 132;
const LABEL_R = R + 30;
/** Data at the top, then clockwise in vector order. */
const angle = (i: number) => ((-90 + i * 60) * Math.PI) / 180;
const at = (i: number, level: number): [number, number] => [
  C + (level / 4) * R * Math.cos(angle(i)),
  C + (level / 4) * R * Math.sin(angle(i)),
];
const ring = (level: number) =>
  AXES.map((_, i) => at(i, level).map((n) => n.toFixed(1)).join(",")).join(" ");
const shape = (v: Vector) =>
  `M${AXES.map((_, i) => at(i, v[i]).map((n) => n.toFixed(2)).join(" ")).join("L")}Z`;

const ease = [0.2, 0.7, 0.2, 1] as const;

type RadarProps = {
  vector: Vector;
  binding?: Axis;
  cappedBy?: Axis[];
  className?: string;
};

/**
 * The firm's maturity shape across the six axes. Prerequisite axes are
 * labeled as foundation; a prerequisite that caps the phase turns flag-red,
 * and the binding constraint is the marigold vertex.
 */
export function Radar({ vector, binding, cappedBy = [], className }: RadarProps) {
  return (
    <svg viewBox="-90 -6 580 412" className={cn("w-full", className)} role="img" aria-label={`Maturity shape: ${AXES.map((a, i) => `${a} ${vector[i]}`).join(", ")}`}>
      <g className="fill-none stroke-frame">
        {[1, 2, 3, 4].map((level) => (
          <polygon key={level} points={ring(level)} strokeOpacity={level === 4 ? 0.4 : 0.16} strokeWidth={level === 4 ? 1.5 : 1} />
        ))}
        {AXES.map((_, i) => {
          const [x, y] = at(i, 4);
          return <line key={i} x1={C} y1={C} x2={x} y2={y} strokeOpacity={0.16} />;
        })}
      </g>

      <motion.path
        initial={false}
        animate={{ d: shape(vector) }}
        transition={{ duration: 0.8, ease }}
        className="fill-teal stroke-cobalt dark:stroke-sky"
        fillOpacity={0.55}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />

      {AXES.map((axis, i) => {
        const [x, y] = at(i, vector[i]);
        const isBinding = axis === binding;
        return (
          <motion.circle
            key={axis}
            initial={false}
            animate={{ cx: x, cy: y, r: isBinding ? 7 : 4 }}
            transition={{ duration: 0.8, ease }}
            className={cn(isBinding ? "fill-marigold stroke-frame" : "fill-cobalt dark:fill-sky")}
            strokeWidth={isBinding ? 2 : 0}
          />
        );
      })}

      {AXES.map((axis, i) => {
        const [x, y] = [C + LABEL_R * Math.cos(angle(i)), C + LABEL_R * Math.sin(angle(i))];
        const anchor = Math.abs(x - C) < 4 ? "middle" : x > C ? "start" : "end";
        const prereq = PREREQUISITES.includes(axis);
        const caps = cappedBy.includes(axis);
        return (
          <text key={axis} x={x} y={y} textAnchor={anchor} dominantBaseline="middle" className="font-mono">
            <tspan className={cn("text-[15px]", caps ? "fill-flag font-semibold" : "fill-ink")}>
              {axis} {vector[i]}
            </tspan>
            {prereq && (
              <tspan x={x} dy="17" className={cn("text-[11px]", caps ? "fill-flag" : "fill-muted")}>
                {caps ? "caps the phase" : "foundation"}
              </tspan>
            )}
          </text>
        );
      })}
    </svg>
  );
}
