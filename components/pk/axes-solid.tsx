"use client";
import { useId, useRef, useState } from "react";
import { useAnimationFrame, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { AXES, PREREQUISITES, readVector, type Axis, type Vector } from "@/lib/maturity";
import { AXIS_COPY, AXIS_ORDER, SAMPLE_FIRM } from "@/lib/axes-copy";
import { OffsetCard } from "./offset-card";

type V3 = readonly [number, number, number];

/**
 * The six axes as the six half-axes of space. Foundations run vertical
 * (data up, governance down), tooling faces workflow, and the two human axes
 * share depth: staff toward the viewer, the owner standing behind them.
 */
const HALF_AXES: { axis: Axis; dir: V3 }[] = [
  { axis: "data", dir: [0, 1, 0] },
  { axis: "governance", dir: [0, -1, 0] },
  { axis: "tooling", dir: [1, 0, 0] },
  { axis: "workflow", dir: [-1, 0, 0] },
  { axis: "people", dir: [0, 0, 1] },
  { axis: "leadership", dir: [0, 0, -1] },
];

/** The eight sign-octant faces of the octahedron. */
const FACES: [Axis, Axis, Axis][] = (["tooling", "workflow"] as const).flatMap((x) =>
  (["data", "governance"] as const).flatMap((y) =>
    (["people", "leadership"] as const).map((z): [Axis, Axis, Axis] => [x, y, z])
  )
);

const W = 560;
const H = 520;
const CX = 280;
const CY = 250;
/** Screen px for level 4. */
const S = 160;
const LABEL_GAP = 22;
const START = { yaw: -0.6, pitch: 0.42 };
const IDLE_RATE = 0.00012; // rad/ms, about 7°/s
const RESUME_MS = 2500;

const scale = (p: V3, k: number): V3 => [p[0] * k, p[1] * k, p[2] * k];
const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const norm = (a: V3): V3 => {
  const l = Math.hypot(...a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
const LIGHT = norm([-0.4, 0.7, 0.6]);

/** Yaw about world Y, then pitch about the camera's X. +z faces the viewer. */
const rotate = ([x, y, z]: V3, yaw: number, pitch: number): V3 => {
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  return [x1, y * cp - z1 * sp, y * sp + z1 * cp];
};
/** Orthographic: drop z, flip y. */
const project = (p: V3): [number, number] => [CX + S * p[0], CY - S * p[1]];
const pt = ([x, y]: [number, number]) => `${x.toFixed(1)},${y.toFixed(1)}`;
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const degrees = (rad: number) =>
  String(Math.round((((rad * 180) / Math.PI) % 360 + 360) % 360)).padStart(3, "0");

type AxesSolidProps = {
  vector?: Vector;
  className?: string;
};

/**
 * A firm's maturity vector drawn as a solid: one vertex per axis, orbitable
 * by drag. Hover or pick an axis to read what it measures.
 */
export function AxesSolid({ vector = SAMPLE_FIRM, className }: AxesSolidProps) {
  const [selected, setSelected] = useState<Axis>("data");
  const [hovered, setHovered] = useState<Axis | null>(null);
  const shown = hovered ?? selected;
  const reading = readVector(vector);

  return (
    <div className={cn("grid items-start gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16", className)}>
      <Scene
        vector={vector}
        binding={reading.binding}
        cappedBy={reading.cappedBy}
        highlight={shown}
        onHover={setHovered}
        onPick={setSelected}
      />
      <Readout vector={vector} axis={shown} cappedBy={reading.cappedBy} selected={selected} onSelect={setSelected} />
    </div>
  );
}

type SceneProps = {
  vector: Vector;
  binding: Axis;
  cappedBy: Axis[];
  highlight: Axis;
  onHover: (axis: Axis | null) => void;
  onPick: (axis: Axis) => void;
};

function Scene({ vector, binding, cappedBy, highlight, onHover, onPick }: SceneProps) {
  const id = useId();
  const reduceMotion = useReducedMotion();
  const [view, setView] = useState(START);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ active: false, moved: false, last: [0, 0] as [number, number] });
  const hovering = useRef(false);
  const resumeAt = useRef(0);
  const spun = useRef(0);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || drag.current.active || hovering.current) return;
    if (performance.now() < resumeAt.current || spun.current > Math.PI * 2) return;
    const step = Math.min(delta, 64) * IDLE_RATE;
    spun.current += step;
    setView((v) => ({ ...v, yaw: v.yaw + step }));
  });

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { active: true, moved: false, last: [e.clientX, e.clientY] };
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!drag.current.active) return;
    const [lx, ly] = drag.current.last;
    const dx = e.clientX - lx;
    const dy = e.clientY - ly;
    drag.current.last = [e.clientX, e.clientY];
    if (Math.abs(dx) + Math.abs(dy) > 3) drag.current.moved = true;
    setView((v) => ({ yaw: v.yaw + dx * 0.01, pitch: clamp(v.pitch + dy * 0.01, -1.4, 1.4) }));
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    spun.current = 0;
    resumeAt.current = performance.now() + RESUME_MS;
    setDragging(false);
  };

  const level = (axis: Axis) => vector[AXES.indexOf(axis)];
  const { yaw, pitch } = view;
  const tip = Object.fromEntries(
    HALF_AXES.map(({ axis, dir }) => [axis, rotate(scale(dir, level(axis) / 4), yaw, pitch)])
  ) as Record<Axis, V3>;

  const faces = FACES.map((corners) => {
    const [a, b, c] = corners.map((axis) => tip[axis]);
    let n = cross(sub(b, a), sub(c, a));
    const centroid = scale([a[0] + b[0] + c[0], a[1] + b[1] + c[1], a[2] + b[2] + c[2]], 1 / 3);
    if (dot(n, centroid) < 0) n = scale(n, -1);
    const front = n[2] > 0;
    const lambert = Math.max(0, dot(norm(n), LIGHT));
    return { key: corners.join("-"), points: [a, b, c].map((p) => pt(project(p))).join(" "), front, lambert };
  });

  const axes = HALF_AXES.map(({ axis, dir }) => {
    const end = rotate(dir, yaw, pitch);
    const [ex, ey] = project(end);
    let dx = ex - CX;
    let dy = ey - CY;
    const len = Math.hypot(dx, dy);
    if (len < 1e-3) {
      dx = 0;
      dy = -1;
    } else {
      dx /= len;
      dy /= len;
    }
    const ticks = [1, 2, 3, 4].map((k) => {
      const [tx, ty] = project(rotate(scale(dir, k / 4), yaw, pitch));
      const t = k === 4 ? 4 : 3;
      return { k, x1: tx - dy * t, y1: ty + dx * t, x2: tx + dy * t, y2: ty - dx * t };
    });
    const [vx, vy] = project(tip[axis]);
    return {
      axis,
      ex,
      ey,
      ticks,
      vx,
      vy,
      back: tip[axis][2] < -0.02 && level(axis) > 0,
      lx: ex + dx * LABEL_GAP,
      ly: ey + dy * LABEL_GAP,
      anchor: Math.abs(dx) < 0.35 ? "middle" : dx > 0 ? "start" : "end",
      baseline: dy < -0.35 ? "auto" : dy > 0.35 ? "hanging" : "middle",
    } as const;
  });

  const label = `Maturity solid: ${AXES.map((a, i) => `${a} ${vector[i]}`).join(", ")}. Selected: ${highlight}.`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={label}
      className={cn(
        "w-full max-w-[36rem] touch-none select-none justify-self-center lg:justify-self-start",
        dragging ? "cursor-grabbing" : "cursor-grab"
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
      onPointerEnter={() => (hovering.current = true)}
      onPointerLeave={() => {
        hovering.current = false;
        onHover(null);
      }}
    >
      <defs>
        <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="0.8" className="fill-frame" fillOpacity={0.18} />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={`url(#${id}-dots)`} />

      {/* chrome */}
      <g aria-hidden className="fill-none stroke-frame" strokeOpacity={0.45} strokeWidth={1}>
        <path d="M10 22V10H22" />
        <path d={`M${W - 22} 10H${W - 10}V22`} />
        <path d={`M10 ${H - 22}V${H - 10}H22`} />
        <path d={`M${W - 22} ${H - 10}H${W - 10}V${H - 22}`} />
      </g>
      <g aria-hidden className="font-mono text-[11px]">
        <text x={W - 30} y={34} textAnchor="end" className="fill-muted">
          yaw {degrees(yaw)}° · pitch {degrees(pitch)}°
        </text>
        <g transform={`translate(38 ${H - 34})`}>
          <ellipse rx="8" ry="3" className="stroke-muted" fill="none" strokeWidth={1} />
          <circle r="2" className="fill-muted" />
        </g>
        <text x={54} y={H - 30} className="fill-muted">
          drag to orbit
        </text>
      </g>

      {/* axis lines and ticks */}
      <g aria-hidden>
        {axes.map(({ axis, ex, ey, ticks }) => {
          const hi = axis === highlight;
          return (
            <g key={axis} className="transition-opacity duration-200">
              <line
                x1={CX}
                y1={CY}
                x2={ex.toFixed(1)}
                y2={ey.toFixed(1)}
                className={hi ? "stroke-accent-text" : "stroke-frame"}
                strokeOpacity={hi ? 0.9 : 0.2}
                strokeWidth={hi ? 1.5 : 1}
              />
              <g className="stroke-frame" strokeOpacity={0.35} strokeWidth={1}>
                {ticks.map((t) => (
                  <line key={t.k} x1={t.x1.toFixed(1)} y1={t.y1.toFixed(1)} x2={t.x2.toFixed(1)} y2={t.y2.toFixed(1)} />
                ))}
              </g>
            </g>
          );
        })}
      </g>

      {/* the solid: back faces dashed, then front faces on top */}
      <g aria-hidden strokeLinejoin="round">
        {faces
          .filter((f) => !f.front)
          .map((f) => (
            <polygon
              key={f.key}
              points={f.points}
              className="fill-teal stroke-frame"
              fillOpacity={0.07}
              strokeOpacity={0.35}
              strokeWidth={1}
              strokeDasharray="3 3"
            />
          ))}
        {faces
          .filter((f) => f.front)
          .map((f) => (
            <polygon
              key={f.key}
              points={f.points}
              className="fill-teal stroke-cobalt dark:stroke-sky"
              fillOpacity={(0.16 + 0.26 * f.lambert).toFixed(3)}
              strokeWidth={1.5}
            />
          ))}
      </g>

      {/* vertices and labels */}
      {axes.map(({ axis, vx, vy, back, lx, ly, anchor, baseline }) => {
        const hi = axis === highlight;
        const isBinding = axis === binding;
        const caps = cappedBy.includes(axis);
        const prereq = PREREQUISITES.includes(axis);
        const r = (isBinding ? 6 : caps ? 5 : 3.5) + (hi ? 2.5 : 0);
        return (
          <g
            key={axis}
            aria-hidden
            className="transition-opacity duration-200"
            opacity={back ? 0.55 : 1}
            onPointerEnter={() => onHover(axis)}
            onPointerLeave={() => onHover(null)}
            onClick={() => {
              if (!drag.current.moved) onPick(axis);
            }}
          >
            {hi && (
              <circle
                cx={vx.toFixed(1)}
                cy={vy.toFixed(1)}
                r={r + 7}
                fill="none"
                className="stroke-accent-text"
                strokeWidth={1}
                strokeDasharray="2 2"
              />
            )}
            <circle
              cx={vx.toFixed(1)}
              cy={vy.toFixed(1)}
              r={r}
              className={cn(
                isBinding ? "fill-marigold stroke-frame" : caps ? "fill-flag stroke-frame" : "fill-cobalt dark:fill-sky"
              )}
              strokeWidth={isBinding || caps ? 2 : 0}
            />
            <circle cx={vx.toFixed(1)} cy={vy.toFixed(1)} r={16} fill="transparent" />
            <circle cx={lx.toFixed(1)} cy={ly.toFixed(1)} r={22} fill="transparent" />
            <text
              x={lx.toFixed(1)}
              y={ly.toFixed(1)}
              textAnchor={anchor}
              dominantBaseline={baseline}
              className="font-mono"
            >
              <tspan
                className={cn(
                  "text-[13px]",
                  caps ? "fill-flag font-semibold" : hi ? "fill-accent-text font-semibold" : "fill-ink"
                )}
              >
                {axis} {vector[AXES.indexOf(axis)]}
              </tspan>
              {prereq && (
                <tspan x={lx.toFixed(1)} dy="14" className={cn("text-[11px]", caps ? "fill-flag" : "fill-muted")}>
                  {caps ? "caps the phase" : "foundation"}
                </tspan>
              )}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

type ReadoutProps = {
  vector: Vector;
  axis: Axis;
  cappedBy: Axis[];
  selected: Axis;
  onSelect: (axis: Axis) => void;
};

function Readout({ vector, axis, cappedBy, selected, onSelect }: ReadoutProps) {
  const nn = (a: Axis) => String(AXIS_ORDER.indexOf(a) + 1).padStart(2, "0");
  const copy = AXIS_COPY[axis];
  const foundation = PREREQUISITES.includes(axis);
  const caps = cappedBy.includes(axis);

  return (
    <div>
      <ul className="mb-4 flex flex-wrap gap-2">
        {AXIS_ORDER.map((a) => {
          const on = a === selected;
          return (
            <li key={a}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => onSelect(a)}
                className={cn(
                  "border px-2.5 py-1 font-mono text-xs transition-colors duration-200",
                  on
                    ? "border-frame bg-marigold text-carbon"
                    : "border-line text-muted hover:border-frame hover:text-ink"
                )}
              >
                <span className="opacity-70">{nn(a)}</span> {a}
              </button>
            </li>
          );
        })}
      </ul>
      <OffsetCard tone="surface" offset="tr" interactive={false} bodyClassName="flex flex-col gap-3 p-6 lg:min-h-72">
        <div aria-live="polite" className="flex flex-col gap-3">
          <p className="font-mono text-xs text-muted">
            {nn(axis)} / 06
          </p>
          <h3 className="font-serif text-2xl font-bold tracking-tight">{copy.name}</h3>
          <p className="flex flex-wrap items-center gap-3 font-mono text-sm">
            <span>level {vector[AXES.indexOf(axis)]} / 4</span>
            {foundation && (
              <span className="bg-marigold px-2 py-0.5 text-[11px] font-semibold text-carbon">foundation</span>
            )}
            {caps && <span className="text-flag">caps the phase</span>}
          </p>
          <p className="text-sm leading-relaxed opacity-85">{copy.description}</p>
        </div>
      </OffsetCard>
    </div>
  );
}
