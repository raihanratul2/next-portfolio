import type { Metadata } from "next";
import { PageIntro } from "@/app/components/PageIntro";
import { ExperienceSection } from "@/app/components/ExperienceSection";
import { IdeaCTA } from "@/app/components/IdeaCTA";

export const metadata: Metadata = {
  title: "Experience",
  description: "Raihan Islam Ratul’s experience in web development, Python, ERP systems, freelance work, and server administration.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro kicker="EXPERIENCE" title="Learning by building." description="My journey through internships, freelance development, frontend design, and hands-on experiments with servers and networks." />
      <ExperienceSection showHeading={false} />
      <IdeaCTA />
    </>
  );
}
