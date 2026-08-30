import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Primary Key — The foundation beneath the AI",
  description:
    "We tell professional-services firms where they stand with AI, what's worth doing, and in what order — before they spend a dollar on tools.",
};

const navItems = [
  { name: "Home", link: "/" },
  { name: "Assessment", link: "/offerings" },
  { name: "Method", link: "/lab" },
  { name: "About", link: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
