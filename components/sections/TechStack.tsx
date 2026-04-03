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

  const TechItem = ({ name, icon, description }: { name: string; icon: IconSvgElement; description: string }) => (
    <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
      <div className="w-8 h-8 bg-primary/8 rounded-lg flex items-center justify-center shrink-0">
        <HugeiconsIcon icon={icon} className="w-4 h-4 text-primary/70" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm text-foreground truncate">{name}</h4>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="tech-stack" className="py-20 sm:py-28 bg-secondary/30 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and frameworks that power scalable, innovative applications.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="angular-card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <HugeiconsIcon icon={category.icon} className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-sans">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {category.technologies.length} technologies
                  </p>
                </div>
              </div>

              {/* Technologies List */}
              <div className="space-y-0.5">
                {category.technologies.map((tech) => (
                  <TechItem
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    description={tech.description}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: SourceCodeIcon, label: "Languages", value: "4+" },
            { icon: Layers01Icon, label: "Frameworks", value: "15+" },
            { icon: CloudIcon, label: "Cloud Services", value: "10+" },
            { icon: Shield01Icon, label: "Years Experience", value: "7+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center angular-card p-5"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <HugeiconsIcon icon={stat.icon} className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-semibold text-primary mb-1 font-sans">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
