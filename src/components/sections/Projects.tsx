import { motion } from "motion/react";
import ProjectCard from "../ProjectCard";

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
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="cartoon-text">Featured</span> <span className="cartoon-accent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-medium px-2">
            Key projects showcasing my expertise in full-stack development, 
            architectural design, and innovative solutions for complex business challenges.
          </p>
        </motion.div>

        {/* Projects Grid with Staggered Layout */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
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
