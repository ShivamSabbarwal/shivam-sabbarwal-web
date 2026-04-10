"use client";

import { LuArrowUp } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, PERSONAL, SOCIAL_ICONS } from "@/constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const handleFooterNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-border relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Social */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h3 className="text-lg font-normal tracking-tight">
              {PERSONAL.name}
            </h3>
            <div className="flex gap-2">
              {PERSONAL.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_ITEMS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleFooterNavClick(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Scroll to Top */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="w-8 h-8"
            aria-label="Scroll to top"
          >
            <LuArrowUp className="w-4 h-4" />
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-6 pt-4 text-center">
          <p className="text-muted-foreground text-xs">
            &copy; {currentYear} {PERSONAL.name}. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
