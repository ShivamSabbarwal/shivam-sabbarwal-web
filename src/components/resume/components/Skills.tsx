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
interface SkillsData {
  skills: Record<string, string[]>;
}

// CONSTANTS
const SKILLS_DATA: SkillsData = {
  skills: {
    Core: ['React.js', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Git', 'PostgreSQL', 'MongoDB'],
    Frontend: ['Redux', 'TailwindCSS', 'HTML5/CSS3', 'Webpack'],
    'Backend & DevOps': ['Express.js', 'Django', 'Flask', 'RESTful APIs', 'Docker', 'WebSockets'],
    Other: ['UI/UX Design', 'AWS Certified Developer', 'WebRTC'],
  },
} as const;

//----------------------------------------------------------------------------------------------------------------

const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold">SKILLS</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {Object.entries(SKILLS_DATA.skills).map(([category, skills]) => (
          <div key={category} className="skills-category flex flex-col">
            <h3 className="category-header mb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Tag key={skill} className="py-1 text-sm">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
