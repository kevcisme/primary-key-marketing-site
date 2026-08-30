"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import {
  IconDatabaseImport,
  IconArrowsExchange,
  IconRobot,
  IconPackageImport,
  IconLock,
  IconCode,
} from "@tabler/icons-react";

// NOTE: follow-on pricing is marked unconfirmed in sales-content/intial-literature.md.
// Numbers live here so they can be pulled or changed in one place.
const RETAINER_PRICE = "$6,000";
const PROJECT_TIERS = [
  {
    size: "Small",
    price: "$10k",
    shape: "Two to four weeks. One integration, or one automation.",
    example:
      "The practice-management tool and the document store, wired together so nobody re-keys a client's details a third time.",
  },
  {
    size: "Medium",
    price: "$25k",
    shape: "Six to ten weeks. A workflow rebuilt end to end.",
    example:
      "Document intake, classification, and routing — with the review point and the audit trail the profession requires, not bolted on after.",
  },
  {
    size: "Large",
    price: "$60k",
    shape: "Three to five months. A system the firm runs on.",
    example:
      "Data consolidated out of five places into one store that can actually be queried, and the tooling that sits on top of it.",
  },
];

const buildWork = [
  {
    title: "Data consolidation",
    description:
      "Five systems and a shared drive, pulled into one place that can be queried. This is the unglamorous work that makes every later item cheaper — and it is the one most firms want to skip.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconDatabaseImport className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
  {
    title: "Integrations",
    description:
      "Two systems that don't talk, reconciled by hand in a spreadsheet every month. We make them talk.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconArrowsExchange className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Workflow automation",
    description:
      "The hour-long check a machine can do in a minute — built with a human review point, because the liability is still yours.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconRobot className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Tool selection and rollout",
    description:
      "Configuring what the roadmap said to buy, and getting the firm actually using it. Most failed AI tools were bought, not deployed.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconPackageImport className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Governance implementation",
    description:
      "The policy from the assessment turned into settings, permissions, and approved tools — rules people can actually follow.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconLock className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Custom software",
    description:
      "When nothing off the shelf fits how you work. This is the smallest bucket on purpose — and we will tell you plainly when you are in it and when you aren't.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconCode className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
];

const retainerIncludes = [
  {
    name: "The roadmap keeps moving",
    body: "Now, next, later. The now column gets done during a project. The other two rot unless somebody owns them after we leave.",
  },
  {
    name: "Vendor calls, pressure-tested",
    body: "A tool lands on the table between engagements. Forward it. We check the claim against your numbers before a partner has to guess.",
  },
  {
    name: "Governance reviewed as things change",
    body: "New staff, new tools, new rules. A policy written once and never revisited is how firms end up back at Experimenting.",
  },
  {
    name: "A technical person to call",
    body: "Before you sign something. Before you migrate something. Before you let a vendor near client data.",
  },
  {
    name: "An annual re-score",
    body: "The same six axes, a year on. You see the shape move — or you see that it didn't, which is also worth knowing.",
  },
];

const questions = [
  {
    q: "Can we skip the assessment and just have you build it?",
    a: "No. We don't scope a build without a roadmap — that's how firms end up with the right system in the wrong order. If you had an assessment done elsewhere and it holds up, bring it and we'll work from that.",
  },
  {
    q: "Do we have to use you for the build?",
    a: "No, and the roadmap is written so you don't have to. It names the work, the order, and the build-or-buy call — not the vendor. Take it to anyone. Some firms run the whole thing in-house.",
  },
  {
    q: "What if the roadmap says buy?",
    a: "Then it says buy, and most items do. The assessment is priced so that it never needs to sell you a build. If the answer is a tool you already pay for with a feature switched off, that's the answer, and we don't get paid to build around it.",
  },
  {
    q: "What happens when the build is finished?",
    a: "You get the system, the documentation, and a named owner inside the firm who knows how it runs. You should be able to stop working with us and keep everything. Some firms move to the retainer; plenty don't need to.",
  },
  {
    q: "Is the retainer a support contract?",
    a: "No. Support for what we built is part of handing it over. The retainer buys judgment — the next decisions, not the last one's bugs.",
  },
];

export default function BuildAndRun() {
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
            After the Assessment
          </h1>
          <p className="font-mono-accent text-neutral-400 mt-6 text-sm sm:text-base text-center">
            &gt; the roadmap says what to do. this is help doing it.
          </p>
          <p className="text-neutral-300 mt-6 text-base sm:text-lg text-center max-w-2xl">
            Two ways to keep going: a project to build what the roadmap ranked
            first, and a retainer to make sure the rest of it doesn&apos;t rot.
          </p>
        </div>
      </section>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* Framing */}
      <section className="px-8 pt-8 pb-20 sm:px-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-8">
            &gt; scoped from the roadmap, not before it
          </p>
          <p className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-8">
            The most expensive thing a small firm can buy is the right system in
            the wrong order.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            So we don&apos;t quote a build before the assessment. Not out of
            process for its own sake — we simply don&apos;t know yet whether the
            thing you want built is the binding constraint, or whether it sits on
            top of a foundation that can&apos;t hold it.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Once the roadmap exists, the scope is short and the number is real.
            Every item on it already has an owner, an order, and a build-or-buy
            call attached — so pricing the work is arithmetic, not a negotiation.
          </p>
        </div>
      </section>

      {/* Two engagements */}
      <section className="px-8 py-20 sm:px-20 bg-dots">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-4">
            &gt; the two follow-on engagements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Build it. Then keep it honest.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-amber-glow/20 bg-punch-card/60 dark:bg-black p-8 flex flex-col">
              <p className="font-mono-accent text-xs text-amber-glow uppercase tracking-wider mb-4">
                Engagement 02 — Project
              </p>
              <h3 className="text-2xl font-bold tracking-tight mb-4">
                Running the roadmap
              </h3>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Architecture, data work, integrations, tool selection and
                rollout, pilots, and custom software where nothing off the shelf
                fits. Fixed scope, taken straight off the roadmap.
              </p>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We start at the top of the now column — the binding constraint —
                and we finish one thing before starting the next.
              </p>
              <p className="font-mono-accent text-sm text-neutral-500 dark:text-neutral-400 mt-auto pt-8">
                &gt; priced by size. {PROJECT_TIERS.map((t) => t.price).join(" / ")}.
              </p>
            </div>
            <div className="rounded-xl border border-amber-glow/20 bg-punch-card/60 dark:bg-black p-8 flex flex-col">
              <p className="font-mono-accent text-xs text-amber-glow uppercase tracking-wider mb-4">
                Engagement 03 — Retainer
              </p>
              <h3 className="text-2xl font-bold tracking-tight mb-4">
                Keeping it moving
              </h3>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                A standing technical seat at the firm. The next decisions, the
                vendor calls, the governance review, the annual re-score.
              </p>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                For firms that finished the now column and would rather not
                rediscover all of this in eighteen months.
              </p>
              <p className="font-mono-accent text-sm text-neutral-500 dark:text-neutral-400 mt-auto pt-8">
                &gt; {RETAINER_PRICE} a month. capped at eight hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the build work is */}
      <section className="px-8 py-20 sm:px-20">
        <div className="max-w-7xl mx-auto mb-12">
          <p className="font-mono-accent text-amber-glow text-sm mb-4">
            &gt; what a project actually involves
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Most of it isn&apos;t AI. That is the point.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            The model is the last thing that goes in and the least of the work.
            What takes the time is the substrate underneath it — the data, the
            plumbing, the rules, and getting people to use the thing.
          </p>
        </div>
        <BentoGrid className="max-w-7xl mx-auto">
          {buildWork.map((item, i) => (
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

      {/* Project sizing */}
      <section className="px-8 py-20 sm:px-20 bg-dots">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-4">
            &gt; how a project is sized
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Three sizes. You will know which one you are before we quote it.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECT_TIERS.map((tier, i) => (
              <div
                key={i}
                className="rounded-xl border border-amber-glow/15 bg-punch-card/50 dark:bg-neutral-900/50 p-8 flex flex-col"
              >
                <p className="font-mono-accent text-xs text-amber-glow uppercase tracking-wider mb-4">
                  {tier.size}
                </p>
                <p className="font-mono-accent text-4xl font-bold mb-4">
                  {tier.price}
                </p>
                <p className="font-mono-accent text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                  {tier.shape}
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {tier.example}
                </p>
              </div>
            ))}
          </div>
          <p className="font-mono-accent text-sm text-neutral-500 dark:text-neutral-400 mt-8 max-w-3xl">
            &gt; a firm rarely needs the large one first. most roadmaps start
            with a small item that unblocks three others.
          </p>
        </div>
      </section>

      {/* Retainer detail */}
      <section className="px-8 py-24 sm:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-4">
            &gt; the retainer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            {RETAINER_PRICE} a month. Eight hours. No surprises in either
            direction.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12 max-w-3xl">
            The cap is deliberate. If a month needs more than eight hours, it
            isn&apos;t a retainer month — it is a project, and we will say so
            rather than quietly rolling it in and billing you for it later.
          </p>
          <div className="divide-y divide-amber-glow/15 border-y border-amber-glow/15">
            {retainerIncludes.map((item, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-[auto_1fr] gap-2 sm:gap-8 py-6"
              >
                <div className="flex items-baseline gap-4 sm:w-72">
                  <span className="font-mono-accent text-xs text-amber-glow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono-accent font-bold text-sm text-neutral-800 dark:text-neutral-100">
                    {item.name}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What doesn't change */}
      <section className="px-8 py-24 sm:px-20 bg-dots">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-8">
            &gt; what doesn&apos;t change when we build
          </p>
          <p className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-8">
            We still don&apos;t sell software.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            The obvious risk in a firm that both assesses and builds is that
            every assessment starts finding build work. Ours is priced so it
            doesn&apos;t have to. The roadmap is the deliverable whether or not
            you ever hire us again, and it names buy far more often than it names
            build — because for a firm of this size, buying is usually right.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            We take no referral fees and carry no product line, so a
            recommendation to buy costs us nothing to make.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            And we build to hand over. Documentation, a named owner inside the
            firm, no lock-in worth the name. You should be able to fire us and
            keep the system running.
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="px-8 py-20 sm:px-20">
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
          All of this starts with the same four weeks.
        </h2>
        <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-xl mb-8">
          Get the roadmap first. Decide about the rest of it after you have one.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
