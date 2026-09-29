"use client";
import dynamic from "next/dynamic";

/** Canvas components: client-only and split out of the page bundle. Reserve their space in the parent. */
export const LazyDitherShader = dynamic(
  () => import("@/components/ui/dither-shader").then((m) => m.DitherShader),
  { ssr: false }
);

export const LazyCanvasText = dynamic(
  () => import("@/components/ui/canvas-text").then((m) => m.CanvasText),
  { ssr: false }
);
