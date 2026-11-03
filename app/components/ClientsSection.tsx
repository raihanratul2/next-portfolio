import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clients, projects } from "@/app/constants/data";
import { SectionHeading } from "@/app/components/SectionHeading";

export function ClientsSection({ preview = false, showHeading = true }: { preview?: boolean; showHeading?: boolean }) {
  return (
    <section className={showHeading ? "section-space" : "mt-12 px-4"}>
      <div className="mx-auto max-w-6xl">
        {showHeading && <SectionHeading kicker="CLIENTS & COLLABORATIONS" title="People I build with" href={preview ? "/clients" : undefined} linkLabel="Meet the companies" />}
        <div className={`grid gap-4 ${showHeading ? "mt-10" : ""} ${preview ? "sm:grid-cols-2 lg:grid-cols-5" : "md:grid-cols-2"}`}>
          {clients.map((client) => (
            <article key={client.name} className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm font-semibold text-[var(--glow-cyan)]">{client.initials}</span>
              <h2 className="mt-5 text-lg font-semibold">{client.name}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{client.category}</p>
              {!preview && (
                <>
                  <p className="mt-5 text-xs font-medium tracking-wider text-[var(--glow-purple)]">{client.relationship}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{client.description}</p>
                  <div className="mt-6 flex flex-col items-start gap-3">
                    {client.projectIds.map((id) => {
                      const project = projects.find((item) => item.id === id);
                      return project ? <Link key={id} href={`/projects#${id}`} className="text-link text-sm">{project.title}<ArrowUpRight className="h-4 w-4 shrink-0" /></Link> : null;
                    })}
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
