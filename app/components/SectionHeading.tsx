import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({ kicker, title, href, linkLabel }: { kicker: string; title: string; href?: string; linkLabel?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {href && <Link href={href} className="text-link">{linkLabel} <ArrowUpRight className="h-4 w-4" /></Link>}
    </div>
  );
}
