import { FaGithub, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-24 pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">CONTACT</p>
        <h2 className="section-title">Let's build something</h2>
        <p className="mt-5 max-w-2xl text-[color:var(--muted)] leading-relaxed">
          Want a polished landing page, a UI redesign, or a full Next.js build? Reach out on
          your preferred platform.
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
        <footer className="mt-12 border-t border-[var(--border)] pt-8 text-center">
          <p className="text-xs tracking-[0.35em] text-[color:var(--muted)]">
            © {new Date().getFullYear()} — RAIHAN ISLAM RATUL
          </p>
        </footer>
      </div>
    </section>
  );
}
