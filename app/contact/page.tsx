import type { Metadata } from "next";
import { PageIntro } from "@/app/components/PageIntro";
import { ContactSection } from "@/app/components/ContactSection";

export const metadata: Metadata = {
  title: "Got an Idea?",
  description: "Talk to Raihan Islam Ratul about your next website, backend API, business application, or IT support needs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro kicker="LET’S TALK" title="Got an idea? Let’s build it." description="Whether you’re starting something new, improving an existing product, or looking for IT and software support, I’d love to hear what you have in mind." />
      <ContactSection />
    </>
  );
}
