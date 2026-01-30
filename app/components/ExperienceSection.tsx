import { experience } from "@/app/constants/data";

export function ExperienceSection() {
  return (
    <section id="sandbox" className="px-4 pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">EXPERIENCE & FORMATION</p>
        <h2 className="section-title">Timeline</h2>
        <div className="mt-10 grid gap-4">
          {experience.map((e) => (
            <div key={e.title} className="timeline-row">
              <div className="timeline-dot" aria-hidden />
              <div className="timeline-card">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-base font-semibold tracking-wide">{e.title}</p>
                    <p className="text-sm tracking-widest text-[color:var(--muted)]">{e.org}</p>
                  </div>
                  <p className="text-xs tracking-[0.35em] text-[color:var(--muted)]">
                    {e.period}
                  </p>
                </div>
                <p className="mt-4 text-[color:var(--muted)] leading-relaxed">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
