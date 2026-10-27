import Link from "next/link";
import { Asterisk } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10 border-t border-white/8 pt-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <Link href="#top" aria-label="Home" className="flex items-center text-foreground">
            <Asterisk className="h-6 w-6" aria-hidden />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A small studio designing websites, products, and brand identities for
            teams that want to move fast.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
          <div>
            <p className="text-sm font-medium">Site</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="cursor-pointer transition-colors hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="cursor-pointer transition-colors hover:text-foreground">
                  Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="cursor-pointer transition-colors hover:text-foreground">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@agency.com"
                  className="cursor-pointer transition-colors hover:text-foreground"
                >
                  hello@agency.com
                </a>
              </li>
              <li>Remote-first</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
