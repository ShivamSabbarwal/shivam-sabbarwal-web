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

  const handleDownload = useCallback(() => {
      const link = document.createElement('a');
      link.href = '/assets/resume.pdf';
      link.download = `Shivam_Sabbarwal_Resume_${new Date().getFullYear()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    
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

        {/* Control Buttons - Bottom Right */}
        <div className="fixed bottom-8 right-8 print:hidden flex flex-col gap-3">
          {/* Style Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95, y: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Button
              onClick={toggleStyle}
              variant="outline"
              className="px-4 py-2 font-black text-sm hover:animate-pulse-color normal-case border-2 border-dashed border-primary/50 hover:border-primary transition-all duration-200 bg-gradient-to-r from-primary/5 to-accent/5"
              aria-label={isMainPageStyle ? "Switch to Classic style" : "Switch to Modern style"}
            >
              {isMainPageStyle ? <FileText className="h-4 w-4" /> : <Palette className="h-4 w-4" />}
              <span className="ml-2">
                {isMainPageStyle ? 'Switch to Classic' : 'Switch to Modern'}
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
              onClick={handleDownload}
              className="px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg hover:animate-glow normal-case"
              aria-label="Download resume as PDF"
            >
              <Download className="h-5 w-5" />
              <span>{'Download PDF'}</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
