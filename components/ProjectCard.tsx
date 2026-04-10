"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image?: string;
    description: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
  isAlternating?: boolean;
}

const ProjectCard = ({ project, index, isAlternating = false }: ProjectCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
  );

  const handleMouseMove = (e: MouseEvent) => {
    const rect = tiltRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`flex flex-col ${isAlternating ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
    >
      {/* Browser mockup frame with 3D tilt */}
      <motion.div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="flex-1 relative w-full group"
      >
        <div className="surface-card overflow-hidden relative">
          {/* Glare overlay */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100"
            style={{ background: glareBackground }}
          />
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
          <div className="h-52 md:h-64 lg:h-72 relative overflow-hidden bg-muted">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-primary/8 via-accent/5 to-primary/3 flex items-center justify-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-primary/20 tracking-tight italic">
                  {project.title}
                </h3>
              </div>
            )}
          </div>
        </div>
      </motion.div>

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
            <LuExternalLink className="w-4 h-4" />
            View Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <LuGithub className="w-4 h-4" />
            Source Code
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
