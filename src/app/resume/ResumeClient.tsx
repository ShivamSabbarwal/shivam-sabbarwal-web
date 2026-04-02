"use client";

import { useEffect } from "react";
import Resume from "@/components/resume";

export default function ResumeClient() {
  useEffect(() => {
    document.body.classList.add("resume-page");
    return () => {
      document.body.classList.remove("resume-page");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Resume />
    </div>
  );
}
