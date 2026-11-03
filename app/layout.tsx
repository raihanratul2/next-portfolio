import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { brandAssets } from "@/app/constants/branding";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raihanratul.com.bd"),
  title: {
    default: "Raihan Islam Ratul | Python & Django Specialist",
    template: "%s | Raihan Islam Ratul",
  },
  description:
    "Explore my portfolio showcasing responsive web design, full-stack development with React, Next.js, Python, and Django. Modern UI/UX with Tailwind CSS.",
  keywords: ["Frontend Developer", "React", "Next.js", "Web Developer", "Full Stack", "JavaScript", "Python"],
  authors: [{ name: "Raihan Islam Ratul" }],
  creator: "Full-Stack Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raihanratul.com.bd",
    siteName: "Dev Portfolio",
    title: "Raihan Islam Ratul | Python & Django Specialist",
    description:
      "Explore my portfolio showcasing responsive web design, full-stack development with React, Next.js, Python, and Django.",
    images: [
      {
        url: "https://raihanratul.com.bd/profile.jpg",
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
    images: ["https://raihanratul.com.bd/profile.jpg"],
  },
  robots: "index, follow",
  icons: {
    icon: [
      { url: brandAssets.favicon("dark").png, type: "image/png", sizes: "32x32" },
      { url: brandAssets.adaptiveFavicon, type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: brandAssets.favicon("dark").apple, sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#05070a" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raihan Islam Ratul",
    url: "https://raihanratul.com.bd",
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
        <script dangerouslySetInnerHTML={{ __html: 'try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch{document.documentElement.dataset.theme="dark"}' }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <ThemeProvider>
          <div className="app-shell portfolio-bg text-[var(--foreground)]">
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Header />
            <main id="main-content" tabIndex={-1} className="app-main pb-20 sm:pb-24">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

