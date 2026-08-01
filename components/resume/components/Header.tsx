import { LuGlobe, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
import { RESUME_HEADER } from "@/constants";

const { contact } = RESUME_HEADER;

const CONTACT_LINKS = [
  { label: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}`, Icon: LuPhone },
  { label: contact.email, href: `mailto:${contact.email}`, Icon: LuMail },
  { label: contact.linkedin, href: `https://${contact.linkedin}`, Icon: LuLinkedin },
  { label: contact.website, href: `https://${contact.website}`, Icon: LuGlobe },
];

/* Icons are decorative vectors and carry no text, so the contact details still
   extract as a plain readable line. */
const Header = ({ headline }: { headline: string }) => {
  return (
    <header className="resume-header">
      <h1 className="resume-name">{RESUME_HEADER.name}</h1>
      <p className="resume-role">{headline}</p>
      <p className="resume-contact">
        {CONTACT_LINKS.map(({ label, href, Icon }) => (
          <a key={label} className="resume-contact-item" href={href} rel="noopener noreferrer">
            <Icon className="resume-contact-icon" aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </p>
    </header>
  );
};

export default Header;
