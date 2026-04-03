"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, GithubIcon, Linkedin01Icon, InstagramIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants";

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

  const socialIcons = [GithubIcon, Linkedin01Icon, InstagramIcon];
  const socialLinks = SOCIAL_LINKS.map((link, i) => ({
    ...link,
    icon: socialIcons[i],
  }));

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Social */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h3 className="text-lg font-normal tracking-tight">
              Shivam Sabbarwal
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <HugeiconsIcon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
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
            <HugeiconsIcon icon={ArrowUp01Icon} className="w-4 h-4" />
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-6 pt-4 text-center">
          <p className="text-muted-foreground text-xs">
            &copy; {currentYear} Shivam Sabbarwal. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
