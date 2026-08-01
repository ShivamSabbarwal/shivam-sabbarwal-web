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
import { LuCode, LuServer, LuCloud, LuCpu, LuShield, LuLayers } from "react-icons/lu";

// ─── Personal Info ───────────────────────────────────────────
export const PERSONAL = {
  name: "Shivam Sabbarwal",
  title: "Engineering leader",
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

// ─── Timeline / Experience ───────────────────────────────────
// The career numbers live here, inside the role that produced them.
export const TIMELINE = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Cardata",
    location: "Canada (Remote)",
    period: "Jul 2026 to Present",
    year: "2026",
    description:
      "Building Cardata’s vehicle reimbursement platform: the system enterprises run their mileage, payments, and fleet programs on.",
    achievements: [
      "Joined to strengthen full-stack delivery across Cardata Cloud and the driver apps behind IRS-compliant programs (FAVR, CPM, TFCA)",
      "Working in React, Next.js, NestJS, and PostgreSQL on mileage capture, admin operations, and enterprise reporting",
      "Turning fleet compliance rules into software that survives the next rule change",
      "Holding the bar through code review, testing discipline, and AI-assisted development",
    ],
    type: "current" as const,
    category: "work" as const,
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "3vGeomatics (Orica Digital Solutions)",
    location: "Vancouver, BC",
    period: "Jul 2025 to Jul 2026",
    year: "2025",
    description:
      "Ran observability and platform modernization across the Motionary and Agora geospatial products, from the first analytics event to a full React upgrade.",
    achievements: [
      "Built PostHog analytics and Sentry error tracking from nothing, then kept both production platforms instrumented",
      "Led the React 17 to 19 upgrade: 120+ components moved to TypeScript, charting stack reworked, systemic rendering bugs gone",
      "Designed a GDPR consent system for both products and carried it from privacy architecture to production rollout",
      "Profiled and re-cut the ArcGIS vector-layer pipeline so heavy geospatial scenes stopped stalling the map",
      "Set the frontend standard with oxlint/oxc tooling and TypeScript-first conventions the codebase still follows",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 3,
    title: "Chief Technology Officer",
    company: "Remittor AI",
    location: "Surrey, BC",
    period: "Dec 2023 to Nov 2025",
    year: "2023",
    description:
      "Built the engineering function from zero for a cross-border fintech serving 10,000+ users in four countries, and answered for all of it: architecture, delivery, compliance, and standards.",
    achievements: [
      "Stood up the whole product suite: transaction engine, admin portal, client portal, real-time dashboards, and marketing site",
      "Architected multi-jurisdiction compliance and data residency for international money transfers and overseas property sales",
      "Integrated ICICI Bank and HDFC Bank APIs to move regulated money across borders in production",
      "Made privacy by design the default, from the consent framework to where financial data was allowed to live",
      "Put CI/CD (Docker and Kubernetes), code review, and deploy standards in place, cutting property-sale processing time by 60%",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 4,
    title: "Senior Software Engineer",
    company: "Unleashd Technologies",
    location: "British Columbia, Canada",
    period: "Jan 2022 to Jul 2025",
    year: "2022",
    description:
      "Owned the pieces the platform could not run without: the microservices migration, data ingestion, and the frontend standard every product team built on.",
    achievements: [
      "Led the monolith to microservices migration, from service boundaries and data contracts through cutover, cutting data acquisition cost by 65%",
      "Built the File Mapper and ETL ingestion platform, which opened up multi-source integration and helped double client acquisition",
      "Ran the vehicle decoding services the rest of the product depended on",
      "Rebuilt the internal UI component library on Radix and Tailwind, and every product team adopted it",
      "Shipped Smart Customer Segments for real-time audience targeting",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 5,
    title: "Full-Stack Developer",
    company: "Four Eyes Financial",
    location: "Saint John, NB",
    period: "Jul 2020 to Jan 2022",
    year: "2020",
    description:
      "Delivered a fintech CRM with live video and portfolio analytics, the screens advisors sat in all day.",
    achievements: [
      "Built a MERN CRM that automated financial advisory workflows end to end",
      "Integrated WebRTC and AWS Chime so advisors and clients could meet inside the product",
      "Shipped interactive portfolio dashboards with D3.js and Recharts for live performance analytics",
      "Optimized a financial analytics microservice for higher throughput and faster dashboard loads",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 6,
    title: "Full-Stack Developer",
    company: "NB Innovation Foundation",
    location: "Fredericton, NB",
    period: "May 2019 to Aug 2019",
    year: "2019",
    description:
      "Built a web CRM on the MERN stack for the financial and operational processes behind an innovation ecosystem.",
    achievements: [
      "Built the CRM platform from scratch on the MERN stack",
      "Integrated third-party APIs for the trickier product features",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 7,
    title: ".NET Developer",
    company: "CGI",
    location: "Fredericton, NB",
    period: "Jan 2018 to Aug 2018",
    year: "2018",
    description:
      "Rebuilt enterprise product modules and the dated interfaces around them in ASP.NET and C#.",
    achievements: [
      "Developed application modules that replaced outdated user interfaces",
      "Authored SQL queries and stored procedures on SQL Server 2016",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 8,
    title: "Co-op Roles",
    company: "Irving Oil",
    location: "Saint John, NB",
    period: "2016 to 2017",
    year: "2016",
    description:
      "First run at cross-functional delivery as Assistant Project Manager and QA/BI Analyst, coordinating operations, corrective plans, and test strategy.",
    achievements: [
      "Coordinated day-to-day operations across technical and management stakeholders",
      "Developed QA strategies that improved product reliability",
    ],
    type: "previous" as const,
    category: "work" as const,
  },
  {
    id: 9,
    title: "BSc Software Engineering",
    company: "University of New Brunswick",
    location: "Fredericton, NB",
    period: "Sep 2014 to Apr 2020",
    year: "2014",
    description:
      "Software engineering degree taken alongside co-op placements, with a biomedical engineering minor on the side.",
    achievements: ["Co-op education program", "Minor in Biomedical Engineering"],
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
      "Booking and operations platform for a working motel. Guests reserve rooms, staff manage rates and content, and the whole thing runs without a support team behind it.",
    tags: ["React", "TypeScript", "Vite", "Hotel Management", "Booking System"],
    liveUrl: "https://regentmotel.ca",
    githubUrl: "https://github.com/ShivamSabbarwal/regent-motel",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    image: "/assets/projects/portfolio-light.png",
    imageDark: "/assets/projects/portfolio-dark.png",
    description:
      "This site. Next.js 16, React 19, and a motion system written by hand, on the theory that a portfolio should demonstrate the craft instead of describing it.",
    tags: ["Next.js", "TypeScript", "Motion", "Tailwind CSS", "Portfolio"],
    liveUrl: "https://shivamsabbarwal.dev",
    githubUrl: "https://github.com/ShivamSabbarwal/shivam-sabbarwal-web",
  },
];

// ─── Resume Data ─────────────────────────────────────────────
export const RESUME_HEADER = {
  name: "SHIVAM SABBARWAL",
  title: "Engineering Leader | Senior Software Engineer",
  contact: {
    phone: PERSONAL.phone,
    email: PERSONAL.email,
    linkedin: "linkedin.com/in/shivamsabbarwal",
    website: PERSONAL.website,
  },
};

export const RESUME_SUMMARY = `Engineering leader and senior software engineer with ${new Date().getFullYear() - 2018}+ years building systems that hold up in production across fintech, geospatial, fleet SaaS, and enterprise platforms. Built an engineering function from zero and answered for the whole stack behind a regulated cross-border payments platform serving 10,000+ users in four countries: architecture, delivery, compliance, observability, and the standards that keep a team fast. Helped double client acquisition, cut data acquisition cost by 65%, and reduced critical processing time by 60%. Currently a Senior Software Engineer at Cardata on an enterprise vehicle reimbursement platform, and targeting Engineering Manager or VP of Engineering scope: growing teams, raising the quality bar, and tying technical strategy to business results.`;

export const RESUME_EXPERIENCE = [
  {
    title: "Senior Software Engineer",
    company: "Cardata",
    location: "Canada (Remote)",
    period: "Jul 2026 to Present",
    achievements: [
      "Building full-stack product capabilities on Cardata’s managed vehicle reimbursement platform, supporting IRS-compliant programs (FAVR, CPM, TFCA) used by enterprises with mobile workforces",
      "Contributing across React, Next.js, NestJS, and PostgreSQL to deliver reliable admin, driver, and reporting workflows for mileage capture, reimbursements, and program operations",
      "Working with product, design, and subject-matter experts to turn fleet compliance and operational complexity into maintainable, production-ready software",
      "Strengthening engineering practice through thoughtful code review, testing, and modern AI-assisted development",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Node.js",
      "System Design",
    ],
  },
  {
    title: "Software Engineer",
    company: "3vGeomatics (Orica Digital Solutions)",
    location: "Vancouver, BC",
    period: "Jul 2025 to Jul 2026",
    achievements: [
      "Owned observability and analytics infrastructure, designing and implementing PostHog product analytics and Sentry error tracking from the ground up across Motionary and Agora",
      "Led a platform-wide React 17 to 19 upgrade, migrating 120+ components to TypeScript, removing legacy code, and reworking the charting library to eliminate rendering failures",
      "Designed and shipped a GDPR-compliant user consent management system end to end, from privacy architecture to production rollout",
      "Introduced modern developer tooling (oxlint, oxc formatter) and TypeScript-first standards that improved frontend consistency and velocity",
      "Drove ArcGIS vector-layer optimization by profiling and re-architecting geospatial data pipelines for faster map rendering",
    ],
    skills: [
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "ESRI/ArcGIS",
      "PostHog",
      "Sentry",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Chief Technology Officer (CTO)",
    company: "Remittor AI",
    location: "Surrey, BC",
    period: "Dec 2023 to Nov 2025",
    achievements: [
      "Built the entire technology organization from zero, owning technical strategy, architecture, and delivery for a cross-border fintech serving 10,000+ NRIs across India, Canada, USA, and Australia",
      "Designed and shipped the full product suite end-to-end: automated transaction engine, admin portal, client portal, real-time dashboards, and marketing website",
      "Architected multi-jurisdiction compliance systems for international money transfers and overseas property sales, integrating ICICI Bank and HDFC Bank APIs",
      "Owned data residency strategy so financial user data stayed in jurisdiction-appropriate infrastructure under sovereignty requirements",
      "Established engineering standards, CI/CD (Docker + Kubernetes), and review culture that reduced property sale processing time by 60%",
    ],
    skills: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "TypeScript",
      "Banking APIs",
      "System Design",
      "Compliance",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Unleashd Technologies",
    location: "Vancouver, BC",
    period: "Jan 2022 to Jul 2025",
    achievements: [
      "Owned the monolith-to-microservices migration, covering service boundaries, data contracts, and migration strategy, which cut data acquisition costs by 65%",
      "Owned the ETL / File Mapper platform, building unstructured CSV ingestion that enabled multi-source integration and helped double client acquisition",
      "Owned vehicle decoding services that supported core product reliability across the platform",
      "Led modernization of the internal UI component library on Radix UI + TailwindCSS, establishing standards adopted across all product teams",
      "Delivered Smart Customer Segments for real-time audience targeting, improving client engagement and acquisition metrics",
    ],
    skills: [
      "React",
      "Redux",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "WebSockets",
      "Python",
      "Django",
      "Express.js",
      "TailwindCSS",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Four Eyes Financial",
    location: "Saint John, NB",
    period: "Jul 2020 to Jan 2022",
    achievements: [
      "Built a full-featured MERN CRM that automated end-to-end financial advisory workflows",
      "Integrated WebRTC and AWS Chime into the CRM so advisors and clients could meet inside the product",
      "Developed interactive financial dashboards with D3.js, Recharts, and Ant Design for portfolio analytics",
      "Optimized a financial analytics microservice to improve data processing and dashboard performance",
    ],
    skills: [
      "React",
      "Node.js",
      "Python",
      "AWS",
      "WebRTC",
      "MongoDB",
      "Express.js",
      "Flask",
      "D3.js",
    ],
  },
];

export const RESUME_SKILLS: Record<string, string[]> = {
  Frontend: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
    "React Native",
  ],
  Backend: ["Node.js", "NestJS", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Serverless"],
  "Cloud & DevOps": ["AWS", "Vercel", "Cloudflare", "Docker", "CI/CD", "Terraform", "Kubernetes"],
  Leadership: [
    "Org building",
    "Technical strategy",
    "Engineering standards",
    "Cross-functional delivery",
    "Mentorship",
    "System design",
  ],
  "AI & Dev Tools": ["OpenAI API", "LangChain", "Vitest", "Jest", "Playwright", "Git", "Figma"],
};

export const RESUME_EDUCATION = {
  degree: "Bachelor's in Software Engineering",
  school: "University of New Brunswick",
  location: "Fredericton, NB",
  graduationDate: "Apr 2020",
  highlights: ["Co-op education program", "Minor in Biomedical Engineering"],
};
