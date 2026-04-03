"use client";

import { motion } from "motion/react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  SourceCodeIcon,
  Database01Icon,
  CloudIcon,
  GlobeIcon,
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
import { useSounds } from "@/lib/audio/sounds";

const TechStack = () => {
  const { playHover } = useSounds();

  const techCategories = [
    {
      title: "Frontend",
      icon: SourceCodeIcon,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary",
      technologies: [
        { name: "React", icon: SourceCodeSquareIcon, description: "Component architecture" },
        { name: "TypeScript", icon: File01Icon, description: "Type-safe development" },
        { name: "Next.js", icon: Layers01Icon, description: "Full-stack framework" },
        { name: "Tailwind CSS", icon: ColorsIcon, description: "Utility-first styling" },
        { name: "Framer Motion", icon: ZapIcon, description: "Animations" },
        { name: "Vite", icon: TerminalIcon, description: "Build tool" },
        { name: "React Native", icon: SmartPhone01Icon, description: "Cross-platform mobile" }
      ]
    },
    {
      title: "Backend",
      icon: ServerStack01Icon,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
      technologies: [
        { name: "Node.js", icon: TerminalIcon, description: "JavaScript runtime" },
        { name: "Python", icon: SourceCodeSquareIcon, description: "Django & FastAPI" },
        { name: "Go", icon: SourceCodeIcon, description: "Cloud-native development" },
        { name: "PostgreSQL", icon: Database01Icon, description: "Relational database" },
        { name: "MongoDB", icon: Database01Icon, description: "NoSQL database" },
        { name: "Redis", icon: ZapIcon, description: "Caching" },
        { name: "Serverless", icon: CloudIcon, description: "Serverless Framework" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: CloudIcon,
      color: "text-cartoon-highlight",
      bgColor: "bg-cartoon-highlight/10",
      borderColor: "border-cartoon-highlight",
      technologies: [
        { name: "AWS", icon: CloudIcon, description: "Cloud infrastructure" },
        { name: "Vercel", icon: CloudIcon, description: "Frontend deployment" },
        { name: "Cloudflare", icon: CloudIcon, description: "CDN & security" },
        { name: "Docker", icon: ServerStack01Icon, description: "Containerization" },
        { name: "CI/CD", icon: GitBranchIcon, description: "GitLab & Bitbucket" },
        { name: "Terraform", icon: Wrench01Icon, description: "Infrastructure as code" },
        { name: "Kubernetes", icon: Layers01Icon, description: "Container orchestration" }
      ]
    },
    {
      title: "AI & Dev Tools",
      icon: CpuIcon,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500",
      technologies: [
        { name: "OpenAI API", icon: ZapIcon, description: "GPT integration" },
        { name: "LangChain", icon: GitBranchIcon, description: "LLM framework" },
        { name: "Testing", icon: TestTube01Icon, description: "Vitest, Jest, Cypress" },
        { name: "Playwright", icon: TestTube01Icon, description: "Cross-browser testing" },
        { name: "Git", icon: GitCommitIcon, description: "Version control" },
        { name: "Figma", icon: ColorsIcon, description: "Design & prototyping" },
        { name: "VS Code", icon: ComputerIcon, description: "Development environment" }
      ]
    }
  ];

  const TechItem = ({ name, icon, description }: { name: string; icon: IconSvgElement; description: string }) => (
    <div
      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200 hover:scale-105 hover:-translate-y-0.5"
    >
      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
        <HugeiconsIcon icon={icon} className="w-4 h-4 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-foreground truncate">{name}</h4>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="tech-stack" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 geometric-bg opacity-5" />

        {/* Floating tech icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center"
        >
          <HugeiconsIcon icon={CpuIcon} className="w-8 h-8 text-primary" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center"
        >
          <HugeiconsIcon icon={Database01Icon} className="w-8 h-8 text-accent" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-20 w-16 h-16 bg-cartoon-highlight/10 rounded-lg flex items-center justify-center"
        >
          <HugeiconsIcon icon={GlobeIcon} className="w-8 h-8 text-cartoon-highlight" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6"
          >
            <span className="cartoon-text-large">Tech Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2"
          >
            A comprehensive toolkit of modern technologies and frameworks that power
            <span className="cartoon-text"> innovative solutions</span> and
            <span className="cartoon-highlight"> scalable applications</span>
          </motion.p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={playHover}
              className="angular-card p-6 space-y-4 min-h-[400px]"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 ${category.bgColor} ${category.borderColor} border-2 rounded-lg flex items-center justify-center`}
                >
                  <HugeiconsIcon icon={category.icon} className={`w-6 h-6 ${category.color}`} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold cartoon-text">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.technologies.length} technologies mastered
                  </p>
                </div>
              </div>

              {/* Technologies List */}
              <div className="space-y-2">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: SourceCodeIcon, label: "Languages", value: "4+" },
            { icon: Layers01Icon, label: "Frameworks", value: "15+" },
            { icon: CloudIcon, label: "Cloud Services", value: "10+" },
            { icon: Shield01Icon, label: "Years Experience", value: "7+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
              onHoverStart={playHover}
              className="text-center angular-card p-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <HugeiconsIcon icon={stat.icon} className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-3xl font-black cartoon-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
