import { ArrowUpRight } from "lucide-react";
import { previousWorks, projects } from "@/app/constants/data";
import { SectionHeading } from "@/app/components/SectionHeading";

export function PreviousWorksSection({ preview = false, showHeading = true }: { preview?: boolean; showHeading?: boolean }) {
  const items = preview ? previousWorks.slice(0, 2) : previousWorks;
  return (
    <section className={showHeading ? "section-space" : "mt-12 px-4"}>
      <div className="mx-auto max-w-6xl">
        {showHeading && <SectionHeading kicker="PREVIOUS WORK" title="A closer look at the work" href={preview ? "/previous-works" : undefined} linkLabel="Explore previous work" />}
        <div className={showHeading ? "mt-10" : ""}>
          {items.map((work, index) => {
            const project = projects.find((item) => item.id === work.projectId);
            if (!project) return null;
            return (
              <article key={work.projectId} className="grid gap-5 border-b border-[var(--border)] py-8 first:border-t md:grid-cols-[3rem_1fr_1.2fr] md:gap-8">
                <span className="text-sm text-[var(--glow-purple)]">0{index + 1}</span>
                <div>
                  <p className="text-xs tracking-wider text-[var(--muted)]">{work.focus}</p>
                  <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{work.detail}</p>
                  <a href={project.href} target="_blank" rel="noreferrer" className="text-link mt-5 text-sm">Explore project <ArrowUpRight className="h-4 w-4" /><span className="sr-only"> (opens in a new tab)</span></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
