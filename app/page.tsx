import Link from "next/link";
import { DiagonalField } from "@/components/pk/diagonal-field";
import { Frame } from "@/components/pk/frame";
import { Logo } from "@/components/pk/logo";
import { HeroBoard } from "@/components/pk/hero-board";
import { PkButton } from "@/components/pk/pk-button";
import { Eyebrow } from "@/components/pk/eyebrow";
import { Iceberg } from "@/components/pk/iceberg";
import { Motif, type MotifName } from "@/components/pk/motif";
import type { CardTone } from "@/components/pk/offset-card";
import { SkewCard } from "@/components/pk/skew-card";
import { Night } from "@/components/pk/night";
import { LazyCanvasText } from "@/components/pk/lazy";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const deliverables: {
  title: string;
  description: string;
  motif: MotifName;
  tone: CardTone;
  motifTone: "surface" | "sky";
  className: string;
}[] = [
  {
    title: "A maturity score",
    description:
      "Six axes, one phase, one page. Where the firm stands today, scored on what we observe — not what we're told.",
    motif: "radar",
    tone: "marigold",
    motifTone: "surface",
    className: "md:col-span-2",
  },
  {
    title: "A shadow-usage report",
    description: "What staff say they use, and what they actually use. The gap is the risk.",
    motif: "gap",
    tone: "surface",
    motifTone: "sky",
    className: "md:col-span-1",
  },
  {
    title: "An opportunity map",
    description: "Every candidate for automation, ranked by what it's worth against what it costs.",
    motif: "map",
    tone: "sky",
    motifTone: "surface",
    className: "md:col-span-1",
  },
  {
    title: "A build-or-buy call",
    description:
      "On each opportunity. Sometimes the answer is a tool you already own with a feature switched off.",
    motif: "scale",
    tone: "surface",
    motifTone: "sky",
    className: "md:col-span-2",
  },
  {
    title: "A governance baseline",
    description:
      "For tax firms, aligned to IRS Publication 4557 and the FTC Safeguards Rule — the written security plan you are required to have anyway.",
    motif: "shield",
    tone: "teal",
    motifTone: "surface",
    className: "md:col-span-1",
  },
  {
    title: "A sequenced roadmap",
    description: "Now, next, later. Owners named, order defended. The thing the partners actually run.",
    motif: "steps",
    tone: "marigold",
    motifTone: "surface",
    className: "md:col-span-2",
  },
];

const donts = [
  {
    tone: "navy",
    title: "We don't sell software.",
    body: "Vendor-neutral. The recommendation is the product.",
  },
  {
    tone: "teal",
    title: "We don't touch the client relationship.",
    body: "We automate what happens inside the firm.",
  },
  {
    tone: "marigold",
    title: "We don't install a tool before we know the order.",
    body: "A demo is not a deployed system.",
  },
] as const;

export default function Home() {
  return (
    <main>
      {/* Hero — the deck cover: diagonal field, drawn frame, the name on the frame's edge */}
      <DiagonalField className="flex min-h-svh items-center px-5 pb-20 pt-36 sm:px-12">
        <div className="relative mx-auto w-full max-w-5xl">
          <h1 className="sr-only">Your AI problem is a data problem.</h1>
          <Frame
            tone="field"
            draw
            className="mx-auto max-w-[54rem] px-5 pb-16 pt-8 sm:px-10 sm:pt-12 md:px-12"
          >
            <HeroBoard />
            <div className="absolute top-full left-1/2 -mt-5 w-[min(34rem,92vw)] -translate-x-1/2 sm:-mt-6 sm:w-[34rem]">
              <Logo className="w-full" />
            </div>
          </Frame>
          <div className="mt-36 flex flex-col items-center gap-8 text-center sm:mt-40">
            <p className="font-mono text-sm sm:text-base">&gt; helping firms help themselves with AI. data first. rules second. tools last.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <PkButton href="/offerings" size="lg">
                The Assessment
              </PkButton>
              <PkButton href="/hire" variant="secondary" size="lg">
                Book a Call
              </PkButton>
            </div>
          </div>
        </div>
      </DiagonalField>

      {/* The problem */}
      <section className="px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="mb-8">the problem</Eyebrow>
          <p className="mb-8 font-serif text-2xl font-bold leading-snug tracking-tight sm:text-3xl/snug">
            Every week a vendor calls. The tool will save a day. Some tools will. Most won&apos;t —
            and{" "}
            <PointerHighlight containerClassName="max-w-full px-1">
              <span>the reason is rarely the tool.</span>
            </PointerHighlight>
          </p>
          <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg/8">
            The firm&apos;s data is spread across five systems and a shared drive. Nobody owns the
            rules. Half the staff already use AI on their own, and no one knows which client data
            went into it. Employees use AI for tasks it's not great at and miss the opportunities to outsource the tasks AI is great at.
          </p>
          <p className="text-base leading-relaxed text-muted sm:text-lg/8">
            A firm can buy tools all year and end up where it started. That is the failure we are
            hired to prevent.
          </p>
        </div>
      </section>

      {/* The iceberg */}
      <section className="bg-ground-alt px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <Eyebrow className="mb-6">the foundation beneath the AI</Eyebrow>
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              The tool is the tip. The work is underneath.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg/8">
              Tooling is the one axis everyone can see. We score six. The other five sit below the
              waterline, and the two at the bottom cap everything above them.
            </p>
          </div>
          <Iceberg />
          <p className="mt-12 font-mono text-sm text-muted">
            &gt; see{" "}
            <Link href="/lab" className="text-accent-text underline-offset-4 hover:underline">
              how we score
            </Link>
            .
          </p>
        </div>
      </section>

      {/* What you walk away with */}
      <section className="px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow className="mb-4">what the firm walks away with</Eyebrow>
          <h2 className="mb-14 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Four weeks. Fixed scope. Fixed fee.
          </h2>
          <BentoGrid>
            {deliverables.map((d) => (
              <BentoGridItem
                key={d.title}
                tone={d.tone}
                title={d.title}
                description={d.description}
                header={<Motif name={d.motif} tone={d.motifTone} className="flex-1" />}
                className={d.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 pb-28 sm:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          <div>
            <Eyebrow className="mb-6">who it&apos;s for</Eyebrow>
            <p className="mb-4 font-serif text-2xl font-bold leading-snug tracking-tight">
              Firms of 5 to 150 people that sell judgment for a living.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Law, accounting and tax practices first. Partners who are being sold AI and have no way to
              judge it.
            </p>
          </div>
          <div>
            <Eyebrow className="mb-6">what we don&apos;t do</Eyebrow>
            <div className="grid gap-5 px-4 md:grid-cols-3 md:px-8">
              {donts.map((d) => (
                <SkewCard key={d.title} tone={d.tone}>
                  <h3 className="text-xl font-bold italic leading-snug tracking-tight">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{d.body}</p>
                </SkewCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sign-off */}
      <Night className="px-6 py-24 sm:px-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="flex h-[clamp(5rem,15vw,10rem)] w-full items-center justify-center">
            <LazyCanvasText
              text="PRIMARY KEY"
              className="text-[clamp(3rem,12vw,8.5rem)] font-bold leading-none tracking-tight"
              lineGap={7}
              lineWidth={2}
            />
          </div>
          <p className="mt-8 font-mono text-sm text-muted">
            &gt; where you stand. what&apos;s worth doing. in what order.
          </p>
          <p className="mt-3 font-mono text-sm text-muted">
            &gt; already have a roadmap? see{" "}
            <Link href="/build" className="text-accent-text underline-offset-4 hover:underline">
              what comes after the assessment
            </Link>
            .
          </p>
          <div className="mt-10">
            <PkButton href="/hire" size="lg">
              Book a Call
            </PkButton>
          </div>
        </div>
      </Night>
    </main>
  );
}
