import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#sandbox", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export const tech = [
    { label: "React", Icon: SiReact },
    { label: "Next.js", Icon: SiNextdotjs },
    { label: "JavaScript", Icon: SiJavascript },
    { label: "Python", Icon: SiPython },
    { label: "Django", Icon: SiDjango },
    { label: "Tailwind", Icon: SiTailwindcss },
    { label: "HTML", Icon: SiHtml5 },
    { label: "CSS", Icon: SiCss3 },
];

export const experience = [
  {
    title: "Server Administration and Network",
    org: "Practice / Experimental",
    period: "2025 — Present",
    detail:
      "Managing and configuring Linux servers (Ubuntu, CentOS) for web hosting, including setting up Apache/Nginx, firewalls, and security protocols. Implementing network configurations, monitoring server performance, and ensuring uptime. Still learning and experimenting with various server management tools and techniques.",
  },
  {
    title: "Full-stack Developer",
    org: "Freelance / Remote",
    period: "2023 — Present",
    detail:
      "Building responsive, performance-focused UI with Next.js, Tailwind, and component-driven systems.Building scalable backend APIs with Python/Django/FastAPI and modern frontend UIs with React/Next.js. Database design, REST architecture, and responsive component systems.",
  },
  {
    title: "Frontend Designer",
    org: "Design Practice",
    period: "2022 — 2023",
    detail:
      "Developed responsive web designs using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile responsiveness. Collaborated with designers to implement UI/UX improvements and optimize performance.",
  },
];

export const projects = [
  {
    id: "project-01",
    label: "PROJECT 01",
    title: "Futuristic UI Module",
    description:
      "A clean, cyber-inspired UI card layout with micro-interactions and modern typography.",
    tags: ["Next.js", "Tailwind", "UI/UX"],
    href: "#",
  },
  {
    id: "project-02",
    label: "PROJECT 02",
    title: "Portfolio Experience Hub",
    description:
      "Interactive sectioned portfolio with smooth navigation, modular components, and theme controls.",
    tags: ["React", "TypeScript", "Design System"],
    href: "#",
  },
  {
    id: "project-03",
    label: "PROJECT 03",
    title: "API Dashboard",
    description:
      "Responsive dashboard UI for monitoring APIs with clear status states and quick actions.",
    tags: ["Next.js", "Tailwind", "UI/UX"],
    href: "#",
  },
];
