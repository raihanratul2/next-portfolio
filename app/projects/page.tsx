import type { Metadata } from "next";
import { PageIntro } from "@/app/components/PageIntro";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { IdeaCTA } from "@/app/components/IdeaCTA";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore e-commerce, IT asset management, ERP development, and workflow automation projects by Raihan Islam Ratul.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro kicker="PROJECTS" title="From an idea to a working product." description="A collection of web applications built with Django, PostgreSQL, and modern frontend tools, including current work in development." />
      <ProjectsSection showHeading={false} />
      <IdeaCTA />
    </>
  );
}
