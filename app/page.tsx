import type { Metadata } from "next";
import { HeroSection } from "@/app/components/HeroSection";
import { ExperienceSection } from "@/app/components/ExperienceSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { PreviousWorksSection } from "@/app/components/PreviousWorksSection";
import { IdeaCTA } from "@/app/components/IdeaCTA";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection preview />
      <PreviousWorksSection preview />
      <ExperienceSection preview />
      <IdeaCTA />
    </>
  );
}
