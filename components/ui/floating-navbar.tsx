"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PkButton } from "@/components/pk/pk-button";
import { ThemeToggle } from "@/components/pk/theme-toggle";

/** Framed pill nav that hides on scroll down and returns on scroll up. */
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
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-5 z-5000 mx-auto flex max-w-[94vw] flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-3xl border-2 border-frame bg-ground/90 px-5 py-2.5 shadow-hard-sm backdrop-blur-md sm:max-w-fit sm:rounded-full sm:px-7",
          className
        )}
      >
        {navItems.map((item) => {
          const current = item.link === "/" ? pathname === "/" : pathname.startsWith(item.link);
          return (
            <Link
              key={item.link}
              href={item.link}
              aria-current={current ? "page" : undefined}
              className={cn(
                "relative font-mono text-xs text-ink transition-colors hover:text-accent-text sm:text-sm",
                current && "text-accent-text"
              )}
            >
              {item.name}
              {current && <span aria-hidden className="absolute inset-x-0 -bottom-1 h-0.5 bg-marigold" />}
            </Link>
          );
        })}
        <PkButton href="/hire" size="sm">
          Book a Call
        </PkButton>
        <ThemeToggle />
      </motion.nav>
    </AnimatePresence>
  );
};
