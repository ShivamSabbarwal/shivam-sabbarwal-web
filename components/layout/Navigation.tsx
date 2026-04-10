"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { LuSun, LuMoon, LuMenu, LuFileText } from "react-icons/lu";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.href.substring(1));

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, isHydrated, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const activeSection = useActiveSection(NAV_SECTION_IDS, "-100px 0px -60% 0px");

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const openResume = () => {
    if (isMobile) {
      window.open("/resume?print=true", "_blank");
    } else {
      window.open("/resume", "_blank");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-40 top-3 sm:top-4 left-1/2 -translate-x-1/2 w-auto max-w-fit rounded-xl sm:rounded-2xl nav-dock"
    >
      <div className="px-3 sm:px-5 py-2 sm:py-2.5">
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                variant={activeSection === item.href.substring(1) ? "default" : "ghost"}
                size="sm"
                className="text-xs font-medium px-3 py-1.5"
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Resume */}
          <Button
            variant="ghost"
            size="icon"
            onClick={openResume}
            className="w-8 h-8 sm:w-9 sm:h-9"
            aria-label={isMobile ? "Print Resume" : "Open Resume"}
          >
            <LuFileText className="w-4 h-4" />
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9"
            aria-label="Toggle theme"
          >
            {!isHydrated ? (
              <span className="w-4 h-4" />
            ) : theme === "light" ? (
              <LuMoon className="w-4 h-4" />
            ) : (
              <LuSun className="w-4 h-4" />
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden w-8 h-8 sm:w-9 sm:h-9" />
              }
            >
              <LuMenu className="w-4 h-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] z-60">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate through different sections of the portfolio
              </SheetDescription>

              <div className="mt-12 mx-2 space-y-6">
                <div className="pb-6 border-b border-border">
                  <h2 className="text-2xl font-normal tracking-tight">Navigation</h2>
                </div>

                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <Button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      variant={activeSection === item.href.substring(1) ? "default" : "ghost"}
                      className="w-full justify-start text-left text-base py-3 px-4"
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
