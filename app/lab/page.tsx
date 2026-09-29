import { PageHero } from "@/components/pk/page-hero";
import { Eyebrow } from "@/components/pk/eyebrow";
import { Motif, type MotifName } from "@/components/pk/motif";
import type { CardTone } from "@/components/pk/offset-card";
import { Staircase, type Step } from "@/components/pk/staircase";
import { PkButton } from "@/components/pk/pk-button";
import { CtaBand } from "@/components/pk/cta-band";
import { SpineNav } from "@/components/pk/spine-nav";
import { RadarDemo } from "@/components/pk/radar-demo";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const SECTIONS = [
  { id: "axes", label: "the six axes" },
  { id: "rule", label: "the one rule" },
  { id: "phases", label: "the five phases" },
];

const axes: {
  title: string;
  description: string;
  motif: MotifName;
  tone: CardTone;
  foundation?: boolean;
  className: string;
}[] = [
  {
    title: "01 / Data readiness",
    description:
      "Is the firm's data digital, structured, centralized, queryable? This is the substrate. Everything AI does, it does to data — and most firms have theirs in five systems and a shared drive. A foundation axis: nothing above it can score higher.",
    motif: "table",
    tone: "cobalt",
    foundation: true,
    className: "md:col-span-2",
  },
  {
    title: "02 / Governance & risk",
    description:
      "Policy, confidentiality, PII handling, professional liability, oversight. The second foundation axis — and in a professional-services firm, usually the one that caps the score.",
    motif: "shield",
    tone: "cobalt",
    foundation: true,
    className: "md:col-span-1",
  },
  {
    title: "03 / Tooling adoption",
    description:
      "None, generic, embedded, or custom. Scored twice — what leadership says is in use, and what is actually in use.",
    motif: "plug",
    tone: "marigold",
    className: "md:col-span-1",
  },
  {
    title: "04 / Workflow integration",
    description:
      "Whether AI is one person's private habit or a documented step in how the work gets done.",
    motif: "flow",
    tone: "sky",
    className: "md:col-span-2",
  },
  {
    title: "05 / People & skills",
    description:
      "Literacy, champions, training, comfort. Who can actually run the thing after we leave.",
    motif: "people",
    tone: "surface",
    className: "md:col-span-1",
  },
  {
    title: "06 / Leadership & strategy",
    description:
      "Whether a partner owns this, has a budget for it, and can say what AI is for at this firm. Without an owner, nothing on the roadmap survives busy season.",
    motif: "pillars",
    tone: "teal",
    className: "md:col-span-2",
  },
];

const phases: Step[] = [
  {
    label: "phase 0",
    title: "Unaware",
    tone: "cream",
    body: (
      <>
        <p>
          No AI in the firm, and no view on it. Work is manual, records are scattered, and the
          question has not been asked out loud. The first move is not a tool. It is a conversation
          about what AI is for here.
        </p>
        <p className="mt-3 font-mono text-xs">&gt; next move: spark + literacy.</p>
      </>
    ),
  },
  {
    label: "phase 1",
    title: "Experimenting",
    tone: "sky",
    body: (
      <>
        <p>
          Individuals use AI on their own. No policy, no approved tools, no record of what client
          data has gone where. Most firms that believe they are further along are here — the usage
          is real, the control is not.
        </p>
        <p className="mt-3 font-mono text-xs">
          &gt; next move: policy + tool selection. the highest-leverage move a small firm can make.
        </p>
      </>
    ),
  },
  {
    label: "phase 2",
    title: "Standardizing",
    tone: "teal",
    body: (
      <>
        <p>
          Approved tools, a written policy, a named owner. Data is consolidating. Staff know what
          they may and may not put into a model. The exposure is managed and the firm can now buy
          with confidence.
        </p>
        <p className="mt-3 font-mono text-xs">&gt; next move: workflow redesign.</p>
      </>
    ),
  },
  {
    label: "phase 3",
    title: "Integrating",
    tone: "marigold",
    body: (
      <>
        <p>
          AI is a documented step in how the work gets done, not a shortcut someone takes.
          Handoffs, review points, and oversight are designed in. The time saved shows up in the
          schedule, not just in anecdotes.
        </p>
        <p className="mt-3 font-mono text-xs">&gt; next move: rethink the offering and the pricing.</p>
      </>
    ),
  },
  {
    label: "phase 4",
    title: "Transforming",
    tone: "cobalt",
    body: (
      <>
        <p>
          AI reshapes what the firm sells, not just how it operates. New service lines, different
          pricing, work the firm could not have taken before. Few firms are here. None get here by
          starting here.
        </p>
        <p className="mt-3 font-mono text-xs">&gt; the point of the order.</p>
      </>
    ),
  },
];

export default function Lab() {
  return (
    <main>
      <SpineNav sections={SECTIONS} />

      <PageHero eyebrow="the method" title="The Method" prompt="six axes. five phases. one rule." />

      {/* The six axes */}
      <section id="axes" className="scroll-mt-24 px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <Eyebrow className="mb-4">the six axes</Eyebrow>
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              A firm is not a number. It is a shape.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg/8">
              We score six axes, each from 0 to 4, against behavioral anchors — what we can watch
              someone do, not what sounds right in a meeting. Two firms with the same average can
              need opposite things. The shape is what tells you which.
            </p>
          </div>
          <BentoGrid className="md:auto-rows-auto">
            {axes.map((axis) => (
              <BentoGridItem
                key={axis.title}
                tone={axis.tone}
                title={axis.title}
                description={axis.description}
                header={
                  <div className="relative flex flex-1 flex-col">
                    <Motif name={axis.motif} tone="surface" className="min-h-28 flex-1" />
                    {axis.foundation && (
                      <span className="absolute right-2 top-2 bg-marigold px-2 py-0.5 font-mono text-[11px] font-semibold text-carbon">
                        foundation
                      </span>
                    )}
                  </div>
                }
                className={axis.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* The rule, and the rule at work */}
      <section id="rule" className="scroll-mt-24 bg-ground-alt px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <Eyebrow className="mb-8">the one rule</Eyebrow>
            <p className="mb-8 font-serif text-2xl font-bold leading-snug tracking-tight sm:text-3xl/snug">
              A firm&apos;s phase can never be higher than its{" "}
              <PointerHighlight containerClassName="max-w-full px-1">
                <span>weakest foundation.</span>
              </PointerHighlight>
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg/8">
              Data and governance are the foundation. If either one scores a 1, the firm is
              Experimenting — no matter how many tools it has bought, how enthusiastic the staff
              are, or what the average says.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg/8">
              This is the point of the instrument. An average will happily hide a zero. Ours
              refuses to. It stops firms from stacking tools on a floor that cannot hold them, and
              it names the one constraint that is actually binding — which is almost never the
              thing the vendor is selling.
            </p>
            <p className="font-mono text-sm text-muted">
              &gt; scored twice, too: what leadership states, and what we observe. When tooling
              runs ahead of what leadership knows about, that is shadow usage. When governance runs
              behind it, that is a policy that exists only on paper.
            </p>
          </div>

          <div className="mt-20 border-t border-line pt-16">
            <Eyebrow className="mb-10">the rule at work · pick a firm</Eyebrow>
            <RadarDemo />
          </div>
        </div>
      </section>

      {/* The five phases */}
      <section id="phases" className="scroll-mt-24 px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow as="h2" className="mb-16">
            the five phases
          </Eyebrow>
          <Staircase steps={phases} rise={2} yLabel="value" xLabel="maturity" />
        </div>
      </section>

      <CtaBand
        title="We score what we see, not what we're told."
        actions={
          <PkButton href="/offerings" size="lg">
            See the Assessment
          </PkButton>
        }
      />
    </main>
  );
}
