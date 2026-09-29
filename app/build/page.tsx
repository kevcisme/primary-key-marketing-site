import Link from "next/link";
import { PageHero } from "@/components/pk/page-hero";
import { Eyebrow } from "@/components/pk/eyebrow";
import { Motif, type MotifName } from "@/components/pk/motif";
import type { CardTone } from "@/components/pk/offset-card";
import { SkewCard } from "@/components/pk/skew-card";
import { Staircase } from "@/components/pk/staircase";
import { PkButton } from "@/components/pk/pk-button";
import { CtaBand } from "@/components/pk/cta-band";
import { SpineNav } from "@/components/pk/spine-nav";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TracingBeam } from "@/components/ui/tracing-beam";

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

const SECTIONS = [
  { id: "engagements", label: "the two engagements" },
  { id: "work", label: "what a project involves" },
  { id: "sizing", label: "project sizes" },
  { id: "retainer", label: "the retainer" },
  { id: "questions", label: "questions" },
];

const buildWork: {
  title: string;
  description: string;
  motif: MotifName;
  tone: CardTone;
  className: string;
}[] = [
  {
    title: "Data consolidation",
    description:
      "Five systems and a shared drive, pulled into one place that can be queried. This is the unglamorous work that makes every later item cheaper — and it is the one most firms want to skip.",
    motif: "table",
    tone: "marigold",
    className: "md:col-span-2",
  },
  {
    title: "Integrations",
    description:
      "Two systems that don't talk, reconciled by hand in a spreadsheet every month. We make them talk.",
    motif: "plug",
    tone: "surface",
    className: "md:col-span-1",
  },
  {
    title: "Workflow automation",
    description:
      "The hour-long check a machine can do in a minute — built with a human review point, because the liability is still yours.",
    motif: "flow",
    tone: "sky",
    className: "md:col-span-1",
  },
  {
    title: "Tool selection and rollout",
    description:
      "Configuring what the roadmap said to buy, and getting the firm actually using it. Most failed AI tools were bought, not deployed.",
    motif: "package",
    tone: "surface",
    className: "md:col-span-2",
  },
  {
    title: "Governance implementation",
    description:
      "The policy from the assessment turned into settings, permissions, and approved tools — rules people can actually follow.",
    motif: "lock",
    tone: "teal",
    className: "md:col-span-1",
  },
  {
    title: "Custom software",
    description:
      "When nothing off the shelf fits how you work. This is the smallest bucket on purpose — and we will tell you plainly when you are in it and when you aren't.",
    motif: "code",
    tone: "marigold",
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
    <main>
      <SpineNav sections={SECTIONS} />

      <PageHero
        eyebrow="after the assessment"
        title="After the Assessment"
        prompt="the roadmap says what to do. this is help doing it."
        lead="Two ways to keep going: a project to build what the roadmap ranked first, and a retainer to make sure the rest of it doesn't rot."
      />

      {/* Framing */}
      <section className="px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="mb-8">scoped from the roadmap, not before it</Eyebrow>
          <p className="mb-8 font-serif text-2xl font-bold leading-snug tracking-tight sm:text-3xl/snug">
            The most expensive thing a small firm can buy is the right system in the wrong order.
          </p>
          <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg/8">
            So we don&apos;t quote a build before the assessment. Not out of process for its own
            sake — we simply don&apos;t know yet whether the thing you want built is the binding
            constraint, or whether it sits on top of a foundation that can&apos;t hold it.
          </p>
          <p className="text-base leading-relaxed text-muted sm:text-lg/8">
            Once the roadmap exists, the scope is short and the number is real. Every item on it
            already has an owner, an order, and a build-or-buy call attached — so pricing the work
            is arithmetic, not a negotiation.
          </p>
        </div>
      </section>

      {/* Two engagements */}
      <section id="engagements" className="scroll-mt-24 bg-ground-alt px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow className="mb-4">the two follow-on engagements</Eyebrow>
          <h2 className="mb-14 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Build it. Then keep it honest.
          </h2>
          <div className="grid gap-8 px-4 md:grid-cols-2 md:px-10">
            <SkewCard tone="marigold">
              <p className="font-mono text-xs uppercase tracking-wider opacity-80">
                Engagement 02 — Project
              </p>
              <h3 className="mt-4 text-2xl font-bold italic tracking-tight md:text-3xl">
                Running the roadmap
              </h3>
              <p className="mt-4 text-base leading-relaxed">
                Architecture, data work, integrations, tool selection and rollout, pilots, and
                custom software where nothing off the shelf fits. Fixed scope, taken straight off
                the roadmap.
              </p>
              <p className="mt-4 text-base leading-relaxed">
                We start at the top of the now column — the binding constraint — and we finish one
                thing before starting the next.
              </p>
              <p className="mt-8 font-mono text-sm">
                &gt; priced by size. {PROJECT_TIERS.map((t) => t.price).join(" / ")}.
              </p>
            </SkewCard>
            <SkewCard tone="navy">
              <p className="font-mono text-xs uppercase tracking-wider opacity-80">
                Engagement 03 — Retainer
              </p>
              <h3 className="mt-4 text-2xl font-bold italic tracking-tight md:text-3xl">
                Keeping it moving
              </h3>
              <p className="mt-4 text-base leading-relaxed">
                A standing technical seat at the firm. The next decisions, the vendor calls, the
                governance review, the annual re-score.
              </p>
              <p className="mt-4 text-base leading-relaxed">
                For firms that finished the now column and would rather not rediscover all of this
                in eighteen months.
              </p>
              <p className="mt-8 font-mono text-sm text-marigold">
                &gt; {RETAINER_PRICE} a month. capped at eight hours.
              </p>
            </SkewCard>
          </div>
        </div>
      </section>

      {/* What the build work is */}
      <section id="work" className="scroll-mt-24 px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <Eyebrow className="mb-4">what a project actually involves</Eyebrow>
            <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Most of it isn&apos;t AI. That is the point.
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg/8">
              The model is the last thing that goes in and the least of the work. What takes the
              time is the substrate underneath it — the data, the plumbing, the rules, and getting
              people to use the thing.
            </p>
          </div>
          <BentoGrid>
            {buildWork.map((item) => (
              <BentoGridItem
                key={item.title}
                tone={item.tone}
                title={item.title}
                description={item.description}
                header={
                  <Motif
                    name={item.motif}
                    tone={item.tone === "surface" ? "sky" : "surface"}
                    className="flex-1"
                  />
                }
                className={item.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Project sizing */}
      <section id="sizing" className="scroll-mt-24 bg-ground-alt px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="mb-4">how a project is sized</Eyebrow>
          <h2 className="mb-16 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Three sizes. You will know which one you are before we quote it.
          </h2>
          <Staircase
            rise={3}
            steps={PROJECT_TIERS.map((tier, i) => ({
              label: tier.size.toLowerCase(),
              title: tier.price,
              titleClassName: "font-mono text-4xl",
              tone: (["sky", "teal", "marigold"] as const)[i],
              body: (
                <>
                  <p className="font-mono text-xs">{tier.shape}</p>
                  <p className="mt-3">{tier.example}</p>
                </>
              ),
            }))}
          />
          <p className="mt-10 max-w-3xl font-mono text-sm text-muted">
            &gt; a firm rarely needs the large one first. most roadmaps start with a small item
            that unblocks three others.
          </p>
        </div>
      </section>

      {/* Retainer detail */}
      <section id="retainer" className="scroll-mt-24 px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-4xl">
          <Eyebrow className="mb-4">the retainer</Eyebrow>
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            {RETAINER_PRICE} a month. Eight hours. No surprises in either direction.
          </h2>
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted sm:text-lg/8">
            The cap is deliberate. If a month needs more than eight hours, it isn&apos;t a retainer
            month — it is a project, and we will say so rather than quietly rolling it in and
            billing you for it later.
          </p>
          <ol className="divide-y divide-line border-y border-line">
            {retainerIncludes.map((item, i) => (
              <li key={item.name} className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                <div className="flex items-center gap-4 sm:w-80">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal font-mono text-xs font-semibold text-carbon">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold leading-snug">{item.name}</span>
                </div>
                <p className="text-base leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What doesn't change */}
      <section className="bg-ground-alt px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="mb-8">what doesn&apos;t change when we build</Eyebrow>
          <p className="mb-8 font-serif text-2xl font-bold leading-snug tracking-tight sm:text-3xl/snug">
            We still don&apos;t sell software.
          </p>
          <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg/8">
            The obvious risk in a firm that both assesses and builds is that every assessment
            starts finding build work. Ours is priced so it doesn&apos;t have to. The roadmap is the
            deliverable whether or not you ever hire us again, and it names buy far more often than
            it names build — because for a firm of this size, buying is usually right.
          </p>
          <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg/8">
            We take no referral fees and carry no product line, so a recommendation to buy costs us
            nothing to make.
          </p>
          <p className="text-base leading-relaxed text-muted sm:text-lg/8">
            And we build to hand over. Documentation, a named owner inside the firm, no lock-in
            worth the name. You should be able to fire us and keep the system running.
          </p>
        </div>
      </section>

      {/* Questions */}
      <section id="questions" className="scroll-mt-24 px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="mb-12">questions partners ask</Eyebrow>
          <TracingBeam className="pl-10 md:pl-0">
            <div className="space-y-12">
              {questions.map((item) => (
                <div key={item.q}>
                  <p className="font-serif text-xl font-bold italic leading-snug sm:text-2xl">
                    &ldquo;{item.q}&rdquo;
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg/8">{item.a}</p>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </section>

      <CtaBand
        title="All of this starts with the same four weeks."
        lead="Get the roadmap first. Decide about the rest of it after you have one."
        actions={
          <>
            <PkButton href="/offerings" size="lg">
              The Assessment
            </PkButton>
            <PkButton href="/hire" variant="secondary" size="lg">
              Book a Call
            </PkButton>
          </>
        }
        footnote={
          <>
            &gt; or see{" "}
            <Link href="/work" className="text-accent-text underline-offset-4 hover:underline">
              the work behind the advice
            </Link>
            .
          </>
        }
      />
    </main>
  );
}
