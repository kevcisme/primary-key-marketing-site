"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

export function HeroParallaxOfferings() {
  return <HeroParallax products={products} />;
}

export const products = [
  // Row 1
  {
    title: "Sileninja",
    link: "https://sileninja.com",
    thumbnail: "/images/sileninja.jpg",
  },
  {
    title: "Menstrucycle",
    link: "https://menstrucycle.com",
    thumbnail: "/images/menstrucycle.png",
  },
  {
    title: "SportsTalk",
    link: "#",
    thumbnail: "/images/projects/sportstalk.svg",
  },
  {
    title: "Ready Golf",
    link: "#",
    thumbnail: "/images/projects/ready-golf.svg",
  },
  {
    title: "Mana League",
    link: "#",
    thumbnail: "/images/projects/mana-league.svg",
  },
  // Row 2
  {
    title: "DailyBible",
    link: "#",
    thumbnail: "/images/projects/dailybible.svg",
  },
  {
    title: "BlockMusic",
    link: "#",
    thumbnail: "/images/projects/blockmusic.svg",
  },
  {
    title: "Weather Station",
    link: "#",
    thumbnail: "/images/projects/weather-app.svg",
  },
  {
    title: "Leiout",
    link: "#",
    thumbnail: "/images/projects/leiout.svg",
  },
  {
    title: "Network Diagnostics",
    link: "#",
    thumbnail: "/images/projects/network-diagnostics.svg",
  },
  // Row 3
  {
    title: "Cookie Accept",
    link: "#",
    thumbnail: "/images/projects/cookie-accept.svg",
  },
  {
    title: "Legends",
    link: "#",
    thumbnail: "/images/projects/legends.svg",
  },
  {
    title: "Toduo",
    link: "#",
    thumbnail: "/images/projects/toduo.svg",
  },
  {
    title: "SantaSpotter",
    link: "#",
    thumbnail: "/images/projects/SantaSpotter.svg",
  },
  {
    title: "Situation Monitor",
    link: "#",
    thumbnail: "/images/projects/situation-monitor.svg",
  },
];
