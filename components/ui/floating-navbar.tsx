"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex flex-wrap max-w-[92vw] sm:max-w-fit fixed top-6 inset-x-0 mx-auto border border-amber-glow/20 rounded-3xl sm:rounded-full bg-punch-card/80 dark:bg-black/80 shadow-lg shadow-amber-glow/5 z-[5000] px-5 sm:px-8 py-3 sm:py-4 items-center justify-center gap-x-4 gap-y-2 backdrop-blur-md",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-amber-glow hover:text-amber-glow transition-colors"
            )}
          >
            <span className="font-mono-accent text-xs sm:text-sm">
              {navItem.name}
            </span>
          </Link>
        ))}
        <Link
          href="/hire"
          className="border text-xs sm:text-sm font-mono-accent relative border-amber-glow/30 dark:border-amber-glow/50 text-black dark:text-white px-4 py-2 rounded-full bg-amber-glow/10 hover:bg-amber-glow/20 transition-colors"
        >
          <span>Book a Call</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
