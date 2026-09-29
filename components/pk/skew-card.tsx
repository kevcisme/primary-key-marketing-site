import { cn } from "@/lib/utils";

type SkewTone = "navy" | "teal" | "marigold" | "sky";

const TONE: Record<SkewTone, string> = {
  navy: "bg-navy text-cream dark:bg-navy-lift",
  teal: "bg-teal text-carbon",
  marigold: "bg-marigold text-carbon",
  sky: "bg-sky text-carbon",
};

type SkewCardProps = {
  tone?: SkewTone;
  title?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

/**
 * A parallelogram panel ("I like / I wish / I wonder"). The box is skewed and
 * its content counter-skewed, so text stays upright. Grids of these need
 * horizontal padding: the corners overhang the box by roughly a fifth of its height.
 */
export function SkewCard({ tone = "navy", title, className, children }: SkewCardProps) {
  return (
    <div className={cn("-skew-x-6 md:-skew-x-12", TONE[tone], className)}>
      <div className="skew-x-6 px-8 py-8 md:skew-x-12 md:px-10 md:py-10">
        {title && (
          <h3 className="font-sans text-2xl font-bold uppercase italic tracking-tight md:text-3xl">
            {title}
          </h3>
        )}
        <div className={cn(title && "mt-4")}>{children}</div>
      </div>
    </div>
  );
}
