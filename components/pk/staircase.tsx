import { cn } from "@/lib/utils";
import { OffsetCard, type CardTone } from "./offset-card";

export type Step = {
  /** Short index shown in mono, e.g. "0" or "$10k". */
  label: string;
  title: string;
  titleClassName?: string;
  body?: React.ReactNode;
  tone?: CardTone;
};

type StaircaseProps = {
  steps: Step[];
  /** Vertical rise per step on lg+, in rem. */
  rise?: number;
  xLabel?: string;
  yLabel?: string;
  className?: string;
};

/**
 * Outlined blocks climbing to the right against value / maturity axes (deck
 * slide 33). Below lg the steps stack and step inward, like the agenda pills.
 */
export function Staircase({ steps, rise = 2.5, xLabel, yLabel, className }: StaircaseProps) {
  return (
    <div className={cn("relative", yLabel && "lg:pl-12", xLabel && "lg:pb-12", className)}>
      <ol className="grid gap-6 lg:auto-cols-fr lg:grid-flow-col lg:items-end lg:gap-5">
        {steps.map((step, i) => (
          <li
            key={step.label}
            className="max-lg:ml-(--indent) lg:mb-(--rise)"
            style={
              { "--rise": `${i * rise}rem`, "--indent": `${i * 0.75}rem` } as React.CSSProperties
            }
          >
            <OffsetCard
              tone={step.tone ?? "marigold"}
              offset={i % 2 ? "tr" : "tl"}
              bodyClassName="flex min-h-40 flex-col gap-2 p-5"
            >
              <span className="font-mono text-xs opacity-75">{step.label}</span>
              <span className={cn("text-lg font-semibold leading-tight", step.titleClassName)}>
                {step.title}
              </span>
              {step.body && <div className="text-sm leading-relaxed opacity-85">{step.body}</div>}
            </OffsetCard>
          </li>
        ))}
      </ol>

      {yLabel && (
        <div aria-hidden className="absolute inset-y-0 left-0 hidden w-12 lg:block">
          <span className="absolute bottom-12 left-4 top-0 w-0.5 bg-frame" />
          <span className="absolute left-[11px] top-0 size-0 border-x-[6px] border-b-[9px] border-x-transparent border-b-frame" />
          <span className="absolute left-0 top-1/2 origin-center -translate-x-1/4 -rotate-90 whitespace-nowrap font-mono text-xs text-muted">
            {yLabel}
          </span>
        </div>
      )}
      {xLabel && (
        <div aria-hidden className="absolute inset-x-0 bottom-0 hidden h-12 lg:block">
          <span className="absolute left-4 right-0 top-4 h-0.5 bg-frame" />
          <span className="absolute right-0 top-[11px] size-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-frame" />
          <span className="absolute bottom-1 right-4 font-mono text-xs text-muted">{xLabel}</span>
        </div>
      )}
    </div>
  );
}
