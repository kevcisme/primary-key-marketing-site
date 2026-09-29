import { cn } from "@/lib/utils";

export type CardTone =
  | "marigold"
  | "sky"
  | "teal"
  | "cream"
  | "cobalt"
  | "navy"
  | "surface"
  | "ground";

/** Text on marigold, sky, teal, and cream is always carbon; cobalt and navy carry cream. */
export const CARD_TONES: Record<CardTone, string> = {
  marigold: "bg-marigold text-carbon",
  sky: "bg-sky text-carbon",
  teal: "bg-teal text-carbon",
  cream: "bg-cream text-carbon",
  cobalt: "bg-cobalt text-cream",
  navy: "bg-navy text-cream dark:bg-navy-lift",
  surface: "bg-surface text-ink",
  ground: "bg-ground text-ink",
};

const OFFSET = {
  tl: "-translate-x-2 -translate-y-2",
  tr: "translate-x-2 -translate-y-2",
  bl: "-translate-x-2 translate-y-2",
  br: "translate-x-2 translate-y-2",
} as const;

type OffsetCardProps = {
  tone?: CardTone;
  /** Which way the outline is knocked off register. */
  offset?: keyof typeof OFFSET;
  /** Snap the outline into register on hover or keyboard focus. */
  interactive?: boolean;
  frame?: boolean;
  as?: "div" | "article" | "li";
  className?: string;
  /** Classes for the solid block (padding, layout). */
  bodyClassName?: string;
  children?: React.ReactNode;
};

/** A solid color block with an ink outline laid slightly off register (deck slides 3, 12, 33). */
export function OffsetCard({
  tone = "marigold",
  offset = "tl",
  interactive = true,
  frame = true,
  as: Tag = "div",
  className,
  bodyClassName,
  children,
}: OffsetCardProps) {
  return (
    <Tag className={cn("group/card relative", className)}>
      <div className={cn("relative h-full p-6", CARD_TONES[tone], bodyClassName)}>{children}</div>
      {frame && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 border-2 border-frame transition-transform duration-300 ease-out",
            OFFSET[offset],
            interactive &&
              "group-hover/card:translate-0 group-focus-within/card:translate-0"
          )}
        />
      )}
    </Tag>
  );
}
