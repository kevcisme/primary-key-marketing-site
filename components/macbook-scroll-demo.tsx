"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Logo } from "@/components/pk/logo";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
            Shipped, deployed, <br /> and still running.
          </span>
        }
        badge={
          <a href="/" aria-label="Primary Key home">
            <Logo
              variant="mark"
              className="h-10 w-10 -rotate-12 transform rounded-full text-cream"
            />
          </a>
        }
        src="/images/sileninja.jpg"
        showGradient={false}
      />
    </div>
  );
}
