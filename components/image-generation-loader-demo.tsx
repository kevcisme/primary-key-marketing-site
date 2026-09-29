"use client";

import { ImageGenerationLoader } from "@/components/ui/image-generation-loader";
import { LazyDitherShader } from "@/components/pk/lazy";

/** The Bell Labs photo as a navy / sky dither, with the marigold "Measuring" scan over it. */
export default function ImageGenerationLoaderDemo() {
  return (
    <div className="relative aspect-3/2 w-full max-w-4xl overflow-hidden border-2 border-frame bg-navy shadow-hard">
      <LazyDitherShader
        src="/images/belllabs.jpg"
        ditherMode="bayer"
        colorMode="duotone"
        primaryColor="#101F38"
        secondaryColor="#A3D5F2"
        gridSize={2}
        contrast={1.15}
        alt="An engineer at the control panel of an early digital computer"
        className="absolute inset-0"
      />
      <ImageGenerationLoader
        effect="scale-wave"
        easing="ease-in-out"
        text="Measuring"
        cellSize={3}
        gap={1}
        bandHeight={48}
        colors={["var(--color-marigold)", "var(--color-teal)"]}
      />
    </div>
  );
}
