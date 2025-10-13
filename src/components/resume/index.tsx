import React, { useRef, useCallback, useState } from "react";
import { Download, Palette, FileText } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import "./resume.css";

// Components
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";

const Resume: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [isMainPageStyle, setIsMainPageStyle] = useState(false);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const toggleStyle = useCallback(() => {
    setIsMainPageStyle(prev => !prev);
  }, []);

  return (
    <div className={`resume-container ${isMainPageStyle ? 'main-page-style' : ''}`}>
      <div className="mx-auto w-[8.5in] bg-white">
        <div ref={componentRef} className="w-full space-y-4 p-[0.5in]">
          <Header />
          <ProfessionalSummary />
          <Experience />
          <Skills />
          <Education />
        </div>

        {/* Control Buttons */}
        <div className="fixed top-8 right-8 print:hidden flex flex-col gap-3">
          {/* Style Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95, y: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Button
              onClick={toggleStyle}
              variant="outline"
              className="px-4 py-2 font-black text-sm hover:animate-pulse-color normal-case"
            >
              {isMainPageStyle ? <FileText className="h-4 w-4" /> : <Palette className="h-4 w-4" />}
              <span className="ml-2">
                {isMainPageStyle ? 'Classic' : 'Modern'}
              </span>
            </Button>
          </motion.div>

          {/* Download Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95, y: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Button
              onClick={handlePrint}
              className="px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg hover:animate-glow normal-case"
            >
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
