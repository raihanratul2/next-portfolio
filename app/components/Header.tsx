"use client";

import Link from "next/link";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { navLinks } from "@/app/constants/data";
import { useTheme } from "@/app/context/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)] backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="#home"
          className="group inline-flex items-center gap-2 font-semibold tracking-[0.25em] text-sm"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--panel)]">
            <span className="bg-gradient-to-r from-[var(--glow-cyan)] via-[var(--glow-purple)] to-[var(--glow-pink)] bg-clip-text text-transparent">
              RR
            </span>
          </span>
          <span className="hidden text-[color:var(--muted)] sm:inline group-hover:text-[color:var(--foreground)] transition">
            Raihan Islam Ratul
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] hover:bg-[var(--panel-strong)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-[var(--foreground)]" />
            ) : (
              <Moon className="h-5 w-5 text-[var(--foreground)]" />
            )}
          </button>
          <a
            href="#contact"
            className="btn-gradient hidden sm:inline-flex"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Mobile nav */}
          <details className="relative md:hidden">
            <summary className="btn-ghost list-none">Menu</summary>
            <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-lg">
              <div className="p-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block rounded-xl px-3 py-2 text-sm tracking-widest text-[color:var(--muted)] hover:bg-[var(--panel-strong)] hover:text-[color:var(--foreground)] transition"
                  >
                    {l.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 btn-gradient w-full justify-center">
                  Hire Me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
