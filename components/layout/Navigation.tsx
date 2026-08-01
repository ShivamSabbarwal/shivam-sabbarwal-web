"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { LuArrowRight, LuFileText, LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS, PERSONAL } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.href.substring(1));

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, isHydrated, toggleTheme } = useTheme();
  const activeSection = useActiveSection(NAV_SECTION_IDS, "-100px 0px -60% 0px");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  const handleNavClick = (href: string) => {
    const fromSheet = isMobileMenuOpen;
    setIsMobileMenuOpen(false);
    if (!href.startsWith("#")) return;
    const target = document.getElementById(href.substring(1));
    if (!target) return;

    // The sheet locks body scroll while open, so a jump fired from inside it
    // has to wait for the close animation or it gets swallowed.
    if (fromSheet) {
      setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 260);
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* Deliberately no `?print=true` on mobile: firing the print dialog on arrival
     leaves no chance to pick which resume version to print. */
  const openResume = () => {
    window.open("/resume", "_blank");
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="nav-dock fixed top-3 left-1/2 z-40 w-auto max-w-[calc(100%-1.5rem)] -translate-x-1/2 overflow-hidden rounded-xl sm:top-4"
    >
      <div className="px-2 py-1.5 sm:px-2.5 sm:py-2">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map((item, index) => {
              const active = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  aria-current={active ? "true" : undefined}
                  className="relative flex min-h-11 items-center rounded-md px-3 py-2 transition-colors xl:min-h-9"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-md bg-primary"
                    />
                  )}
                  <span
                    className={`relative font-mono text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                      active
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="mr-1.5 opacity-50">{`0${index + 1}`}</span>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mx-1 hidden h-6 w-px bg-border md:block" />

          <Button
            variant="ghost"
            size="icon"
            onClick={openResume}
            className="h-11 w-11 xl:h-9 xl:w-9"
            aria-label="Open resume"
          >
            <LuFileText className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-11 w-11 xl:h-9 xl:w-9"
            aria-label="Toggle theme"
          >
            {!isHydrated ? (
              <span className="h-4 w-4" />
            ) : theme === "light" ? (
              <LuMoon className="h-4 w-4" />
            ) : (
              <LuSun className="h-4 w-4" />
            )}
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="h-11 w-11 md:hidden" />}
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
            </SheetTrigger>
            <SheetContent
              side="bottom"
              showCloseButton={false}
              className="mobile-menu-mesh slab inset-0 z-60 h-[100dvh] max-h-[100dvh] w-full max-w-none border-0 p-0 data-ending-style:translate-y-4 data-starting-style:translate-y-4"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Explore Shivam&apos;s experience, capabilities, projects, and contact details
              </SheetDescription>

              <div className="flex h-full flex-col px-5 pt-5 pb-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="hud-label mb-2 text-primary">Jump to</p>
                    <h2 className="font-heading text-[2rem] leading-[0.95] tracking-tight">
                      Explore the <span className="text-primary italic">work</span>
                    </h2>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 shrink-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <LuX className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex flex-1 flex-col justify-center gap-1.5 py-6">
                  <AnimatePresence>
                    {isMobileMenuOpen &&
                      NAV_ITEMS.map((item, index) => {
                        const active = activeSection === item.href.substring(1);
                        return (
                          <motion.button
                            key={item.name}
                            type="button"
                            initial={{ opacity: 0, x: -28 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 12 }}
                            transition={{
                              duration: 0.35,
                              delay: 0.04 + index * 0.055,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            onClick={() => handleNavClick(item.href)}
                            className={`group flex min-h-[60px] items-center gap-4 rounded-lg border-[1.5px] px-4 py-3 text-left transition-colors ${
                              active
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-bone/15 bg-bone/[0.04] active:border-primary/60"
                            }`}
                          >
                            <span
                              className={`font-mono text-xs font-bold tracking-[0.2em] ${
                                active ? "text-primary-foreground/60" : "text-primary"
                              }`}
                            >
                              {`0${index + 1}`}
                            </span>
                            <span className="font-heading flex-1 text-[1.65rem] leading-none tracking-tight">
                              {item.name}
                            </span>
                            <LuArrowRight
                              className={`h-5 w-5 shrink-0 transition-transform group-active:translate-x-1 ${
                                active ? "opacity-70" : "opacity-40"
                              }`}
                            />
                          </motion.button>
                        );
                      })}
                  </AnimatePresence>
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36 }}
                >
                  <p className="hud-label mb-3">
                    {PERSONAL.location} · Open to conversations
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <Button
                      variant="outline"
                      className="h-12"
                      onClick={() => {
                        openResume();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Resume
                    </Button>
                    <Button className="h-12" onClick={() => handleNavClick("#contact")}>
                      Contact
                    </Button>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-primary"
        aria-hidden
      />
    </motion.nav>
  );
};

export default Navigation;
