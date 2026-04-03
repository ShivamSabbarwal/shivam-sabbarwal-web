import type { Metadata } from "next";
import ResumeClient from "./ResumeClient";

const RESUME_URL = "https://shivamsabbarwal.dev/resume";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Shivam Sabbarwal Resume",
  description: "Professional resume of Shivam Sabbarwal, Senior Software Engineer",
  url: RESUME_URL,
  mainEntity: {
    "@type": "Person",
    name: "Shivam Sabbarwal",
    jobTitle: "Senior Software Engineer",
    description: "Full-stack software engineer with over 7 years of experience",
  },
};

export const metadata: Metadata = {
  title: "Resume - Shivam Sabbarwal",
  description:
    "Download Shivam Sabbarwal's resume. Senior Software Engineer with 7+ years of experience in full-stack development, React, Node.js, TypeScript, and modern web technologies.",
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
    title: "Resume - Shivam Sabbarwal",
    description:
      "Download Shivam Sabbarwal's resume. Senior Software Engineer with 7+ years of experience.",
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
      <ResumeClient />
    </>
  );
}
