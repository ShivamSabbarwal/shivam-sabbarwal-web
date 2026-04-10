"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Resume from "@/components/resume";

export default function ResumeClient() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("print") === "true") {
      const timeout = setTimeout(() => window.print(), 500);
      return () => clearTimeout(timeout);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      <Resume />
    </div>
  );
}
