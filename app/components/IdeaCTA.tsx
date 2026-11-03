import { ArrowUpRight } from "lucide-react";
import { contactUrl } from "@/app/constants/data";

export function IdeaCTA() {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[var(--border)] bg-[var(--panel)] px-6 py-12 sm:px-12 sm:py-16">
        <p className="section-kicker">LET&apos;S MAKE IT HAPPEN</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Got an idea?</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-[var(--muted)]">A new product, a better workflow, or a website you&apos;ve been thinking about. Let&apos;s turn it into something people can use.</p>
        <a href={contactUrl} className="btn-gradient mt-8">Let&apos;s talk <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </section>
  );
}
