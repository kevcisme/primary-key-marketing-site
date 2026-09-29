import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Jost, PT_Serif } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Providers } from "./providers";

/** Geometric display/body face; stands in for the deck's Century Gothic. */
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});
/** The deck's heading serif. */
const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
});
/** Data, eyebrows, and the > prompt voice. */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primary Key — The foundation beneath the AI",
  description:
    "We tell professional-services firms where they stand with AI, what's worth doing, and in what order — before they spend a dollar on tools.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101f38" },
  ],
};

const navItems = [
  { name: "Home", link: "/" },
  { name: "Assessment", link: "/offerings" },
  { name: "After", link: "/build" },
  { name: "Method", link: "/lab" },
  { name: "About", link: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variables sit on <html> so the --font-* theme tokens resolve at :root.
    <html
      lang="en"
      className={`${jost.variable} ${ptSerif.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Providers>
          <FloatingNav navItems={navItems} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
