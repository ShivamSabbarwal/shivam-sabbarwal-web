import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import MainLayout from "@/components/layout/MainLayout";

const Timeline = dynamic(() => import("@/components/sections/Timeline"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const CreativeProjects = dynamic(() => import("@/components/sections/Projects"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

const BASE_URL = "https://shivamsabbarwal.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivam Sabbarwal",
  jobTitle: "Senior Software Engineer",
  description:
    "Full-stack software engineer with over 7 years of experience building scalable web applications and innovative digital solutions",
  url: BASE_URL,
  image: `${BASE_URL}/assets/profile-pic.jpg`,
  sameAs: ["https://www.github.com/shivamsabbarwal", "https://www.linkedin.com/in/shivamsabbarwal"],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Software Architecture",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    description: "Full-stack software engineer specializing in modern web technologies",
  },
};

export const metadata: Metadata = {
  title: "Shivam Sabbarwal - Senior Software Engineer & Full-Stack Developer",
  description:
    "Experienced full-stack software engineer with 7+ years building scalable web applications. Specialized in React, Node.js, TypeScript, and modern web technologies. Available for consulting and new opportunities.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "React",
    "Node.js",
    "TypeScript",
    "web development",
    "software consultant",
    "Shivam Sabbarwal",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Shivam Sabbarwal - Senior Software Engineer & Full-Stack Developer",
    description:
      "Experienced full-stack software engineer with 7+ years building scalable web applications.",
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
