import type { Metadata } from "next";
import { PageIntro } from "@/app/components/PageIntro";
import { PreviousWorksSection } from "@/app/components/PreviousWorksSection";
import { IdeaCTA } from "@/app/components/IdeaCTA";

export const metadata: Metadata = {
  title: "Previous Work",
  description: "A closer look at Raihan Islam Ratul’s work on online stores, service management, and campus ambassador workflows.",
  alternates: { canonical: "/previous-works" },
};

export default function PreviousWorksPage() {
  return (
    <>
      <PageIntro kicker="PREVIOUS WORK" title="The work behind the projects." description="A closer look at the workflows and features I’ve worked on, from automated order handling to service management and application approvals." />
      <PreviousWorksSection showHeading={false} />
      <IdeaCTA />
    </>
  );
}
