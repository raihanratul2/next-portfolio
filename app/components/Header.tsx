"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { contactUrl, navLinks } from "@/app/constants/data";
import { useTheme } from "@/app/context/ThemeContext";
import { BrandLogo } from "@/app/components/BrandLogo";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname.replace(/\/$/, "") === href.replace(/\/$/, "");

  return (
    <header className="site-header border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl" onKeyDown={(event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="group inline-flex shrink-0 items-center gap-3 font-semibold" aria-label="Raihan Islam Ratul — home">
          <BrandLogo />
          <span className="hidden text-sm text-[var(--muted)] xl:inline">Raihan Islam Ratul</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className="nav-link">{link.label}</Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <button onClick={toggleTheme} className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-2 transition-colors hover:bg-[var(--panel-strong)]" aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a href={contactUrl} className="btn-gradient hidden sm:inline-flex">Got an idea? <ArrowUpRight className="h-4 w-4" /></a>
          <button id="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-2 lg:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile" className="absolute inset-x-0 top-full border-b border-[var(--border)] bg-[var(--background)] p-4 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} aria-current={isActive(link.href) ? "page" : undefined} className="nav-link rounded-xl px-4 py-3 hover:bg-[var(--panel)]">{link.label}</Link>
            ))}
            <a href={contactUrl} onClick={() => setIsMenuOpen(false)} className="btn-gradient mt-3 justify-center">Got an idea? <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
