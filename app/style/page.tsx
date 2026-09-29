import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { contrast, grade } from "@/lib/contrast";
import { Logo } from "@/components/pk/logo";
import { DiagonalField } from "@/components/pk/diagonal-field";
import { Frame } from "@/components/pk/frame";
import { OffsetCard, type CardTone } from "@/components/pk/offset-card";
import { PkButton } from "@/components/pk/pk-button";
import { Eyebrow } from "@/components/pk/eyebrow";
import { SkewCard } from "@/components/pk/skew-card";
import { Staircase } from "@/components/pk/staircase";
import { Motif, MOTIF_NAMES } from "@/components/pk/motif";
import { Night } from "@/components/pk/night";
import { SpineNav } from "@/components/pk/spine-nav";
import { StepPillsDemo } from "./step-pills-demo";
import { MotionDemo } from "./motion-demo";

export const metadata: Metadata = {
  title: "Style tile — Primary Key",
  robots: { index: false, follow: false },
};

/* Display candidates, loaded only on this route. */
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const adventor = localFont({
  src: [
    { path: "./fonts/texgyreadventor-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/texgyreadventor-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-adventor",
  display: "swap",
});

const SECTIONS = [
  { id: "palette", label: "palette" },
  { id: "themes", label: "themes" },
  { id: "contrast", label: "contrast" },
  { id: "type", label: "type" },
  { id: "primitives", label: "primitives" },
  { id: "motifs", label: "motifs" },
  { id: "motion", label: "motion" },
];

const PALETTE = [
  { name: "Marigold", hex: "#FFC93D", role: "Primary fill: hero field, cards, primary buttons. Never text on light." },
  { name: "Marigold deep", hex: "#FFC002", role: "The deck's table yellow. Hover and pressed fills." },
  { name: "Sky", hex: "#A3D5F2", role: "Secondary field, agenda pills, the diagonal." },
  { name: "Sky pale", hex: "#D7EFFA", role: "Tints behind motifs and panels." },
  { name: "Teal", hex: "#42A8C5", role: "The rail, nodes, data marks. A fill only on light." },
  { name: "Teal deep", hex: "#0393B3", role: "Large type on light only." },
  { name: "Cobalt", hex: "#0869A0", role: "Links and eyebrows on light." },
  { name: "Cornflower", hex: "#599CD3", role: "Secondary blocks; cobalt's stand-in on navy." },
  { name: "Navy", hex: "#101F38", role: "Night bands and the navy theme's ground." },
  { name: "Navy lift", hex: "#2B3A4F", role: "Surfaces in the navy theme." },
  { name: "Slate", hex: "#44546A", role: "Muted text on light." },
  { name: "Fog", hex: "#9CA4AD", role: "Muted text on navy." },
  { name: "Cream", hex: "#F2EADC", role: "Surfaces on light; ink on navy." },
  { name: "Mist", hex: "#F5FAFC", role: "Alternate section ground." },
  { name: "Flag", hex: "#E26A42", role: "Risk and binding-constraint callouts only." },
  { name: "Carbon", hex: "#0E131A", role: "Ink and outline frames on light." },
];

const PAIRS = [
  { fg: "#0E131A", bg: "#FFFFFF", label: "Carbon on white", use: "Body text, light" },
  { fg: "#44546A", bg: "#FFFFFF", label: "Slate on white", use: "Muted text, light" },
  { fg: "#0869A0", bg: "#FFFFFF", label: "Cobalt on white", use: "Eyebrows and links, light" },
  { fg: "#0E131A", bg: "#FFC93D", label: "Carbon on marigold", use: "Cards, buttons, cover field" },
  { fg: "#0E131A", bg: "#A3D5F2", label: "Carbon on sky", use: "Pills, cover field" },
  { fg: "#0E131A", bg: "#42A8C5", label: "Carbon on teal", use: "Rail nodes, teal cards" },
  { fg: "#F2EADC", bg: "#101F38", label: "Cream on navy", use: "Body text, navy" },
  { fg: "#9CA4AD", bg: "#101F38", label: "Fog on navy", use: "Muted text, navy" },
  { fg: "#FFC93D", bg: "#101F38", label: "Marigold on navy", use: "Eyebrows and links, navy" },
  { fg: "#F2EADC", bg: "#0869A0", label: "Cream on cobalt", use: "Navy-theme cover field" },
  { fg: "#FFFFFF", bg: "#A3D5F2", label: "White on sky", use: "The deck's agenda pills — not used", deck: true },
  { fg: "#FFFFFF", bg: "#42A8C5", label: "White on teal", use: "The deck's 360 disc — not used", deck: true },
  { fg: "#42A8C5", bg: "#FFFFFF", label: "Teal on white", use: "Never text", deck: true },
  { fg: "#FFC93D", bg: "#FFFFFF", label: "Marigold on white", use: "Never text", deck: true },
];

const CANDIDATES = [
  {
    name: "Jost",
    className: "font-sans",
    note: "In use. Futura lineage, variable 100–900, so the cover's light display weight is real.",
  },
  {
    name: "Outfit",
    className: "font-(family-name:--font-outfit)",
    note: "Rounder, more contemporary; reads more \u201Ctech\u201D and less 1950s poster.",
  },
  {
    name: "TeX Gyre Adventor",
    className: "font-(family-name:--font-adventor)",
    note: "Closest glyph match to Century Gothic (Avant Garde lineage). Only 400 and 700.",
  },
];

const PHASES = [
  { label: "0", title: "Unaware", body: "No view on AI yet.", tone: "cream" },
  { label: "1", title: "Experimenting", body: "Individual use, no rules.", tone: "sky" },
  { label: "2", title: "Standardizing", body: "Policy and approved tools.", tone: "teal" },
  { label: "3", title: "Integrating", body: "A documented step in the work.", tone: "marigold" },
  { label: "4", title: "Transforming", body: "It changes what the firm sells.", tone: "cobalt" },
] satisfies { label: string; title: string; body: string; tone: CardTone }[];

const TONES: CardTone[] = ["marigold", "sky", "teal", "cream", "cobalt", "navy", "surface"];

/** Renders its children twice, in a light scope and a navy scope. */
function ThemePair({ children, stack }: { children: React.ReactNode; stack?: boolean }) {
  return (
    <div className={cn("grid gap-px border border-line bg-line", !stack && "lg:grid-cols-2")}>
      {(["light", "dark"] as const).map((theme) => (
        <div key={theme} data-theme={theme} className="min-w-0 bg-ground p-6 text-ink sm:p-10">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {theme === "light" ? "Light" : "Navy"}
          </p>
          {children}
        </div>
      ))}
    </div>
  );
}

function SectionHead({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div id={id} className="mx-auto mb-10 max-w-6xl scroll-mt-28">
      <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
      <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {children && <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{children}</p>}
    </div>
  );
}

export default function StylePage() {
  return (
    <main className={cn(outfit.variable, adventor.variable, "pb-32")}>
      <SpineNav sections={SECTIONS} />

      <DiagonalField className="px-8 pb-24 pt-40 sm:px-20">
        <div className="mx-auto max-w-6xl">
          <Frame tone="field" draw className="max-w-3xl px-8 pb-14 pt-10 sm:px-12">
            <h1 className="text-5xl font-light tracking-tight sm:text-7xl">Style tile</h1>
            <p className="mt-5 max-w-xl text-lg">
              The AI Assessment deck, turned into a web system: its palette, its motifs, and the
              motion layer on top.
            </p>
            <div className="absolute -bottom-5 left-8 bg-ground px-4 py-2 sm:left-12">
              <Logo className="w-44" tagline={false} />
            </div>
          </Frame>
          <p className="mt-12 font-mono text-sm">&gt; noindex. not linked from the nav.</p>
        </div>
      </DiagonalField>

      <section className="px-8 pt-24 sm:px-20">
        <SectionHead id="palette" eyebrow="palette" title="Sampled from the deck, not approximated">
          Every hex below was read off the rendered PDF. The deck&apos;s colors lead; its pairings
          don&apos;t — text on sky, teal, or marigold is always carbon.
        </SectionHead>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PALETTE.map((c) => (
            <div key={c.name} className="border border-line">
              <div className="h-20 border-b border-line" style={{ backgroundColor: c.hex }} />
              <div className="p-3">
                <p className="text-sm font-semibold">{c.name}</p>
                <p className="font-mono text-xs text-muted">{c.hex}</p>
                <p className="mt-2 text-xs leading-snug text-muted">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 pt-24 sm:px-20">
        <SectionHead id="themes" eyebrow="themes" title="One set of tokens, two themes">
          Components use semantic tokens (ground, surface, ink, muted, frame, accent). The navy theme
          flips them on <code className="font-mono text-sm">[data-theme]</code>, and any subtree can
          flip on its own.
        </SectionHead>
        <div className="mx-auto max-w-6xl">
          <ThemePair>
            <Eyebrow className="mb-3">the problem</Eyebrow>
            <h3 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              The reason is never the tool.
            </h3>
            <p className="mt-4 leading-relaxed text-muted">
              The firm&apos;s data is spread across five systems and a shared drive. Nobody owns the
              rules.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PkButton href="/offerings">The Assessment</PkButton>
              <PkButton href="/hire" variant="secondary">
                Book a Call
              </PkButton>
            </div>
          </ThemePair>
        </div>
      </section>

      <section className="px-8 pt-24 sm:px-20">
        <SectionHead id="contrast" eyebrow="contrast" title="Pairings, measured">
          WCAG 2 ratios computed from the hex values. The last four are pairings the deck uses (or
          could tempt us into) that the site never does.
        </SectionHead>
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PAIRS.map((p) => {
            const ratio = contrast(p.fg, p.bg);
            const level = grade(ratio);
            return (
              <div key={p.label} className="flex items-stretch border border-line">
                <div
                  className="grid w-24 shrink-0 place-items-center text-2xl font-semibold"
                  style={{ color: p.fg, backgroundColor: p.bg }}
                >
                  Aa
                </div>
                <div className="min-w-0 p-3">
                  <p className="text-sm font-semibold">{p.label}</p>
                  <p className="text-xs text-muted">{p.use}</p>
                  <p className="mt-2 font-mono text-xs">
                    {ratio.toFixed(2)}:1{" "}
                    <span
                      className={cn(
                        "ml-1 px-1.5 py-0.5",
                        level === "fail" || level === "large only"
                          ? "bg-flag text-carbon"
                          : "bg-teal text-carbon"
                      )}
                    >
                      {level}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-8 pt-24 sm:px-20">
        <SectionHead id="type" eyebrow="type" title="A geometric face, the deck's serif, and a mono">
          The deck sets its covers in Century Gothic and its content titles in PT Serif. Three free
          stand-ins for Century Gothic, at the cover&apos;s light display weight:
        </SectionHead>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {CANDIDATES.map((c) => (
            <OffsetCard key={c.name} tone="surface" interactive={false} bodyClassName="p-6 sm:p-8">
              <p className="font-mono text-xs text-muted">{c.name}</p>
              <p className={cn("mt-4 text-4xl font-light leading-tight tracking-tight", c.className)}>
                Your AI problem is a data problem.
              </p>
              <p className={cn("mt-4 text-xl font-bold", c.className)}>The foundation beneath the AI</p>
              <p className={cn("mt-3 text-base leading-relaxed", c.className)}>
                A firm can buy tools all year and end up where it started. That is the failure we are
                hired to prevent.
              </p>
              <p className="mt-6 border-t border-line pt-4 text-sm text-muted">{c.note}</p>
            </OffsetCard>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="border border-line p-6 sm:p-8">
            <p className="font-mono text-xs text-muted">PT Serif · section titles, pull quotes</p>
            <p className="mt-4 font-serif text-3xl font-bold tracking-tight">Building our AI foundation</p>
            <p className="mt-3 font-serif text-xl italic text-muted">
              &ldquo;Our vendor says their tool already does this.&rdquo;
            </p>
          </div>
          <div className="border border-line p-6 sm:p-8">
            <p className="font-mono text-xs text-muted">IBM Plex Mono · eyebrows, numbers, the prompt voice</p>
            <p className="mt-4 font-mono text-sm text-accent-text">&gt; data first. rules second. tools last.</p>
            <p className="mt-4 font-mono text-3xl font-semibold">$2,500</p>
            <p className="mt-2 font-mono text-sm text-muted">[data, tooling, workflow, people, governance, leadership]</p>
          </div>
        </div>
      </section>

      <section className="px-8 pt-24 sm:px-20">
        <SectionHead id="primitives" eyebrow="primitives" title="The deck's motifs as components">
          Each block renders once in a light scope and once in a navy scope.
        </SectionHead>
        <div className="mx-auto max-w-6xl space-y-10">
          <ThemePair>
            <p className="mb-4 font-mono text-xs text-muted">DiagonalField · Frame</p>
            <DiagonalField className="px-8 py-10">
              <Frame tone="field" draw className="px-6 py-6">
                <p className="text-3xl font-light tracking-tight">Kaiser &amp; Bonds</p>
              </Frame>
            </DiagonalField>
            <DiagonalField variant="wedge" className="mt-4 border border-line px-8 py-10">
              <p className="text-2xl font-light tracking-tight">Appendix</p>
            </DiagonalField>
          </ThemePair>

          <ThemePair>
            <p className="mb-6 font-mono text-xs text-muted">OffsetCard · hover snaps the frame into register</p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {TONES.map((tone) => (
                <OffsetCard key={tone} tone={tone} bodyClassName="p-4">
                  <p className="font-mono text-xs opacity-75">{tone}</p>
                  <p className="mt-6 font-semibold">A build-or-buy call</p>
                </OffsetCard>
              ))}
            </div>
          </ThemePair>

          <ThemePair>
            <p className="mb-6 font-mono text-xs text-muted">PkButton · Eyebrow</p>
            <div className="flex flex-wrap items-center gap-4">
              <PkButton size="lg">Book a Call</PkButton>
              <PkButton variant="secondary">How We Score</PkButton>
              <PkButton variant="inverse" size="sm">
                info@primarykey.solutions
              </PkButton>
            </div>
            <div className="mt-8 space-y-3">
              <Eyebrow>what the firm walks away with</Eyebrow>
              <Eyebrow index={2}>interviews and inspection</Eyebrow>
            </div>
          </ThemePair>

          <ThemePair>
            <p className="mb-6 font-mono text-xs text-muted">StepPills · click to select</p>
            <StepPillsDemo />
          </ThemePair>

          <ThemePair stack>
            <p className="mb-6 font-mono text-xs text-muted">SkewCard</p>
            <div className="grid gap-6 px-4 md:grid-cols-3 md:px-8">
              <SkewCard tone="navy" title="I like">
                <p className="text-sm italic leading-relaxed">What resonated with you?</p>
              </SkewCard>
              <SkewCard tone="teal" title="I wish">
                <p className="text-sm italic leading-relaxed">What would you change?</p>
              </SkewCard>
              <SkewCard tone="marigold" title="I wonder">
                <p className="text-sm italic leading-relaxed">What questions do you have?</p>
              </SkewCard>
            </div>
          </ThemePair>

          <ThemePair stack>
            <p className="mb-6 font-mono text-xs text-muted">Staircase</p>
            <Staircase steps={PHASES} yLabel="value" xLabel="maturity" />
          </ThemePair>
        </div>
      </section>

      <Night className="mt-24 px-8 py-20 sm:px-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="mb-4">night</Eyebrow>
          <p className="max-w-3xl font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            A navy band scopes the dark tokens, so everything inside re-themes — even in light mode.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <OffsetCard tone="marigold">
              <p className="font-semibold">Marigold card</p>
            </OffsetCard>
            <OffsetCard tone="surface">
              <p className="font-semibold">Surface card</p>
            </OffsetCard>
            <div className="flex items-center">
              <PkButton>Book a Call</PkButton>
            </div>
          </div>
        </div>
      </Night>

      <section className="px-8 pt-24 sm:px-20">
        <SectionHead id="motifs" eyebrow="motifs" title="Header art, drawn from the palette">
          Flat geometric compositions for card headers and sticky panels. Each one is about the card
          it sits on.
        </SectionHead>
        <div className="mx-auto max-w-6xl">
          <ThemePair>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {MOTIF_NAMES.map((name) => (
                <figure key={name}>
                  <Motif name={name} className="h-24" />
                  <figcaption className="mt-1.5 font-mono text-[11px] text-muted">{name}</figcaption>
                </figure>
              ))}
            </div>
          </ThemePair>
        </div>
      </section>

      <section className="px-8 pt-24 sm:px-20">
        <SectionHead id="motion" eyebrow="motion" title="The tech layer, recolored">
          Aceternity components pulled through the registry and moved onto the palette. One
          signature moment per page; everything else stays flat.
        </SectionHead>
        <div className="mx-auto max-w-6xl">
          <ThemePair stack>
            <MotionDemo />
          </ThemePair>
        </div>
      </section>
    </main>
  );
}
