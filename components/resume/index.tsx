"use client";

import { LuPrinter } from "react-icons/lu";
import { RESUME_VARIANTS } from "@/constants";
import "./resume.css";

import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";
import { MobilePrintButton, FloatingPrintButton } from "./PrintButton";
import { useResumeVariant } from "./useResumeVariant";

/**
 * Renders the software engineering resume by default. The leadership version is
 * reachable without exposing a control: press and hold the page (works on
 * touch), double-click it, press V/E/L on a keyboard, or load `?variant=leader`.
 * Whichever version is on screen is the one that prints.
 */
const Resume = () => {
  const { variant, showBadge, toggle, longPressHandlers } = useResumeVariant();
  const data = RESUME_VARIANTS[variant];

  return (
    <>
      {/* Mobile prompt: visible on small screens only */}
      <div className="flex sm:hidden min-h-screen items-center justify-center p-6 print:hidden">
        <div
          className="text-center space-y-6 max-w-xs select-none"
          style={{ touchAction: "manipulation" }}
          onContextMenu={(event) => event.preventDefault()}
          {...longPressHandlers}
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <LuPrinter className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Resume</h2>
            <p className="text-sm text-muted-foreground">
              Save as a PDF here, or open on a larger screen to read it in full.
            </p>
          </div>
          <MobilePrintButton />
          <p className="text-xs text-muted-foreground">
            Printing the <span className="text-foreground font-medium">{data.label}</span> version
          </p>
        </div>
      </div>

      {/* Full resume: hidden on mobile, visible on desktop + print */}
      <div className="resume-container hidden sm:block">
        <div className="mx-auto w-[8.5in] bg-white">
          <div
            className="resume-page w-full px-[0.5in] py-[0.45in]"
            onDoubleClick={toggle}
            onContextMenu={(event) => event.preventDefault()}
            {...longPressHandlers}
          >
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
