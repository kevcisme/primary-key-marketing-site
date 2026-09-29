import { cn } from "@/lib/utils";

type DiagonalFieldProps = {
  /**
   * `cover`: field-a ground with field-b sweeping in corner to corner (the deck cover).
   * `wedge`: page ground with a field-b wedge rising to the top-right (the deck's content slides).
   */
  variant?: "cover" | "wedge";
  className?: string;
  children?: React.ReactNode;
};

const CLIP = {
  cover: "polygon(100% 0, 100% 100%, 0 100%)",
  wedge: "polygon(100% 22%, 100% 100%, 28% 100%)",
} as const;

/** Two flat color fields split on a diagonal. Light: marigold / sky. Navy theme: navy / cobalt. */
export function DiagonalField({ variant = "cover", className, children }: DiagonalFieldProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        variant === "cover" ? "bg-field-a text-field-ink" : "bg-ground text-ink",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 animate-diagonal-in bg-field-b"
        style={{ clipPath: CLIP[variant] }}
      />
      {children}
    </div>
  );
}
