"use client";

import { Code2, Palette, Rocket, Search } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";

const SERVICES = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Logo, typography, and visual language turned into a consistent identity that tells your story clearly.",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Fast, accessible, conversion-focused websites — designed and coded end to end on modern foundations.",
  },
  {
    icon: Search,
    title: "Product Design (UI/UX)",
    description:
      "From user research to prototype: intuitive, measurable digital product experiences.",
  },
  {
    icon: Rocket,
    title: "Growth & Optimization",
    description:
      "SEO, performance, and A/B testing to make your site not just beautiful, but effective.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Services
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.015em] md:text-5xl">
          Everything you need, from idea to launch
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          A small, focused team — making design and engineering decisions together
          at every stage of your project.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <StaggerItem key={service.title}>
            <div className="group h-full cursor-default rounded-3xl border border-white/8 bg-white/[0.02] p-8 transition-colors duration-300 hover:bg-white/[0.05]">
              <service.icon
                className="h-6 w-6 text-foreground/80 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
