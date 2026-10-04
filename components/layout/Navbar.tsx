"use client";

import { Menu, Network, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ModeIndicator } from "./ModeIndicator";
import { ButtonLink } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium",
      pathname === href ? "bg-subtle text-ink" : "text-muted hover:text-ink",
    );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold" aria-label={`${SITE.name}: ${SITE.fullName}`}>
          <Network className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="text-lg tracking-tight">{SITE.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block"><ModeIndicator /></span>
          <ThemeToggle />
          <ButtonLink href="/prediction" className="hidden sm:inline-flex">Run Prediction</ButtonLink>
          <button
            type="button"
            className="rounded-lg border border-line p-2 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-canvas px-4 pb-4 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={() => setIsOpen(false)} className={cn(linkClass(href), "block")} aria-current={pathname === href ? "page" : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between gap-3">
            <ModeIndicator />
            <ButtonLink href="/prediction" className="sm:hidden" >Run Prediction</ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
