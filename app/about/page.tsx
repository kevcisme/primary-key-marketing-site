"use client";
import Image from "next/image";      
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Primary Key is a product and services company.
    We create high quality applications that stand the test of time. 
    We are always pushing the limits of what is possible. We create using the bleeding edge
    in technology. `;

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col items-center gap-8">
                <h1 className="text-6xl font-bold text-center">About Us</h1>
                <Image
                    src="/images/belllabs.jpg"
                    alt="Bio pic"
                    className="dark:invert"
                    width={800}
                    height={600}
                    priority
                />
                <div className="max-w-3xl">
                  <TextGenerateEffect duration={2} filter={false} words={words} />
                </div>
            </main>
        </div>
    );
}
