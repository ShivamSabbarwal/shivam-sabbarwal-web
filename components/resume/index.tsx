import { LuPrinter } from "react-icons/lu";
import "./resume.css";

import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";
import { MobilePrintButton, FloatingPrintButton } from "./PrintButton";

const Resume = () => (
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
        <div className="w-full space-y-3 px-[0.25in] py-[0.4in]">
          <Header />
          <ProfessionalSummary />
          <Experience />
          <Skills />
          <Education />
        </div>
      </div>
    </div>

    <FloatingPrintButton />
  </>
);

export default Resume;
