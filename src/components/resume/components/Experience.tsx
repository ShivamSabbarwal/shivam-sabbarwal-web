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
interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: React.ReactNode[];
  skills: string[];
}

// CONSTANTS
const EXPERIENCE_DATA: Experience[] = [
  {
    title: 'Software Engineer',
    company: '3vGeomatics',
    location: 'Vancouver, BC',
    period: 'July 2025 – Present',
    achievements: [
      <>
        <strong>Recently joined</strong> to contribute technical leadership and expertise, bringing innovative solutions
        to drive measurable business results.
      </>,
      <>
        <strong>Focusing on scalable solutions</strong> and technical excellence to deliver high-impact results
        for the organization.
      </>,
    ],
    skills: ['React.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Chief Technology Officer (CTO)',
    company: 'Remittor',
    location: 'Surrey, BC',
    period: 'December 2023 – Present',
    achievements: [
      <>
        <strong>Built fintech platform</strong> addressing complex financial challenges for Non-Resident Indians (NRIs)
        globally, streamlining property sales and international money transfers.
      </>,
      <>
        <strong>Managed cross-border transactions</strong> and Indian regulatory compliance, ensuring secure and
        compliant international money transfers.
      </>,
      <>
        <strong>Prioritized security, transparency, and efficiency</strong> in financial solutions, building trust
        with users handling sensitive financial operations.
      </>,
      <>
        <strong>Simplified property sales in India</strong> with comprehensive legal, financial, and regulatory
        management solutions.
      </>,
    ],
    skills: ['React.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'Financial APIs'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Unleashd Technologies',
    location: 'Vancouver, BC',
    period: 'January 2022 – July 2025',
    achievements: [
      <>
        <strong>Led the transition</strong> from monolithic to microservices architecture, reducing technical debt and
        improving scalability. This shift significantly enhanced system maintainability and deployment efficiency while
        cutting <strong>data acquisition costs by 65%</strong>.
      </>,
      <>
        <strong>Developed</strong> internal and client-facing tools such as <strong>File Mapper</strong>, allowing data
        teams to import unstructured CSV files, and <strong>Smart Customer Segments</strong>, a powerful filtration
        system for targeted marketing. These innovations contributed to <strong>doubling client acquisition</strong> and
        became integral to the <strong>primary product, Drive AI</strong>.
      </>,
      <>
        <strong>Spearheaded frontend modernization</strong> by migrating from CSS to <strong>TailwindCSS</strong> and
        replacing the Ant Design component library with <strong>a scalable in-house design system built</strong> on
        Radix UI Primitives. This system introduced <strong>reusable components</strong>, ensuring a{' '}
        <strong>cohesive and consistent UI/UX</strong> across all platforms.
      </>,
      <>
        <strong>Built and maintained full-stack applications</strong> using{' '}
        <strong>React, Node.js, and PostgreSQL</strong>, hosted on <strong>AWS</strong>, optimizing{' '}
        <strong>performance, scalability, and security</strong> across various projects.
      </>,
      <>
        <strong>Designed and implemented ETL pipelines</strong>, improving{' '}
        <strong>data ingestion, transformation, and integration</strong> across multiple sources. Enabled streamlined
        analytics and decision-making for clients and stakeholders.
      </>,
    ],
    skills: ['React.js', 'Redux', 'Node.js', 'AWS', 'PostgreSQL', 'WebSockets', 'Python', 'Django', 'Express.js', 'TailwindCSS'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Four Eyes Financial',
    location: 'Saint John, NB',
    period: 'July 2020 – January 2022',
    achievements: [
      <>
        <strong>Developed</strong> a full-featured web-based CRM platform using the <strong>MERN stack</strong>,
        automating <strong>financial workflows</strong> and enhancing business operations.
      </>,
      <>
        <strong>Integrated video conferencing capabilities</strong> within the CRM using{' '}
        <strong>WebRTC and AWS Chime</strong>, enabling seamless client interactions.
      </>,
      <>
        <strong>Designed interactive data dashboards</strong> using <strong>D3.js, Recharts, and Ant Design</strong>,
        providing clients with <strong>clear, real-time financial insights</strong>.
      </>,
      <>
        <strong>Maintained and optimized a financial analytical microservice</strong>, improving data visualization,{' '}
        <strong>reducing load times</strong>, and enhancing overall user experience.
      </>,
    ],
    skills: ['React.js', 'Node.js', 'Python', 'AWS', 'WebRTC', 'MongoDB', 'Express.js', 'Flask', 'Mongoose', 'D3.js'],
  },
] as const;

//----------------------------------------------------------------------------------------------------------------

const Experience: React.FC = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold mb-6 tracking-wide">EXPERIENCE</h2>
      <div className="space-y-8">
        {EXPERIENCE_DATA.map((job) => (
          <div key={job.company} className="space-y-3">
            <div className="job-header">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold tracking-tight uppercase flex items-baseline gap-3 text-base text-primary">
                  {job.title}
                  <span className="text-sm font-normal normal-case tracking-normal text-secondary">{job.location}</span>
                </h3>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="font-medium text-base tracking-tight text-accent">{job.company}</p>
                <span className="text-sm opacity-60 text-secondary">•</span>
                <span className="text-sm tracking-tight text-secondary">{job.period}</span>
              </div>
            </div>
            {job.skills && (
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            )}
            <ul className="list-disc list-outside ml-4 space-y-2 text-base leading-relaxed text-secondary">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
