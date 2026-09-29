import { PageHero } from "@/components/pk/page-hero";
import { Eyebrow } from "@/components/pk/eyebrow";
import { PkButton } from "@/components/pk/pk-button";
import { CtaBand } from "@/components/pk/cta-band";
import ImageGenerationLoaderDemo from "@/components/image-generation-loader-demo";
import { Timeline } from "@/components/ui/timeline";
import { EncryptedText } from "@/components/ui/encrypted-text";

const aboutText =
  "Primary Key helps professional-services firms take on AI in the right order. Data first. Rules second. Tools last. We measure where a firm stands, find the work worth automating, and hand the partners a plan they can run.";

const principles = [
  {
    title: "We don't sell software",
    body: "We take no referral fees and carry no product line. There is no version of this engagement where the answer happens to be the thing we resell. The recommendation is the product — which is why it can be honest.",
    prompt: "vendor-neutral by design.",
  },
  {
    title: "We score what we see",
    body: "Every axis is scored twice: what leadership states, and what we observe in the systems and the interviews. Where the two drift apart, that gap is the finding. It is usually the most valuable page in the report.",
    prompt: "stated vs. observed. on every axis.",
  },
  {
    title: "The client relationship stays human",
    body: "We automate what happens inside the firm — the reconciliation, the document handling, the checks nobody should be doing by hand. The conversation with your client is not on the table. That is what you sell.",
    prompt: "the judgment is yours. the busywork isn't.",
  },
  {
    title: "Same method every time",
    body: "Establish the need. Find and rank the opportunities. Decide build or buy. Ship a sequenced roadmap. The instrument is the same for every firm, which is the only reason the scores mean anything across firms.",
    prompt: "a repeatable instrument, not a bespoke opinion.",
  },
  {
    title: "Plain about the hype",
    body: "A demo is not a deployed system. When there is a gap between what a tool does on a stage and what it would do in your practice, we name the gap and we cost it. When a claim holds up, we say that in writing too.",
    prompt: "we've shipped enough software to know the difference.",
  },
];

const timelineData = principles.map((p) => ({
  title: p.title,
  content: (
    <div>
      <p className="mb-4 text-sm leading-relaxed text-muted md:text-base">{p.body}</p>
      <p className="font-mono text-xs text-accent-text">&gt; {p.prompt}</p>
    </div>
  ),
}));

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="about"
        title={
          <>
            The foundation <br /> beneath the AI
          </>
        }
        prompt="measurement. sequence. judgment."
      />

      {/* Positioning */}
      <section className="flex flex-col items-center px-6 py-24 sm:px-20">
        <div className="flex w-full max-w-4xl flex-col items-center gap-14">
          <ImageGenerationLoaderDemo />
          <div className="max-w-3xl">
            <p className="text-2xl font-semibold leading-snug tracking-tight">
              <EncryptedText
                text={aboutText}
                encryptedClassName="font-mono text-accent-text/50"
                revealedClassName="text-ink"
                revealDelayMs={30}
                flipDelayMs={40}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ground-alt px-6 py-24 sm:px-20">
        <Eyebrow className="mx-auto max-w-7xl">why primary key</Eyebrow>
        <Timeline data={timelineData} />
      </section>

      <CtaBand
        title="Twenty years of shipping software, pointed at one question: what should this firm do first?"
        actions={
          <>
            <PkButton href="/offerings" size="lg">
              The Assessment
            </PkButton>
            <PkButton href="/work" variant="secondary" size="lg">
              The Work
            </PkButton>
          </>
        }
      />
    </main>
  );
}
