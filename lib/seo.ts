import { PERSONAL } from "@/constants";

export const BASE_URL = "https://shivamsabbarwal.dev";
export const PERSON_ID = `${BASE_URL}/#person`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const WEBPAGE_ID = `${BASE_URL}/#webpage`;
export const FAQ_PAGE_ID = `${BASE_URL}/#faq`;
export const PROFILE_PAGE_ID = `${BASE_URL}/resume#profile`;

export const SITE_NAME = "Shivam Sabbarwal";
export const DEFAULT_TITLE = "Shivam Sabbarwal | Engineering Leader";

export const yearsExperience = () => PERSONAL.yearsExperience;

export const personDescription = () =>
  `Engineering leader with ${yearsExperience()}+ years shipping and modernizing production software.`;

export const siteDescription = () =>
  `Engineering leader with ${yearsExperience()}+ years shipping products and modernizing production systems.`;

/** Home metadata may mention former CTO once for search; keep elsewhere restrained. */
export const homeDescription = () =>
  `Engineering leader and former CTO with ${yearsExperience()}+ years shipping products and modernizing production systems.`;

/** Untreated source photo for Person JSON-LD. Hero uses themed framed variants. */
export const PROFILE_IMAGE = `${BASE_URL}${PERSONAL.portrait}`;

export const KNOWS_ABOUT = [
  "Engineering Leadership",
  "Software Architecture",
  "Full-Stack Development",
  "React",
  "Node.js",
  "TypeScript",
  "System Design",
  "Engineering Management",
  "Product Delivery",
  "Platform Modernization",
] as const;

export const sameAs = () => PERSONAL.socials.map((social) => social.url);

export const telephoneE164 = () => `+${PERSONAL.phone.replace(/\D/g, "")}`;

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Shared FAQ copy for the on-page section and FAQPage JSON-LD.
 * Keep answers third-person, factual, and in sync with timeline metrics.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who is Shivam Sabbarwal?",
    answer:
      "Shivam Sabbarwal is an engineering leader and senior software engineer based in Ontario, Canada. He has been shipping and modernizing production software since 2018, and he stays hands-on across architecture, product delivery, and engineering practice.",
  },
  {
    question: "What kind of engineering work does he do?",
    answer:
      "He builds technology that keeps pace with ambition, creating products, platforms, and engineering foundations that help companies grow. That includes greenfield product work, platform modernization, architecture, developer experience, reliability, and delivery standards.",
  },
  {
    question: "Where has he worked?",
    answer:
      "He currently works at Cardata as a Senior Software Engineer. Earlier roles include 3vGeomatics (Orica Digital Solutions), Remittor AI, Unleashd Technologies, Four Eyes Financial, the NB Innovation Foundation, CGI, and Irving Oil. He holds a BSc in Software Engineering from the University of New Brunswick.",
  },
  {
    question: "Is he open to new opportunities?",
    answer:
      "He is open to conversations about senior engineering and leadership roles that match his experience. Founders, recruiters, and engineering leaders are welcome to reach out.",
  },
  {
    question: "How can I contact him?",
    answer: `Use the contact form on ${PERSONAL.website}, email ${PERSONAL.email}, or connect on LinkedIn at linkedin.com/in/shivamsabbarwal.`,
  },
];

export function buildPersonJsonLd() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSONAL.name,
    jobTitle: "Senior Software Engineer",
    description: personDescription(),
    url: BASE_URL,
    image: PROFILE_IMAGE,
    email: PERSONAL.email,
    telephone: telephoneE164(),
    homeLocation: {
      "@type": "Place",
      name: PERSONAL.location,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
    },
    sameAs: sameAs(),
    knowsAbout: [...KNOWS_ABOUT],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of New Brunswick",
      sameAs: "https://www.unb.ca",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Software Engineer",
      description:
        "Engineering leader who stays hands-on across architecture and product delivery",
    },
    worksFor: {
      "@type": "Organization",
      name: "Cardata",
      sameAs: "https://cardata.co",
    },
  };
}

export function buildFaqPageJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": FAQ_PAGE_ID,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildHomeJsonLd() {
  const person = buildPersonJsonLd();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: BASE_URL,
        name: SITE_NAME,
        description: siteDescription(),
        publisher: { "@id": PERSON_ID },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: BASE_URL,
        name: DEFAULT_TITLE,
        description: homeDescription(),
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: "en-US",
      },
      person,
      buildFaqPageJsonLd(),
    ],
  };
}

export function buildResumeJsonLd() {
  const person = buildPersonJsonLd();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": PROFILE_PAGE_ID,
        name: "Shivam Sabbarwal Resume",
        description:
          "Resume of Shivam Sabbarwal, an engineering leader and hands-on software engineer",
        url: `${BASE_URL}/resume`,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
        inLanguage: "en-US",
      },
      person,
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data);
}
