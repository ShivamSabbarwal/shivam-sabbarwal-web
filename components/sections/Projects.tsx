"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/constants";

const CreativeProjects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 relative section-tinted section-projects-bg">
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
            Featured <span className="text-pop italic">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key projects showcasing expertise in full-stack development and innovative solutions.
          </p>
          <div className="accent-line w-24 mx-auto mt-6" />
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 sm:space-y-28">
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
