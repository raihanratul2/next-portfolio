export function PageIntro({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <div className="px-4 pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl border-b border-[var(--border)] pb-10">
        <p className="section-kicker">{kicker}</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-[var(--muted)]">{description}</p>
      </div>
    </div>
  );
}
