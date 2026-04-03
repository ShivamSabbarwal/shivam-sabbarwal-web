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
      key={project.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`flex flex-col ${isAlternating ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
    >
      {/* Project Visual */}
      <div className="flex-1 relative">
        <div className="w-full h-56 md:h-72 lg:h-80 bg-linear-to-br from-primary/8 via-accent/6 to-primary/4 rounded-2xl relative overflow-hidden border border-border/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-primary/30 tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex-1 space-y-5">
        <motion.div
          initial={{ opacity: 0, x: isAlternating ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-medium px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 pt-2"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <HugeiconsIcon icon={LinkSquare02Icon} className="w-4 h-4" />
            <span>View Live</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <HugeiconsIcon icon={GithubIcon} className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
