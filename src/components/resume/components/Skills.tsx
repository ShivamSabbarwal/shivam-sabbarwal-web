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
    Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'React Native'],
    Backend: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Serverless'],
    'Cloud & DevOps': ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'CI/CD', 'Terraform', 'Kubernetes'],
    'AI & Dev Tools': ['OpenAI API', 'LangChain', 'Testing', 'Playwright', 'Git', 'Figma', 'VS Code'],
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
