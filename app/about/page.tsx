"use client";
import { LampContainer } from "@/components/ui/lamp";
import { Timeline } from "@/components/ui/timeline";
import { AsciiArt } from "@/components/ui/ascii-art";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { motion } from "framer-motion";

const aboutText = "Primary Key is a product and services company. We create high quality applications that stand the test of time. We are always pushing the limits of what is possible. We create using the bleeding edge in technology.";

const timelineData = [
  {
    title: "The Foundation",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Built on classical computer science principles — the kind forged in
          university labs and refined through decades of real-world engineering.
          We believe in understanding the machine before you ask it to dance.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; algorithms. data structures. first principles.
        </p>
      </div>
    ),
  },
  {
    title: "The Stack",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Modern technology, bleeding-edge frameworks, and the latest in cloud
          infrastructure. We stay ahead of the curve so our clients don&apos;t
          have to.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; next.js. react native. aws. tensorflow.
        </p>
      </div>
    ),
  },
  {
    title: "The Method",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Rigorous engineering process meets creative problem-solving. Every line
          of code is intentional. Every architecture decision is deliberate. We
          measure twice and cut once.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; test. iterate. refine. ship.
        </p>
      </div>
    ),
  },
  {
    title: "The Output",
    content: (
      <div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          Products that stand the test of time. Applications that scale.
          Experiences that delight. We build things that last because we build
          them right.
        </p>
        <p className="font-mono-accent text-amber-glow text-xs">
          &gt; quality over quantity. always.
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
          About Us
        </motion.h1>
      </LampContainer>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* Section B — Philosophy */}
      <section className="flex flex-col items-center px-8 py-20 sm:px-20">
        <div className="max-w-4xl w-full flex flex-col items-center gap-12">
          <div className="w-full max-w-4xl rounded-lg shadow-2xl shadow-black/10 border border-black/10 overflow-hidden">
            <AsciiArt
              src="/images/belllabs.jpg"
              resolution={80}
              charset="dots"
              color="#171717"
              backgroundColor="#f0e8d1"
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
          <p className="font-mono-accent text-amber-glow text-sm">
            &gt; craftsmanship. precision. innovation.
          </p>
        </div>
      </section>

      {/* Section C — Timeline */}
      <section className="px-8 py-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-12 max-w-7xl mx-auto">
          &gt; our philosophy
        </p>
        <Timeline data={timelineData} />
      </section>
    </div>
  );
}
