"use client";

import { ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ReactiveGlowGrid } from "@/components/ui/reactive-glow-grid";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function Cta() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-8 md:py-16">
      <ReactiveGlowGrid
        className="overflow-hidden rounded-[2.5rem] border border-white/10"
        colors={["#71717a", "#a1a1aa", "#d4d4d8"]}
        cellSize={140}
        intensity={1.05}
        ambient={0.35}
      >
        <div className="mx-auto flex min-h-[420px] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.015em] text-white md:text-5xl">
              Ready to talk about your project?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-md text-balance leading-relaxed text-white/55">
              Book a free 30-minute discovery call and we&apos;ll map out a plan
              tailored to what you need.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@agency.com"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group cursor-pointer rounded-full bg-white px-6 text-black hover:bg-white/90",
                )}
              >
                Book a call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@agency.com"
                className={cn(
                  buttonVariants({ size: "lg", variant: "ghost" }),
                  "cursor-pointer rounded-full border border-white/15 text-white hover:bg-white/10",
                )}
              >
                <Mail className="h-4 w-4" />
                hello@agency.com
              </a>
            </div>
          </Reveal>
        </div>
      </ReactiveGlowGrid>
    </section>
  );
}
