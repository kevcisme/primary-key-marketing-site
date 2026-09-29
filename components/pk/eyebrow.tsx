import { cn } from "@/lib/utils";

type EyebrowProps = {
  /** Optional step number, drawn as a teal rail node. */
  index?: number;
  /** Keep the `>` prompt that marks the site's mono voice. */
  prompt?: boolean;
  as?: "p" | "span" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
};

/** Section label in the mono prompt voice: `> the problem`. */
export function Eyebrow({ index, prompt = true, as: Tag = "p", className, children }: EyebrowProps) {
  return (
    <Tag className={cn("flex items-center gap-3 font-mono text-sm text-accent-text", className)}>
      {index !== undefined && (
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-teal text-[11px] font-semibold text-carbon">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <span>
        {prompt && <span aria-hidden>&gt; </span>}
        {children}
      </span>
    </Tag>
  );
}
