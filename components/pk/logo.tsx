import { cn } from "@/lib/utils";

type LogoProps = {
  /** `full` is the mark plus wordmark; `mark` is the two squares alone. */
  variant?: "full" | "mark";
  /** Show "SOLUTIONS" under the wordmark. */
  tagline?: boolean;
  className?: string;
};

/**
 * Primary Key lockup, traced from `primary_key_primary_logo.svg`.
 * Strokes and type use `currentColor` so the mark follows the theme;
 * the sky cell and marigold overlap stay brand colors.
 */
export function Logo({ variant = "full", tagline = true, className }: LogoProps) {
  const viewBox = variant === "mark" ? "18 28 286 268" : tagline ? "0 0 1600 420" : "0 20 1600 250";

  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label="Primary Key"
      className={cn("text-ink", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(28 38)">
        <rect x="0" y="0" width="170" height="170" rx="24" fill="#fff" stroke="currentColor" strokeWidth="14" />
        <rect x="95" y="73" width="170" height="170" rx="24" fill="#BFE8FF" stroke="currentColor" strokeWidth="14" />
        <rect x="95" y="73" width="75" height="75" rx="12" fill="#FFCD32" stroke="currentColor" strokeWidth="12" />
      </g>

      {variant === "full" && (
        <g transform="translate(335 52)" fill="currentColor">
          <text x="0" y="118" fontSize="124" letterSpacing="-1.8" className="font-serif" fontWeight="700">
            Primary Key
          </text>
          {tagline && (
            <text x="2" y="212" fontSize="54" letterSpacing="12" className="font-sans" fontWeight="500">
              SOLUTIONS
            </text>
          )}
        </g>
      )}
    </svg>
  );
}
