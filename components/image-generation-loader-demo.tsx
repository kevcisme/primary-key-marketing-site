"use client";

import Image from "next/image";
import { ImageGenerationLoader } from "@/components/ui/image-generation-loader";

export default function ImageGenerationLoaderDemo() {
  return (
    <div className="relative aspect-3/2 w-full max-w-4xl overflow-hidden rounded-lg border border-black/10 bg-punch-card shadow-2xl shadow-black/10">
      <Image
        src="/images/belllabs.jpg"
        alt="An engineer at the control panel of an early digital computer"
        fill
        sizes="(min-width: 1024px) 896px, 100vw"
        className="object-cover grayscale"
      />
      <ImageGenerationLoader
        effect="scale-wave"
        easing="ease-in-out"
        text="Measuring"
        cellSize={3}
        gap={1}
        bandHeight={48}
        colors={["var(--color-amber-glow)", "#9C5A0E"]}
      />
    </div>
  );
}
