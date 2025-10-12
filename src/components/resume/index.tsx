import React, { useRef } from "react";
import "./resume.css";

// SHARED COMPONENTS

// PROJECT COMPONENTS
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";

// ICONS
import { Download } from "lucide-react";

// HELPERS

// ACTIONS

// REDUCERS

// APIS

// CONSTANTS

//----------------------------------------------------------------------------------------------------------------

const Resume: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container min-h-screen bg-gray-100">
      <div className="mx-auto w-[8.5in] bg-white">
        <div ref={componentRef} className="w-full space-y-4 p-[0.5in]">
          <Header />
          <ProfessionalSummary />
          <Experience />
          <Skills />
          <Education />
        </div>

        {/* Print Button */}
        <div className="fixed top-8 right-8 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-lg transition-colors hover:bg-blue-700"
          >
            <Download className="h-5 w-5" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
