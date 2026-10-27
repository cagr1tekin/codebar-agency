"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Working with the team felt effortless at every stage. The final site was fast, and exactly what we pictured.",
    name: "Elena Marsh",
    role: "Founder, D2C Brand",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    quote:
      "Their attention to detail and speed of communication went far beyond what we expected. Our identity finally feels like us.",
    name: "David Cho",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote:
      "We learned how to prioritize user feedback throughout the design process. Our conversion rate improved noticeably.",
    name: "Priya Nair",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Testimonials
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.015em] md:text-5xl">
          What clients say
        </h2>
      </Reveal>

      <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <div className="flex h-full cursor-default flex-col rounded-3xl border border-white/8 bg-white/[0.02] p-8 transition-colors duration-300 hover:bg-white/[0.05]">
              <div className="flex gap-0.5 text-foreground/70">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/85">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
