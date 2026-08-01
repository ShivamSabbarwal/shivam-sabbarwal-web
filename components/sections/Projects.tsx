"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/constants";
import { DURATION, EASE_OUT, VIEWPORT } from "@/lib/motion";

const CreativeProjects = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE_OUT }}
          viewport={VIEWPORT}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">Independent work · {PROJECTS.length} live projects</p>
          <h2 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Work Beyond the <span className="text-pop italic">Day Job</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Two live products, designed and shipped end to end.
          </p>
          <div className="accent-line mx-auto mt-6 w-24" />
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isAlternating={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProjects;
