"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ReactiveGlowGrid } from "@/components/ui/reactive-glow-grid";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative">
      <ReactiveGlowGrid
        className="h-[calc(100svh)] min-h-[720px] w-full"
        colors={["#71717a", "#a1a1aa", "#d4d4d8", "#52525b"]}
        cellSize={190}
        intensity={1.15}
        ambient={0.4}
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Available for new projects
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-7xl">
              Digital experiences, built with quiet precision
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/55 md:text-lg">
              A small studio designing and building websites, products, and brand
              identities. From first sketch to live launch, we handle every step.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group cursor-pointer rounded-full bg-white px-6 text-black hover:bg-white/90",
                )}
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className={cn(
                  buttonVariants({ size: "lg", variant: "ghost" }),
                  "cursor-pointer rounded-full border border-white/15 px-6 text-white hover:bg-white/10",
                )}
              >
                <PlayCircle className="h-4 w-4" />
                See our work
              </a>
            </div>
          </Reveal>
        </div>
      </ReactiveGlowGrid>
    </section>
  );
}
