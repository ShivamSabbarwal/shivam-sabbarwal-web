import { motion } from "motion/react";
import { Calendar, MapPin, Building2, Award, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Timeline = () => {
  const timelineHistory = [
    {
      id: 1,
      title: "Software Engineer",
      company: "3vGeomatics",
      location: "Vancouver, BC",
      period: "July 2025 – Present",
      description: "Currently working as a Software Engineer, bringing technical expertise and leadership to drive innovative solutions and deliver measurable business results.",
      achievements: [
        "Recently joined to contribute technical leadership and expertise",
        "Focusing on scalable solutions and technical excellence"
      ],
      type: "current",
      category: "work"
    },
    {
      id: 2,
      title: "Chief Technology Officer (CTO)",
      company: "Remittor",
      location: "Surrey, BC",
      period: "December 2023 – Present",
      description: "Leading technology strategy for a financial technology platform designed to streamline property sales and international money transfers for Non-Resident Indians (NRIs) globally.",
      achievements: [
        "Built fintech platform addressing complex financial challenges for NRIs",
        "Managed cross-border transactions and Indian regulatory compliance",
        "Prioritized security, transparency, and efficiency in financial solutions",
        "Simplified property sales in India with legal, financial, and regulatory management",
        "Facilitated secure and compliant international money transfers"
      ],
      type: "current",
      category: "work"
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Unleashd Technologies",
      location: "British Columbia, Canada",
      period: "January 2022 – July 2025",
      description: "Transformed technology stack and delivered measurable business results by implementing scalable, secure, and future-proof solutions across frontend, backend, database, and cloud infrastructure.",
      achievements: [
        "Accelerated development cycles by migrating from legacy CSS to TailwindCSS and building reusable component design system",
        "Doubled client acquisition by creating tools that solved major pain points",
        "Modernized full technology stack across React, Node.js/Express, Python/Django, PostgreSQL, and AWS",
        "Enabled faster, data-driven decision making by designing and implementing ETL pipelines",
        "Cut data acquisition costs by 65% through architectural improvements"
      ],
      type: "previous",
      category: "work"
    },
    {
      id: 4,
      title: "Full-Stack Developer",
      company: "Four Eyes Financial",
      location: "Saint John, NB",
      period: "July 2020 – January 2022",
      description: "Delivered high-impact financial technology solutions by developing custom CRM platform, integrating real-time communication, and building interactive data dashboards.",
      achievements: [
        "Improved business efficiency by developing full-featured web-based CRM platform using MERN stack",
        "Enhanced client communication by integrating video conferencing using WebRTC and AWS Chime",
        "Delivered real-time financial insights by designing interactive data dashboards with D3.js, Recharts, and Ant Design",
        "Optimized financial analytics by maintaining and enhancing dedicated microservice"
      ],
      type: "previous",
      category: "work"
    },
    {
      id: 5,
      title: "Full-Stack Developer",
      company: "New Brunswick Innovation Foundation",
      location: "Fredericton, NB",
      period: "May 2019 – August 2019",
      description: "Designed and developed a web-based CRM platform using the MERN technology stack to automate and streamline client and business financial processes.",
      achievements: [
        "Designed and developed web-based CRM platform using MERN stack",
        "Analyzed business and client requirements to prioritize feature development",
        "Integrated 3rd party APIs to implement technically challenging features efficiently and reliably"
      ],
      type: "previous",
      category: "work"
    },
    {
      id: 6,
      title: ".NET Developer",
      company: "CGI",
      location: "Fredericton, NB",
      period: "January 2018 – August 2018",
      description: "Enhanced existing product functionality and developed new application modules using ASP.NET, C#, JavaScript, HTML, and CSS.",
      achievements: [
        "Enhanced existing product functionality by thoroughly preparing and performing unit/system testing",
        "Developed new application modules to replace outdated UI in ASP.NET using C#, JavaScript, HTML and CSS",
        "Created and updated SQL queries and stored procedures using SQL Server 2016",
        "Coordinated with project owners to organize and prioritize feature development timeline and project scope"
      ],
      type: "previous",
      category: "work"
    },
    {
      id: 7,
      title: "Assistant Project Manager (Co-op)",
      company: "Irving Oil",
      location: "Saint John, NB",
      period: "January 2017 – May 2017",
      description: "Developed positive rapport with management and employees to facilitate effective communication and collaboration while coordinating day-to-day business operations.",
      achievements: [
        "Developed positive rapport with both management personnel and employees to facilitate effective communication and collaboration",
        "Coordinated day-to-day business operations, communicating effectively with both management and technical staff",
        "Adapted quickly to changing and competing project demands",
        "Continually advanced product knowledge and communicated updates to employees"
      ],
      type: "previous",
      category: "work"
    },
    {
      id: 8,
      title: "QA/BI Analyst (Co-op)",
      company: "Irving Oil",
      location: "Saint John, NB",
      period: "May 2016 – August 2016",
      description: "Developed corrective action plans and prevention strategies to improve product reliability while designing and updating test cases for software system testing.",
      achievements: [
        "Developed corrective action plans and prevention strategies to improve product reliability",
        "Reviewed project requirements to resolve product and business vulnerabilities",
        "Designed and updated test cases to maximize the success of software system testing"
      ],
      type: "previous",
      category: "work"
    },
    {
      id: 9,
      title: "Bachelor of Science (BSc)",
      company: "University of New Brunswick",
      location: "Fredericton, NB",
      period: "September 2014 – April 2020",
      description: "Comprehensive software engineering education with focus on modern development practices, system design, and practical application of computer science principles.",
      achievements: [
        "Co-op Certification Program",
        "Minor in Biomedical Engineering",
        "Strong foundation in software development methodologies",
        "Hands-on experience with real-world projects"
      ],
      type: "completed",
      category: "education"
    }
  ];

  // Extract month and year from period strings for timeline dots
  const getMonthYear = (period: string) => {
    // Extract month and year from the start of the period (always show start date)
    const monthYearMatch = period.match(/([A-Za-z]+)\s+(\d{4})/);
    if (monthYearMatch) {
      const month = monthYearMatch[1];
      const year = monthYearMatch[2];
      return `${month} ${year}`;
    }
    
    // Fallback for year ranges like "2014 – 2020"
    const yearMatch = period.match(/(\d{4})/);
    if (yearMatch) {
      return yearMatch[1];
    }
    
    return null;
  };

  return (
    <section id="timeline" className="py-24 relative">
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
            <span className="cartoon-text">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            My professional journey in software engineering, from education to leading architectural transformations and CTO roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-3 transform md:-translate-x-1/2">
            {/* Main timeline line with faded ends */}
            <div className="w-full h-full timeline-line rounded-full relative">
              {/* Fade effect at top */}
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-timeline-line"></div>
              {/* Fade effect at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-transparent to-timeline-line"></div>
            </div>
            
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
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineHistory.map((item, index) => (
              <motion.div
                key={item.id}
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
                  
                  {/* Category icon */}
                  <div className="absolute top-1 left-1 w-6 h-6 flex items-center justify-center">
                    {item.category === 'education' ? (
                      <GraduationCap className="w-3 h-3 text-primary" />
                    ) : (
                      <Building2 className="w-3 h-3 text-primary" />
                    )}
                  </div>
                  
                  {/* Month/Year label */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-bold text-primary bg-background px-2 py-1 rounded-full border border-primary/20 shadow-sm">
                      {getMonthYear(item.period)}
                    </span>
                  </div>
                  
                  {/* Status indicator - only for current work */}
                  {item.type === 'current' && item.category === 'work' && (
                    <motion.div 
                      className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-background bg-green-500 dark:bg-green-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  )}
                  
                  {/* Pulse ring for current work */}
                  {item.type === 'current' && item.category === 'work' && (
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
                  >
                    <Card className="p-6 hover:cartoon-shadow-lg transition-all duration-150 hover:animate-float">
                      <CardContent className="p-0">
                    {/* Item Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-black cartoon-text mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                          {item.category === 'education' ? (
                            <GraduationCap className="w-4 h-4" />
                          ) : (
                            <Building2 className="w-4 h-4" />
                          )}
                          <span className="font-semibold">{item.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <Badge 
                        variant={
                          item.type === 'current' 
                            ? 'default' 
                            : item.type === 'completed'
                            ? 'secondary'
                            : 'outline'
                        }
                        className={`text-xs font-bold uppercase tracking-wide ${
                          item.type === 'completed' 
                            ? 'text-green-600 dark:text-green-400' 
                            : ''
                        }`}
                      >
                        {item.type === 'current' ? 'Current' : item.type === 'completed' ? 'Completed' : 'Previous'}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements/Highlights */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {item.category === 'education' ? 'Key Highlights' : 'Key Achievements'}
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                      </CardContent>
                    </Card>
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

export default Timeline;
