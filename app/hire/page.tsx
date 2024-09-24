import { CanvasRevealEffectCard } from "./canvas"
export default function Hire() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col items-center gap-8">
          <h1 className="text-6xl font-bold text-center">Hire us for your project</h1>
            <p>Hover over the magic box to reveal</p>
            <CanvasRevealEffectCard/>
          </main>
        </div>
    )
}