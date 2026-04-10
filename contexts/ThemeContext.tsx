"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isHydrated: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const savedTheme = localStorage.getItem("shivam-sabbarwal-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("shivam-sabbarwal-theme", theme);

    const faviconHref = theme === "dark" ? "/icon-dark.svg" : "/icon-light.svg";
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon'][data-theme-managed]");
    if (!link) {
      // Strip Next.js auto-generated icon links so our theme-aware one wins
      document
        .querySelectorAll<HTMLLinkElement>("link[rel='icon']")
        .forEach((el) => el.parentElement?.removeChild(el));
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      link.dataset.themeManaged = "true";
      document.head.appendChild(link);
    }
    link.href = faviconHref;
  }, [theme, isHydrated]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, isHydrated, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
