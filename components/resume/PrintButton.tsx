"use client";

import { LuPrinter } from "react-icons/lu";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const handlePrint = () => window.print();

export const MobilePrintButton = () => (
  <Button onClick={handlePrint} className="w-full">
    <LuPrinter className="w-4 h-4 mr-2" />
    Print / Save as PDF
  </Button>
);

export const FloatingPrintButton = () => (
  <div className="fixed bottom-8 right-8 print:hidden hidden sm:block">
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95, y: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <Button
        onClick={handlePrint}
        className="px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg normal-case shadow-lg"
        aria-label="Print resume"
      >
        <LuPrinter className="h-5 w-5" />
        <span className="ml-2">Print Resume</span>
      </Button>
    </motion.div>
  </div>
);
