import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useSounds } from "../lib/audio/sounds";

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
  isLarge?: boolean;
}

const ProjectCard = ({ project, index, isAlternating = false, isLarge = false }: ProjectCardProps) => {
  const { playClick, playHover } = useSounds();

  if (isLarge) {
    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        className={`flex flex-col ${isAlternating ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
      >
        {/* Project Image */}
        <div className="flex-1">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            onHoverStart={playHover}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="relative group"
          >
            <div className="aspect-video angular-card overflow-hidden cartoon-shadow-lg">
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-black text-primary">
                  {project.title}
                </span>
              </div>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.8, rotate: -5 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                onHoverStart={playHover}
                onTapStart={playClick}
                href={project.liveUrl}
                className="p-3 angular-card hover:animate-bounce-slow transition-all duration-150"
              >
                <ExternalLink className="w-6 h-6 text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.8, rotate: -5 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                onHoverStart={playHover}
                onTapStart={playClick}
                href={project.githubUrl}
                className="p-3 angular-card hover:animate-bounce-slow transition-all duration-150"
              >
                <Github className="w-6 h-6 text-primary" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-4 cartoon-text">
              {project.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="angular-chip text-sm font-bold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9, x: -2 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              onTapStart={playClick}
              href={project.liveUrl}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-150 font-bold"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9, x: -2 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              onTapStart={playClick}
              href={project.githubUrl}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-150 font-bold"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }

  // Small card version
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onHoverStart={playHover}
      className="group"
    >
      <div className="angular-card p-6 hover:animate-bounce-slow transition-all duration-150">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 diagonal-cut mb-4 flex items-center justify-center">
          <span className="text-lg font-bold text-muted-foreground">
            {project.title}
          </span>
        </div>
        
        <h4 className="text-xl font-bold mb-2 gradient-text">
          {project.title}
        </h4>
        
        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="angular-chip text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              onTapStart={playClick}
              href={project.liveUrl}
              className="p-2 angular-card hover:animate-bounce-slow transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              onTapStart={playClick}
              href={project.githubUrl}
              className="p-2 angular-card hover:animate-bounce-slow transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
