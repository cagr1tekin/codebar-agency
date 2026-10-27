"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/site/reveal";

const PROJECTS = [
  {
    name: "Editorial Platform",
    category: "Web Design",
    image: "https://picsum.photos/seed/studio-work-1/900/700",
    tags: ["Next.js", "CMS"],
  },
  {
    name: "Wellness App",
    category: "Product Design",
    image: "https://picsum.photos/seed/studio-work-2/900/700",
    tags: ["UI/UX", "Mobile"],
  },
  {
    name: "Retail Rebrand",
    category: "Brand Identity",
    image: "https://picsum.photos/seed/studio-work-3/900/700",
    tags: ["Branding", "Print"],
  },
  {
    name: "Booking System",
    category: "Web Platform",
    image: "https://picsum.photos/seed/studio-work-4/900/700",
    tags: ["Web App", "SEO"],
  },
  {
    name: "Restaurant Menu",
    category: "Product Design",
    image: "https://picsum.photos/seed/studio-work-5/900/700",
    tags: ["UI/UX", "QR"],
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Work
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.015em] md:text-5xl">
            A few recent projects
          </h2>
        </div>
        <p className="hidden text-sm text-muted-foreground sm:block">
          Drag or scroll to explore →
        </p>
      </Reveal>

      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 scrollbar-hide sm:px-[max(1.5rem,calc((100vw-72rem)/2))]">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.name}
            href="#contact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", bounce: 0, duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative block w-[78vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] sm:w-[420px]"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.category} project preview`}
                fill
                sizes="(min-width: 640px) 420px, 78vw"
                className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center justify-between p-6">
              <div>
                <h3 className="font-semibold tracking-tight">{project.name}</h3>
                <span className="text-sm text-muted-foreground">{project.category}</span>
              </div>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
