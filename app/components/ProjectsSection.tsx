import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/constants/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">PROJECTS</p>
        <h2 className="section-title">Selected work</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[var(--glow-cyan)] hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm tracking-widest text-[color:var(--muted)]">{project.label}</p>
                <ArrowUpRight className="h-4 w-4 text-[color:var(--muted)] transition group-hover:text-[color:var(--foreground)]" />
              </div>
              <p className="mt-3 text-lg font-semibold">{project.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={`${project.id}-${tag}`} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
