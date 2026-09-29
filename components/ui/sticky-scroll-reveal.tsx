"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export type StickyItem = {
  title: string;
  description: React.ReactNode;
  /** Mono label above the title, e.g. "week 1". */
  eyebrow?: string;
  /** Art for the sticky panel (and inline on small screens). */
  content?: React.ReactNode;
};

/** A panel fill per step. `dark` panels scope the navy tokens for their content. */
export type PanelTone = { color: string; theme: "light" | "dark" };

const DECK_PANELS: PanelTone[] = [
  { color: "#FFC93D", theme: "light" },
  { color: "#A3D5F2", theme: "light" },
  { color: "#42A8C5", theme: "light" },
  { color: "#101F38", theme: "dark" },
];

/**
 * Steps scroll by on the left while a sticky panel on the right changes color
 * and art with the current step. Driven by page scroll, not an inner scroller.
 */
export const StickyScroll = ({
  content,
  panels = DECK_PANELS,
  className,
  contentClassName,
}: {
  content: StickyItem[];
  panels?: PanelTone[];
  className?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActive(Math.min(content.length - 1, Math.max(0, Math.floor(latest * content.length))));
  });

  const panel = panels[active % panels.length];

  return (
    <div
      ref={ref}
      className={cn("relative grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]", className)}
    >
      <ol>
        {content.map((item, index) => (
          <li key={item.title} className="flex flex-col justify-center py-10 lg:min-h-[60vh] lg:py-16">
            <div className={cn("transition-opacity duration-300", active !== index && "lg:opacity-35")}>
              {item.eyebrow && <p className="font-mono text-sm text-accent-text">{item.eyebrow}</p>}
              <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl">{item.title}</h3>
              <div className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg/8">
                {item.description}
              </div>
            </div>
            {item.content && <div className="mt-8 lg:hidden">{item.content}</div>}
          </li>
        ))}
      </ol>
      <div className="sticky top-28 hidden h-[26rem] self-start lg:block">
        <motion.div
          data-theme={panel.theme}
          initial={false}
          animate={{ backgroundColor: panel.color }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={cn("relative size-full text-ink", contentClassName)}
        >
          {content[active].content ?? null}
        </motion.div>
      </div>
    </div>
  );
};
