import Link from "next/link";
import { cn } from "@/lib/utils";

type PkButtonProps = {
  /** Internal paths render a Next link; http(s) and mailto render an anchor; otherwise a button. */
  href?: string;
  variant?: "primary" | "secondary" | "inverse";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const VARIANT = {
  primary: "bg-marigold text-carbon",
  secondary: "bg-ground text-ink",
  inverse: "bg-ink text-ground",
} as const;

const SIZE = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
} as const;

/** A flat pill with a hard offset shadow that presses flat, like a physical key. */
export function PkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: PkButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-frame font-mono font-medium tracking-tight whitespace-nowrap",
    "shadow-hard-sm transition-[translate,box-shadow] duration-150 ease-out",
    "hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_0_var(--pk-frame)]",
    "active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
    VARIANT[variant],
    SIZE[size],
    className
  );

  if (href?.startsWith("/") || href?.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
