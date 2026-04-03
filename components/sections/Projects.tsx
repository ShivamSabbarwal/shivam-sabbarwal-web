"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/ProjectCard";

const CreativeProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Regent Motel",
      description: "A modern hotel booking and management platform built with React, TypeScript, and Vite. Features responsive design, booking system, and comprehensive hotel information management.",
      tags: ["React", "TypeScript", "Vite", "Hotel Management", "Booking System"],
      liveUrl: "https://regentmotel.ca",
      githubUrl: "https://github.com/ShivamSabbarwal/regent-motel",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "My personal portfolio website featuring interactive animations, modern UI components, and comprehensive information about my professional journey. Built with React, TypeScript, Framer Motion, and TailwindCSS.",
      tags: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "Portfolio"],
      liveUrl: "https://shivamsabbarwal.dev",
      githubUrl: "https://github.com/ShivamSabbarwal/shivam-sabbarwal-web",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key projects showcasing expertise in full-stack development,
            architectural design, and innovative solutions.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => (
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
