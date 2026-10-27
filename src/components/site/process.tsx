"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "We map your goals, your users, and your competitors together.",
  },
  {
    step: "02",
    title: "Design",
    description: "From wireframe to high-fidelity UI, refined through iteration.",
  },
  {
    step: "03",
    title: "Build",
    description: "Clean, performant, scalable code brings the design to life.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We monitor, measure, and keep improving after launch.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Process
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.015em] md:text-5xl">
            How we work
          </h2>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <Image
              src="https://picsum.photos/seed/studio-process/900/1100"
              alt="Designer sketching a layout on paper at a studio desk"
              width={900}
              height={1100}
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2">
          {STEPS.map((item) => (
            <StaggerItem key={item.step} className="h-full">
              <div className="group h-full cursor-default bg-background p-8 transition-colors duration-300 hover:bg-white/[0.03]">
                <span className="font-heading text-sm font-medium text-muted-foreground/60">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
