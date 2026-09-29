import { cn } from "@/lib/utils";

type FrameProps = {
  /** `field`: the cover's white frame (marigold in navy). `ink`: the frame token. `accent`: marigold. */
  tone?: "field" | "ink" | "accent";
  weight?: 1 | 2 | 3;
  /** Draw the four edges in sequence on first paint. */
  draw?: boolean;
  /** Knock the frame off register by [x, y] px, like the deck's offset outlines. */
  offset?: [number, number];
  /** Leave a centered gap in the bottom edge, wide enough for a lockup to sit in it. */
  notch?: string;
  className?: string;
  children?: React.ReactNode;
};

const TONE = { field: "bg-field-frame", ink: "bg-frame", accent: "bg-accent" } as const;
const THICK_X = { 1: "h-px", 2: "h-0.5", 3: "h-[3px]" } as const;
const THICK_Y = { 1: "w-px", 2: "w-0.5", 3: "w-[3px]" } as const;

/** A thin outlined rectangle around its children — the deck cover's title frame. */
export function Frame({
  tone = "ink",
  weight = 2,
  draw = false,
  offset,
  notch,
  className,
  children,
}: FrameProps) {
  const edge = cn("absolute", TONE[tone]);
  const x = cn(edge, THICK_X[weight], draw && "animate-draw-x");
  const y = cn(edge, THICK_Y[weight], draw && "animate-draw-y");

  return (
    <div className={cn("relative", className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={offset ? { transform: `translate(${offset[0]}px, ${offset[1]}px)` } : undefined}
      >
        <span className={cn(x, "inset-x-0 top-0 origin-left")} />
        <span className={cn(y, "inset-y-0 right-0 origin-top")} style={{ animationDelay: "120ms" }} />
        {notch ? (
          <>
            <span
              className={cn(x, "bottom-0 left-0 origin-right", notch)}
              style={{ animationDelay: "240ms" }}
            />
            <span
              className={cn(x, "right-0 bottom-0 origin-left", notch)}
              style={{ animationDelay: "240ms" }}
            />
          </>
        ) : (
          <span className={cn(x, "inset-x-0 bottom-0 origin-right")} style={{ animationDelay: "240ms" }} />
        )}
        <span className={cn(y, "inset-y-0 left-0 origin-bottom")} style={{ animationDelay: "360ms" }} />
      </span>
      {children}
    </div>
  );
}
