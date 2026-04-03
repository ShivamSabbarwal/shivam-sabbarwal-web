"use client";

import Resume from "@/components/resume";
import Cursor from "@/components/interactive/Cursor";

export default function ResumeClient() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Cursor />
      <Resume />
    </div>
  );
}
