"use client";

import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare02Icon, GithubIcon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
  isAlternating?: boolean;
}

const ProjectCard = ({ project, index, isAlternating = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`flex flex-col ${isAlternating ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
    >
      {/* Browser mockup frame */}
      <div className="flex-1 relative w-full">
        <div className="surface-card overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-secondary/60 rounded-md px-3 py-1 text-[10px] text-muted-foreground font-mono truncate max-w-xs mx-auto text-center">
                {project.liveUrl.replace("https://", "")}
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="h-52 md:h-64 lg:h-72 bg-linear-to-br from-primary/6 via-accent/4 to-primary/2 flex items-center justify-center relative">
            <div className="text-center px-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-primary/25 tracking-tight italic">
                {project.title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex-1 space-y-5">
        <motion.div
          initial={{ opacity: 0, x: isAlternating ? 16 : -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-normal tracking-tight mb-3">
            {project.title}
          </h3>
          <div className="accent-line w-16 mb-4" />
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium px-2.5 py-0.5">
              {tag}
            </Badge>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 pt-1"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <HugeiconsIcon icon={LinkSquare02Icon} className="w-4 h-4" />
            View Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <HugeiconsIcon icon={GithubIcon} className="w-4 h-4" />
            Source Code
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
