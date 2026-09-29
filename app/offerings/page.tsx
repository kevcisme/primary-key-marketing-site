import Link from "next/link";
import { PageHero } from "@/components/pk/page-hero";
import { StepPills } from "@/components/pk/step-pills";
import { Eyebrow } from "@/components/pk/eyebrow";
import { Motif, type MotifName } from "@/components/pk/motif";
import { OffsetCard } from "@/components/pk/offset-card";
import { SkewCard } from "@/components/pk/skew-card";
import { PkButton } from "@/components/pk/pk-button";
import { CtaBand } from "@/components/pk/cta-band";
import { SpineNav } from "@/components/pk/spine-nav";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";

const SECTIONS = [
  { id: "weeks", label: "the four weeks" },
  { id: "deliverables", label: "what you walk away with" },
  { id: "price", label: "price and fit" },
  { id: "questions", label: "questions" },
];

const weeks: { week: number; title: string; description: string; motif: MotifName }[] = [
  {
    week: 1,
    title: "Kickoff",
    description:
      "We sit with the partners and set the aim. What AI should do here. What stays human. Where the lines are. Nothing gets scored until we agree on what we are scoring for.",
    motif: "target",
  },
  {
    week: 2,
    title: "Interviews and inspection",
    description:
      "Thirty minutes with each person who runs the work. Then we look at the systems ourselves — the practice-management tool, the document store, the licenses you already pay for.",
    motif: "search",
  },
  {
    week: 3,
    title: "Scoring and ranking",
    description:
      "Six axes, each scored 0 to 4. Every opportunity we found, ranked by what it's worth against what it costs.",
    motif: "ruler",
  },
  {
    week: 4,
    title: "Readout",
    description:
      "The roadmap. Now, next, later. A build-or-buy call on each item. Owners named. Delivered before busy season, not during it.",
    motif: "present",
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

const fit = [
  "A vendor pitched you a tool in the last 90 days.",
  "Staff use ChatGPT or Copilot on their own and the partners half-know it.",
  "Someone spends an hour on a check a machine could do in a minute.",
  "Two systems that don't talk, reconciled by hand in a spreadsheet.",
  "A partner is worried about client data and hasn't said it out loud.",
];

const notFit = [
  "You want a tool installed next week. We can help after — not before.",
  "You want a chatbot for your clients. We don't touch the client relationship.",
  "Everything is on paper. There is nothing to score yet.",
  "You already have an AI team and a data platform. You need a different firm.",
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

/** Sticky-panel art for one week: a cream plate with the week's motif. */
function WeekPanel({ week, motif }: { week: number; motif: MotifName }) {
  return (
    <div className="flex size-full flex-col justify-between p-8">
      <span className="font-mono text-sm">week {week} / 4</span>
      <Motif name={motif} tone="surface" className="h-48 border-2 border-frame" />
      <span className="text-7xl font-light leading-none tracking-tight">
        {String(week).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function Offerings() {
  return (
    <main>
      <SpineNav sections={SECTIONS} />

      <PageHero
        eyebrow="the assessment"
        title="The AI Assessment"
        prompt="four weeks. fixed scope. fixed fee."
        lead="One outcome: the partners know where the firm stands, what is worth doing, and in what order."
        aside={
          <StepPills
            items={weeks.map((w) => ({ label: w.title, meta: `week ${w.week}`, href: `#week-${w.week}` }))}
            active={0}
            tone="ground"
          />
        }
      />

      {/* The four weeks */}
      <section id="weeks" className="scroll-mt-24 px-6 pt-24 sm:px-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="mb-4">how the four weeks run</Eyebrow>
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            We score what we see, not what we&apos;re told.
          </h2>
          <StickyScroll
            className="mt-6"
            contentClassName="border-2 border-frame shadow-hard"
            content={weeks.map((w) => ({
              id: `week-${w.week}`,
              eyebrow: `week ${w.week}`,
              title: w.title,
              description: w.description,
              content: <WeekPanel week={w.week} motif={w.motif} />,
            }))}
          />
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="scroll-mt-24 bg-ground-alt px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-4xl">
          <Eyebrow className="mb-4">what you walk away with</Eyebrow>
          <h2 className="mb-12 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Seven things, on paper, that outlive the engagement.
          </h2>
          <ol className="divide-y divide-line border-y border-line">
            {deliverables.map((d, i) => (
              <li key={d.name} className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                <div className="flex items-center gap-4 sm:w-72">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal font-mono text-xs font-semibold text-carbon">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold leading-snug">{d.name}</span>
                </div>
                <p className="text-base leading-relaxed text-muted">{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Price + fit */}
      <section id="price" className="scroll-mt-24 px-6 py-24 sm:px-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
          <div>
            <Eyebrow className="mb-6">the price</Eyebrow>
            <OffsetCard tone="marigold" bodyClassName="p-8">
              <p className="font-mono text-6xl font-semibold tracking-tight">$2,500</p>
              <p className="mt-6 text-base leading-relaxed">
                Fixed. Four weeks, start to readout. No hourly surprises and no discovery phase
                that discovers it needs another discovery phase.
              </p>
              <p className="mt-4 text-base leading-relaxed">
                If the firm wants help executing the roadmap — architecture, data work, tool
                selection, rollout, pilots — that is a second engagement, scoped from the roadmap
                and priced after it. Not before.
              </p>
              <Link
                href="/build"
                className="mt-6 inline-block font-mono text-sm font-medium underline decoration-2 underline-offset-4"
              >
                What comes after &rarr;
              </Link>
            </OffsetCard>
          </div>
          <div className="grid gap-8 px-4 md:px-8">
            <div>
              <Eyebrow className="mb-6">when it&apos;s a fit</Eyebrow>
              <SkewCard tone="teal">
                <ul className="space-y-3 text-base leading-relaxed">
                  {fit.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 size-2 shrink-0 bg-carbon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SkewCard>
            </div>
            <div>
              <Eyebrow className="mb-6">when it isn&apos;t</Eyebrow>
              <SkewCard tone="navy">
                <ul className="space-y-3 text-base leading-relaxed">
                  {notFit.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 size-2 shrink-0 bg-marigold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SkewCard>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section id="questions" className="scroll-mt-24 bg-ground-alt px-6 py-24 sm:px-20">
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
        title="Find out where you stand before you spend a dollar on tools."
        actions={
          <>
            <PkButton href="/hire" size="lg">
              Book a Call
            </PkButton>
            <PkButton href="/lab" variant="secondary" size="lg">
              How We Score
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
