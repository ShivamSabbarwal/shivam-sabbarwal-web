import { LuMail, LuPhone, LuGlobe, LuLinkedin } from "react-icons/lu";
import { RESUME_HEADER } from "@/constants";

const Header = () => {
  return (
    <header className="mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h1 className="text-3xl font-bold tracking-wide text-primary">{RESUME_HEADER.name}</h1>
          <p className="text-base text-accent mt-1">{RESUME_HEADER.title}</p>
        </div>

        <div className="contact-info flex flex-col items-end gap-0.5 text-sm">
          <a
            href={`tel:${RESUME_HEADER.contact.phone}`}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80 no-underline"
          >
            <span className="text-secondary">{RESUME_HEADER.contact.phone}</span>
            <LuPhone className="size-3.5 text-accent" />
          </a>
          <a
            href={`mailto:${RESUME_HEADER.contact.email}`}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80 no-underline"
          >
            <span className="text-secondary">{RESUME_HEADER.contact.email}</span>
            <LuMail className="size-3.5 text-accent" />
          </a>
          <a
            href={`https://${RESUME_HEADER.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80 no-underline"
          >
            <span className="text-secondary">{RESUME_HEADER.contact.linkedin}</span>
            <LuLinkedin className="size-3.5 text-accent" />
          </a>
          <a
            href={`https://${RESUME_HEADER.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80 no-underline"
          >
            <span className="text-secondary">{RESUME_HEADER.contact.website}</span>
            <LuGlobe className="size-3.5 text-accent" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
