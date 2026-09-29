"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";

const WORDS = ["DATA", "GOVERNANCE", "SEQUENCING", "OWNERSHIP"];
/** Stop after two passes and settle back on DATA (WCAG 2.2.2: auto-updating content must end or pause). */
const MAX_FLIPS = WORDS.length * 2;

/**
 * "Your AI problem is a ___ problem." on a split-flap board. Pauses while
 * hovered and never cycles for reduced-motion users. The visual board is
 * hidden from assistive tech; the page's h1 carries the sentence.
 */
export function HeroBoard({ interval = 3400 }: { interval?: number }) {
  const [flips, setFlips] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || paused || flips >= MAX_FLIPS) return;
    const id = setTimeout(() => setFlips((n) => n + 1), interval);
    return () => clearTimeout(id);
  }, [flips, paused, reduceMotion, interval]);

  const word = WORDS[flips % WORDS.length];

  return (
    <div
      aria-hidden
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hidden md:block">
        <TextFlippingBoard
          text={`YOUR AI PROBLEM IS A\n${word} PROBLEM.`}
          boardRows={2}
          boardCols={20}
          label=""
          className="max-w-[46rem]"
        />
      </div>
      <div className="md:hidden">
        <p className="mb-4 text-3xl font-light tracking-tight">Your AI problem is a</p>
        <TextFlippingBoard text={word} boardRows={1} boardCols={10} label="" />
        <p className="mt-4 text-3xl font-light tracking-tight">problem.</p>
      </div>
    </div>
  );
}
