import { motion } from "motion/react";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Cpu,
  GitBranch,
  Shield,
  Zap,
  Layers,
  Terminal,
  Server,
  FileText,
  Palette,
  Monitor,
  Smartphone as Mobile,
  GitCommit,
  Eye,
  Code2,
  TestTube,
  Wrench
} from "lucide-react";
import { useSounds } from "../../lib/audio/sounds";

const TechStack = () => {
  const { playHover } = useSounds();

  const techCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary",
      technologies: [
        { name: "React", icon: Code2, description: "Advanced component architecture" },
        { name: "TypeScript", icon: FileText, description: "Type-safe development" },
        { name: "Next.js", icon: Layers, description: "Full-stack React framework" },
        { name: "Tailwind CSS", icon: Palette, description: "Utility-first styling" },
        { name: "Framer Motion", icon: Zap, description: "Advanced animations" },
        { name: "Vue.js", icon: Code, description: "Progressive framework" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
      technologies: [
        { name: "Node.js", icon: Terminal, description: "JavaScript runtime" },
        { name: "Python", icon: Code2, description: "Django & FastAPI" },
        { name: "PostgreSQL", icon: Database, description: "Relational database" },
        { name: "MongoDB", icon: Database, description: "NoSQL database" },
        { name: "Redis", icon: Zap, description: "In-memory caching" },
        { name: "GraphQL", icon: GitBranch, description: "API query language" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cartoon-highlight",
      bgColor: "bg-cartoon-highlight/10",
      borderColor: "border-cartoon-highlight",
      technologies: [
        { name: "AWS", icon: Cloud, description: "Cloud infrastructure" },
        { name: "Docker", icon: Server, description: "Containerization" },
        { name: "Kubernetes", icon: Layers, description: "Container orchestration" },
        { name: "Terraform", icon: Wrench, description: "Infrastructure as code" },
        { name: "CI/CD", icon: GitBranch, description: "Automated deployment" },
        { name: "Monitoring", icon: Eye, description: "System observability" }
      ]
    },
    {
      title: "Mobile & Tools",
      icon: Smartphone,
      color: "text-secondary-foreground",
      bgColor: "bg-secondary/20",
      borderColor: "border-secondary-foreground",
      technologies: [
        { name: "React Native", icon: Mobile, description: "Cross-platform mobile" },
        { name: "Flutter", icon: Smartphone, description: "Google's UI toolkit" },
        { name: "Git", icon: GitCommit, description: "Version control" },
        { name: "Figma", icon: Palette, description: "Design & prototyping" },
        { name: "VS Code", icon: Monitor, description: "Development environment" },
        { name: "Testing", icon: TestTube, description: "Jest, Cypress, Playwright" }
      ]
    }
  ];

  const TechItem = ({ name, icon: Icon, description }: { name: string; icon: any; description: string }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -2 }}
      onHoverStart={playHover}
      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
      >
        <Icon className="w-4 h-4 text-primary" />
      </motion.div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-foreground">{name}</h4>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="tech-stack" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 geometric-bg opacity-5" />
        
        {/* Floating tech icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center"
        >
          <Cpu className="w-8 h-8 text-primary" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center"
        >
          <Database className="w-8 h-8 text-accent" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-20 w-16 h-16 bg-cartoon-highlight/10 rounded-lg flex items-center justify-center"
        >
          <Globe className="w-8 h-8 text-cartoon-highlight" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6"
          >
            <span className="cartoon-text-large">Tech Stack</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2"
          >
            A comprehensive toolkit of modern technologies and frameworks that power 
            <span className="cartoon-text"> innovative solutions</span> and 
            <span className="cartoon-highlight"> scalable applications</span>
          </motion.p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={playHover}
              className="angular-card p-8 space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 ${category.bgColor} ${category.borderColor} border-2 rounded-lg flex items-center justify-center`}
                >
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold cartoon-text">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.technologies.length} technologies mastered
                  </p>
                </div>
              </div>

              {/* Technologies List */}
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: techIndex * 0.1, duration: 0.5 }}
                  >
                    <TechItem
                      name={tech.name}
                      icon={tech.icon}
                      description={tech.description}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code, label: "Languages", value: "12+" },
            { icon: Layers, label: "Frameworks", value: "15+" },
            { icon: Cloud, label: "Cloud Services", value: "20+" },
            { icon: Shield, label: "Years Experience", value: "7+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -3 }}
              onHoverStart={playHover}
              className="text-center angular-card p-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-3xl font-black cartoon-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
