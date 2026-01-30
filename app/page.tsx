"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "@/app/components/HeroSection";
import { AboutSection } from "@/app/components/AboutSection";
import { ExperienceSection } from "@/app/components/ExperienceSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { ContactSection } from "@/app/components/ContactSection";

const Header = dynamic(() => import("@/app/components/Header").then(mod => ({ default: mod.Header })), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="app-shell portfolio-bg text-[var(--foreground)]">
      <Header />
      <main className="app-main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
