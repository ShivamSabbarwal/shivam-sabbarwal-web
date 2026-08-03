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
  LuBoxes,
  LuGitPullRequest,
  LuUsers,
  LuChartLine,
} from "react-icons/lu";

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
  portrait: "/assets/profile-pic.jpg",
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
      "Working on Cardata Cloud and driver apps for managed vehicle reimbursement.",
    achievements: [
      "Building features for FAVR, CPM, and TFCA reimbursement programs",
      "Working across mileage capture, reimbursement administration, and enterprise reporting",
      "Turning fleet policy and compliance requirements into tested product behavior",
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
      "Modernized Motionary and Agora across observability, privacy, TypeScript, and map performance.",
    achievements: [
      "Established PostHog analytics and Sentry error tracking across both production platforms",
      "Led the React 17 to 19 upgrade, migrating 120+ components to TypeScript and reworking the charting stack to resolve rendering failures",
      "Designed and shipped a GDPR consent system across both products, from privacy architecture through production rollout",
      "Profiled and reworked the ArcGIS vector-layer pipeline to improve performance in data-heavy map views",
      "Introduced oxlint, oxc, and TypeScript-first conventions for faster, more consistent feedback",
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
      "Led technology for a regulated cross-border fintech serving 10,000+ users in four countries.",
    achievements: [
      "Shipped the transaction engine, admin and client portals, real-time dashboards, and marketing site",
      "Designed compliance and data residency controls for international transfers and overseas property sales",
      "Integrated ICICI Bank and HDFC Bank APIs to move regulated money across borders in production",
      "Set hiring, code review, CI/CD, and deployment standards",
      "Shipped automation that reduced property-sale processing time by 60%",
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
      "Reworked the platform’s services, data ingestion, and shared UI foundations.",
    achievements: [
      "Led the monolith to microservices migration, cutting data acquisition costs by 65%",
      "Built the File Mapper and ETL ingestion platform, helping double client acquisition",
      "Owned vehicle decoding services that supported core workflows across the platform",
      "Rebuilt the shared UI library on Radix and Tailwind",
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
      "Built CRM features for financial advisors, including live meetings and portfolio analytics.",
    achievements: [
      "Built core workflows for a MERN-based financial-advisory CRM",
      "Integrated WebRTC and AWS Chime so advisors and clients could meet inside the product",
      "Shipped portfolio dashboards with D3.js and Recharts",
      "Optimized a financial analytics microservice to improve data processing and dashboard response times",
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
      "Created a web CRM for New Brunswick’s innovation foundation.",
    achievements: [
      "Built the CRM platform from the ground up on the MERN stack",
      "Integrated third-party services into core product workflows",
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
      "Modernized enterprise application modules with ASP.NET and C#.",
    achievements: [
      "Replaced outdated user interfaces with maintainable application modules",
      "Built SQL queries and stored procedures on SQL Server 2016 to support product workflows",
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
      "Worked across project coordination, QA, and business intelligence.",
    achievements: [
      "Coordinated day-to-day operations across technical and management stakeholders",
      "Developed test strategies and corrective plans to improve product reliability",
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
      "Completed a software engineering degree alongside co-op placements and a minor in biomedical engineering.",
    achievements: ["Co-op education program", "Minor in Biomedical Engineering"],
    type: "completed" as const,
    category: "education" as const,
  },
];

// ─── Capabilities ────────────────────────────────────────────
// Leadership practices first (what he owns), then tech categories as evidence.
// Keep facts aligned with TIMELINE / resume; do not invent metrics here.

export const CAPABILITY_PRACTICES = [
  {
    title: "Architecture ownership",
    description:
      "Shape platforms end to end: service boundaries, data contracts, privacy architecture, and the cutovers that stick.",
    icon: LuBoxes,
  },
  {
    title: "Delivery systems",
    description:
      "Stand up CI/CD, containers, and deployment practice so shipping stays repeatable under production pressure.",
    icon: LuGitPullRequest,
  },
  {
    title: "Team standards",
    description:
      "Set hiring, code review, and TypeScript-first conventions that tighten feedback without slowing the product.",
    icon: LuUsers,
  },
  {
    title: "Tech to outcomes",
    description:
      "Connect engineering work to cost, compliance, and growth: clearer product behavior and measurable operating results.",
    icon: LuChartLine,
  },
] as const;

export interface TechCategory {
  title: string;
  description: string;
  sectionIcon: IconType;
  colorClass: string;
  technologies: { name: string; icon: IconType; color: string }[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Product interfaces",
    description:
      "Own shared UI foundations and modernization so complex products stay clear as teams and requirements grow.",
    sectionIcon: LuCode,
    colorClass: "cat-frontend",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Services and data",
    description:
      "Lead APIs, data flows, and migrations that turn business rules into reliable systems teams can build on.",
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
    title: "Delivery and infrastructure",
    description:
      "Build the delivery systems teams rely on: repeatable deploys, operable production, and clear ownership of the path to ship.",
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
    title: "Engineering practice",
    description:
      "Raise the bar with testing, observability, tooling, and practical AI so feedback stays fast and standards hold.",
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

// ─── Independent projects (craft signal, not the hiring centerpiece) ──
export const PROJECTS = [
  {
    id: 1,
    title: "Regent Motel",
    image: "/assets/projects/regent-motel.png",
    description:
      "A production website for a working motel. Room details and direct reservations stay clear across devices, backed by a typed React component system.",
    tags: ["React", "TypeScript", "Vite", "Responsive UI"],
    liveUrl: "https://regentmotel.ca",
    githubUrl: "https://github.com/ShivamSabbarwal/regent-motel",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    image: "/assets/projects/portfolio-site-light.png",
    imageDark: "/assets/projects/portfolio-site-dark.png",
    description:
      "This site: a server-first Next.js portfolio with focused client boundaries, shared motion tokens, and a layout that holds up from phone to desktop.",
    tags: ["Next.js", "TypeScript", "Motion", "Tailwind CSS"],
    liveUrl: "https://shivamsabbarwal.dev",
    githubUrl: "https://github.com/ShivamSabbarwal/shivam-sabbarwal-web",
  },
];

// ─── Resume Data ─────────────────────────────────────────────
// Two variants of the same career, aimed at two different hiring bars. The
// facts, employers, dates, and metrics are identical; only emphasis and
// ordering change. `engineer` leads with systems depth, `leader` leads with
// ownership and delivery.
const YEARS_EXPERIENCE = new Date().getFullYear() - 2018;

export const RESUME_HEADER = {
  name: "SHIVAM SABBARWAL",
  contact: {
    phone: PERSONAL.phone,
    email: PERSONAL.email,
    linkedin: "linkedin.com/in/shivamsabbarwal",
    website: PERSONAL.website,
  },
};

export const RESUME_EDUCATION = {
  degree: "Bachelor's in Software Engineering",
  school: "University of New Brunswick",
  location: "Fredericton, NB",
  graduationDate: "Apr 2020",
  highlights: ["Co-op education program", "Minor in Biomedical Engineering"],
};

export interface ResumeRole {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  skills: string[];
}

export interface ResumeVariant {
  label: string;
  headline: string;
  summary: string;
  experience: ResumeRole[];
  skills: Record<string, string[]>;
}

export type ResumeVariantKey = "engineer" | "leader";

const ENGINEER: ResumeVariant = {
  label: "Software engineer",
  headline: "Senior Software Engineer | Platform and Product Systems",
  summary: `Software engineer with ${YEARS_EXPERIENCE}+ years building and modernizing production systems across SaaS, fintech, geospatial, and enterprise products. Comfortable owning a feature from database schema to interface, and just as comfortable untangling a platform that has outgrown its original design: a 120+ component TypeScript migration, observability built from nothing, and a service migration that cut data acquisition costs by 65%. Previously CTO of a regulated cross-border fintech, where I designed and shipped the entire platform serving 10,000+ users in four countries.`,
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Cardata",
      location: "Canada (Remote)",
      period: "Jul 2026 to Present",
      achievements: [
        "Building full-stack features across Cardata Cloud and the driver applications in React, Next.js, NestJS, and PostgreSQL, covering mileage capture, reimbursement administration, and enterprise reporting",
        "Translating FAVR, CPM, and TFCA program rules into tested product behavior that holds up when the regulations change",
        "Working with product, design, and domain experts to turn fleet compliance requirements into maintainable software",
      ],
      skills: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Node.js"],
    },
    {
      title: "Software Engineer",
      company: "3vGeomatics (Orica Digital Solutions)",
      location: "Vancouver, BC",
      period: "Jul 2025 to Jul 2026",
      achievements: [
        "Led the React 17 to 19 upgrade, migrating 120+ components to TypeScript, removing legacy code, and reworking the charting library and custom charts to eliminate rendering failures",
        "Built observability from scratch with PostHog and Sentry, giving both products their first real visibility into user behavior and production errors",
        "Profiled and re-architected ArcGIS vector-layer data flows to fix stalls in data-heavy map views",
        "Designed and shipped GDPR consent management across both products, from data model through production rollout",
        "Introduced oxlint, oxc formatting, and TypeScript-first standards that tightened the feedback loop for the whole frontend codebase",
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
        "Designed and built the full platform: transaction engine, admin and client portals, real-time dashboards, and marketing site, serving 10,000+ users across four countries",
        "Integrated ICICI Bank and HDFC Bank APIs to move regulated money across borders in production",
        "Built multi-jurisdiction compliance and data residency into the architecture so financial records stayed in the right infrastructure",
        "Shipped automation that cut property-sale processing time by 60%",
        "Set up CI/CD on Docker and Kubernetes along with the code review and deployment standards the team worked to",
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
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Unleashd Technologies",
      location: "Vancouver, BC",
      period: "Jan 2022 to Jul 2025",
      achievements: [
        "Led the monolith-to-microservices migration, defining service boundaries and data contracts, cutting data acquisition costs by 65%",
        "Built the File Mapper and ETL ingestion platform for unstructured CSV data, enabling multi-source integrations that helped double client acquisition",
        "Owned the vehicle decoding services and data pipelines behind core platform workflows",
        "Rebuilt the shared UI library on Radix UI and Tailwind CSS, establishing patterns adopted across product teams",
        "Shipped Smart Customer Segments for real-time audience targeting",
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
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Four Eyes Financial",
      location: "Saint John, NB",
      period: "Jul 2020 to Jan 2022",
      achievements: [
        "Built core workflows for a MERN CRM used daily by financial advisors",
        "Integrated WebRTC and AWS Chime so advisors and clients could meet in real time inside the product",
        "Built interactive portfolio analytics with D3.js and Recharts",
        "Optimized a Python analytics microservice to speed up data processing and dashboard loads",
      ],
      skills: ["React", "Node.js", "Python", "AWS", "WebRTC", "MongoDB", "D3.js"],
    },
  ],
  skills: {
    Languages: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "React Native"],
    "Backend and data": ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "Redis", "REST APIs"],
    Infrastructure: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Vercel"],
    "Quality and tooling": ["Vitest", "Jest", "Playwright", "Git", "PostHog", "Sentry"],
  },
};

const LEADER: ResumeVariant = {
  label: "Engineering leader",
  headline: "Engineering Leader | Architecture, Delivery, and Team Building",
  summary: `Engineering leader with ${YEARS_EXPERIENCE}+ years building software and the teams and standards around it. Built and ran the technology function for a regulated cross-border fintech serving 10,000+ users in four countries, owning architecture, delivery, hiring, compliance, and deployment. Equally effective inside established products, where platform work cut data acquisition costs by 65%, helped double client acquisition, and reduced critical processing time by 60%. Still hands-on, because I lead best when I understand the system as well as the team does.`,
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Cardata",
      location: "Canada (Remote)",
      period: "Jul 2026 to Present",
      achievements: [
        "Delivering full-stack product work across Cardata Cloud and the driver applications for FAVR, CPM, and TFCA reimbursement programs",
        "Partnering with product, design, and domain experts to turn fleet policy and compliance requirements into shipped product behavior",
        "Raising delivery quality through code review, testing practice, and pragmatic use of AI-assisted development",
      ],
      skills: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Cross-functional delivery"],
    },
    {
      title: "Software Engineer",
      company: "3vGeomatics (Orica Digital Solutions)",
      location: "Vancouver, BC",
      period: "Jul 2025 to Jul 2026",
      achievements: [
        "Led a platform-wide React 17 to 19 modernization across 120+ components, sequencing the migration alongside ongoing feature delivery",
        "Established observability with PostHog and Sentry, giving the team shared visibility into user behavior and production failures",
        "Owned GDPR consent management end to end, from privacy architecture through production rollout",
        "Set frontend engineering standards with oxlint, oxc, and TypeScript-first conventions adopted across the codebase",
        "Re-architected ArcGIS vector-layer data flows to remove a long-standing performance complaint from customers",
      ],
      skills: [
        "Technical leadership",
        "React 19",
        "TypeScript",
        "Observability",
        "Engineering standards",
        "AWS",
      ],
    },
    {
      title: "Chief Technology Officer (CTO)",
      company: "Remittor AI",
      location: "Surrey, BC",
      period: "Dec 2023 to Nov 2025",
      achievements: [
        "Built and ran the technology function for a regulated cross-border fintech serving 10,000+ users across India, Canada, USA, and Australia",
        "Owned architecture, delivery, hiring, and engineering standards as the company's senior technical decision maker",
        "Directed multi-jurisdiction compliance and data residency strategy for international transfers and overseas property sales, including ICICI Bank and HDFC Bank integrations",
        "Established CI/CD on Docker and Kubernetes plus the code review and deployment practices the team worked to; automation cut property-sale processing time by 60%",
        "Shipped the full product suite: transaction engine, admin and client portals, real-time dashboards, and marketing site",
      ],
      skills: [
        "Technology strategy",
        "Team building",
        "Architecture",
        "Compliance",
        "CI/CD",
        "Kubernetes",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Unleashd Technologies",
      location: "Vancouver, BC",
      period: "Jan 2022 to Jul 2025",
      achievements: [
        "Led the monolith-to-microservices migration, setting service boundaries, data contracts, and cutover strategy, cutting data acquisition costs by 65%",
        "Delivered the File Mapper and ETL ingestion platform, enabling multi-source integrations that helped double client acquisition",
        "Drove modernization of the shared UI library, establishing component standards used across every product team",
        "Owned the vehicle decoding services underpinning core platform workflows",
      ],
      skills: [
        "Migration strategy",
        "System design",
        "React",
        "Node.js",
        "AWS",
        "PostgreSQL",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Four Eyes Financial",
      location: "Saint John, NB",
      period: "Jul 2020 to Jan 2022",
      achievements: [
        "Built core workflows for a MERN CRM supporting financial advisors and their clients",
        "Integrated WebRTC and AWS Chime for real-time advisor and client meetings inside the product",
        "Delivered interactive portfolio analytics with D3.js and Recharts",
      ],
      skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    },
  ],
  skills: {
    Leadership: [
      "Technical strategy",
      "Architecture",
      "Engineering standards",
      "Hiring",
      "Code review",
      "Cross-functional delivery",
    ],
    "Product and platform": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
    ],
    "Delivery and infrastructure": ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    Domain: ["Regulated fintech", "Compliance", "Data residency", "Observability", "Geospatial"],
  },
};

export const RESUME_VARIANTS: Record<ResumeVariantKey, ResumeVariant> = {
  engineer: ENGINEER,
  leader: LEADER,
};
