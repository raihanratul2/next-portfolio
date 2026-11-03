import {
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGunicorn,
  SiLinux,
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiSqlite,
  SiUbuntu,
} from "react-icons/si";
import { Bot, CircuitBoard, Cpu, Network, Plug, Router, Server, Zap } from "lucide-react";
import { TeslaCoilIcon } from "@/app/components/icons/TeslaCoilIcon";

export const contactUrl = "https://softsync.bd/contact/";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/clients", label: "Clients" },
  { href: "/projects", label: "Projects" },
  { href: "/previous-works", label: "Previous work" },
  { href: "/experience", label: "Experience" },
];

// Add new client companies here once their names and work are confirmed.
export const clients = [
  {
    name: "Zenphonic BD",
    initials: "ZB",
    category: "E-commerce",
    relationship: "Client project",
    description: "An online store with custom analytics and an automated order flow.",
    projectIds: ["project-01"],
  },
  {
    name: "Softsync",
    initials: "SS",
    category: "Business software",
    relationship: "Project collaboration",
    description: "PC service and IT asset management, alongside an ERP system in development.",
    projectIds: ["project-02", "project-03"],
  },
  {
    name: "BIIN",
    initials: "BI",
    category: "Community & operations",
    relationship: "Internship & project work",
    description: "Web development and a campus ambassador workflow for applications, cards, and approvals.",
    projectIds: ["project-04"],
  },
  {
    name: "BDInterior",
    initials: "BD",
    category: "IT support",
    relationship: "Client",
    description: "Providing IT support for BDInterior.",
    projectIds: [],
  },
  {
    name: "Adri Knitwear",
    initials: "AK",
    category: "IT & software support",
    relationship: "Client",
    description: "Providing IT and software support for Adri Knitwear.",
    projectIds: [],
  },
];

export const tech = [
  { label: "Python", Icon: SiPython },
  { label: "Django", Icon: SiDjango },
  { label: "Django REST Framework", Icon: Network },
  { label: "Flask", Icon: SiFlask },
  { label: "FastAPI", Icon: SiFastapi },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "MySQL", Icon: SiMysql },
  { label: "SQLite", Icon: SiSqlite },
  { label: "Linux", Icon: SiLinux },
  { label: "Ubuntu", Icon: SiUbuntu },
  { label: "Nginx", Icon: SiNginx },
  { label: "Gunicorn", Icon: SiGunicorn },
  { label: "Git", Icon: SiGit },
  { label: "GitHub", Icon: SiGithub },
  { label: "Docker", Icon: SiDocker },
];

export const aboutProfile = {
  title: "Web development, deployment & networking",
  summary:
    "I’m a web developer focused on Django and backend systems, with experience in cloud infrastructure, APIs, and Linux server deployment. I build full-stack applications and explore modern tools and best practices to create scalable, high-performance solutions.",
  approach:
    "My work spans application development, server administration, and networking. I enjoy understanding how these pieces fit together, continuously learning, and improving the systems I build.",
};

export const technologyGroups = [
  {
    id: "web",
    title: "Web development",
    description: "Backend applications, APIs, and responsive interfaces.",
    skills: [
      "Django", "FastAPI", "Django REST API", "Flask", "RESTful API development",
      "React", "Next.js", "Tailwind CSS", "HTML", "CSS",
    ],
  },
  {
    id: "systems",
    title: "System administration & deployment",
    description: "Linux servers, application hosting, and cloud infrastructure.",
    skills: [
      "Ubuntu Server", "Nginx", "Gunicorn", "AWS", "GCP", "Microsoft Azure",
      "Oracle Cloud", "Windows", "cPanel",
    ],
  },
  {
    id: "networking",
    title: "Networking",
    description: "Network configuration and security fundamentals.",
    skills: ["MikroTik", "Intermediate networking", "Basic MikroTik configuration", "Networking & security"],
  },
];

export const additionalSkills = [
  {
    title: "Programming & databases",
    skills: ["Python", "JavaScript", "MySQL", "PostgreSQL"],
  },
  {
    title: "DevOps & infrastructure",
    skills: [
      "Docker", "Git & GitHub", "GitHub Actions", "Linux server deployment",
      "Domain & DNS configuration", "VM setup", "Server hardening",
    ],
  },
  {
    title: "Security & operations",
    skills: [
      "SSH", "Firewall setup", "IP whitelisting", "Reverse proxy configuration",
      "Server monitoring & optimization", "Basic load handling & concurrency",
    ],
  },
  {
    title: "Other skills",
    skills: ["Graphic design", "MS Office 365", "Meta marketing & ads management"],
  },
];

export const hobbyWorks = {
  title: "Hobby works",
  description: "Frequently worked with as a hobbyist.",
  items: [
    { label: "MikroTik", Icon: Network },
    { label: "Arduino / Microcontrollers", Icon: Cpu },
    { label: "Raspberry Pi", Icon: CircuitBoard },
    { label: "Servers", Icon: Server },
    { label: "Electronics", Icon: Plug },
    { label: "High voltages / Transformers", Icon: Zap },
    { label: "Tesla Coil", Icon: TeslaCoilIcon },
    { label: "Robotics", Icon: Bot },
    { label: "Networking gears / Routers", Icon: Router },
  ],
};

export const education = [
  {
    qualification: "Diploma in CST",
    institution: "Graphic Arts Institute",
    period: "In progress",
    detail: "7th semester",
  },
  {
    qualification: "Secondary School",
    institution: "BKTTC",
    period: "2022 — 2023",
    detail: "GPA: 4.73",
  },
];

export const certifications = [
  { title: "IT Support", level: "Level 3", issuer: "NSDA" },
  { title: "Graphic Design for Freelancing", level: "Level 3", issuer: "NSDA" },
];

export const coCurricular = {
  title: "Rovering & scouting",
  period: "2022 — Present",
  participation: "Participated in 2 National Scout Camps.",
  training: ["Disaster Management", "Leadership", "SRMship"],
  skillCourses: [
    "Community Development (CD)", "Office Management", "Cyber Security",
    "Amateur Radio", "Photography",
  ],
};

export const experience = [
  {
    title: "Web Developer (Intern)",
    org: "BIIN",
    period: "Sept 2026 — Present",
    detail:
      "Working as a web developer at BIIN.",
  },
  {
    title: "Intern",
    org: "Devine IT",
    period: "March — June 2026",
    detail:
      "Worked with Python for web development, system design, ERP development, and optimization.",
  },
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
      "Building scalable backend APIs with Python, Django, and FastAPI, alongside responsive React and Next.js interfaces. Working across database design, REST architecture, and reusable component systems.",
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
    // label: "",
    title: "Softsync PC Service",
    category: "IT asset management",
    status: "In Production",
    description:
      "A Django and PostgreSQL application for PC service and IT asset management.",
    tags: ["Django", "Postgres", "IT Asset management"],
    href: "https://pcservice.softsync.bd",
  },
  {
    id: "project-02",
    // label: "PROJECT 04",
    title: "BIIN Campus Ambassador Program",
    category: "Workflow automation",
    status: "In Production",
    description:
      "Campus ambassador applications with automated card design and one-click approval.",
    tags: ["Django", "BIIN", "AWS SES"],
    href: "https://biin.softsync.bd",
  },
  {
    id: "project-03",
    // label: "PROJECT 01",
    title: "Zenphonic BD",
    category: "E-commerce",
    status: "In Production",
    description:
      "An e-commerce website with custom analytics and a fully automated order flow.",
    tags: ["Django", "Postgres", "UI/UX"],
    href: "https://www.zenphonicbd.com",
  },
  {
    id: "project-04",
    // label: "PROJECT 03",
    title: "Softsync ERP",
    category: "Enterprise software",
    status: "In development",
    description:
      "An ERP system in development, using Django and PostgreSQL with ZKTeco attendance integration.",
    tags: ["Django", "ERP", "UI/UX", "Postgres", "ZKTeco Attendance"],
    href: "https://erp.softsync.bd",
  },
];

// The ERP remains in Projects while it is in development.
export const previousWorks = [
  {
    projectId: "project-01",
    focus: "Storefront & order flow",
    detail: "Connected the shopping experience with custom analytics and automated order handling.",
  },
  {
    projectId: "project-02",
    focus: "Service & asset management",
    detail: "Worked with Django and PostgreSQL on a dedicated application for PC service and IT assets.",
  },
  {
    projectId: "project-04",
    focus: "Applications & approvals",
    detail: "Brought form submissions, automated card design, and one-click approval into a campus ambassador workflow.",
  },
];
