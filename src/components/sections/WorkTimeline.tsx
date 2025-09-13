import { motion } from "motion/react";
import { Calendar, MapPin, Building2, Award } from "lucide-react";

const WorkTimeline = () => {
  const workHistory = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading frontend development for web3 applications, building scalable React components and implementing modern design systems.",
      achievements: [
        "Led development of DeFi dashboard with 50k+ users",
        "Improved application performance by 40%",
        "Mentored 3 junior developers"
      ],
      type: "current"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description: "Developed responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with design team to implement pixel-perfect UIs.",
      achievements: [
        "Built 15+ client projects from scratch",
        "Reduced bundle size by 30%",
        "Implemented automated testing pipeline"
      ],
      type: "previous"
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Started my journey in web development, learning modern frameworks and best practices while contributing to various client projects.",
      achievements: [
        "Completed 20+ small to medium projects",
        "Learned React, Vue.js, and Node.js",
        "Contributed to open source projects"
      ],
      type: "previous"
    },
    {
      id: 4,
      title: "Freelance Web Designer",
      company: "Self-Employed",
      location: "Various",
      period: "2018 - 2019",
      description: "Began my career as a freelance web designer, creating custom websites for small businesses and learning the fundamentals of web development.",
      achievements: [
        "Designed 25+ websites",
        "Learned HTML, CSS, and JavaScript",
        "Built strong client relationships"
      ],
      type: "previous"
    }
  ];

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="cartoon-text">Work</span> <span className="cartoon-accent">History</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            My professional journey in web development, from freelance beginnings to leading frontend teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-3 transform md:-translate-x-1/2">
            {/* Main timeline line with enhanced styling */}
            <div className="w-full h-full timeline-line rounded-full"></div>
            
            {/* Animated glow effect */}
            <div className="absolute inset-0 w-full h-full timeline-line rounded-full opacity-30 animate-pulse"></div>
            
            {/* Progress line animation */}
            <motion.div 
              className="absolute top-0 left-0 w-full timeline-progress rounded-full"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Decorative dots along the line */}
            <motion.div 
              className="absolute top-1/4 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 shadow-lg border border-background"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-cartoon-highlight rounded-full transform -translate-x-1/2 shadow-lg border border-background"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute top-3/4 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 shadow-lg border border-background"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 w-8 h-8 transform md:-translate-x-1/2 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Outer ring with enhanced styling */}
                  <div className="absolute inset-0 w-8 h-8 timeline-dot rounded-full border-2 border-background"></div>
                  
                  {/* Inner dot */}
                  <div className="absolute top-1.5 left-1.5 w-5 h-5 bg-background rounded-full shadow-inner border border-primary/20"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-8 h-8 timeline-dot-glow rounded-full"></div>
                  
                  {/* Status indicator - only for current job */}
                  {job.type === 'current' && (
                    <motion.div 
                      className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-background bg-green-500 dark:bg-green-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  )}
                  
                  {/* Pulse ring for current job */}
                  {job.type === 'current' && (
                    <motion.div 
                      className="absolute inset-0 w-8 h-8 border-2 border-green-500 dark:border-green-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -8, rotate: 1 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className="angular-card p-6 hover:cartoon-shadow-lg transition-all duration-150 hover:animate-float"
                  >
                    {/* Job Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-black cartoon-text mb-1">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-full ${
                        job.type === 'current' 
                          ? 'angular-button text-primary-foreground' 
                          : 'angular-chip text-muted-foreground'
                      }`}>
                        {job.type === 'current' ? 'Current' : 'Previous'}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
