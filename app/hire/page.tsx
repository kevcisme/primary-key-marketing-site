"use client";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import { motion, AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import React, { useState } from "react";
import { Icon } from "./canvas";

function ServiceCard({
  title,
  description,
  colors,
  animationSpeed,
}: {
  title: string;
  description: string;
  colors: [number, number, number][];
  animationSpeed: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-amber-glow/10 group/canvas-card flex items-center justify-center dark:border-white/[0.1] max-w-sm w-full mx-auto p-4 relative h-[30rem] bg-punch-card/30 dark:bg-black rounded-xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={animationSpeed}
              containerClassName="bg-black rounded-xl"
              colors={colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 flex flex-col items-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
          <h3 className="text-xl font-bold text-black dark:text-white font-mono-accent">
            {title}
          </h3>
        </div>
        <p className="text-sm text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 text-center group-hover/canvas-card:-translate-y-2 transition duration-200 max-w-xs px-4">
          {description}
        </p>
      </div>
    </div>
  );
}

const ctaWords = [
  { text: "Four" },
  { text: "weeks." },
  { text: "Fixed" },
  { text: "fee." },
  { text: "One" },
  { text: "answer." },
];

export default function Hire() {
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
          Let&apos;s Find Out Where <br /> You Stand
        </motion.h1>
      </LampContainer>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* Section B — Services */}
      <section className="px-8 py-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-12 text-center">
          &gt; what we do
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <ServiceCard
            title="The AI Assessment"
            description="Four weeks, $2,500, fixed scope. We score six axes, rank every opportunity, and hand the partners a sequenced roadmap. Start here — everything else is scoped from it."
            colors={[
              [212, 160, 74],
              [245, 240, 225],
            ]}
            animationSpeed={5}
          />
          <ServiceCard
            title="Vendor Pressure-Test"
            description="A tool is already on the table and the partners can't judge the claim. We check it against your own numbers and put the answer in writing — buy it, or don't, and why."
            colors={[
              [74, 222, 128],
              [212, 160, 74],
            ]}
            animationSpeed={3}
          />
          <ServiceCard
            title="Running the Roadmap"
            description="Architecture, data work, tool selection, rollout, pilots. The second engagement, for firms that want help executing. Scoped from the roadmap — never before it."
            colors={[
              [236, 72, 153],
              [212, 160, 74],
            ]}
            animationSpeed={3}
          />
        </div>
      </section>

      {/* Section C — CTA */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <TypewriterEffect words={ctaWords} />
        <div className="mt-12">
          <a href="mailto:info@primarykey.solutions">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-4 font-mono-accent text-base"
            >
              info@primarykey.solutions
            </Button>
          </a>
        </div>
        <p className="font-mono-accent text-neutral-400 text-sm mt-8 text-center max-w-xl">
          &gt; tell us the size of the firm and what a vendor last pitched you.
          that&apos;s enough to start.
        </p>
      </section>
    </div>
  );
}
