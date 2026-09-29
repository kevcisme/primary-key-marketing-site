"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/** A rail beside its content whose teal beam follows the reader down the page. */
export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [started, setStarted] = useState(false);

  // Content height changes as fonts and images load, so keep measuring.
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setSvgHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => scrollYProgress.on("change", (v) => setStarted(v > 0)), [scrollYProgress]);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div ref={ref} className={cn("relative mx-auto h-full w-full max-w-4xl", className)}>
      <div className="absolute -left-4 top-3 md:-left-20">
        <div
          className={cn(
            "ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-frame bg-ground transition-shadow duration-200",
            !started && "shadow-hard-sm"
          )}
        >
          <div
            className={cn(
              "h-2 w-2 rounded-full transition-colors duration-200",
              started ? "bg-teal" : "bg-marigold"
            )}
          />
        </div>
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            className="stroke-frame"
            strokeOpacity="0.16"
          />
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#pk-tracing-gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="pk-tracing-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#42A8C5" stopOpacity="0" />
              <stop stopColor="#42A8C5" />
              <stop offset="0.4" stopColor="#0869A0" />
              <stop offset="1" stopColor="#FFC93D" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
