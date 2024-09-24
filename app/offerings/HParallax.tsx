"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

export function HeroParallaxOfferings() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Sileninja",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/images/sileninja.jpg",
  },
  {
    title: "menstrucycle",
    link: "https://menstrucycle.com",
    thumbnail:
      "/images/menstrucycle.png",
  },
  
];
