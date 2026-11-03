import { experience } from "@/app/constants/data";
import { SectionHeading } from "@/app/components/SectionHeading";

export function ExperienceSection({ preview = false, showHeading = true }: { preview?: boolean; showHeading?: boolean }) {
  const items = preview ? experience.slice(0, 2) : experience;
  return (
    <section id="experience" className={showHeading ? "section-space" : "mt-12 px-4"}>
      <div className="mx-auto max-w-6xl">
        {showHeading && <SectionHeading kicker="EXPERIENCE" title="Where I’ve been building" href={preview ? "/experience" : undefined} linkLabel="Full experience" />}
        <div className={`grid gap-4 ${showHeading ? "mt-10" : ""}`}>
          {items.map((e) => (
            <div key={e.title} className="timeline-row">
              <div className="timeline-dot" aria-hidden />
              <div className="timeline-card">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-base font-semibold tracking-wide">{e.title}</h2>
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
