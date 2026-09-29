import { cn } from "@/lib/utils";
import { DiagonalField } from "./diagonal-field";
import { Eyebrow } from "./eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  /** The mono prompt line under the title. */
  prompt?: string;
  /** Lead paragraph. */
  lead?: React.ReactNode;
  /** Right-hand column (e.g. the agenda pills). */
  aside?: React.ReactNode;
  className?: string;
};

/** Inner-page hero: the deck's content-slide wedge behind a light display title. */
export function PageHero({ eyebrow, title, prompt, lead, aside, className }: PageHeroProps) {
  return (
    <DiagonalField variant="wedge" className={cn("px-6 pb-24 pt-40 sm:px-20", className)}>
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-end gap-14",
          aside && "lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]"
        )}
      >
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            {title}
          </h1>
          {prompt && <p className="mt-8 font-mono text-sm sm:text-base">&gt; {prompt}</p>}
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
        </div>
        {aside}
      </div>
    </DiagonalField>
  );
}
