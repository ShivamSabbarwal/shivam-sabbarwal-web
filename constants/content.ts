import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiServerless,
  SiVercel,
  SiCloudflare,
  SiDocker,
  SiGitlab,
  SiTerraform,
  SiKubernetes,
  SiOpenai,
  SiLangchain,
  SiVitest,
  SiGit,
  SiFigma,
} from "react-icons/si";
import PlaywrightIcon from "@/components/PlaywrightIcon";
import {
  LuCode,
  LuServer,
  LuCloud,
  LuCpu,
  LuShield,
  LuLayers,
} from "react-icons/lu";

// ─── Personal Info ───────────────────────────────────────────
export const PERSONAL = {
  name: "Shivam Sabbarwal",
  title: "Software Engineer · Tech Lead · Former CTO",
  location: "Ontario, Canada",
  email: "shivam.sabb@gmail.com",
  phone: "+1 (506) 609-0423",
  get yearsExperience() {
    return new Date().getFullYear() - 2018;
  },
  website: "shivamsabbarwal.dev",
  socials: [
    { name: "GitHub", url: "https://github.com/ShivamSabbarwal" },
    { name: "LinkedIn", url: "https://linkedin.com/in/shivamsabbarwal" },
    { name: "Instagram", url: "https://instagram.com/shiv.sabb" },
  ],
} as const;

// ─── Hero Terminal Lines ─────────────────────────────────────
export const TERMINAL_LINES = [
  { type: "command" as const, prompt: "$", keyword: "whoami", delay: 60 },
  { type: "output" as const, text: "Senior Software Engineer & Tech Lead", className: "terminal-string", delay: 30 },
  { type: "output" as const, text: `# ${new Date().getFullYear() - 2018}+ years · fintech · full-stack · cloud`, className: "terminal-comment", delay: 20 },
  { type: "command" as const, prompt: "$", keyword: "cat stack.json", delay: 60 },
  { type: "output" as const, text: "{ react, node, typescript, aws, postgres }", className: "terminal-string", delay: 30 },
  { type: "command" as const, prompt: "$", keyword: "echo $STATUS", delay: 60 },
  { type: "output" as const, text: "open to opportunities", className: "terminal-string", delay: 30 },
];

// ─── Timeline / Experience ───────────────────────────────────
export const TIMELINE = [
  {
    id: 1,
    title: "Software Engineer",
    company: "3vGeomatics (Orica Digital Solutions)",
    location: "Vancouver, BC",
    period: "Jul 2025 – Present",
    year: "2025",
    description:
      "Own observability infrastructure and drive platform modernization across Motionary and Agora geospatial monitoring platforms.",
    achievements: [
      "Built PostHog analytics and Sentry error tracking from the ground up for full observability ownership",
      "Led the React 17 to 19 upgrade, migrating 120+ components to TypeScript, reworking the charting library, and eliminating rendering bugs",
      "Designed and shipped GDPR-compliant user consent system end-to-end",
      "Driving core vector layer optimization for ArcGIS map performance",
    ],
    type: "current" as const,
    category: "work" as const,
  },
  {
    id: 2,
    title: "Chief Technology Officer",
    company: "Remittor AI",
    location: "Surrey, BC",
    period: "Dec 2023 – Nov 2025",
    year: "2023",
    description:
      "Built the entire technology organization from zero, owning every technical decision, shipping the full product suite, and solving complex cross-border compliance challenges serving 10,000+ users across 4 countries.",
    achievements: [
      "Designed and shipped end-to-end: transaction engine, admin portal, client portal, dashboards, and marketing site",
      "Architected cross-border compliance and data residency systems across multiple jurisdictions",
      "Owned GDPR user consent framework from architecture through production",
      "Reduced property sale processing time by 60% through automated workflows",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    company: "Unleashd Technologies",
    location: "British Columbia, Canada",
    period: "Jan 2022 – Jul 2025",
    year: "2022",
    description:
      "Owned key platform systems including the monolith-to-microservices migration, data ingestion pipelines, and vehicle decoding services while modernizing the frontend component library.",
    achievements: [
      "Owned the monolith-to-microservices migration, cutting data acquisition costs by 65%",
      "Built the File Mapper and data ingestion pipelines, directly contributing to doubling client acquisition",
      "Led the modernization of the internal UI component library, adopted across all product teams",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    company: "Four Eyes Financial",
    location: "Saint John, NB",
    period: "Jul 2020 – Jan 2022",
    year: "2020",
    description:
      "Built a full fintech CRM platform with real-time video conferencing and interactive financial dashboards using the MERN stack.",
    achievements: [
      "Built a CRM platform using the MERN stack, automating financial advisory workflows",
      "Integrated WebRTC and AWS Chime video conferencing for real-time client-advisor interactions",
      "Developed interactive financial dashboards with D3.js and Recharts for portfolio analytics",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 5,
    title: "Full-Stack Developer",
    company: "NB Innovation Foundation",
    location: "Fredericton, NB",
    period: "May 2019 – Aug 2019",
    year: "2019",
    description:
      "Designed and developed a web-based CRM platform using MERN stack to streamline financial processes.",
    achievements: [
      "Built CRM platform from scratch using MERN stack",
      "Integrated 3rd party APIs for technically challenging features",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 6,
    title: ".NET Developer",
    company: "CGI",
    location: "Fredericton, NB",
    period: "Jan 2018 – Aug 2018",
    year: "2018",
    description:
      "Enhanced product functionality and developed new modules using ASP.NET, C#, JavaScript, HTML, and CSS.",
    achievements: [
      "Developed new application modules replacing outdated UI",
      "Created SQL queries and stored procedures using SQL Server 2016",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 7,
    title: "Co-op Roles",
    company: "Irving Oil",
    location: "Saint John, NB",
    period: "2016 – 2017",
    year: "2016",
    description:
      "Assistant Project Manager and QA/BI Analyst roles: coordinated operations, developed corrective action plans, and designed test cases.",
    achievements: [
      "Managed day-to-day business operations across technical and management teams",
      "Developed QA strategies to improve product reliability",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 8,
    title: "BSc Software Engineering",
    company: "University of New Brunswick",
    location: "Fredericton, NB",
    period: "Sep 2014 – Apr 2020",
    year: "2014",
    description:
      "Comprehensive software engineering education with co-op certification and biomedical engineering minor.",
    achievements: [
      "Co-op Certification Program",
      "Minor in Biomedical Engineering",
    ],
    type: "completed" as const,
    category: "education" as const,
  },
];

// ─── Tech Stack ──────────────────────────────────────────────
export interface TechCategory {
  title: string;
  sectionIcon: IconType;
  colorClass: string;
  technologies: { name: string; icon: IconType; color: string }[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend",
    sectionIcon: LuCode,
    colorClass: "cat-frontend",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Backend",
    sectionIcon: LuServer,
    colorClass: "cat-backend",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Serverless", icon: SiServerless, color: "#FD5750" },
    ],
  },
  {
    title: "Cloud & DevOps",
    sectionIcon: LuCloud,
    colorClass: "cat-cloud",
    technologies: [
      { name: "AWS", icon: SiServerless, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD", icon: SiGitlab, color: "#FC6D26" },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    ],
  },
  {
    title: "AI & Dev Tools",
    sectionIcon: LuCpu,
    colorClass: "cat-ai",
    technologies: [
      { name: "OpenAI", icon: SiOpenai, color: "" },
      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
      { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
      { name: "Playwright", icon: PlaywrightIcon, color: "#2EAD33" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export const TECH_STATS = [
  { icon: LuCode, label: "Languages", value: 4 },
  { icon: LuLayers, label: "Frameworks", value: 15 },
  { icon: LuCloud, label: "Cloud Services", value: 10 },
  { icon: LuShield, label: "Years Exp.", value: new Date().getFullYear() - 2018 },
];

// ─── Projects ────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Regent Motel",
    image: "/assets/projects/regent-motel.png",
    description:
      "A modern hotel booking and management platform built with React, TypeScript, and Vite. Features responsive design, booking system, and comprehensive hotel information management.",
    tags: ["React", "TypeScript", "Vite", "Hotel Management", "Booking System"],
    liveUrl: "https://regentmotel.ca",
    githubUrl: "https://github.com/ShivamSabbarwal/regent-motel",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    image: "/assets/projects/portfolio.png",
    description:
      "My personal portfolio website featuring interactive animations, modern UI components, and comprehensive information about my professional journey. Built with React, TypeScript, Framer Motion, and TailwindCSS.",
    tags: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "Portfolio"],
    liveUrl: "https://shivamsabbarwal.dev",
    githubUrl: "https://github.com/ShivamSabbarwal/shivam-sabbarwal-web",
  },
];

// ─── Resume Data ─────────────────────────────────────────────
export const RESUME_HEADER = {
  name: "SHIVAM SABBARWAL",
  title: "Senior Software Engineer | Tech Lead | Ex-CTO",
  contact: {
    phone: PERSONAL.phone,
    email: PERSONAL.email,
    linkedin: "linkedin.com/in/shivamsabbarwal",
    website: PERSONAL.website,
  },
};

export const RESUME_SUMMARY = `Senior Software Engineer and Tech Lead with ${new Date().getFullYear() - 2018}+ years turning product vision into scalable, production-ready systems across fintech, SaaS, and enterprise platforms. I work where products meet technology, building solutions that deliver real value to stakeholders and users while keeping systems reliable, performant, and maintainable. From building an entire technology organization from zero as CTO of a cross-border fintech startup to owning observability infrastructure and leading code modernization of legacy systems at my current role, I bring a consistent track record of meaningful impact: doubling client acquisition, cutting costs by 65%, and shipping platforms serving 10,000+ users across 4 countries. I thrive in environments where engineering leadership, full-stack expertise, and a product-minded approach drive business outcomes.`;

export const RESUME_EXPERIENCE = [
  {
    title: "Software Engineer",
    company: "3vGeomatics (Orica Digital Solutions)",
    location: "Vancouver, BC",
    period: "Jul 2025 – Present",
    achievements: [
      "Own the observability and analytics infrastructure, having designed and implemented PostHog product analytics and Sentry error tracking from the ground up to provide full-stack visibility across the Motionary and Agora platforms",
      "Led a platform-wide React 17 to 19 upgrade, migrating 120+ components to TypeScript, removing legacy code, and reworking the charting library and all custom chart components to eliminate rendering issues",
      "Designed and implemented a GDPR-compliant user consent management system end-to-end, from privacy architecture to production rollout, ensuring regulatory compliance across monitoring applications",
      "Introduced modern developer tooling standards by adopting oxlint and the oxc formatter for faster linting and formatting, and established TypeScript-first coding standards across the frontend codebase",
      "Currently driving core vector layer optimization for ArcGIS map rendering, profiling and re-architecting data pipelines to improve geospatial visualization performance",
    ],
    skills: ["React 19", "TypeScript", "Redux Toolkit", "ESRI/ArcGIS", "PostHog", "Sentry", "Docker", "AWS"],
  },
  {
    title: "Chief Technology Officer (CTO)",
    company: "Remittor AI",
    location: "Surrey, BC",
    period: "Dec 2023 – Nov 2025",
    achievements: [
      "Built the entire technology organization from zero, owning every technical decision from system architecture to deployment strategy and serving 10,000+ NRIs across India, Canada, USA, and Australia",
      "Designed and shipped the full product suite end-to-end, including the automated cross-border transaction engine, admin portal, client portal, real-time data dashboards, and marketing website",
      "Architected cross-border compliance systems handling international money transfers and overseas property sales, solving complex regulatory challenges around multi-jurisdiction tax compliance and integrating directly with ICICI Bank and HDFC Bank APIs",
      "Owned the data residency strategy, designing systems to store financial user data in jurisdiction-appropriate data centers and ensuring compliance with international data sovereignty requirements",
      "Designed and implemented a GDPR-compliant user consent framework from architecture through production, establishing privacy-by-design patterns across all customer-facing applications",
      "Established engineering standards, CI/CD pipelines (Docker + Kubernetes), code review processes, and scalable deployment infrastructure that reduced property sale processing time by 60%",
    ],
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes", "TypeScript", "Banking APIs", "System Design", "Compliance"],
  },
  {
    title: "Senior Software Engineer",
    company: "Unleashd Technologies",
    location: "Vancouver, BC",
    period: "Jan 2022 – Jul 2025",
    achievements: [
      "Owned the monolith-to-microservices migration, defining service boundaries, data contracts, and the migration strategy that cut data acquisition costs by 65%",
      "Owned the data ingestion pipeline (ETL) and File Mapper platform, building an unstructured CSV ingestion engine that enabled multi-source data integration and directly contributed to doubling client acquisition",
      "Owned the vehicle decoding services, building and maintaining reliable decoding pipelines that supported core product functionality across the platform",
      "Led the improvement and modernization of the internal UI component library, rebuilding it on Radix UI Primitives with TailwindCSS and establishing component standards adopted across all product teams",
      "Developed the Smart Customer Segments platform for real-time audience targeting, delivering a key feature that improved client engagement and acquisition metrics",
    ],
    skills: ["React", "Redux", "Node.js", "AWS", "PostgreSQL", "WebSockets", "Python", "Django", "Express.js", "TailwindCSS"],
  },
  {
    title: "Full-Stack Developer",
    company: "Four Eyes Financial",
    location: "Saint John, NB",
    period: "Jul 2020 – Jan 2022",
    achievements: [
      "Built a full-featured CRM platform using the MERN stack, automating end-to-end financial workflows for the advisory team",
      "Integrated WebRTC and AWS Chime video conferencing into the CRM, enabling seamless real-time client-advisor interactions",
      "Developed interactive financial dashboards using D3.js, Recharts, and Ant Design, giving clients real-time visibility into portfolio performance and analytics",
      "Optimized a financial analytics microservice by improving data processing pipelines, visualization performance, and reducing dashboard load times",
    ],
    skills: ["React", "Node.js", "Python", "AWS", "WebRTC", "MongoDB", "Express.js", "Flask", "D3.js"],
  },
];

export const RESUME_SKILLS: Record<string, string[]> = {
  Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "React Native"],
  Backend: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Serverless"],
  "Cloud & DevOps": ["AWS", "Vercel", "Cloudflare", "Docker", "CI/CD", "Terraform", "Kubernetes"],
  "AI & Dev Tools": ["OpenAI API", "LangChain", "Vitest", "Jest", "Playwright", "Git", "Figma"],
};

export const RESUME_EDUCATION = {
  degree: "Bachelor's in Software Engineering",
  school: "University of New Brunswick",
  location: "Fredericton, NB",
  graduationDate: "Apr 2020",
  highlights: ["Co-op Certification", "Minor in Biomedical Engineering"],
};
