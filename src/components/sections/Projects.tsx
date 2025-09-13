import { motion } from "motion/react";
import ProjectCard from "../ProjectCard";

const CreativeProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Remittor - Fintech Platform",
      description: "Leading technology strategy for a financial technology platform designed to streamline property sales and international money transfers for Non-Resident Indians (NRIs) globally. Built with security, transparency, and efficiency as core principles.",
      tags: ["Fintech", "Cross-border Payments", "Regulatory Compliance", "Property Sales"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Drive AI - Microservices Architecture",
      description: "Led the transition from monolithic to microservices architecture, reducing technical debt and cutting data acquisition costs by 65%. Built scalable systems using React.js, Node.js, AWS, and PostgreSQL.",
      tags: ["React.js", "Node.js", "AWS", "PostgreSQL", "Microservices"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "File Mapper Tool",
      description: "Developed internal tool allowing data teams to import unstructured CSV files, contributing to doubling client acquisition. Built with React, Redux, and Python backend services.",
      tags: ["React.js", "Redux", "Python", "Data Processing"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Smart Customer Segments",
      description: "Powerful filtration system for targeted marketing campaigns. Integrated with the primary Drive AI product, enabling advanced customer segmentation and analytics.",
      tags: ["React.js", "Analytics", "Marketing", "Data Visualization"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Design System & Frontend Modernization",
      description: "Spearheaded frontend modernization by migrating from CSS to TailwindCSS and replacing Ant Design with scalable in-house design system built on Radix UI Primitives.",
      tags: ["TailwindCSS", "Radix UI", "Design System", "Component Library"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Financial CRM Platform",
      description: "Full-featured web-based CRM platform using MERN stack, automating financial workflows and enhancing business operations with integrated video conferencing capabilities.",
      tags: ["MERN Stack", "WebRTC", "AWS Chime", "CRM"],
      liveUrl: "#",
      githubUrl: "#",
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
