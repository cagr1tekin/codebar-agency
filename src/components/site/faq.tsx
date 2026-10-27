"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope, but a corporate website usually takes 3-5 weeks, while a brand identity plus website package takes 6-8 weeks. We share a clear timeline after the discovery call.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "We offer fixed project-based pricing — once scope is defined, there are no surprise costs. A monthly retainer is also available for ongoing collaborations.",
  },
  {
    question: "Do you only design, or do you build too?",
    answer:
      "We do both design and development in-house, so nothing gets lost between design and code, and turnaround is faster.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every project includes 30 days of free support after launch, and we offer ongoing maintenance plans at whatever scope you need.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-28 md:py-36">
      <Reveal className="text-center">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          FAQ
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.015em] md:text-5xl">
          Frequently asked questions
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <Accordion className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="border-white/10">
              <AccordionTrigger className="cursor-pointer text-left text-base font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
