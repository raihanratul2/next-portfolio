import { Award, Braces, Compass, GraduationCap, Network, Server } from "lucide-react";
import { additionalSkills, certifications, coCurricular, education, technologyGroups } from "@/app/constants/data";

const technologyIcons = { web: Braces, systems: Server, networking: Network };

export function AboutDetails() {
  return (
    <>
      <section aria-labelledby="technologies-heading" className="section-space">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">TECHNOLOGIES</p>
          <h2 id="technologies-heading" className="section-title">The tools behind the work</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {technologyGroups.map((group) => {
              const Icon = technologyIcons[group.id as keyof typeof technologyIcons];
              return (
                <article key={group.id} className="min-w-0 rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6">
                  <Icon aria-hidden="true" className="h-6 w-6 text-[var(--glow-cyan)]" />
                  <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{group.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} technologies`}>
                    {group.skills.map((skill) => <li key={skill} className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm">{skill}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="mt-8 grid gap-x-10 gap-y-8 rounded-3xl border border-[var(--border)] p-6 md:grid-cols-2 sm:p-8">
            {additionalSkills.map((group) => (
              <div key={group.title} className="min-w-0">
                <h3 className="font-semibold">{group.title}</h3>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-[var(--muted)] sm:grid-cols-2">
                  {group.skills.map((skill) => <li key={skill} className="flex items-start gap-2"><span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--glow-purple)]" /><span>{skill}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="education-heading" className="section-space">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <GraduationCap aria-hidden="true" className="mb-5 h-6 w-6 text-[var(--glow-cyan)]" />
            <p className="section-kicker">EDUCATION</p>
            <h2 id="education-heading" className="section-title">My academic journey</h2>
            <div className="mt-8 grid gap-4">
              {education.map((item) => (
                <article key={item.qualification} className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
                  <p className="text-xs font-medium tracking-wider text-[var(--glow-purple)]">{item.period}</p>
                  <h3 className="mt-3 text-lg font-semibold">{item.qualification}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.institution}</p>
                  <p className="mt-4 text-sm">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <Award aria-hidden="true" className="mb-5 h-6 w-6 text-[var(--glow-cyan)]" />
            <p className="section-kicker">CERTIFICATIONS</p>
            <h2 className="section-title">Practical skills, certified</h2>
            <div className="mt-8 grid gap-4">
              {certifications.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
                  <p className="text-xs font-medium tracking-wider text-[var(--glow-purple)]">{item.issuer} · {item.level}</p>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="activities-heading" className="section-space">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">CO-CURRICULAR ACTIVITIES</p>
          <h2 id="activities-heading" className="section-title">Beyond the technical work</h2>
          <div className="mt-10 grid gap-8 rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            <div>
              <Compass aria-hidden="true" className="h-8 w-8 text-[var(--glow-cyan)]" />
              <p className="mt-6 text-xs tracking-wider text-[var(--glow-purple)]">{coCurricular.period}</p>
              <h3 className="mt-3 text-2xl font-semibold">{coCurricular.title}</h3>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">{coCurricular.participation}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold">Completed training</h4>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                  {coCurricular.training.map((course) => <li key={course}>{course}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Completed skill courses</h4>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                  {coCurricular.skillCourses.map((course) => <li key={course}>{course}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
