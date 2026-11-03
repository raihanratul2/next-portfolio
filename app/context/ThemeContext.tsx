"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { brandAssets, type BrandTheme } from "@/app/constants/branding";

type Theme = BrandTheme;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icons = brandAssets.favicon(theme);
  document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]').forEach((link) => {
    const href = link.type === "image/svg+xml" ? icons.svg : link.type === "image/png" ? icons.png : icons.ico;
    if (link.getAttribute("href") !== href) link.setAttribute("href", href);
  });
  document.querySelectorAll<HTMLLinkElement>('link[rel="apple-touch-icon"]').forEach((link) => {
    if (link.getAttribute("href") !== icons.apple) link.setAttribute("href", icons.apple);
  });
  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
    meta.content = theme === "light" ? "#ffffff" : "#05070a";
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let initial: Theme = "dark";
    try {
      if (localStorage.getItem("theme") === "light") initial = "light";
    } catch {
      // Use the default theme when browser storage is unavailable.
    }
    setTheme(initial);
    applyTheme(initial);

    // Next.js can insert icon metadata after hydration or page navigation.
    const observer = new MutationObserver(() => {
      applyTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    });
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href", "rel", "type"],
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      // Theme switching still works without persistent browser storage.
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
