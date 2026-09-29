"use client";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

type Layer = {
  eyebrow: string;
  axes: string;
  body: React.ReactNode;
};

const LAYERS: Layer[] = [
  {
    eyebrow: "above the waterline",
    axes: "Tooling",
    body: "What vendors sell and what everyone can see. It is the last thing that should go in.",
  },
  {
    eyebrow: "below it",
    axes: "Workflow · People · Leadership",
    body: "Whether AI is a documented step in the work, whether anyone can run it after we leave, and whether a partner owns it.",
  },
  {
    eyebrow: "at the base",
    axes: "Data · Governance",
    body: "The two foundation axes. A firm's phase can never be higher than either one — no matter what sits on top.",
  },
];

const MASS =
  "M160 120L260 120L306 176L338 262L318 360L262 440L196 466L126 428L84 336L98 226L126 164Z";

/**
 * The deck's iceberg, mapped onto the six axes: tooling is the tip, and the
 * two prerequisite axes are the base. The layer being read lights up.
 */
export function Iceberg() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 45%"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(LAYERS.length - 1, Math.max(0, Math.floor(p * LAYERS.length))));
  });

  const band = (i: number) =>
    cn("transition-opacity duration-500", active === i ? "opacity-100" : "opacity-40");

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20">
      <div className="lg:sticky lg:top-28">
        <svg viewBox="0 0 400 500" className="mx-auto w-full max-w-sm" role="img" aria-labelledby="iceberg-title">
          <title id="iceberg-title">
            An iceberg: tooling is the small tip above the water; workflow, people, and leadership
            sit below it; data and governance form the base.
          </title>
          <defs>
            <clipPath id="iceberg-upper">
              <rect x="0" y="120" width="400" height="148" />
            </clipPath>
            <clipPath id="iceberg-base">
              <rect x="0" y="268" width="400" height="232" />
            </clipPath>
          </defs>

          <rect x="0" y="120" width="400" height="380" className="fill-sky-pale dark:fill-navy-lift" />

          <g className={band(0)}>
            <line x1="222" y1="36" x2="222" y2="6" className="stroke-frame" strokeWidth="2" />
            <polygon points="222,6 250,13 222,20" className="fill-flag" />
            <path
              d="M166 120L190 58L204 74L222 34L240 80L254 120Z"
              className="fill-cream stroke-frame"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>

          <g className={band(1)}>
            <path d={MASS} clipPath="url(#iceberg-upper)" className="fill-teal" />
          </g>
          <g className={band(2)}>
            <path d={MASS} clipPath="url(#iceberg-base)" className="fill-cobalt" />
            <rect x="70" y="474" width="280" height="8" className="fill-marigold" />
          </g>

          <g className="stroke-white" strokeOpacity="0.4" strokeWidth="1.5" fill="none" strokeLinejoin="round">
            <path d="M160 120L214 196L306 176" />
            <path d="M98 226L214 196L338 262" />
            <path d="M214 196L206 300" />
            <path d="M84 336L206 300L318 360" />
            <path d="M126 428L206 300L262 440" />
          </g>

          <path d={MASS} fill="none" className="stroke-frame" strokeOpacity="0.5" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="0" y1="120" x2="400" y2="120" className="stroke-cobalt dark:stroke-sky" strokeWidth="2" />
        </svg>
      </div>

      <ol ref={listRef} className="space-y-4">
        {LAYERS.map((layer, i) => (
          <li
            key={layer.axes}
            className={cn(
              "border-l-4 py-8 pl-6 transition-[border-color] duration-500 lg:min-h-[38vh]",
              active === i ? "border-marigold" : "border-line"
            )}
          >
            <p className="font-mono text-sm text-accent-text">
              <span aria-hidden>&gt; </span>
              {layer.eyebrow}
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl">{layer.axes}</h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted sm:text-lg/8">{layer.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
