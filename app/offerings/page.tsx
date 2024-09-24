import { HeroParallaxOfferings } from "./HParallax"

export default function Offerings() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col items-center gap-8">
          <h1 className="text-6xl font-bold text-center">Offerings</h1>
            <HeroParallaxOfferings/>
          </main>
        </div>
    )
}