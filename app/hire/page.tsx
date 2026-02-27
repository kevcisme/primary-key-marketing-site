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
  { text: "Ready" },
  { text: "to" },
  { text: "start" },
  { text: "your" },
  { text: "next" },
  { text: "project?" },
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
          Let&apos;s Build Something
        </motion.h1>
      </LampContainer>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* Section B — Services */}
      <section className="px-8 py-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-12 text-center">
          &gt; hover to explore
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <ServiceCard
            title="Full-Stack Development"
            description="End-to-end web and server applications built with modern frameworks. React, Next.js, Node, Python — whatever the problem demands."
            colors={[
              [212, 160, 74],
              [245, 240, 225],
            ]}
            animationSpeed={5}
          />
          <ServiceCard
            title="Mobile Applications"
            description="Native and cross-platform mobile apps with React Native and Swift. Smooth, performant, and beautiful on every device."
            colors={[
              [74, 222, 128],
              [212, 160, 74],
            ]}
            animationSpeed={3}
          />
          <ServiceCard
            title="AI & Machine Learning"
            description="Intelligent systems, custom models, and data pipelines. From recommendation engines to computer vision — we build AI that works."
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
        <p className="font-mono-accent text-neutral-400 text-sm mt-8">
          &gt; info@primarykey.solutions
        </p>
      </section>
    </div>
  );
}
