import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/constants/data";
import { SectionHeading } from "@/app/components/SectionHeading";

export function ProjectsSection({ preview = false, showHeading = true }: { preview?: boolean; showHeading?: boolean }) {
  const items = preview ? projects.slice(0, 2) : projects;
  return (
    <section id="projects" className={showHeading ? "section-space" : "mt-12 px-4"}>
      <div className="mx-auto max-w-6xl">
        {showHeading && <SectionHeading kicker="PROJECTS" title="Selected projects" href={preview ? "/projects" : undefined} linkLabel="All projects" />}
        <div className={`grid gap-5 md:grid-cols-2 ${showHeading ? "mt-10" : ""}`}>
          {items.map((project) => (
            <article key={project.id} id={project.id} className="project-card group scroll-mt-28 rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">{project.status}</span>
              </div>
              <p className="mt-8 text-xs font-medium uppercase tracking-wider text-[var(--glow-cyan)]">{project.category}</p>
              <h2 className="mt-3 text-2xl font-semibold"><a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-start gap-3 hover:text-[var(--glow-cyan)]">{project.title}<ArrowUpRight className="mt-1 h-5 w-5 shrink-0" /><span className="sr-only"> (opens in a new tab)</span></a></h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={`${project.id}-${tag}`} className="pill">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
