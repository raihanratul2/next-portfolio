import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aboutProfile } from "@/app/constants/data";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-12 px-4">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="aspect-square w-full rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 overflow-hidden">
            <Image
              src="/profile.JPG"
              alt="Raihan Islam Ratul"
              fill
              className="object-cover rounded-2xl"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-[rgba(34,211,238,0.15)] via-[rgba(167,139,250,0.15)] to-[rgba(244,114,182,0.12)] blur-2xl" />
        </div>

        <div>
          <p className="section-kicker">ABOUT</p>
          <h2 id="about-heading" className="section-title">{aboutProfile.title}</h2>
          <p className="mt-5 text-[color:var(--muted)] leading-relaxed">
            {aboutProfile.summary}
          </p>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">{aboutProfile.approach}</p>
          <Link href="/experience" className="text-link mt-6">Explore my experience <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
