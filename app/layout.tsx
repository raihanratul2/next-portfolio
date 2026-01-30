import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/app/context/ThemeContext";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Raihan Islam Ratul | Python & Django Specialist",
  description:
    "Explore my portfolio showcasing responsive web design, full-stack development with React, Next.js, Python, and Django. Modern UI/UX with Tailwind CSS.",
  keywords: ["Frontend Developer", "React", "Next.js", "Web Developer", "Full Stack", "JavaScript", "Python"],
  authors: [{ name: "Raihan Islam Ratul" }],
  creator: "Full-Stack Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raihanratul.com",
    siteName: "Dev Portfolio",
    title: "Raihan Islam Ratul | Python & Django Specialist",
    description:
      "Explore my portfolio showcasing responsive web design, full-stack development with React, Next.js, Python, and Django.",
    images: [
      {
        url: "https://raihanratul.com/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Islam Ratul | Python & Django Specialist",
    description:
      "Full-stack developer specializing in Python Django, Flask, and modern restful api technologies.",
    images: ["https://raihanratul.com/profile.jpg"],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://raihanratul.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Full-Stack Developer",
    url: "https://raihanratul.com",
    jobTitle: "Full-stack Developer",
    sameAs: [
      "https://linkedin.com/in/raihanratul2",
      "https://github.com/raihanratul2",
      "https://twitter.com/raihanratul2",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "Python",
      "Django",
      "Tailwind CSS",
      "Web Development",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

