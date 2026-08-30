"use client";
import { LampContainer } from "@/components/ui/lamp";
import { Timeline } from "@/components/ui/timeline";
import { AsciiArt } from "@/components/ui/ascii-art";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import Link from "next/link";

const aboutText =
  "Primary Key helps professional-services firms take on AI in the right order. Data first. Rules second. Tools last. We measure where a firm stands, find the work worth automating, and hand the partners a plan they can run.";

const timelineData = [
  {
    title: "We don't sell software",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          We take no referral fees and carry no product line. There is no version
          of this engagement where the answer happens to be the thing we resell.
          The recommendation is the product — which is why it can be honest.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; vendor-neutral by design.
        </p>
      </div>
    ),
  },
  {
    title: "We score what we see",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Every axis is scored twice: what leadership states, and what we observe
          in the systems and the interviews. Where the two drift apart, that gap
          is the finding. It is usually the most valuable page in the report.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; stated vs. observed. on every axis.
        </p>
      </div>
    ),
  },
  {
    title: "The client relationship stays human",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          We automate what happens inside the firm — the reconciliation, the
          document handling, the checks nobody should be doing by hand. The
          conversation with your client is not on the table. That is what you
          sell.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; the judgment is yours. the busywork isn&apos;t.
        </p>
      </div>
    ),
  },
  {
    title: "Same method every time",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Establish the need. Find and rank the opportunities. Decide build or
          buy. Ship a sequenced roadmap. The instrument is the same for every
          firm, which is the only reason the scores mean anything across firms.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; a repeatable instrument, not a bespoke opinion.
        </p>
      </div>
    ),
  },
  {
    title: "Plain about the hype",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          A demo is not a deployed system. When there is a gap between what a
          tool does on a stage and what it would do in your practice, we name the
          gap and we cost it. When a claim holds up, we say that in writing too.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; we&apos;ve shipped enough software to know the difference.
        </p>
      </div>
    ),
  },
];

export default function About() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Section A — Lamp Hero */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-neutral-100 to-amber-glow py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          The foundation <br /> beneath the AI
        </motion.h1>
      </LampContainer>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* Section B — Positioning */}
      <section className="flex flex-col items-center px-8 py-20 sm:px-20">
        <div className="max-w-4xl w-full flex flex-col items-center gap-12">
          <div className="w-full max-w-4xl rounded-lg shadow-2xl shadow-black/10 border border-black/10 overflow-hidden">
            <AsciiArt
              src="/images/belllabs.jpg"
              resolution={80}
              charset="dots"
              color="#171717"
              backgroundColor="#eeebe1"
              animationStyle="typewriter"
              animateOnView={false}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
            />
          </div>
          <div className="max-w-3xl">
            <p className="text-2xl leading-snug tracking-wide font-bold">
              <EncryptedText
                text={aboutText}
                encryptedClassName="text-amber-glow/40 font-mono-accent"
                revealedClassName="dark:text-white text-black"
                revealDelayMs={30}
                flipDelayMs={40}
              />
            </p>
          </div>
          <p className="font-mono-accent text-amber-glow text-sm text-center">
            &gt; measurement. sequence. judgment.
          </p>
        </div>
      </section>

      {/* Section C — Why us */}
      <section className="px-8 py-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-12 max-w-7xl mx-auto">
          &gt; why primary key
        </p>
        <Timeline data={timelineData} />
      </section>

      {/* Section D — CTA */}
      <section className="flex flex-col items-center justify-center py-20 px-8 text-center">
        <p className="text-xl sm:text-2xl font-bold tracking-tight max-w-2xl mb-8">
          Twenty years of shipping software, pointed at one question: what should
          this firm do first?
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
          <Link href="/work">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              The Work
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
