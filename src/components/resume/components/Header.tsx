// LIBRARIES / PACKAGES
import React from 'react';

// SHARED COMPONENTS

// PROJECT COMPONENTS

// ICONS
import { Linkedin, Mail, Phone, Globe } from 'lucide-react';

// HELPERS

// ACTIONS

// REDUCERS

// APIS

// CONSTANTS

// TYPES
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

// CONSTANTS
const HEADER_DATA: HeaderData = {
  name: 'SHIVAM SABBARWAL',
  title: 'Senior Software Engineer',
  contact: {
    phone: '+1 (506) 609-0423',
    email: 'shivam.sabb@gmail.com',
    location: 'Vancouver, BC',
    linkedin: 'linkedin.ca/in/shivamsabbarwal',
    website: 'shivamsabbarwal.dev',
  },
} as const;

//----------------------------------------------------------------------------------------------------------------

const Header: React.FC = () => {
  return (
    <header className="mb-8 flex items-center justify-between gap-4 space-y-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary text-4xl font-extrabold tracking-tight">{HEADER_DATA.name}</h1>
        <p className="text-accent text-base">{HEADER_DATA.title}</p>
      </div>

      {/* Contact Info Tags */}
      <div className="contact-info flex flex-col flex-wrap justify-end gap-2">
        <div
          onClick={() => window.open(`tel:${HEADER_DATA.contact.phone}`, '_blank')}
          className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Phone className="size-4 text-accent" />
          <span className="text-sm text-secondary" style={{ color: 'var(--resume-secondary)' }}>{HEADER_DATA.contact.phone}</span>
        </div>
        <div
          onClick={() => window.open(`mailto:${HEADER_DATA.contact.email}`, '_blank')}
          className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Mail className="size-4 text-accent" />
          <span className="text-sm text-secondary" style={{ color: 'var(--resume-secondary)' }}>{HEADER_DATA.contact.email}</span>
        </div>
        <div
          onClick={() => window.open(`https://${HEADER_DATA.contact.linkedin}`, '_blank')}
          className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Linkedin className="size-4 text-accent" />
          <span className="text-sm text-secondary" style={{ color: 'var(--resume-secondary)' }}>{HEADER_DATA.contact.linkedin}</span>
        </div>
        <div
          onClick={() => window.open(`https://${HEADER_DATA.contact.website}`, '_blank')}
          className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Globe className="size-4 text-accent" />
          <span className="text-sm text-secondary" style={{ color: 'var(--resume-secondary)' }}>{HEADER_DATA.contact.website}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
