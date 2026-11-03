import type { Metadata } from "next";
import { PageIntro } from "@/app/components/PageIntro";
import { AboutSection } from "@/app/components/AboutSection";
import { AboutDetails } from "@/app/components/AboutDetails";
import { HobbyWorksSection } from "@/app/components/HobbyWorksSection";
import { IdeaCTA } from "@/app/components/IdeaCTA";

export const metadata: Metadata = {
  title: "About",
  description: "Explore Raihan Islam Ratul’s web development, system administration, deployment, and networking skills, education, certifications, and rovering activities.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro kicker="ABOUT ME" title="Built on curiosity. Focused on useful software." description="I’m Raihan Islam Ratul, a web developer working across backend systems, cloud infrastructure, and networking, with a passion for learning and rovering." />
      <AboutSection />
      <AboutDetails />
      <HobbyWorksSection />
      <IdeaCTA />
    </>
  );
}
