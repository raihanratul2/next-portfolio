import { hobbyWorks } from "@/app/constants/data";

export function HobbyWorksSection() {
  return (
    <section aria-labelledby="hobby-works-heading" className="section-space">
      <div className="mx-auto grid max-w-6xl gap-8 border-t border-[var(--border)] pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="section-kicker">CURIOSITY IN PRACTICE</p>
          <h2 id="hobby-works-heading" className="section-title">{hobbyWorks.title}</h2>
          <p className="mt-5 max-w-sm leading-relaxed text-[var(--muted)]">{hobbyWorks.description}</p>
        </div>
        <ul className="grid gap-x-8 sm:grid-cols-2" aria-label="Hobby interests and tools">
          {hobbyWorks.items.map(({ label, Icon }) => (
            <li key={label} className="flex min-w-0 items-center gap-4 border-b border-[var(--border)] py-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel)]">
                <Icon aria-hidden="true" className="h-5 w-5 text-[var(--glow-cyan)]" />
              </span>
              <span className="text-sm font-medium leading-relaxed">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
