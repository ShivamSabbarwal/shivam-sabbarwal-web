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
      title: "My Resume",
      description: "A professional resume website built with React, TypeScript, and Vite. Showcases my professional experience, skills, and achievements with a clean, modern design.",
      tags: ["React", "TypeScript", "Vite", "Resume", "Portfolio"],
      liveUrl: "#",
      githubUrl: "https://github.com/ShivamSabbarwal/resume",
    },
    {
      id: 3,
      title: "Personal Website",
      description: "My personal portfolio website featuring interactive animations, modern UI components, and comprehensive information about my professional journey. Built with React, TypeScript, Framer Motion, and TailwindCSS.",
      tags: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "Portfolio"],
      liveUrl: "#",
      githubUrl: "https://github.com/ShivamSabbarwal/shivam-sabbarwal-web",
    },
  ];


  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="cartoon-text">Featured</span> <span className="cartoon-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Key projects showcasing my expertise in full-stack development, 
            architectural design, and innovative solutions for complex business challenges.
          </p>
        </motion.div>

        {/* Projects Grid with Staggered Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isAlternating={index % 2 === 1}
              isLarge={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProjects;
