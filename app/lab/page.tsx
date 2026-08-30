"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import {
  IconDatabase,
  IconShieldLock,
  IconPlugConnected,
  IconRouteSquare,
  IconUsers,
  IconBuildingBank,
} from "@tabler/icons-react";

const axes = [
  {
    title: "01 / Data readiness",
    description:
      "Is the firm's data digital, structured, centralized, queryable? This is the substrate. Everything AI does, it does to data — and most firms have theirs in five systems and a shared drive. A foundation axis: nothing above it can score higher.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconDatabase className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
  {
    title: "02 / Governance & risk",
    description:
      "Policy, confidentiality, PII handling, professional liability, oversight. The second foundation axis — and in a professional-services firm, usually the one that caps the score.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconShieldLock className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "03 / Tooling adoption",
    description:
      "None, generic, embedded, or custom. Scored twice — what leadership says is in use, and what is actually in use.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconPlugConnected className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "04 / Workflow integration",
    description:
      "Whether AI is one person's private habit or a documented step in how the work gets done.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconRouteSquare className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "05 / People & skills",
    description:
      "Literacy, champions, training, comfort. Who can actually run the thing after we leave.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconUsers className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "06 / Leadership & strategy",
    description:
      "Whether a partner owns this, has a budget for it, and can say what AI is for at this firm. Without an owner, nothing on the roadmap survives busy season.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconBuildingBank className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
];

const phases = [
  {
    title: "0 / Unaware",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          No AI in the firm, and no view on it. Work is manual, records are
          scattered, and the question has not been asked out loud. The first move
          is not a tool. It is a conversation about what AI is for here.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; next move: spark + literacy.
        </p>
      </div>
    ),
  },
  {
    title: "1 / Experimenting",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Individuals use AI on their own. No policy, no approved tools, no
          record of what client data has gone where. Most firms that believe they
          are further along are here — the usage is real, the control is not.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; next move: policy + tool selection. the highest-leverage move a
          small firm can make.
        </p>
      </div>
    ),
  },
  {
    title: "2 / Standardizing",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Approved tools, a written policy, a named owner. Data is consolidating.
          Staff know what they may and may not put into a model. The exposure is
          managed and the firm can now buy with confidence.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; next move: workflow redesign.
        </p>
      </div>
    ),
  },
  {
    title: "3 / Integrating",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          AI is a documented step in how the work gets done, not a shortcut
          someone takes. Handoffs, review points, and oversight are designed in.
          The time saved shows up in the schedule, not just in anecdotes.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; next move: rethink the offering and the pricing.
        </p>
      </div>
    ),
  },
  {
    title: "4 / Transforming",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          AI reshapes what the firm sells, not just how it operates. New service
          lines, different pricing, work the firm could not have taken before.
          Few firms are here. None get here by starting here.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; the point of the order.
        </p>
      </div>
    ),
  },
];

export default function Lab() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Section A — Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-neutral-950 overflow-hidden px-8">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#d4a04a"
        />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            The Method
          </h1>
          <p className="font-mono-accent text-neutral-400 mt-6 text-sm sm:text-base text-center">
            &gt; six axes. five phases. one rule.
          </p>
        </div>
      </section>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* Section B — The six axes */}
      <section className="px-8 py-20 sm:px-20 bg-dots">
        <div className="max-w-7xl mx-auto mb-12">
          <p className="font-mono-accent text-amber-glow text-sm mb-4">
            &gt; the six axes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            A firm is not a number. It is a shape.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            We score six axes, each from 0 to 4, against behavioral anchors —
            what we can watch someone do, not what sounds right in a meeting. Two
            firms with the same average can need opposite things. The shape is
            what tells you which.
          </p>
        </div>
        <BentoGrid className="max-w-7xl mx-auto">
          {axes.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Section C — The rule */}
      <section className="px-8 py-24 sm:px-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-8">
            &gt; the one rule
          </p>
          <p className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-8">
            A firm&apos;s phase can never be higher than its weakest foundation.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            Data and governance are the foundation. If either one scores a 1, the
            firm is Experimenting — no matter how many tools it has bought, how
            enthusiastic the staff are, or what the average says.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            This is the point of the instrument. An average will happily hide a
            zero. Ours refuses to. It stops firms from stacking tools on a floor
            that cannot hold them, and it names the one constraint that is
            actually binding — which is almost never the thing the vendor is
            selling.
          </p>
          <p className="font-mono-accent text-neutral-500 dark:text-neutral-400 text-sm">
            &gt; scored twice, too: what leadership states, and what we observe.
            When tooling runs ahead of what leadership knows about, that is
            shadow usage. When governance runs behind it, that is a policy that
            exists only on paper.
          </p>
        </div>
      </section>

      {/* Section D — The five phases */}
      <section className="px-8 py-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-12 max-w-7xl mx-auto">
          &gt; the five phases
        </p>
        <Timeline data={phases} />
      </section>

      {/* Section E — Footer */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <div className="h-[20rem] w-full max-w-5xl flex items-center justify-center">
          <TextHoverEffect text="MEASURE" />
        </div>
        <p className="font-mono-accent text-neutral-400 text-sm mt-4 text-center">
          &gt; we score what we see, not what we&apos;re told.
        </p>
        <div className="mt-10">
          <Link href="/offerings">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              See the Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
