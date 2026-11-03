import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { contactUrl, tech } from "@/app/constants/data";

export function HeroSection() {
  return (
    <section id="home" className="px-4 pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-[0.35em] text-[color:var(--muted)]">
            HI, I&apos;M <span className="text-[color:var(--foreground)]">Raihan</span>
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            AN IT ENTHUSIAST
          </h1>
          <p className="mt-5 text-pretty text-[color:var(--muted)] leading-relaxed">
            Backend engineer with Python & Django expertise. I build scalable APIs, RESTful services, and full-stack applications with clean, maintainable code. Also craft modern, responsive frontends with React & Next.js.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {tech.map(({ label, Icon }) => (
              <div key={label} className="chip">
                <Icon className="h-4 w-4" />
                <span className="text-xs tracking-widest">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/projects" className="btn-gradient w-full justify-center sm:w-auto">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={contactUrl} className="btn-ghost w-full justify-center sm:w-auto">
              Got an idea?
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
          <Link href="/about" className="text-link mt-7 text-sm">More about me <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
