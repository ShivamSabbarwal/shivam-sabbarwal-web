import type { Metadata } from "next";
import { Suspense } from "react";
import Resume from "@/components/resume";
import AutoPrint from "./AutoPrint";

const RESUME_URL = "https://shivamsabbarwal.dev/resume";
const YEARS = new Date().getFullYear() - 2018;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Shivam Sabbarwal Resume",
  description: "Resume of Shivam Sabbarwal, an engineering leader and hands-on software engineer",
  url: RESUME_URL,
  mainEntity: {
    "@type": "Person",
    name: "Shivam Sabbarwal",
    jobTitle: "Senior Software Engineer",
    description: `Engineering leader with ${YEARS}+ years shipping products and modernizing production systems`,
  },
};

export const metadata: Metadata = {
  title: { absolute: "Shivam Sabbarwal Resume" },
  description: `Shivam Sabbarwal's resume. ${YEARS}+ years leading, shipping, and modernizing production software.`,
  keywords: [
    "resume",
    "CV",
    "software engineer resume",
    "full-stack developer resume",
    "Shivam Sabbarwal resume",
    "software engineer CV",
  ],
  openGraph: {
    type: "profile",
    url: RESUME_URL,
    title: "Shivam Sabbarwal Resume",
    description: `Engineering leader and hands-on software engineer with ${YEARS}+ years of experience.`,
  },
  alternates: {
    canonical: RESUME_URL,
  },
};

export default function ResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <AutoPrint />
      </Suspense>
      <div className="min-h-screen bg-white">
        <Resume />
      </div>
    </>
  );
}
