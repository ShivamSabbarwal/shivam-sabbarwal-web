import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import MainLayout from "@/components/layout/MainLayout";

const Timeline = dynamic(() => import("@/components/sections/Timeline"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const CreativeProjects = dynamic(() => import("@/components/sections/Projects"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

const BASE_URL = "https://shivamsabbarwal.dev";
const YEARS = new Date().getFullYear() - 2018;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivam Sabbarwal",
  jobTitle: "Senior Software Engineer",
  description: `Engineering leader with ${YEARS}+ years building production systems across fintech, SaaS, and enterprise platforms, including the architecture and delivery of a regulated cross-border payments platform used in four countries.`,
  url: BASE_URL,
  image: `${BASE_URL}/assets/profile-pic.jpg`,
  sameAs: ["https://www.github.com/shivamsabbarwal", "https://www.linkedin.com/in/shivamsabbarwal"],
  knowsAbout: [
    "Engineering Leadership",
    "Software Architecture",
    "Full-Stack Development",
    "React",
    "Node.js",
    "TypeScript",
    "System Design",
    "Fintech",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Software Engineer",
    description:
      "Engineering leader focused on system architecture, technical strategy, and product delivery",
  },
  worksFor: {
    "@type": "Organization",
    name: "Cardata",
  },
};

export const metadata: Metadata = {
  title: "Shivam Sabbarwal | Engineering Leader",
  description: `Engineering leader with ${YEARS}+ years building production systems across fintech, SaaS, and enterprise platforms. Former CTO at Remittor AI, now a Senior Software Engineer at Cardata.`,
  keywords: [
    "engineering leader",
    "engineering manager",
    "VP of engineering",
    "senior software engineer",
    "software architecture",
    "Cardata",
    "Shivam Sabbarwal",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Shivam Sabbarwal | Engineering Leader",
    description: `Builds the systems companies run on and the teams that keep them running. ${YEARS}+ years across fintech, SaaS, and enterprise platforms.`,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function Home() {
  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Timeline />
      <TechStack />
      <CreativeProjects />
      <Contact />
    </MainLayout>
  );
}
