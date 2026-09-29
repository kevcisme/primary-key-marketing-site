"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type SpineNavProps = {
  sections: { id: string; label: string }[];
  className?: string;
};

/** Where a section counts as "current": 45% down the viewport. */
const ACTIVATION = 0.45;

/**
 * The deck's progress rail as an on-page navigator (xl screens): one node per
 * section, the current node ringed, and a teal fill that reaches each node as
 * its section becomes current, with a little spring lag like a tracing beam.
 */
export function SpineNav({ sections, className }: SpineNavProps) {
  const stops = useRef<number[]>([]);
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const measure = () => {
      const line = window.innerHeight * ACTIVATION;
      stops.current = sections.map((s) => {
        const el = document.getElementById(s.id);
        return el ? el.getBoundingClientRect().top + window.scrollY - line : 0;
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [sections]);

  // Piecewise-linear between section stops, so node i fills exactly when section i activates.
  const progress = useTransform(scrollY, (y) => {
    const s = stops.current;
    if (s.length < 2 || y <= s[0]) return 0;
    for (let i = 0; i < s.length - 1; i++) {
      if (y < s[i + 1]) return (i + (y - s[i]) / Math.max(1, s[i + 1] - s[i])) / (s.length - 1);
    }
    return 1;
  });
  const fill = useSpring(progress, { stiffness: 170, damping: 30, mass: 0.35 });

  useMotionValueEvent(scrollY, "change", (y) => {
    const s = stops.current;
    const atBottom = y >= document.documentElement.scrollHeight - window.innerHeight - 2;
    let next = 0;
    s.forEach((stop, i) => {
      if (y >= stop) next = i;
    });
    setActive(atBottom ? s.length - 1 : next);
  });

  return (
    <nav
      aria-label="On this page"
      className={cn("fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block", className)}
    >
      <ol className="relative flex flex-col gap-7">
        <span aria-hidden className="absolute inset-y-2 left-[7px] w-0.5 bg-sky dark:bg-navy-lift" />
        <motion.span
          aria-hidden
          className="absolute inset-y-2 left-[7px] w-0.5 origin-top bg-teal"
          style={{ scaleY: fill }}
        />
        {sections.map((section, i) => {
          const current = i === active;
          return (
            <li key={section.id} className="relative">
              <a
                href={`#${section.id}`}
                aria-current={current ? "location" : undefined}
                className="group/node flex items-center gap-3 focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "block size-4 rounded-full transition-[background-color,box-shadow,scale] duration-200",
                    i <= active ? "bg-teal" : "bg-sky dark:bg-navy-lift",
                    current && "scale-110 shadow-[0_0_0_3px_var(--pk-ground),0_0_0_5px_var(--pk-frame)]",
                    "group-focus-visible/node:shadow-[0_0_0_3px_var(--pk-ground),0_0_0_5px_var(--pk-accent-text)]"
                  )}
                />
                <span className="pointer-events-none whitespace-nowrap border border-line bg-ground px-2 py-0.5 font-mono text-[11px] text-muted opacity-0 transition-opacity group-hover/node:opacity-100 group-focus-visible/node:opacity-100">
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
