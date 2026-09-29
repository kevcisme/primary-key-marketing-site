import { cn } from "@/lib/utils";

type StepPillsProps = {
  items: { label: string; meta?: string }[];
  /** Outlined item: the current step, or the selected option when `onSelect` is set. */
  active?: number;
  /** Turns each pill into a toggle button (requires a client parent). */
  onSelect?: (index: number) => void;
  /** Step each pill in to the right, like the deck's agenda. */
  stagger?: boolean;
  className?: string;
};

/** The deck's agenda: numbered teal nodes on sky bars, each one stepped in. */
export function StepPills({ items, active, onSelect, stagger = true, className }: StepPillsProps) {
  return (
    <ol className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item, i) => {
        const current = i === active;
        const pill = cn(
          "flex w-full items-center rounded-full bg-sky text-left text-carbon ring-2 transition-shadow duration-200",
          current ? "ring-frame" : "ring-transparent"
        );
        const body = (
          <>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-sky bg-teal font-mono text-lg font-semibold text-carbon">
              {i + 1}
            </span>
            <span className="flex min-w-0 flex-1 items-baseline justify-between gap-4 pl-3 pr-5">
              <span className="truncate text-base sm:text-lg">{item.label}</span>
              {item.meta && (
                <span className="hidden shrink-0 font-mono text-xs opacity-75 sm:inline">{item.meta}</span>
              )}
            </span>
          </>
        );

        return (
          <li
            key={item.label}
            className={cn(stagger && "ml-[calc(var(--i)*0.75rem)] md:ml-[calc(var(--i)*1.5rem)]")}
            style={{ "--i": i } as React.CSSProperties}
          >
            {onSelect ? (
              <button
                type="button"
                aria-pressed={current}
                onClick={() => onSelect(i)}
                className={cn(pill, !current && "hover:ring-frame/35")}
              >
                {body}
              </button>
            ) : (
              <div className={pill} aria-current={current ? "step" : undefined}>
                {body}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
