import Image from "next/image";
import Link from "next/link";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import { PageHero } from "@/components/pk/page-hero";
import { Eyebrow } from "@/components/pk/eyebrow";
import { Night } from "@/components/pk/night";
import { PkButton } from "@/components/pk/pk-button";
import { CtaBand } from "@/components/pk/cta-band";
import { HeroParallaxOfferings } from "./HParallax";

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

/**
 * One duotone for 36 thumbnails in 36 styles: grayscale, then mapped from navy
 * (shadows) to sky (highlights). Cleared on hover.
 */
function DuotoneFilter() {
  return (
    <svg aria-hidden className="absolute size-0">
      <filter id="pk-duotone" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0.063 0.639" />
          <feFuncG type="table" tableValues="0.122 0.835" />
          <feFuncB type="table" tableValues="0.22 0.949" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}

export default function Work() {
  return (
    <main>
      <DuotoneFilter />

      <PageHero
        eyebrow="the work"
        title="The Work"
        prompt="the engineering practice behind the advice."
      />

      {/* Framing */}
      <section className="px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="mb-8">why this page exists</Eyebrow>
          <p className="mb-8 font-serif text-2xl font-bold leading-snug tracking-tight sm:text-3xl/snug">
            We give a build-or-buy call on every opportunity. We can only do that honestly because
            we have done both.
          </p>
          <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg/8">
            Data platforms, practice tools, mobile apps, integrations between systems that were
            never meant to talk. Shipped, deployed, and maintained — not demoed.
          </p>
          <p className="text-base leading-relaxed text-muted sm:text-lg/8">
            It is also why we can cost a vendor&apos;s claim. When someone says a feature ships
            next quarter, we know what that sentence usually means.
          </p>
        </div>
      </section>

      <Night>
        <MacbookScrollDemo />
      </Night>

      <section className="flex flex-col items-center px-6 pb-20 sm:px-20">
        <HeroParallaxOfferings />
      </section>

      {/* Full catalog */}
      <section className="px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow className="mb-4">the full catalog</Eyebrow>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight md:text-5xl">
            Built and Shipped
          </h2>
          <p className="mb-12 text-base text-muted">
            Client products, internal tools, and things built to find out whether they could be.
          </p>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allProjects.map((project) => (
              <Link
                key={project.name}
                href={project.link}
                className="group relative block border-2 border-frame bg-surface shadow-hard-sm transition-[translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-hard"
              >
                <div className="relative aspect-3/2 overflow-hidden border-b-2 border-frame">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-[scale] duration-300 [filter:url(#pk-duotone)] group-hover:scale-105 group-hover:[filter:none]"
                  />
                </div>
                <div className="p-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent-text">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold">{project.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted">{project.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`${allProjects.length} shipped and counting.`}
        actions={
          <PkButton href="/offerings" size="lg">
            Start With the Assessment
          </PkButton>
        }
      />
    </main>
  );
}
