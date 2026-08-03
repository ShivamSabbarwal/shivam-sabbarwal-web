import { LuArrowUp } from "react-icons/lu";
import { NAV_ITEMS, PERSONAL, SOCIAL_ICONS } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="slab scanlines relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-accent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="hud-label mb-3 text-primary">Thanks for visiting</p>
            {/* A wordmark, not a heading: keeps the outline clean below Contact. */}
            <p className="font-heading text-[clamp(2.25rem,7vw,4rem)] leading-[0.9] font-bold tracking-tight">
              {PERSONAL.name.split(" ")[0]}
              <br />
              <span className="text-primary">{PERSONAL.name.split(" ")[1]}</span>
            </p>
            <p className="text-muted-foreground mt-4 max-w-xs text-[15px] leading-relaxed">
              I lead engineering work without drifting away from the code.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-2.5 lg:justify-end">
              {NAV_ITEMS.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-mono text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
                >
                  <span className="mr-1.5 opacity-50">{`0${index + 1}`}</span>
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              {PERSONAL.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="border-bone/15 text-muted-foreground hover:border-primary hover:text-primary flex h-11 w-11 items-center justify-center rounded-lg border-[1.5px] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
              <a
                href="#home"
                className="border-bone/15 text-muted-foreground hover:border-primary hover:text-primary ml-1 flex h-11 w-11 items-center justify-center rounded-lg border-[1.5px] transition-colors"
                aria-label="Scroll to top"
              >
                <LuArrowUp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-bone/12 mt-12 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="hud-label">
            &copy; {currentYear} {PERSONAL.name}
          </p>
          <p className="hud-label">Built by hand with Next.js and TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
