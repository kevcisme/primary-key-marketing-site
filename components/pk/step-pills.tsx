import { cn } from "@/lib/utils";

type StepPillsProps = {
  /** `href` turns a pill into a link (ignored when `onSelect` is set). */
  items: { label: string; meta?: string; href?: string }[];
  /** Outlined item: the current step, or the selected option when `onSelect` is set. */
  active?: number;
  /** Turns each pill into a toggle button (requires a client parent). */
  onSelect?: (index: number) => void;
  /** Step each pill in to the right, like the deck's agenda. */
  stagger?: boolean;
  /** `ground` draws outlined pills for sitting on a sky field; the active one fills marigold. */
  tone?: "sky" | "ground";
  className?: string;
};

/** The deck's agenda: numbered teal nodes on sky bars, each one stepped in. */
export function StepPills({
  items,
  active,
  onSelect,
  stagger = true,
  tone = "sky",
  className,
}: StepPillsProps) {
  return (
    <ol className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item, i) => {
        const current = i === active;
        const pill = cn(
          "flex w-full items-center rounded-full text-left transition-[box-shadow,background-color] duration-200",
          tone === "sky"
            ? cn("bg-sky text-carbon ring-2", current ? "ring-frame" : "ring-transparent")
            : cn("border-2 border-frame", current ? "bg-marigold text-carbon" : "bg-ground text-ink")
        );
        const hover = tone === "sky" ? "hover:ring-frame/35" : "hover:bg-surface";
        const body = (
          <>
            <span
              className={cn(
                "grid shrink-0 place-items-center rounded-full bg-teal font-mono text-lg font-semibold text-carbon",
                tone === "sky" ? "size-11 border-2 border-sky" : "m-0.5 size-10"
              )}
            >
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
                className={cn(pill, !current && hover)}
              >
                {body}
              </button>
            ) : item.href ? (
              <a
                href={item.href}
                aria-current={current ? "step" : undefined}
                className={cn(pill, !current && hover)}
              >
                {body}
              </a>
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
