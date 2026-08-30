"use client";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import { HeroParallaxOfferings } from "./HParallax";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  // Flagship products
  { name: "Sileninja", desc: "Silent auction platform for events and fundraisers", category: "Product", link: "https://sileninja.com", img: "/images/sileninja.jpg" },
  { name: "Menstrucycle", desc: "Menstrual cycle tracking and health insights app", category: "Product", link: "https://menstrucycle.com", img: "/images/menstrucycle.png" },
  // Companies portfolio
  { name: "SportsTalk", desc: "Sports discussion platform with decoupled frontend and backend", category: "Product", link: "#", img: "/images/projects/sportstalk.svg" },
  { name: "Ready Golf", desc: "Golf course booking and tee time management", category: "Product", link: "#", img: "/images/projects/ready-golf.svg" },
  { name: "BlockMusic", desc: "Cross-platform music player built with Electron and React", category: "Product", link: "#", img: "/images/projects/blockmusic.svg" },
  { name: "DailyBible", desc: "Daily scripture reading and devotional mobile app", category: "Mobile", link: "#", img: "/images/projects/dailybible.svg" },
  { name: "Legends", desc: "Analytics dashboard with real-time data visualization", category: "Product", link: "#", img: "/images/projects/legends.svg" },
  { name: "Movion", desc: "Movie discovery and recommendation platform", category: "Product", link: "#", img: "/images/projects/movion.svg" },
  { name: "Philms", desc: "Film catalog and review application", category: "Product", link: "#", img: "/images/projects/philms.svg" },
  { name: "PicPixie", desc: "Image editing and transformation tool", category: "Product", link: "#", img: "/images/projects/picpixie.svg" },
  { name: "Consult the PM", desc: "Project management consulting platform", category: "Product", link: "#", img: "/images/projects/consultthepm.svg" },
  { name: "Palehuna", desc: "Hospitality and vacation rental management", category: "Product", link: "#", img: "/images/projects/palehuna.svg" },
  { name: "Nirvanalytics", desc: "Commerce analytics and Shopify data insights", category: "Product", link: "#", img: "/images/projects/nirvanalytics.svg" },
  { name: "ProudlyPlus", desc: "Community marketing and brand promotion site", category: "Product", link: "#", img: "/images/projects/proudlyplus.svg" },
  { name: "Occu-Med", desc: "Occupational medicine practice management", category: "Product", link: "#", img: "/images/projects/occu-med.svg" },
  { name: "Onelink Dating", desc: "Dating app with single-link profile sharing", category: "Mobile", link: "#", img: "/images/projects/onelink-dating.svg" },
  { name: "Realoha Pets", desc: "Pet services and adoption platform", category: "Product", link: "#", img: "/images/projects/realoha-pets.svg" },
  { name: "SantaSpotter", desc: "Holiday-themed location and event tracker", category: "Mobile", link: "#", img: "/images/projects/SantaSpotter.svg" },
  { name: "Shush", desc: "Private messaging and communication app", category: "Product", link: "#", img: "/images/projects/shush.svg" },
  { name: "Soulmate Sketch", desc: "AI-powered personality matching and sketching", category: "Product", link: "#", img: "/images/projects/soulmate-sketch.svg" },
  { name: "TruBackground", desc: "Background check and verification service", category: "Product", link: "#", img: "/images/projects/trubackground.svg" },
  { name: "Cancelled", desc: "Event cancellation management and refund platform", category: "Product", link: "#", img: "/images/projects/cancelled.svg" },
  { name: "AA Coin", desc: "Cryptocurrency tracking and sobriety milestone tokens", category: "Product", link: "#", img: "/images/projects/aa-coin.svg" },
  { name: "CVRT", desc: "Resume and CV conversion tool", category: "Tool", link: "#", img: "/images/projects/cvrt.svg" },
  { name: "Dude Scouts", desc: "Community adventure and outdoor activity organizer", category: "Product", link: "#", img: "/images/projects/dude-scouts.svg" },
  { name: "ReHuman", desc: "Human-centered design and reconnection platform", category: "Product", link: "#", img: "/images/projects/rehuman.svg" },
  { name: "Bookt", desc: "Book tracking and reading list management", category: "Product", link: "#", img: "/images/projects/bookt.svg" },
  { name: "ClockedShot", desc: "Time-tracked photography portfolio platform", category: "Product", link: "#", img: "/images/projects/clockedshot.svg" },
  { name: "Mememememe", desc: "AI meme generator and social content tool", category: "Tool", link: "#", img: "/images/projects/mememememe.svg" },
  // Side projects
  { name: "Mana League", desc: "Fantasy sports league management platform", category: "Side Project", link: "#", img: "/images/projects/mana-league.svg" },
  { name: "Cookie Accept", desc: "Chrome extension to auto-accept or reject cookie banners", category: "Tool", link: "#", img: "/images/projects/cookie-accept.svg" },
  { name: "Network Diagnostics", desc: "Network diagnostics dashboard built with Next.js and Shadcn UI", category: "Tool", link: "#", img: "/images/projects/network-diagnostics.svg" },
  { name: "Leiout", desc: "Floor plan designer and furniture layout tool", category: "Side Project", link: "#", img: "/images/projects/leiout.svg" },
  { name: "Weather Station", desc: "Full-stack weather monitoring with real-time data and S3 storage", category: "Side Project", link: "#", img: "/images/projects/weather-app.svg" },
  { name: "Toduo", desc: "Collaborative to-do list and task management app", category: "Side Project", link: "#", img: "/images/projects/toduo.svg" },
  { name: "Situation Monitor", desc: "Real-time situation awareness and monitoring dashboard", category: "Side Project", link: "#", img: "/images/projects/situation-monitor.svg" },
  { name: "EdTech Platform", desc: "Audio analysis and meeting transcription for education", category: "Product", link: "#", img: "/images/projects/edtech.svg" },
];

export default function Work() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] bg-neutral-950 overflow-hidden px-8">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#d4a04a"
        />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            The Work
          </h1>
          <p className="font-mono-accent text-neutral-400 mt-6 text-sm sm:text-base text-center max-w-2xl">
            &gt; the engineering practice behind the advice.
          </p>
        </div>
      </section>

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-neutral-950 to-transparent" />

      {/* Framing */}
      <section className="px-8 pt-8 pb-16 sm:px-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-accent text-amber-glow text-sm mb-8">
            &gt; why this page exists
          </p>
          <p className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-8">
            We give a build-or-buy call on every opportunity. We can only do that
            honestly because we have done both.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            Data platforms, practice tools, mobile apps, integrations between
            systems that were never meant to talk. Shipped, deployed, and
            maintained — not demoed.
          </p>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            It is also why we can cost a vendor&apos;s claim. When someone says a
            feature ships next quarter, we know what that sentence usually means.
          </p>
        </div>
      </section>

      {/* Gradient transition: beige to dark */}
      <div className="h-24 bg-gradient-to-b from-transparent to-[#0B0B0F]" />

      {/* MacBook scroll */}
      <MacbookScrollDemo />

      {/* Gradient transition: dark to beige */}
      <div className="h-24 bg-gradient-to-b from-[#0B0B0F] to-transparent" />

      {/* Hero Parallax */}
      <section className="flex flex-col items-center px-8 pb-20 sm:px-20">
        <HeroParallaxOfferings />
      </section>

      {/* Full catalog */}
      <section className="px-8 py-20 sm:px-20">
        <p className="font-mono-accent text-amber-glow text-sm mb-4 max-w-7xl mx-auto">
          &gt; the full catalog
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-7xl mx-auto tracking-tight">
          Built and Shipped
        </h2>
        <p className="text-base text-neutral-600 dark:text-neutral-400 mb-12 max-w-7xl mx-auto">
          Client products, internal tools, and things built to find out whether
          they could be.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {allProjects.map((project, i) => (
            <Link
              key={i}
              href={project.link}
              className="group relative rounded-xl border border-amber-glow/10 bg-punch-card/50 dark:bg-neutral-900/50 overflow-hidden hover:border-amber-glow/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-glow/5"
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="font-mono-accent text-[10px] text-amber-glow uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-bold text-sm mt-1 group-hover:text-amber-glow transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-center py-16 px-8">
        <p className="font-mono-accent text-neutral-400 text-sm mb-8">
          &gt; {allProjects.length} shipped and counting
        </p>
        <Link href="/offerings">
          <Button
            borderRadius="1.75rem"
            className="px-8 py-3 font-mono-accent text-sm"
          >
            Start With the Assessment
          </Button>
        </Link>
      </section>
    </div>
  );
}
