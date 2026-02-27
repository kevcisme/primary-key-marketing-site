"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {
  IconCode,
  IconDeviceMobile,
  IconBrain,
  IconCloud,
  IconBulb,
} from "@tabler/icons-react";
import Link from "next/link";

const flipWords = ["products", "platforms", "systems", "experiences"];

const heroWords = [
  { text: "We" },
  { text: "build" },
];

const capabilities = [
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications built with modern frameworks, designed for scale and performance.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconCode className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconDeviceMobile className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent systems powered by cutting-edge models and data pipelines.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconBrain className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Cloud Architecture",
    description:
      "Scalable, resilient infrastructure designed for modern workloads.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconCloud className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-1",
  },
  {
    title: "Product Strategy",
    description:
      "From concept to market — strategic planning, user research, and roadmap development.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dots bg-punch-card/30 dark:bg-neutral-900" />
    ),
    icon: <IconBulb className="h-4 w-4 text-amber-glow" />,
    className: "md:col-span-2",
  },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Section A — Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-8 bg-dots">
        <Image
          className="dark:invert mb-8"
          src="/images/logo.png"
          alt="Primary Key logo"
          width={300}
          height={150}
          priority
        />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">
            <TypewriterEffectSmooth words={heroWords} />
            <FlipWords words={flipWords} />
          </div>
        </div>

        <p className="font-mono-accent text-neutral-500 dark:text-neutral-400 mt-8 text-sm sm:text-base tracking-tight">
          &gt; making stuff and taking names since day one.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link href="/offerings">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              See Our Work
            </Button>
          </Link>
          <Link href="/hire">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-3 font-mono-accent text-sm"
            >
              Hire Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Section B — Capabilities Bento Grid */}
      <section className="px-8 py-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-8 max-w-7xl mx-auto">
          &gt; what we do
        </p>
        <BentoGrid className="max-w-7xl mx-auto">
          {capabilities.map((item, i) => (
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

      {/* Section C — Footer / Sign-off */}
      <section className="flex flex-col items-center justify-center py-20 px-8">
        <div className="h-[20rem] w-full max-w-5xl flex items-center justify-center">
          <TextHoverEffect text="PRIMARY KEY" />
        </div>
        <p className="font-mono-accent text-neutral-400 text-sm mt-4">
          &gt; craftsmanship meets code
        </p>
      </section>
    </div>
  );
}
