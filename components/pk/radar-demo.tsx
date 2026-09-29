"use client";
import { useState } from "react";
import { readVector, type Vector } from "@/lib/maturity";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";
import { Radar } from "./radar";
import { StepPills } from "./step-pills";

const PRESETS: { label: string; vector: Vector; note: string }[] = [
  {
    label: "Bought the tools",
    vector: [3, 3, 3, 3, 0, 3],
    note: "Tools, habits, and a partner who cares — and no rules about client data. The average says 2.5. The phase says zero.",
  },
  {
    label: "Early and even",
    vector: [1, 1, 1, 2, 1, 1],
    note: "Individual use, no policy, nothing out of balance. The next move is the highest-leverage one a small firm makes: policy and tool selection.",
  },
  {
    label: "The foundation holds",
    vector: [3, 3, 3, 3, 3, 2],
    note: "Data and governance are in place, so nothing caps the phase. The binding constraint is ownership, not infrastructure.",
  },
];

/** Three example firms run through the scoring rule, with the phase read out on a split-flap board. */
export function RadarDemo() {
  const [index, setIndex] = useState(0);
  const preset = PRESETS[index];
  const reading = readVector(preset.vector);
  const detail = reading.cappedBy.length
    ? `CAPPED BY ${reading.cappedBy.join(" + ").toUpperCase()}`
    : `BINDING: ${reading.binding.toUpperCase()}`;
  const sentence = `Phase ${reading.phase}, ${reading.phaseName}. ${
    reading.cappedBy.length ? `Capped by ${reading.cappedBy.join(" and ")}.` : `Binding constraint: ${reading.binding}.`
  }`;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
      <div>
        <StepPills
          items={PRESETS.map((p) => ({ label: p.label, meta: `[${p.vector.join(",")}]` }))}
          active={index}
          onSelect={setIndex}
          stagger={false}
        />
        <p className="mt-8 text-base leading-relaxed text-muted" aria-live="polite">
          {preset.note}
        </p>
        <p className="mt-4 font-mono text-sm">
          average {reading.average.toFixed(1)} <span className="text-muted">·</span> phase{" "}
          {reading.phase}
        </p>
      </div>
      <div>
        <Radar
          vector={preset.vector}
          binding={reading.binding}
          cappedBy={reading.cappedBy}
          className="mx-auto max-w-xl"
        />
        <TextFlippingBoard
          text={`PHASE ${reading.phase} · ${reading.phaseName.toUpperCase()}\n${detail}`}
          boardRows={2}
          boardCols={24}
          label={sentence}
          duration={1}
          className="mt-6 hidden max-w-xl sm:block"
        />
        {/* A 24-column board is unreadable on a phone; the same reading as text. */}
        <p aria-hidden className="mt-6 border-2 border-frame bg-[#0b172b] px-4 py-3 text-center font-mono text-sm font-semibold uppercase tracking-wider text-cream shadow-hard-sm sm:hidden">
          Phase {reading.phase} · {reading.phaseName}
          <br />
          {detail}
        </p>
      </div>
    </div>
  );
}
