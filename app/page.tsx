"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {
  IconChartRadar,
  IconEyeExclamation,
  IconListSearch,
  IconScale,
  IconRoute,
  IconShieldLock,
} from "@tabler/icons-react";
import Link from "next/link";

const flipWords = [
  "data problem.",
  "governance problem.",
  "sequencing problem.",
  "ownership problem.",
];

const heroWords = [
  { text: "Your" },
  { text: "AI" },
  { text: "problem" },
  { text: "is" },
  { text: "a" },
];

const deliverables = [
  {
    title: "A maturity score",
    description:
      "Six axes, one phase, one page. Where the firm stands today, scored on what we observe — not what we're told.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconChartRadar className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
  {
    title: "A shadow-usage report",
    description:
      "What staff say they use, and what they actually use. The gap is the risk.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconEyeExclamation className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "An opportunity map",
    description:
      "Every candidate for automation, ranked by what it's worth against what it costs.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconListSearch className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "A build-or-buy call",
    description:
      "On each opportunity. Sometimes the answer is a tool you already own with a feature switched off.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconScale className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "A governance baseline",
    description:
      "For tax firms, aligned to IRS Publication 4557 and the FTC Safeguards Rule — the written security plan you are required to have anyway.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconShieldLock className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "A sequenced roadmap",
    description:
      "Now, next, later. Owners named, order defended. The thing the partners actually run.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconRoute className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Section A — Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-8 bg-dots">
        <Image
          className="mb-8"
          src="/images/final-logo-light.svg"
          alt="Primary Key logo"
          width={400}
          height={100}
          priority
        />

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center items-center text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            <TypewriterEffectSmooth words={heroWords} />
            <FlipWords words={flipWords} />
          </div>
        </div>

        <p className="font-mono-accent text-neutral-500 dark:text-neutral-400 mt-8 text-sm sm:text-base tracking-tight text-center max-w-2xl">
          &gt; data first. rules second. tools last.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link href="/offerings">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              The Assessment
            </Button>
          </Link>
          <Link href="/hire">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              Book a Call
            </Button>
          </Link>
        </div>
      </section>

      {/* Section B — The problem */}
      <section className="px-8 py-24 sm:px-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-8">
            &gt; the problem
          </p>
          <p className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-8">
            Every week a vendor calls. The tool will save a day. Some tools will.
            Most won&apos;t — and the reason is never the tool.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            The firm&apos;s data is spread across five systems and a shared
            drive. Nobody owns the rules. Half the staff already use AI on their
            own, and no one knows which client data went into it.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            A firm can buy tools all year and end up where it started. That is
            the failure we are hired to prevent.
          </p>
        </div>
      </section>

      {/* Section C — What you walk away with */}
      <section className="px-8 pb-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-4 max-w-7xl mx-auto">
          &gt; what the firm walks away with
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-7xl mx-auto tracking-tight">
          Four weeks. Fixed scope. Fixed fee.
        </h2>
        <BentoGrid className="max-w-7xl mx-auto">
          {deliverables.map((item, i) => (
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

      {/* Section D — Who it's for */}
      <section className="px-8 py-20 sm:px-20 bg-dots">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono-accent text-amber-glow text-sm mb-6">
              &gt; who it&apos;s for
            </p>
            <p className="text-xl font-bold leading-snug mb-4 tracking-tight">
              Firms of 5 to 50 people that sell judgment for a living.
            </p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Accounting and tax practices first. Partners who are being sold AI
              and have no way to judge it.
            </p>
          </div>
          <div>
            <p className="font-mono-accent text-amber-glow text-sm mb-6">
              &gt; what we don&apos;t do
            </p>
            <ul className="space-y-3 text-base text-neutral-700 dark:text-neutral-300">
              <li>
                <span className="font-mono-accent text-neutral-500">— </span>
                We don&apos;t sell software. Vendor-neutral. The recommendation is
                the product.
              </li>
              <li>
                <span className="font-mono-accent text-neutral-500">— </span>
                We don&apos;t touch the client relationship. We automate what
                happens inside the firm.
              </li>
              <li>
                <span className="font-mono-accent text-neutral-500">— </span>
                We don&apos;t install a tool before we know the order. A demo is
                not a deployed system.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section E — Footer / Sign-off */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <div className="h-[20rem] w-full max-w-5xl flex items-center justify-center">
          <TextHoverEffect text="PRIMARY KEY" />
        </div>
        <p className="font-mono-accent text-neutral-400 text-sm mt-4 text-center">
          &gt; where you stand. what&apos;s worth doing. in what order.
        </p>
        <div className="mt-10">
          <Link href="/hire">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              Book a Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
