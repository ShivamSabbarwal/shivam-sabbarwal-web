import { motion } from "motion/react";
import ProjectCard from "../ProjectCard";

const CreativeProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Particle System",
      description: "Interactive particle system with physics simulation and real-time manipulation.",
      tags: ["Animation", "WebGL", "Physics"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "3D WebGL Scene",
      description: "Immersive 3D environment built with Three.js and custom shaders.",
      tags: ["3D", "Three.js", "Shaders"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Audio Visualizer",
      description: "Real-time audio visualization with Web Audio API and Canvas.",
      tags: ["Audio", "Canvas", "Web Audio"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Neural Network Playground",
      description: "Interactive neural network visualization and training simulation.",
      tags: ["AI/ML", "Visualization", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "WebGL Shader Editor",
      description: "Live shader editor with real-time preview and sharing capabilities.",
      tags: ["Shader", "WebGL", "Editor"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Blockchain Simulator",
      description: "Interactive blockchain visualization with transaction flow animation.",
      tags: ["Web3", "Blockchain", "Animation"],
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
            <span className="cartoon-text">Creative</span> <span className="cartoon-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Exploring the boundaries of web technology through interactive projects 
            and creative coding experiments.
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
