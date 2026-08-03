import type { Metadata } from "next";
import { Suspense } from "react";
import Resume from "@/components/resume";
import AutoPrint from "./AutoPrint";
import {
  BASE_URL,
  buildResumeJsonLd,
  jsonLdScript,
  personDescription,
  yearsExperience,
} from "@/lib/seo";

const RESUME_URL = `${BASE_URL}/resume`;

export const metadata: Metadata = {
  title: { absolute: "Shivam Sabbarwal Resume" },
  description: `Shivam Sabbarwal's resume. ${yearsExperience()}+ years leading, shipping, and modernizing production software.`,
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
    description: `Engineering leader and hands-on software engineer with ${yearsExperience()}+ years of experience.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Sabbarwal Resume",
    description: personDescription(),
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
        dangerouslySetInnerHTML={{ __html: jsonLdScript(buildResumeJsonLd()) }}
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
