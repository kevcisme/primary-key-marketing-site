import { cn } from "@/lib/utils";

type LogoProps = {
  /** `full` is the table mark plus wordmark; `mark` is the table alone. */
  variant?: "full" | "mark";
  /** Show "THE FOUNDATION BENEATH THE AI" under the wordmark. */
  tagline?: boolean;
  className?: string;
};

/**
 * The Primary Key lockup: a database table whose key column is filled
 * marigold, and a wordmark set in the site's own fonts. Inline SVG, so it
 * inherits `color` (ink) and the theme tokens instead of fixed hex values.
 */
export function Logo({ variant = "full", tagline = true, className }: LogoProps) {
  const viewBox =
    variant === "mark" ? "44 24 140 138" : tagline ? "40 22 548 148" : "40 22 548 140";

  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label="Primary Key"
      className={cn("text-ink", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(38 18)">
        <rect x="12" y="12" width="38" height="126" rx="6" className="fill-marigold" />
        <rect
          x="12"
          y="12"
          width="128"
          height="126"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
        />
        <line x1="12" y1="42" x2="140" y2="42" stroke="currentColor" strokeWidth="2.5" />
        <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3">
          <line x1="50" y1="12" x2="50" y2="138" />
          <line x1="95" y1="12" x2="95" y2="138" />
        </g>
        <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25">
          <line x1="50" y1="74" x2="140" y2="74" />
          <line x1="50" y1="106" x2="140" y2="106" />
        </g>

        {/* Key column: always carbon, because it sits on marigold in both themes. */}
        <g className="fill-carbon stroke-carbon">
          <circle cx="31" cy="27" r="7" fill="none" strokeWidth="2.2" />
          <circle cx="31" cy="27" r="2.5" stroke="none" />
          <circle cx="31" cy="58" r="3.5" stroke="none" />
          <circle cx="31" cy="90" r="3.5" stroke="none" />
          <circle cx="31" cy="122" r="3.5" stroke="none" />
        </g>

        <g stroke="currentColor" strokeLinecap="round">
          <g strokeWidth="2.5" strokeOpacity="0.5">
            <line x1="62" y1="27" x2="82" y2="27" />
            <line x1="107" y1="27" x2="130" y2="27" />
          </g>
          <g strokeWidth="2" strokeOpacity="0.3">
            <line x1="61" y1="58" x2="83" y2="58" />
            <line x1="61" y1="90" x2="79" y2="90" />
            <line x1="61" y1="122" x2="85" y2="122" />
            <line x1="106" y1="58" x2="128" y2="58" />
            <line x1="106" y1="90" x2="132" y2="90" />
            <line x1="106" y1="122" x2="124" y2="122" />
          </g>
        </g>
      </g>

      {variant === "full" && (
        <>
          <text
            x="212"
            y="108"
            fontSize="62"
            letterSpacing="-1"
            className="fill-current font-sans"
          >
            <tspan fontWeight="600">primary</tspan>
            <tspan dx="14" fontWeight="300" className="fill-accent-text">
              key
            </tspan>
          </text>
          {tagline && (
            <text
              x="215"
              y="142"
              fontSize="13.5"
              letterSpacing="3.2"
              className="fill-muted font-mono"
            >
              THE FOUNDATION BENEATH THE AI
            </text>
          )}
        </>
      )}
    </svg>
  );
}
