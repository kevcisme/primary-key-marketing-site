"use client";
import { useEffect, useState } from "react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { LazyCanvasText, LazyDitherShader } from "@/components/pk/lazy";

const WORDS = ["DATA", "GOVERNANCE", "SEQUENCING", "OWNERSHIP"];

/** The recolored Aceternity layer, for checking color and performance before it reaches a page. */
export function MotionDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <p className="mb-4 font-mono text-xs text-muted">TextFlippingBoard</p>
        <TextFlippingBoard
          text={`YOUR AI PROBLEM IS A\n${WORDS[i]} PROBLEM.`}
          boardRows={2}
          boardCols={20}
          label="Your AI problem is a data problem."
        />
      </div>

      <div>
        <p className="mb-4 font-mono text-xs text-muted">PointerHighlight</p>
        <p className="font-serif text-2xl font-bold tracking-tight">
          Some tools will. Most won&apos;t — and{" "}
          <PointerHighlight>
            <span className="px-1">the reason is never the tool.</span>
          </PointerHighlight>
        </p>
      </div>

      <div>
        <p className="mb-4 font-mono text-xs text-muted">CanvasText</p>
        <div className="flex h-28 items-center">
          <LazyCanvasText text="PRIMARY KEY" className="text-6xl font-bold tracking-tight sm:text-7xl" />
        </div>
      </div>

      <div>
        <p className="mb-4 font-mono text-xs text-muted">DitherShader · halftone duotone</p>
        <div className="relative aspect-3/2 w-full overflow-hidden border-2 border-frame">
          <LazyDitherShader
            src="/images/belllabs.jpg"
            ditherMode="halftone"
            colorMode="duotone"
            primaryColor="#101F38"
            secondaryColor="#A3D5F2"
            gridSize={3}
            alt="An engineer at the control panel of an early digital computer"
          />
        </div>
      </div>

      <div>
        <p className="mb-4 font-mono text-xs text-muted">BackgroundRippleEffect · click a tile</p>
        <div className="relative h-64 overflow-hidden border border-line">
          <BackgroundRippleEffect rows={6} cols={24} cellSize={44} />
        </div>
      </div>
    </div>
  );
}
