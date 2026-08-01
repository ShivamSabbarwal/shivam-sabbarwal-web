"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import { useTheme } from "@/contexts/ThemeContext";
import { DURATION, EASE_OUT, VIEWPORT } from "@/lib/motion";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image?: string;
    imageDark?: string;
    description: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
  isAlternating?: boolean;
}

const ProjectCard = ({ project, index, isAlternating = false }: ProjectCardProps) => {
  const { theme, isHydrated } = useTheme();
  const reduceMotion = useReducedMotion();
  const activeImage =
    isHydrated && theme === "dark" && project.imageDark ? project.imageDark : project.image;
  const tiltRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.14) 0%, transparent 60%)`,
  );

  const handleMouseMove = (e: MouseEvent) => {
    if (reduceMotion) return;
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
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow, delay: index * 0.1, ease: EASE_OUT }}
      viewport={VIEWPORT}
      className={`flex flex-col ${
        isAlternating ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 lg:gap-16`}
    >
      <motion.div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
        className="group relative w-full flex-1"
      >
        <div className="panel relative overflow-hidden">
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100"
            style={{ background: glareBackground }}
          />

          <div className="border-border flex items-center gap-2 border-b px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="bg-accent/70 h-2.5 w-2.5 rounded-full" />
              <div className="bg-hazard/70 h-2.5 w-2.5 rounded-full" />
              <div className="bg-primary/70 h-2.5 w-2.5 rounded-full" />
            </div>
            <div className="mx-2 flex-1">
              <div className="bg-secondary/60 text-muted-foreground mx-auto max-w-xs truncate rounded-sm px-3 py-1 text-center font-mono text-[10px]">
                {project.liveUrl.replace("https://", "")}
              </div>
            </div>
          </div>

          <div className="bg-muted relative h-52 overflow-hidden md:h-64 lg:h-72">
            {activeImage ? (
              <Image
                src={activeImage}
                alt={`${project.title} interface`}
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 46vw, 560px"
                className="object-cover object-top"
              />
            ) : (
              <div className="from-primary/10 to-accent/5 flex h-full w-full items-center justify-center bg-linear-to-br">
                <h3 className="font-heading text-foreground/20 text-4xl tracking-tight italic">
                  {project.title}
                </h3>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <div className="flex-1 space-y-5">
        <motion.div
          initial={{ opacity: 0, x: isAlternating ? 16 : -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.15, ease: EASE_OUT }}
          viewport={VIEWPORT}
        >
          <p className="hud-label text-primary-strong mb-3">{`Project 0${index + 1}`}</p>
          <h3 className="font-heading text-3xl tracking-tight sm:text-4xl">{project.title}</h3>
          <div className="accent-line mt-4 mb-5 w-16" />
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            {project.description}
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION.base, delay: 0.25, ease: EASE_OUT }}
          viewport={VIEWPORT}
          className="cat-frontend flex flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <li key={tag} className="cat-chip rounded-md px-2.5 py-1 text-xs">
              {tag}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 pt-1"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex h-11 items-center gap-2 px-5 text-sm"
          >
            View live
            <LuArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex h-11 items-center gap-2 px-5 text-sm"
          >
            <LuGithub className="h-4 w-4" />
            Source
          </a>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
