import { FaGithub, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="mt-12 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-semibold">Start a conversation</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--muted)] leading-relaxed">
          Tell me what you&apos;re building, what you need help with, and any timeline you have in mind.
          Reach out on your preferred platform.
        </p>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          <a className="social" href="https://www.linkedin.com/in/raihanratul2/" target="_blank" rel="noreferrer">
            <FaLinkedin className="h-5 w-5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
          <a className="social" href="https://github.com/raihanratul2" target="_blank" rel="noreferrer">
            <FaGithub className="h-5 w-5" />
            <span>GitHub</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
          <a className="social" href="https://instagram.com/raihan.islam.ratul" target="_blank" rel="noreferrer">
            <FaInstagram className="h-5 w-5" />
            <span>Instagram</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
          <a className="social" href="https://facebook.com/raihanratul2" target="_blank" rel="noreferrer">
            <FaFacebookF className="h-5 w-5" />
            <span>Facebook</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}
