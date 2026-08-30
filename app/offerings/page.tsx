"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import {
  IconTargetArrow,
  IconSearch,
  IconRulerMeasure,
  IconPresentation,
} from "@tabler/icons-react";

const weeks = [
  {
    title: "Week 1 — Kickoff",
    description:
      "We sit with the partners and set the aim. What AI should do here. What stays human. Where the lines are. Nothing gets scored until we agree on what we are scoring for.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconTargetArrow className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
  {
    title: "Week 2 — Interviews and inspection",
    description:
      "Thirty minutes with each person who runs the work. Then we look at the systems ourselves — the practice-management tool, the document store, the licenses you already pay for.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconSearch className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Week 3 — Scoring and ranking",
    description:
      "Six axes, each scored 0 to 4. Every opportunity we found, ranked by what it's worth against what it costs.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconRulerMeasure className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Week 4 — Readout",
    description:
      "The roadmap. Now, next, later. A build-or-buy call on each item. Owners named. Delivered before busy season, not during it.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconPresentation className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
];

const deliverables = [
  {
    name: "A maturity score",
    body: "Six axes, one phase, one page. Where the firm stands today.",
  },
  {
    name: "A shadow-usage report",
    body: "What staff say they use and what they actually use. The gap is the risk.",
  },
  {
    name: "An opportunity map",
    body: "Every candidate for automation, ranked, and sorted into three buckets: core work, back office, client interaction.",
  },
  {
    name: "A build-or-buy call",
    body: "On each opportunity. Sometimes the answer is a tool you already own with a feature switched off.",
  },
  {
    name: "A sequenced roadmap",
    body: "Now, next, later. What to do first, and why that order and not another.",
  },
  {
    name: "A governance baseline",
    body: "For tax firms, aligned to IRS Publication 4557 and the FTC Safeguards Rule — the Written Information Security Plan you are required to have anyway.",
  },
  {
    name: "A vendor pressure-test",
    body: "When a tool is already on the table. The vendor's claim, checked against the firm's own numbers.",
  },
];

const questions = [
  {
    q: "We're too small for this.",
    a: "Small firms get hurt worst by a bad tool choice — there is nobody to absorb it. Four weeks now is cheaper than a year on the wrong system.",
  },
  {
    q: "We already use ChatGPT.",
    a: "Who uses it, for what, and with which client data? If you can answer that, good. If you can't, that is the assessment.",
  },
  {
    q: "Our vendor says their tool already does this.",
    a: "Maybe it does. We test the claim against your own numbers. If it holds up, the roadmap says buy it — and we say so in writing.",
  },
  {
    q: "We don't have time. It's busy season.",
    a: "Four weeks. Thirty-minute interviews. We work around your calendar and we are out before it starts.",
  },
  {
    q: "Is this about cutting staff?",
    a: "No. It is about what your people spend time on that isn't the work you bill for. Firms that do this well grow; they don't shrink.",
  },
  {
    q: "Just tell us what to buy.",
    a: "We will, in week four. The order matters more than the tool.",
  },
  {
    q: "What about client data?",
    a: "Governance is one of the two axes everything else depends on. The assessment includes the security baseline the IRS already requires of you.",
  },
];

export default function Offerings() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-neutral-950 overflow-hidden px-8">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#d4a04a"
        />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
            The AI Assessment
          </h1>
          <p className="font-mono-accent text-neutral-400 mt-6 text-sm sm:text-base text-center">
            &gt; four weeks. fixed scope. fixed fee.
          </p>
          <p className="text-neutral-300 mt-6 text-base sm:text-lg text-center max-w-2xl">
            One outcome: the partners know where the firm stands, what is worth
            doing, and in what order.
          </p>
        </div>
      </section>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* The four weeks */}
      <section className="px-8 pt-8 pb-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-4 max-w-7xl mx-auto">
          &gt; how the four weeks run
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-7xl mx-auto tracking-tight">
          We score what we see, not what we&apos;re told.
        </h2>
        <BentoGrid className="max-w-7xl mx-auto">
          {weeks.map((item, i) => (
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

      {/* Deliverables */}
      <section className="px-8 py-20 sm:px-20 bg-dots">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-4">
            &gt; what you walk away with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Seven things, on paper, that outlive the engagement.
          </h2>
          <div className="divide-y divide-amber-glow/15 border-y border-amber-glow/15">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-[auto_1fr] gap-2 sm:gap-8 py-6"
              >
                <div className="flex items-baseline gap-4 sm:w-64">
                  <span className="font-mono-accent text-xs text-amber-glow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono-accent font-bold text-sm text-neutral-800 dark:text-neutral-100">
                    {d.name}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price + fit */}
      <section className="px-8 py-24 sm:px-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-mono-accent text-amber-glow text-sm mb-6">
              &gt; the price
            </p>
            <p className="font-mono-accent text-5xl font-bold mb-4">$2,500</p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              Fixed. Four weeks, start to readout. No hourly surprises and no
              discovery phase that discovers it needs another discovery phase.
            </p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              If the firm wants help executing the roadmap — architecture, data
              work, tool selection, rollout, pilots — that is a second
              engagement, scoped from the roadmap and priced after it. Not
              before.
            </p>
          </div>
          <div>
            <p className="font-mono-accent text-amber-glow text-sm mb-6">
              &gt; when it&apos;s a fit
            </p>
            <ul className="space-y-3 text-base text-neutral-700 dark:text-neutral-300 mb-10">
              <li>A vendor pitched you a tool in the last 90 days.</li>
              <li>
                Staff use ChatGPT or Copilot on their own and the partners
                half-know it.
              </li>
              <li>
                Someone spends an hour on a check a machine could do in a minute.
              </li>
              <li>
                Two systems that don&apos;t talk, reconciled by hand in a
                spreadsheet.
              </li>
              <li>
                A partner is worried about client data and hasn&apos;t said it out
                loud.
              </li>
            </ul>
            <p className="font-mono-accent text-amber-glow text-sm mb-6">
              &gt; when it isn&apos;t
            </p>
            <ul className="space-y-3 text-base text-neutral-700 dark:text-neutral-300">
              <li>
                You want a tool installed next week. We can help after — not
                before.
              </li>
              <li>You want a chatbot for your clients. We don&apos;t touch the
                client relationship.</li>
              <li>Everything is on paper. There is nothing to score yet.</li>
              <li>
                You already have an AI team and a data platform. You need a
                different firm.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="px-8 py-20 sm:px-20 bg-dots">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-12">
            &gt; questions partners ask
          </p>
          <div className="space-y-10">
            {questions.map((item, i) => (
              <div key={i}>
                <p className="font-mono-accent font-bold text-base mb-3 text-neutral-800 dark:text-neutral-100">
                  &ldquo;{item.q}&rdquo;
                </p>
                <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-center py-24 px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-6">
          Find out where you stand before you spend a dollar on tools.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/hire">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              Book a Call
            </Button>
          </Link>
          <Link href="/lab">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              How We Score
            </Button>
          </Link>
        </div>
        <p className="font-mono-accent text-neutral-400 text-sm mt-10">
          &gt; or see{" "}
          <Link href="/work" className="text-amber-glow hover:underline">
            the work behind the advice
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
