"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
            See our products <br /> in action.
          </span>
        }
        badge={
          <a href="/">
            <Image
              src="/images/final-logo-light.svg"
              alt="Primary Key"
              width={40}
              height={40}
              className="h-10 w-10 -rotate-12 transform rounded-full invert"
            />
          </a>
        }
        src="/images/sileninja.jpg"
        showGradient={false}
      />
    </div>
  );
}
