// LIBRARIES / PACKAGES
import React from 'react';

// SHARED COMPONENTS
import Tag from './Tag';

// PROJECT COMPONENTS

// ICONS

// HELPERS

// ACTIONS

// REDUCERS

// APIS

// CONSTANTS

// TYPES
interface EducationData {
  degree: string;
  school: string;
  location: string;
  graduationDate: string;
  highlights: string[];
}

// CONSTANTS
const EDUCATION_DATA: EducationData = {
  degree: "Bachelor's in Software Engineering",
  school: "University of New Brunswick",
  location: "Fredericton NB",
  graduationDate: "April 2020",
  highlights: [
    "Co-op Certification",
    "Minor in Biomedical Engineering"
  ]
} as const;

//----------------------------------------------------------------------------------------------------------------

const Education: React.FC = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold tracking-wide">EDUCATION</h2>
      <div className="education-item space-y-2">
        <div className="flex justify-between items-baseline">
          <h3 className="job-title font-bold tracking-wide uppercase flex items-baseline gap-2 text-sm text-primary">
            {EDUCATION_DATA.degree}
            <span className="text-sm font-normal normal-case text-secondary">{EDUCATION_DATA.location}</span>
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <p className="company-name font-medium text-sm text-accent">{EDUCATION_DATA.school}</p>
          <span className="text-sm text-secondary">•</span>
          <span className="text-sm text-secondary">{EDUCATION_DATA.graduationDate}</span>
        </div>
        {EDUCATION_DATA.highlights && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {EDUCATION_DATA.highlights.map((highlight: string) => (
              <Tag key={highlight}>{highlight}</Tag>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
