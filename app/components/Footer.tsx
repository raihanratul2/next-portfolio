import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactUrl, navLinks } from "@/app/constants/data";
import { BrandLogo } from "@/app/components/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link href="/" className="inline-flex items-center gap-3 font-semibold" aria-label="Raihan Islam Ratul — home"><BrandLogo /><span>Raihan Islam Ratul</span></Link>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--muted)]">
            {navLinks.map((link) => <Link key={link.href} href={link.href} className="hover:text-[var(--foreground)]">{link.label}</Link>)}
          </nav>
          <a href={contactUrl} className="text-link">Let&apos;s talk <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <p className="text-xs tracking-wider text-[var(--muted)]">© {new Date().getFullYear()} Raihan Islam Ratul</p>
      </div>
    </footer>
  );
}
