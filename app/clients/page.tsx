import type { Metadata } from "next";
import { PageIntro } from "@/app/components/PageIntro";
import { ClientsSection } from "@/app/components/ClientsSection";
import { IdeaCTA } from "@/app/components/IdeaCTA";

export const metadata: Metadata = {
  title: "Clients & Collaborations",
  description: "Client projects, IT support, and collaborations with Zenphonic BD, Softsync, BIIN, BDInterior, and Adri Knitwear.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <>
      <PageIntro kicker="CLIENTS & COLLABORATIONS" title="Good work starts with good people." description="Companies I’ve worked with across web applications, business software, and IT support. Here’s a look at each collaboration and the work behind it." />
      <ClientsSection showHeading={false} />
      <IdeaCTA />
    </>
  );
}
