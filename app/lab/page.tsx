"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {
  IconFlask,
  IconRocket,
  IconBrain,
  IconRefresh,
  IconTargetArrow,
} from "@tabler/icons-react";

const approachItems = [
  {
    title: "First Principles Thinking",
    description:
      "We decompose problems to their fundamental truths and build up from there. No cargo-culting. No black boxes.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconBrain className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
  {
    title: "Bleeding Edge Stack",
    description:
      "We adopt new technology early — but only when it solves real problems better than the alternative.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconRocket className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Battle-Tested Patterns",
    description:
      "Design patterns that have survived decades of software evolution. Proven. Reliable. Elegant.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconTargetArrow className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Relentless Iteration",
    description:
      "Ship, measure, learn, repeat. We believe in tight feedback loops and continuous improvement.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconRefresh className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Ship It",
    description:
      "Perfect is the enemy of good. We build fast, ship often, and iterate relentlessly. Real users beat hypothetical ones.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconFlask className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
];

const processData = [
  {
    title: "Discovery",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Understanding the problem is more than half the battle. We dig deep
          into user needs, market dynamics, and technical constraints before
          writing a single line of code.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; listen. research. define.
        </p>
      </div>
    ),
  },
  {
    title: "Architecture",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Designing the solution at the whiteboard. Data models, system
          boundaries, API contracts, and infrastructure topology — all mapped
          before the first sprint.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; diagrams. schemas. trade-offs.
        </p>
      </div>
    ),
  },
  {
    title: "Build",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Engineering with precision. Clean code, comprehensive tests,
          continuous integration. Every commit is intentional, every PR is
          reviewed.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; code. test. review. merge.
        </p>
      </div>
    ),
  },
  {
    title: "Deploy",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Ship to production with confidence. Blue-green deployments, feature
          flags, monitoring, and alerting — everything in place before the first
          user arrives.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; staging. canary. production.
        </p>
      </div>
    ),
  },
  {
    title: "Evolve",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          The launch is just the beginning. We iterate based on real data, user
          feedback, and emerging requirements. Products are living systems.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; measure. learn. improve.
        </p>
      </div>
    ),
  },
];

export default function Lab() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Section A — Hero with Spotlight */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-neutral-950 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#d4a04a"
        />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            The Lab
          </h1>
          <p className="font-mono-accent text-neutral-400 mt-6 text-sm sm:text-base">
            &gt; where punch cards meet neural networks
          </p>
        </div>
      </section>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* Section B — Approach Grid */}
      <section className="px-8 py-20 sm:px-20 bg-dots">
        <p className="font-mono-accent text-amber-glow text-sm mb-8 max-w-7xl mx-auto">
          &gt; our approach
        </p>
        <BentoGrid className="max-w-7xl mx-auto">
          {approachItems.map((item, i) => (
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

      {/* Section C — Process Timeline */}
      <section className="px-8 py-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-12 max-w-7xl mx-auto">
          &gt; the process
        </p>
        <Timeline data={processData} />
      </section>

      {/* Section D — Footer */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <div className="h-[20rem] w-full max-w-5xl flex items-center justify-center">
          <TextHoverEffect text="INNOVATION" />
        </div>
      </section>
    </div>
  );
}
