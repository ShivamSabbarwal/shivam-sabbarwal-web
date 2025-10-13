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
  professionalSummary: "Creative Senior Software Engineer with 7 years of experience in developing cutting-edge solutions for complex productivity challenges. Known for a resourceful and adaptable approach to problem-solving, with a proven track record in leading projects, reducing technical debt, and enhancing system scalability."
} as const;

//----------------------------------------------------------------------------------------------------------------

const ProfessionalSummary: React.FC = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold tracking-wide">PROFESSIONAL SUMMARY</h2>
      <p className="text-sm text-secondary">{PROFESSIONAL_SUMMARY.professionalSummary}</p>
    </section>
  );
};

export default ProfessionalSummary; 