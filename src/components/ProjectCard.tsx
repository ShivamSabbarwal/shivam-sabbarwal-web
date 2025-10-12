import { memo } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react";
import { useSounds } from "../lib/audio/sounds";
import { Badge } from "@/components/ui/badge";

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
}

const ProjectCard = memo(({ project, index, isAlternating = false }: ProjectCardProps) => {
  const { playClick, playHover } = useSounds();

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isAlternating ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 sm:gap-12 lg:gap-16`}
    >
      {/* Fun Project Visual */}
      <div className="flex-1 relative">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          onHoverStart={playHover}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative group"
        >
          {/* Fun Background Shape */}
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-cartoon-highlight/20 rounded-3xl relative overflow-hidden">
            {/* Simplified Background Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full"
            />
            
            {/* Project Title with Fun Styling */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black cartoon-text-large mb-2">
                  {project.title}
                </h3>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="flex justify-center space-x-2"
                    >
                      <Sparkles className="w-6 h-6 text-primary" />
                      <Zap className="w-6 h-6 text-accent" />
                      <Sparkles className="w-6 h-6 text-cartoon-highlight" />
                    </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fun Project Content */}
      <div className="flex-1 space-y-6 sm:space-y-8">
        {/* Project Description with Fun Styling */}
        <motion.div
          initial={{ opacity: 0, x: isAlternating ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
            {project.description}
          </p>
        </motion.div>

        {/* Fun Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + tagIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              onHoverStart={playHover}
            >
              <Badge
                variant="default"
                className="text-sm sm:text-base font-bold px-4 py-2 hover:animate-bounce-slow transition-all duration-300"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.1, x: 10, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onHoverStart={playHover}
            onTapStart={playClick}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 text-primary hover:text-primary/80 transition-all duration-300 font-bold text-lg sm:text-xl"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 angular-card group-hover:animate-bounce-slow"
            >
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
            <span className="cartoon-text">View Live Project</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.1, x: 10, rotate: -2 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onHoverStart={playHover}
            onTapStart={playClick}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-all duration-300 font-bold text-lg sm:text-xl"
          >
            <motion.div
              whileHover={{ rotate: -360 }}
              transition={{ duration: 0.5 }}
              className="p-3 angular-card group-hover:animate-bounce-slow"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
            <span className="cartoon-highlight">Explore Code</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
