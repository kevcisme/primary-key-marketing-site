import { cn } from "@/lib/utils";
import { AXES, readVector, type Vector } from "@/lib/maturity";

/** Cobalt disappears on navy-lift, so it lifts to cornflower in the navy theme. */
const COBALT = "fill-cobalt dark:fill-cornflower";
const INK = "stroke-frame";

/*
 * Hover animations run when an ancestor `group/card` (OffsetCard) is hovered,
 * and only for users without a reduced-motion preference. SVG pivots use
 * canvas coordinates (`transform-view`) or the shape's own box (`transform-fill`).
 */
const HOVER_EASE = "duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
};

/** Radar on the canvas: data at the top, then clockwise in vector order; level 4 is r = 38. */
const radarVertex = (v: Vector, i: number) => polar(120, 48, (v[i] / 4) * 38, -90 + i * 60);
const radarPoints = (v: Vector) =>
  AXES.map((_, i) => radarVertex(v, i).map((n) => n.toFixed(2)).join(",")).join(" ");
const bindingVertex = (v: Vector) => radarVertex(v, AXES.indexOf(readVector(v).binding));

/** Scored today (binding: governance), then after the foundation work (binding: leadership). */
const RADAR_BEFORE: Vector = [3, 2, 3, 2, 1, 3];
const RADAR_AFTER: Vector = [3, 3, 3, 3, 3, 2];
const [bindX, bindY] = bindingVertex(RADAR_BEFORE);
const [nextX, nextY] = bindingVertex(RADAR_AFTER);
const RADAR_SHAPE =
  "fill-teal stroke-cobalt dark:stroke-sky transform-view origin-[120px_48px] transition-[opacity,scale] duration-700 ease-out";

/** Opportunity-map columns start at x = 60 and step 20; each column swells 40 ms after the last. */
const waveDelay = (x: number) => `${((x - 60) / 20) * 40}ms`;

/** Flat geometric compositions on a 240×96 canvas, drawn only in palette tokens. */
const MOTIFS = {
  /**
   * A six-axis maturity shape; the marigold vertex is the binding constraint.
   * On hover the firm re-scores: the shape grows into RADAR_AFTER and the dot
   * slides to that vector's binding axis.
   */
  radar: (
    <>
      <path d="M0 96V58a38 38 0 0 1 38 38Z" className="fill-sky" />
      <circle cx="210" cy="22" r="8" className="fill-marigold" />
      <polygon points="120,10 152.9,29 152.9,67 120,86 87.1,67 87.1,29" className={cn("fill-none", INK)} strokeOpacity={0.35} strokeWidth={1.5} />
      <polygon points="120,29 136.5,38.5 136.5,57.5 120,67 103.5,57.5 103.5,38.5" className={cn("fill-none", INK)} strokeOpacity={0.22} strokeWidth={1.2} />
      <g className={INK} strokeOpacity={0.18}>
        <line x1="120" y1="10" x2="120" y2="86" />
        <line x1="87.1" y1="29" x2="152.9" y2="67" />
        <line x1="87.1" y1="67" x2="152.9" y2="29" />
      </g>
      <polygon
        points={radarPoints(RADAR_BEFORE)}
        className={cn(RADAR_SHAPE, "motion-safe:group-hover/card:scale-110 motion-safe:group-hover/card:opacity-0")}
        fillOpacity={0.65}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <polygon
        points={radarPoints(RADAR_AFTER)}
        className={cn(RADAR_SHAPE, "scale-80 opacity-0 motion-safe:group-hover/card:scale-100 motion-safe:group-hover/card:opacity-100")}
        fillOpacity={0.65}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <circle
        cx={bindX}
        cy={bindY}
        r="4.5"
        className={cn(
          "fill-marigold transition-[translate]",
          INK,
          HOVER_EASE,
          "motion-safe:group-hover/card:translate-x-(--dx) motion-safe:group-hover/card:translate-y-(--dy)"
        )}
        style={{ "--dx": `${nextX - bindX}px`, "--dy": `${nextY - bindY}px` } as React.CSSProperties}
        strokeWidth={1.5}
      />
    </>
  ),
  /**
   * Stated vs. observed: the overlap that doesn't match is the risk. On hover
   * the observed ring slides onto the stated circle and the flagged lens closes.
   */
  gap: (
    <>
      <circle cx="104" cy="48" r="30" className="fill-sky" />
      <path
        d="M120 22.62A30 30 0 0 1 120 73.38A30 30 0 0 1 120 22.62Z"
        className="fill-flag transform-fill origin-center transition-[translate,scale,opacity] duration-700 ease-out motion-safe:group-hover/card:-translate-x-[16px] motion-safe:group-hover/card:scale-x-0 motion-safe:group-hover/card:opacity-0"
      />
      <circle
        cx="136"
        cy="48"
        r="30"
        className={cn("fill-none transition-[translate]", INK, HOVER_EASE, "motion-safe:group-hover/card:-translate-x-[32px]")}
        strokeWidth={2.5}
      />
      <rect x="196" y="66" width="14" height="14" className="fill-marigold" />
    </>
  ),
  /** Every opportunity plotted; the prioritized few in marigold. On hover the dots swell in a left-to-right wave. */
  map: (
    <>
      <g className="fill-frame" fillOpacity={0.28}>
        {[26, 48, 70].flatMap((y) =>
          [60, 80, 100, 120, 140, 160, 180].map((x) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r="3"
              className="transform-fill origin-center transition-[scale] duration-300 ease-out motion-safe:group-hover/card:scale-180"
              style={{ transitionDelay: waveDelay(x) }}
            />
          ))
        )}
      </g>
      <g className={INK} strokeOpacity={0.35} strokeDasharray="3 4" strokeWidth={1.5}>
        <line x1="120" y1="10" x2="120" y2="86" />
        <line x1="44" y1="48" x2="196" y2="48" />
      </g>
      {[
        { cx: 140, cy: 26, r: 7.5, fill: "fill-marigold" },
        { cx: 160, cy: 26, r: 5.5, fill: "fill-marigold" },
        { cx: 180, cy: 48, r: 6, fill: "fill-marigold" },
        { cx: 80, cy: 70, r: 5, fill: "fill-teal" },
      ].map((dot) => (
        <circle
          key={`${dot.cx}-${dot.cy}`}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          className={cn(
            dot.fill,
            "transform-fill origin-center transition-[scale]",
            HOVER_EASE,
            "motion-safe:group-hover/card:scale-135"
          )}
          style={{ transitionDelay: waveDelay(dot.cx) }}
        />
      ))}
    </>
  ),
  /** Build or buy, weighed. On hover the beam teeters on the fulcrum apex and settles. */
  scale: (
    <>
      <polygon points="120,53 107,80 133,80" className={COBALT} />
      <rect x="94" y="80" width="52" height="4" className="fill-frame" fillOpacity={0.55} />
      <g className="transform-view origin-[120px_53px] motion-safe:group-hover/card:animate-teeter">
        <line x1="62" y1="44" x2="178" y2="62" className={INK} strokeWidth={3} strokeLinecap="round" />
        <circle cx="62" cy="30" r="12" className="fill-sky" />
        <circle cx="178" cy="44" r="16" className="fill-marigold" />
      </g>
    </>
  ),
  /** Governance: a shield with a keyhole. On hover the key turns a quarter turn. */
  shield: (
    <>
      <circle cx="86" cy="24" r="14" className="fill-sky" />
      <path d="M120 10L152 21V45C152 66 138 79 120 87C102 79 88 66 88 45V21Z" className={COBALT} />
      <g
        className={cn(
          "transform-view origin-[120px_49.5px] transition-[rotate]",
          HOVER_EASE,
          "motion-safe:group-hover/card:rotate-90"
        )}
      >
        <circle cx="120" cy="42" r="8" className="fill-marigold" />
        <path d="M116 46h8l3 19h-14Z" className="fill-marigold" />
      </g>
      <rect x="170" y="62" width="12" height="12" className="fill-teal" />
    </>
  ),
  /** Now, next, later. On hover the bars bob from the baseline, staggered, and land back in place. */
  steps: (
    <>
      {[
        { x: 66, y: 58, h: 28, fill: "fill-marigold" },
        { x: 103, y: 42, h: 44, fill: "fill-sky" },
        { x: 140, y: 26, h: 60, fill: "fill-teal" },
      ].map((bar, i) => (
        <g
          key={bar.x}
          className="transform-view origin-[0px_86px] motion-safe:group-hover/card:animate-bar-fluctuate"
          style={{ animationDelay: `${i * 180}ms` }}
        >
          <rect x={bar.x} y={bar.y} width="34" height={bar.h} className={bar.fill} />
          <rect
            x={bar.x - 4}
            y={bar.y - 4}
            width="34"
            height={bar.h}
            className={cn("fill-none", INK)}
            strokeWidth={2}
          />
        </g>
      ))}
      <line x1="54" y1="86.5" x2="186" y2="86.5" className={INK} strokeWidth={2} />
    </>
  ),
  /** Atomic-age orbit. */
  orbit: (
    <>
      <g className={cn("fill-none", INK)} strokeOpacity={0.45} strokeWidth={1.5}>
        <ellipse cx="120" cy="48" rx="62" ry="18" transform="rotate(-18 120 48)" />
        <ellipse cx="120" cy="48" rx="62" ry="18" transform="rotate(18 120 48)" />
      </g>
      <circle cx="120" cy="48" r="14" className="fill-marigold" />
      <circle cx="179" cy="28.8" r="5" className="fill-teal" />
      <circle cx="61" cy="28.8" r="4" className={COBALT} />
    </>
  ),
  /** A half sun on the horizon: the spark. */
  sun: (
    <>
      <g className="stroke-marigold" strokeWidth={4} strokeLinecap="round">
        {[200, 220, 240, 260, 280, 300, 320, 340].map((deg) => {
          const [x1, y1] = polar(120, 94, 48, deg);
          const [x2, y2] = polar(120, 94, 60, deg);
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <path d="M82 94a38 38 0 0 1 76 0Z" className="fill-marigold" />
      <line x1="40" y1="94.5" x2="200" y2="94.5" className={INK} strokeWidth={2} />
    </>
  ),
  /** Diagonal bands, cover-style. */
  stripes: (
    <>
      {["fill-sky", "fill-teal", "fill-marigold", COBALT, "fill-sky"].map((fill, i) => {
        const x = 44 + i * 30;
        return <polygon key={i} points={`${x},96 ${x + 20},96 ${x + 58},0 ${x + 38},0`} className={fill} />;
      })}
    </>
  ),
  /** Data: scattered records consolidating into one table with a marigold key column. */
  table: (
    <>
      <rect x="28" y="28" width="10" height="10" className="fill-sky" />
      <rect x="44" y="44" width="10" height="10" className="fill-teal" />
      <rect x="28" y="60" width="10" height="10" className="fill-sky" />
      <rect x="72" y="14" width="28" height="68" rx="5" className="fill-marigold" />
      <rect x="72" y="14" width="96" height="68" rx="5" className={cn("fill-none", INK)} strokeWidth={2.5} />
      <line x1="72" y1="32" x2="168" y2="32" className={INK} strokeWidth={2} />
      <g className={INK} strokeOpacity={0.3} strokeWidth={1.5}>
        <line x1="100" y1="14" x2="100" y2="82" />
        <line x1="134" y1="14" x2="134" y2="82" />
        <line x1="100" y1="49" x2="168" y2="49" />
        <line x1="100" y1="66" x2="168" y2="66" />
      </g>
      <g className="fill-carbon">
        <circle cx="86" cy="23" r="3.5" />
        <circle cx="86" cy="41" r="2.5" />
        <circle cx="86" cy="57.5" r="2.5" />
        <circle cx="86" cy="74" r="2.5" />
      </g>
    </>
  ),
  /** Two systems, finally talking. */
  plug: (
    <>
      <rect x="46" y="30" width="52" height="36" rx="6" className="fill-sky" />
      <rect x="142" y="30" width="52" height="36" rx="6" className="fill-teal" />
      <line x1="98" y1="48" x2="142" y2="48" className={INK} strokeWidth={2.5} strokeDasharray="4 4" />
      <circle cx="120" cy="48" r="7" className={cn("fill-marigold", INK)} strokeWidth={2} />
    </>
  ),
  /** A process, step by step, ending in a result. */
  flow: (
    <>
      {[
        [52, "fill-sky"],
        [90, "fill-teal"],
        [128, COBALT],
      ].map(([x0, fill]) => {
        const x = x0 as number;
        return (
          <polygon
            key={x}
            points={`${x},26 ${x + 26},26 ${x + 40},48 ${x + 26},70 ${x},70 ${x + 14},48`}
            className={fill as string}
          />
        );
      })}
      <circle cx="190" cy="48" r="10" className="fill-marigold" />
    </>
  ),
  /** People and skills. */
  people: (
    <>
      <circle cx="92" cy="36" r="9" className="fill-sky" />
      <path d="M74 80C74 60 110 60 110 80Z" className="fill-sky" />
      <circle cx="148" cy="36" r="9" className="fill-teal" />
      <path d="M130 80C130 60 166 60 166 80Z" className="fill-teal" />
      <circle cx="120" cy="30" r="10.5" className="fill-marigold" />
      <path d="M99 80C99 55 141 55 141 80Z" className="fill-marigold" />
      <line x1="60" y1="80.5" x2="180" y2="80.5" className={INK} strokeWidth={2} />
    </>
  ),
  /** Leadership: the institution itself. */
  pillars: (
    <>
      <polygon points="120,12 172,34 68,34" className={COBALT} />
      <g className="fill-sky">
        <rect x="78" y="38" width="10" height="34" />
        <rect x="101" y="38" width="10" height="34" />
        <rect x="129" y="38" width="10" height="34" />
        <rect x="152" y="38" width="10" height="34" />
      </g>
      <rect x="66" y="74" width="108" height="8" className="fill-marigold" />
    </>
  ),
  /** Setting the aim. */
  target: (
    <>
      <circle cx="120" cy="50" r="34" className={cn("fill-none", INK)} strokeWidth={2} />
      <circle cx="120" cy="50" r="22" className="fill-sky" />
      <circle cx="120" cy="50" r="10" className="fill-marigold" />
      <line x1="184" y1="12" x2="126" y2="45" className={INK} strokeWidth={2.5} strokeLinecap="round" />
      <path d="M184 12l-12 1.5M184 12l-4.5 11" className={INK} strokeWidth={2.5} strokeLinecap="round" />
    </>
  ),
  /** Looking at the systems ourselves. */
  search: (
    <>
      <circle cx="176" cy="24" r="8" className="fill-marigold" />
      <circle cx="108" cy="42" r="24" className="fill-sky" />
      <g className={COBALT}>
        <rect x="96" y="33" width="24" height="4" rx="2" />
        <rect x="96" y="41" width="18" height="4" rx="2" />
        <rect x="96" y="49" width="21" height="4" rx="2" />
      </g>
      <circle cx="108" cy="42" r="24" className={cn("fill-none", INK)} strokeWidth={3} />
      <line x1="126" y1="60" x2="148" y2="82" className={INK} strokeWidth={7} strokeLinecap="round" />
    </>
  ),
  /** Scoring 0 to 4. */
  ruler: (
    <>
      <rect x="40" y="38" width="160" height="26" rx="3" className="fill-marigold" />
      <g className="stroke-carbon" strokeWidth={1.5}>
        {Array.from({ length: 17 }, (_, i) => {
          const x = 48 + i * 9.25;
          return <line key={i} x1={x} y1="38" x2={x} y2={i % 4 === 0 ? 52 : 45} />;
        })}
      </g>
      <polygon points="140.5,34 134.5,22 146.5,22" className={COBALT} />
      <rect x="40" y="38" width="160" height="26" rx="3" className={cn("fill-none", INK)} strokeWidth={2} />
    </>
  ),
  /** The readout. */
  present: (
    <>
      <g className="fill-none stroke-frame" strokeWidth={2.5} strokeLinecap="round">
        <rect x="66" y="12" width="108" height="60" rx="3" />
        <line x1="100" y1="72" x2="88" y2="90" />
        <line x1="140" y1="72" x2="152" y2="90" />
        <line x1="120" y1="72" x2="120" y2="86" />
      </g>
      <rect x="82" y="48" width="14" height="16" className="fill-sky" />
      <rect x="102" y="38" width="14" height="26" className="fill-teal" />
      <rect x="122" y="28" width="14" height="36" className="fill-marigold" />
      <rect x="142" y="20" width="14" height="44" className={COBALT} />
    </>
  ),
  /** Configured and rolled out. */
  package: (
    <>
      <g className={INK} strokeWidth={2} strokeLinejoin="round">
        <polygon points="92,40 108,26 164,26 148,40" className="fill-marigold" />
        <polygon points="148,40 164,26 164,66 148,80" className="fill-teal" />
        <rect x="92" y="40" width="56" height="40" className="fill-sky" />
      </g>
      <line x1="120" y1="40" x2="120" y2="80" className={INK} strokeWidth={2} strokeOpacity={0.4} />
    </>
  ),
  /** Rules people can actually follow. */
  lock: (
    <>
      <circle cx="160" cy="30" r="12" className="fill-sky" />
      <path d="M104 44V34a16 16 0 0 1 32 0v10" className={cn("fill-none", INK)} strokeWidth={5} strokeLinecap="round" />
      <rect x="96" y="44" width="48" height="38" rx="4" className={cn("fill-marigold", INK)} strokeWidth={2} />
      <circle cx="120" cy="59" r="5" className="fill-carbon" />
      <rect x="118" y="61" width="4" height="10" className="fill-carbon" />
    </>
  ),
  /** When nothing off the shelf fits. */
  code: (
    <>
      <g className="fill-none stroke-cobalt dark:stroke-cornflower" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="96,26 72,48 96,70" />
        <polyline points="144,26 168,48 144,70" />
      </g>
      <line x1="130" y1="20" x2="110" y2="76" className="stroke-marigold" strokeWidth={6} strokeLinecap="round" />
    </>
  ),
} satisfies Record<string, React.ReactNode>;

export type MotifName = keyof typeof MOTIFS;
export const MOTIF_NAMES = Object.keys(MOTIFS) as MotifName[];

const BG = {
  surface: "bg-cream dark:bg-navy-lift",
  mist: "bg-mist dark:bg-ground-alt",
  sky: "bg-sky-pale dark:bg-navy-lift",
  none: "",
} as const;

type MotifProps = {
  name: MotifName;
  tone?: keyof typeof BG;
  className?: string;
};

/** A decorative header panel (aria-hidden) drawn from the deck palette. */
export function Motif({ name, tone = "surface", className }: MotifProps) {
  return (
    <div aria-hidden className={cn("relative min-h-24 w-full overflow-hidden", BG[tone], className)}>
      <svg viewBox="0 0 240 96" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 size-full">
        {MOTIFS[name]}
      </svg>
    </div>
  );
}
