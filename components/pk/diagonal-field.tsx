import { cn } from "@/lib/utils";

type DiagonalFieldProps = {
  /**
   * `cover`: field-a and field-b split corner to corner (the deck cover).
   * `wedge`: page ground with a field-b wedge in the bottom-right (the deck's content slides).
   */
  variant?: "cover" | "wedge";
  className?: string;
  children?: React.ReactNode;
};

/** Where the split sits along the top-left → bottom-right axis; 50% is exactly corner to corner. */
const SPLIT = { cover: "50%", wedge: "62%" } as const;
const FIRST = { cover: "var(--pk-field-a)", wedge: "var(--pk-ground)" } as const;

/**
 * Two flat color fields split on a diagonal. Light: marigold / sky. Navy
 * theme: navy / cobalt. Drawn as a hard-stop gradient (not a clipped layer) so
 * contrast checkers see the real background behind text.
 */
export function DiagonalField({ variant = "cover", className, children }: DiagonalFieldProps) {
  return (
    <div
      className={cn(
        "animate-diagonal-in",
        variant === "cover" ? "text-field-ink" : "text-ink",
        className
      )}
      style={
        {
          "--pk-split": SPLIT[variant],
          backgroundImage: `linear-gradient(to bottom right, ${FIRST[variant]} calc(var(--pk-split) - 0.6px), var(--pk-field-b) calc(var(--pk-split) + 0.6px))`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
