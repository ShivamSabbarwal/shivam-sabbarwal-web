"use client";

import { motion } from "motion/react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  SourceCodeIcon,
  Database01Icon,
  CloudIcon,
  CpuIcon,
  GitBranchIcon,
  Shield01Icon,
  ZapIcon,
  Layers01Icon,
  TerminalIcon,
  ServerStack01Icon,
  File01Icon,
  ColorsIcon,
  ComputerIcon,
  SmartPhone01Icon,
  GitCommitIcon,
  SourceCodeSquareIcon,
  TestTube01Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: SourceCodeIcon,
      span: "lg:col-span-2",
      technologies: [
        { name: "React", icon: SourceCodeSquareIcon, description: "Component architecture" },
        { name: "TypeScript", icon: File01Icon, description: "Type-safe development" },
        { name: "Next.js", icon: Layers01Icon, description: "Full-stack framework" },
        { name: "Tailwind CSS", icon: ColorsIcon, description: "Utility-first styling" },
        { name: "Framer Motion", icon: ZapIcon, description: "Animations" },
        { name: "Vite", icon: TerminalIcon, description: "Build tool" },
        { name: "React Native", icon: SmartPhone01Icon, description: "Cross-platform mobile" },
      ],
    },
    {
      title: "Backend",
      icon: ServerStack01Icon,
      span: "",
      technologies: [
        { name: "Node.js", icon: TerminalIcon, description: "JavaScript runtime" },
        { name: "Python", icon: SourceCodeSquareIcon, description: "Django & FastAPI" },
        { name: "Go", icon: SourceCodeIcon, description: "Cloud-native development" },
        { name: "PostgreSQL", icon: Database01Icon, description: "Relational database" },
        { name: "MongoDB", icon: Database01Icon, description: "NoSQL database" },
        { name: "Redis", icon: ZapIcon, description: "Caching" },
        { name: "Serverless", icon: CloudIcon, description: "Serverless Framework" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: CloudIcon,
      span: "",
      technologies: [
        { name: "AWS", icon: CloudIcon, description: "Cloud infrastructure" },
        { name: "Vercel", icon: CloudIcon, description: "Frontend deployment" },
        { name: "Cloudflare", icon: CloudIcon, description: "CDN & security" },
        { name: "Docker", icon: ServerStack01Icon, description: "Containerization" },
        { name: "CI/CD", icon: GitBranchIcon, description: "GitLab & Bitbucket" },
        { name: "Terraform", icon: Wrench01Icon, description: "Infrastructure as code" },
        { name: "Kubernetes", icon: Layers01Icon, description: "Container orchestration" },
      ],
    },
    {
      title: "AI & Dev Tools",
      icon: CpuIcon,
      span: "lg:col-span-2",
      technologies: [
        { name: "OpenAI API", icon: ZapIcon, description: "GPT integration" },
        { name: "LangChain", icon: GitBranchIcon, description: "LLM framework" },
        { name: "Testing", icon: TestTube01Icon, description: "Vitest, Jest, Cypress" },
        { name: "Playwright", icon: TestTube01Icon, description: "Cross-browser testing" },
        { name: "Git", icon: GitCommitIcon, description: "Version control" },
        { name: "Figma", icon: ColorsIcon, description: "Design & prototyping" },
        { name: "VS Code", icon: ComputerIcon, description: "Development environment" },
      ],
    },
  ];

  const TechItem = ({ name, icon, description, wide }: { name: string; icon: IconSvgElement; description: string; wide?: boolean }) => (
    <div className={`flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors duration-200 ${wide ? "" : ""}`}>
      <div className="w-8 h-8 bg-primary/8 rounded-lg flex items-center justify-center shrink-0">
        <HugeiconsIcon icon={icon} className="w-4 h-4 text-primary/70" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm text-foreground">{name}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="tech-stack" className="py-20 sm:py-28 relative">
      {/* Subtle section glow */}
      <div className="section-glow absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            Tech <span className="text-primary italic">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and frameworks powering scalable, innovative applications.
          </p>
          <div className="accent-line w-24 mx-auto mt-6" />
        </motion.div>

        {/* Bento Grid — 3 columns on lg, asymmetric spans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`surface-card p-6 ${category.span}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center border border-primary/10">
                  <HugeiconsIcon icon={category.icon} className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-sans">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {category.technologies.length} technologies
                  </p>
                </div>
              </div>

              {/* Technologies — wide cards use 2-col grid, narrow use list */}
              <div className={category.span ? "grid grid-cols-1 sm:grid-cols-2 gap-0.5" : "space-y-0.5"}>
                {category.technologies.map((tech) => (
                  <TechItem
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    description={tech.description}
                    wide={!!category.span}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats — compact row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { icon: SourceCodeIcon, label: "Languages", value: "4+" },
            { icon: Layers01Icon, label: "Frameworks", value: "15+" },
            { icon: CloudIcon, label: "Cloud Services", value: "10+" },
            { icon: Shield01Icon, label: "Years Exp.", value: "7+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <HugeiconsIcon icon={stat.icon} className="w-4 h-4 text-primary/60" />
                <span className="text-3xl font-semibold text-primary font-sans">{stat.value}</span>
              </div>
              <span className="text-xs text-muted-foreground tracking-wide">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
