"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

/**
 * Light / navy rocker switch. Position and icon come from the `dark:` variant,
 * which next-themes sets before first paint, so it never renders in the wrong
 * state; JS only handles the click and `aria-checked`.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark theme"
      title={isDark ? "Switch to light" : "Switch to navy"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border-2 border-frame bg-sky dark:bg-cobalt",
        className
      )}
    >
      <span className="absolute left-0.5 grid size-5 place-items-center rounded-full bg-marigold text-carbon transition-transform duration-200 dark:translate-x-5 dark:bg-cream">
        <IconSun className="size-3.5 dark:hidden" stroke={2.25} />
        <IconMoonStars className="hidden size-3.5 dark:block" stroke={2} />
      </span>
    </button>
  );
}
