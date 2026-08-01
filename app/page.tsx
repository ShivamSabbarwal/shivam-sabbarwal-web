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
  description: `Engineering leader with ${YEARS}+ years shipping and modernizing production software.`,
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
    "Engineering Management",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Software Engineer",
    description: "Engineering leader who stays hands-on across architecture and product delivery",
  },
  worksFor: {
    "@type": "Organization",
    name: "Cardata",
  },
};

export const metadata: Metadata = {
  title: "Shivam Sabbarwal | Engineering Leader",
  description: `Engineering leader and former CTO with ${YEARS}+ years shipping products and modernizing production systems.`,
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
    description: `Engineering leader with ${YEARS}+ years shipping products and modernizing production systems.`,
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
