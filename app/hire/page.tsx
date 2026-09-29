import { PageHero } from "@/components/pk/page-hero";
import { Eyebrow } from "@/components/pk/eyebrow";
import { Motif, type MotifName } from "@/components/pk/motif";
import { OffsetCard, type CardTone } from "@/components/pk/offset-card";
import { PkButton } from "@/components/pk/pk-button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const services: { title: string; description: string; motif: MotifName; tone: CardTone }[] = [
  {
    title: "The AI Assessment",
    description:
      "Four weeks, $2,500, fixed scope. We score six axes, rank every opportunity, and hand the partners a sequenced roadmap. Start here — everything else is scoped from it.",
    motif: "radar",
    tone: "marigold",
  },
  {
    title: "Vendor Pressure-Test",
    description:
      "A tool is already on the table and the partners can't judge the claim. We check it against your own numbers and put the answer in writing — buy it, or don't, and why.",
    motif: "scale",
    tone: "sky",
  },
  {
    title: "Running the Roadmap",
    description:
      "Architecture, data work, tool selection, rollout, pilots. The second engagement, for firms that want help executing. Scoped from the roadmap — never before it.",
    motif: "steps",
    tone: "teal",
  },
];

export default function Hire() {
  return (
    <main>
      <PageHero
        eyebrow="book a call"
        title={
          <>
            Let&apos;s Find Out Where <br /> You Stand
          </>
        }
      />

      {/* Services */}
      <section className="px-6 py-24 sm:px-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="mb-12">what we do</Eyebrow>
          <div className="grid gap-9 lg:grid-cols-3">
            {services.map((s) => (
              <OffsetCard key={s.title} tone={s.tone} bodyClassName="flex h-full flex-col gap-5 p-5">
                <Motif name={s.motif} tone="surface" className="h-40" />
                <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
                <p className="text-base leading-relaxed opacity-85">{s.description}</p>
              </OffsetCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA over the tile wall; clicks fall through to the tiles except on the button */}
      <section className="relative overflow-hidden border-t border-line px-6 py-32 sm:px-20">
        <BackgroundRippleEffect rows={10} cols={32} cellSize={56} />
        <div className="pointer-events-none relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-serif text-3xl font-bold tracking-tight md:text-5xl">
            Four weeks. Fixed fee. One answer.
          </p>
          <div className="pointer-events-auto mt-12">
            <PkButton href="mailto:info@primarykey.solutions" size="lg">
              info@primarykey.solutions
            </PkButton>
          </div>
          <p className="mt-8 max-w-xl bg-ground/80 px-2 font-mono text-sm text-muted">
            &gt; tell us the size of the firm and what a vendor last pitched you. that&apos;s
            enough to start.
          </p>
        </div>
      </section>
    </main>
  );
}
