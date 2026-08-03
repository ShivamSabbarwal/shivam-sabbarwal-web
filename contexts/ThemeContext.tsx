"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "shivam-sabbarwal-theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

const isTheme = (value: string | null): value is Theme => value === "light" || value === "dark";
const systemTheme = (): Theme => (window.matchMedia(DARK_QUERY).matches ? "dark" : "light");

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
  const [theme, setThemeState] = useState<Theme>("light");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    setThemeState(isTheme(stored) ? stored : systemTheme());
  }, []);

  // Keep following the system while the visitor has not chosen a theme here.
  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (isTheme(localStorage.getItem(STORAGE_KEY))) return;
      setThemeState(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

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

  /**
   * Only a deliberate choice is stored. Persisting on every render would pin the
   * system value on a first visit and stop the site following it afterwards.
   */
  const setTheme = (next: Theme) => {
    localStorage.setItem(STORAGE_KEY, next);
    setThemeState(next);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, isHydrated, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
