"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X, Asterisk } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(16,17,20,0.72)" : "rgba(16,17,20,0.35)",
          borderColor: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
        }}
        transition={{ duration: 0.3 }}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-xl"
      >
        <Link href="#top" aria-label="Home" className="flex items-center gap-2 text-foreground">
          <Asterisk className="h-6 w-6" aria-hidden />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className={cn(buttonVariants({ size: "sm" }), "cursor-pointer rounded-full")}>
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground transition-transform duration-150 active:scale-90 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-white/10 bg-[#101114]/95 p-3 backdrop-blur-xl md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ size: "sm" }), "mt-1 cursor-pointer rounded-full")}
          >
            Let&apos;s talk
          </a>
        </motion.div>
      )}
    </header>
  );
}
