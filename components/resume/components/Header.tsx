import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Call02Icon, GlobeIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";

interface Contact {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  website: string;
}

interface HeaderData {
  name: string;
  title: string;
  contact: Contact;
}

const HEADER_DATA: HeaderData = {
  name: "SHIVAM SABBARWAL",
  title: "Senior Software Engineer",
  contact: {
    phone: "+1 (506) 609-0423",
    email: "shivam.sabb@gmail.com",
    location: "Vancouver, BC",
    linkedin: "linkedin.com/in/shivamsabbarwal",
    website: "shivamsabbarwal.dev",
  },
} as const;

const Header = () => {
  return (
    <header className="mb-4 flex items-center justify-between gap-4 space-y-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-wide text-primary mb-2">
          {HEADER_DATA.name}
        </h1>
        <p className="text-xl text-accent">{HEADER_DATA.title}</p>
      </div>

      {/* Contact Info Tags */}
      <div className="contact-info flex flex-col flex-wrap justify-end gap-2">
        <div
          onClick={() => window.open(`tel:${HEADER_DATA.contact.phone}`, "_blank")}
          className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
        >
          <HugeiconsIcon icon={Call02Icon} className="size-4 text-accent" />
          <span className="text-sm text-secondary">{HEADER_DATA.contact.phone}</span>
        </div>
        <div
          onClick={() => window.open(`mailto:${HEADER_DATA.contact.email}`, "_blank")}
          className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
        >
          <HugeiconsIcon icon={Mail01Icon} className="size-4 text-accent" />
          <span className="text-sm text-secondary">{HEADER_DATA.contact.email}</span>
        </div>
        <div
          onClick={() => window.open(`https://${HEADER_DATA.contact.linkedin}`, "_blank")}
          className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
        >
          <HugeiconsIcon icon={Linkedin01Icon} className="size-4 text-accent" />
          <span className="text-sm text-secondary">{HEADER_DATA.contact.linkedin}</span>
        </div>
        <div
          onClick={() => window.open(`https://${HEADER_DATA.contact.website}`, "_blank")}
          className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
        >
          <HugeiconsIcon icon={GlobeIcon} className="size-4 text-accent" />
          <span className="text-sm text-secondary">{HEADER_DATA.contact.website}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
