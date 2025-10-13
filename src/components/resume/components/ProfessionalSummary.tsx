// LIBRARIES / PACKAGES
import React from 'react';

// SHARED COMPONENTS

// PROJECT COMPONENTS

// ICONS

// HELPERS

// ACTIONS

// REDUCERS

// APIS

// CONSTANTS

// TYPES
interface ProfessionalSummaryData {
  professionalSummary: string;
}

// CONSTANTS
const PROFESSIONAL_SUMMARY: ProfessionalSummaryData = {
  professionalSummary: "Senior Software Engineer with 7+ years of experience in full-stack development, specializing in React, Node.js, TypeScript, and cloud technologies. Proven expertise in building scalable web applications, leading technical teams, and implementing modern development practices. Strong background in frontend development, backend architecture, and DevOps with experience in AWS, Docker, and CI/CD pipelines."
} as const;

//----------------------------------------------------------------------------------------------------------------

const ProfessionalSummary: React.FC = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold tracking-wide">PROFESSIONAL SUMMARY</h2>
      <p className="text-sm text-secondary">
        {PROFESSIONAL_SUMMARY.professionalSummary}
      </p>
    </section>
  );
};

export default ProfessionalSummary; 