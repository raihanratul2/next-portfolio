import Image from "next/image";
import { tech } from "@/app/constants/data";

export function AboutSection() {
  return (
    <section id="about" className="px-4 pt-20 sm:pt-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="aspect-square w-full rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 overflow-hidden">
            <Image
              src="/profile.JPG"
              alt="Full-Stack Developer"
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
          <h2 className="section-title">Backend meets Frontend</h2>
          <p className="mt-5 text-[color:var(--muted)] leading-relaxed">
            I specialize in Python backend development with Django/FastAPI, designing robust APIs and database architectures. On the frontend, I build responsive, modern interfaces with React & Next.js. Full-stack solutions with clean, production-ready code.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {tech.slice(3).map(({ label, Icon }) => (
              <div key={label} className="chip">
                <Icon className="h-4 w-4" />
                <span className="text-xs tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
