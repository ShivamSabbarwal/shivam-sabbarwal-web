import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import MainLayout from "@/components/layout/MainLayout";
import {
  BASE_URL,
  DEFAULT_TITLE,
  homeDescription,
  buildHomeJsonLd,
  jsonLdScript,
  siteDescription,
} from "@/lib/seo";

const Timeline = dynamic(() => import("@/components/sections/Timeline"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const CreativeProjects = dynamic(() => import("@/components/sections/Projects"));
const Faq = dynamic(() => import("@/components/sections/Faq"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: homeDescription(),
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
    title: DEFAULT_TITLE,
    description: siteDescription(),
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: siteDescription(),
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
        dangerouslySetInnerHTML={{ __html: jsonLdScript(buildHomeJsonLd()) }}
      />
      <Hero />
      <Timeline />
      <TechStack />
      <CreativeProjects />
      <Contact />
      <Faq />
    </MainLayout>
  );
}
