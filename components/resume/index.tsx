"use client";

import { useEffect, useState } from "react";
import { LuPrinter } from "react-icons/lu";
import { RESUME_VARIANTS, type ResumeVariantKey } from "@/constants";
import "./resume.css";

import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";
import { MobilePrintButton, FloatingPrintButton } from "./PrintButton";

const isVariantKey = (value: string | null): value is ResumeVariantKey =>
  value === "engineer" || value === "leader";

/**
 * The page renders the software engineering resume by default. The leadership
 * version is reachable without exposing a control on the page: press V to
 * toggle, E or L to pick one directly, double-click the name, or load
 * `?variant=leader`. Whichever is on screen is what prints.
 */
const Resume = () => {
  const [variant, setVariant] = useState<ResumeVariantKey>("engineer");
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("variant");
    if (isVariantKey(requested)) {
      setVariant(requested);
      setShowBadge(true);
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const key = event.key.toLowerCase();
      if (key === "v") setVariant((current) => (current === "engineer" ? "leader" : "engineer"));
      else if (key === "e") setVariant("engineer");
      else if (key === "l") setVariant("leader");
      else return;
      setShowBadge(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!showBadge) return;
    const timeout = setTimeout(() => setShowBadge(false), 2200);
    return () => clearTimeout(timeout);
  }, [showBadge, variant]);

  const data = RESUME_VARIANTS[variant];

  const toggleVariant = () => {
    setVariant((current) => (current === "engineer" ? "leader" : "engineer"));
    setShowBadge(true);
  };

  return (
    <>
      {/* Mobile prompt: visible on small screens only */}
      <div className="flex sm:hidden min-h-screen items-center justify-center p-6 print:hidden">
        <div className="text-center space-y-6 max-w-xs">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <LuPrinter className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Resume</h2>
            <p className="text-sm text-muted-foreground">
              For the best experience, view on a larger screen or save as a PDF.
            </p>
          </div>
          <MobilePrintButton />
        </div>
      </div>

      {/* Full resume: hidden on mobile, visible on desktop + print */}
      <div className="resume-container hidden sm:block">
        <div className="mx-auto w-[8.5in] bg-white">
          <div className="resume-page w-full px-[0.5in] py-[0.45in]" onDoubleClick={toggleVariant}>
            <Header headline={data.headline} />
            <ProfessionalSummary summary={data.summary} />
            <Experience roles={data.experience} />
            <Skills skills={data.skills} />
            <Education />
          </div>
        </div>
      </div>

      {showBadge && (
        <div className="resume-variant-badge print:hidden" role="status" aria-live="polite">
          {data.label}
        </div>
      )}

      <FloatingPrintButton />
    </>
  );
};

export default Resume;
