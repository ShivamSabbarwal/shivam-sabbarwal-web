import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  Building2,
  Award,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Timeline = () => {
  const timelineHistory = [
    {
      id: 1,
      title: "Software Engineer",
      company: "3vGeomatics (Orica Digital Solutions)",
      location: "Vancouver, BC",
      period: "July 2025 – Present",
      description:
        "Developing Motionary and Agora platforms using ESRI mapping technologies, React, TypeScript, and Redux Toolkit (RTK), refactoring legacy codebase to implement modern functional components and hooks",
      achievements: [
        "Implementing user consent management system with PostHog product analytics, ensuring GDPR compliance and data privacy for geospatial monitoring applications",
        "Collaborating with backend API teams to integrate RESTful APIs and optimize data visualization workflows for InSAR monitoring and customer interaction features",
      ],
      type: "current",
      category: "work",
    },
    {
      id: 2,
      title: "Chief Technology Officer (CTO)",
      company: "Remittor AI",
      location: "Surrey, BC",
      period: "December 2023 – Present",
      description:
        "Architected and developed a comprehensive cross-border transaction platform serving 10,000+ Non-Resident Indians (NRIs) across India, Canada, USA, and Australia, facilitating overseas property sales and international money transfers.",
      achievements: [
        "Led development of the platform, establishing development standards, code review processes, and implementing CI/CD pipelines using Docker and Kubernetes for scalable deployment",
        "Designed and implemented secure tax compliance systems for NRIs in multiple jurisdictions (India, Canada, USA, Australia), integrating directly with ICICI Bank and HDFC Bank APIs to ensure regulatory compliance and secure transactions",
        "Built comprehensive overseas property sales platform with automated legal, financial, and regulatory workflows, reducing property sale processing time by 60% through streamlined digital processes and direct bank integrations",
      ],
      type: "current",
      category: "work",
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Unleashd Technologies",
      location: "British Columbia, Canada",
      period: "January 2022 – July 2025",
      description:
        "Transformed technology stack and delivered measurable business results by implementing scalable, secure, and future-proof solutions across frontend, backend, database, and cloud infrastructure.",
      achievements: [
        "Accelerated development cycles by migrating from legacy CSS to TailwindCSS and building reusable component design system",
        "Doubled client acquisition by creating tools that solved major pain points",
        "Modernized full technology stack across React, Node.js/Express, Python/Django, PostgreSQL, and AWS",
        "Enabled faster, data-driven decision making by designing and implementing ETL pipelines",
        "Cut data acquisition costs by 65% through architectural improvements",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 4,
      title: "Full-Stack Developer",
      company: "Four Eyes Financial",
      location: "Saint John, NB",
      period: "July 2020 – January 2022",
      description:
        "Delivered high-impact financial technology solutions by developing custom CRM platform, integrating real-time communication, and building interactive data dashboards.",
      achievements: [
        "Improved business efficiency by developing full-featured web-based CRM platform using MERN stack",
        "Enhanced client communication by integrating video conferencing using WebRTC and AWS Chime",
        "Delivered real-time financial insights by designing interactive data dashboards with D3.js, Recharts, and Ant Design",
        "Optimized financial analytics by maintaining and enhancing dedicated microservice",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 5,
      title: "Full-Stack Developer",
      company: "New Brunswick Innovation Foundation",
      location: "Fredericton, NB",
      period: "May 2019 – August 2019",
      description:
        "Designed and developed a web-based CRM platform using the MERN technology stack to automate and streamline client and business financial processes.",
      achievements: [
        "Designed and developed web-based CRM platform using MERN stack",
        "Analyzed business and client requirements to prioritize feature development",
        "Integrated 3rd party APIs to implement technically challenging features efficiently and reliably",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 6,
      title: ".NET Developer",
      company: "CGI",
      location: "Fredericton, NB",
      period: "January 2018 – August 2018",
      description:
        "Enhanced existing product functionality and developed new application modules using ASP.NET, C#, JavaScript, HTML, and CSS.",
      achievements: [
        "Enhanced existing product functionality by thoroughly preparing and performing unit/system testing",
        "Developed new application modules to replace outdated UI in ASP.NET using C#, JavaScript, HTML and CSS",
        "Created and updated SQL queries and stored procedures using SQL Server 2016",
        "Coordinated with project owners to organize and prioritize feature development timeline and project scope",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 7,
      title: "Assistant Project Manager (Co-op)",
      company: "Irving Oil",
      location: "Saint John, NB",
      period: "January 2017 – May 2017",
      description:
        "Developed positive rapport with management and employees to facilitate effective communication and collaboration while coordinating day-to-day business operations.",
      achievements: [
        "Developed positive rapport with both management personnel and employees to facilitate effective communication and collaboration",
        "Coordinated day-to-day business operations, communicating effectively with both management and technical staff",
        "Adapted quickly to changing and competing project demands",
        "Continually advanced product knowledge and communicated updates to employees",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 8,
      title: "QA/BI Analyst (Co-op)",
      company: "Irving Oil",
      location: "Saint John, NB",
      period: "May 2016 – August 2016",
      description:
        "Developed corrective action plans and prevention strategies to improve product reliability while designing and updating test cases for software system testing.",
      achievements: [
        "Developed corrective action plans and prevention strategies to improve product reliability",
        "Reviewed project requirements to resolve product and business vulnerabilities",
        "Designed and updated test cases to maximize the success of software system testing",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 9,
      title: "Bachelor of Science (BSc)",
      company: "University of New Brunswick",
      location: "Fredericton, NB",
      period: "September 2014 – April 2020",
      description:
        "Comprehensive software engineering education with focus on modern development practices, system design, and practical application of computer science principles.",
      achievements: [
        "Co-op Certification Program",
        "Minor in Biomedical Engineering",
        "Strong foundation in software development methodologies",
        "Hands-on experience with real-world projects",
      ],
      type: "completed",
      category: "education",
    },
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
    <section id="timeline" className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="cartoon-text">Timeline</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-medium px-2">
            My professional journey in software engineering, from education to
            leading architectural transformations and CTO roles.
          </p>
        </motion.header>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-2 sm:w-3 transform md:-translate-x-1/2">
            {/* Main timeline line with faded ends */}
            <div className="w-full h-full timeline-line rounded-full relative">
              {/* Fade effect at top */}
              <div className="absolute top-0 left-0 w-full h-6 sm:h-8 bg-gradient-to-b from-transparent to-timeline-line"></div>
              {/* Fade effect at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-6 sm:h-8 bg-gradient-to-t from-transparent to-timeline-line"></div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 w-full h-full timeline-line rounded-full opacity-20"></div>

            {/* Progress line animation */}
            <motion.div
              className="absolute top-0 left-0 w-full timeline-progress rounded-full"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12">
            {timelineHistory.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 sm:left-8 md:left-1/2 w-6 sm:w-8 h-6 sm:h-8 transform md:-translate-x-1/2 z-10 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {/* Outer ring with enhanced styling */}
                  <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 timeline-dot rounded-full border-2 border-background"></div>

                  {/* Inner dot */}
                  <div className="absolute top-1 sm:top-1.5 left-1 sm:left-1.5 w-4 sm:w-5 h-4 sm:h-5 bg-background rounded-full shadow-inner border border-primary/20"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 timeline-dot-glow rounded-full"></div>

                  {/* Category icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.category === "education" ? (
                      <GraduationCap className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-primary" />
                    ) : (
                      <Building2 className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-primary" />
                    )}
                  </div>

                  {/* Month/Year label */}
                  <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-bold text-primary bg-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-primary/20 shadow-sm">
                      {getMonthYear(item.period)}
                    </span>
                  </div>

                  {/* Status indicator - only for current work */}
                  {item.type === "current" && item.category === "work" && (
                    <motion.div
                      className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-3 sm:w-4 h-3 sm:h-4 rounded-full border-2 border-background bg-green-500 dark:bg-green-400"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    ></motion.div>
                  )}

                  {/* Pulse ring for current work */}
                  {item.type === "current" && item.category === "work" && (
                    <motion.div
                      className="absolute inset-0 w-6 sm:w-8 h-6 sm:h-8 border-2 border-green-500 dark:border-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <div
                  className={`ml-12 sm:ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4, rotate: 0.5 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <Card className="p-4 sm:p-6 hover:cartoon-shadow-lg transition-all duration-150 hover:animate-float">
                      <CardContent className="p-0">
                        {/* Item Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-black cartoon-text mb-1">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                              {item.category === "education" ? (
                                <GraduationCap className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                              ) : (
                                <Building2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                              )}
                              <span className="font-semibold text-sm sm:text-base">
                                {item.company}
                              </span>
                            </div>
                            <div className="flex flex-col space-y-1 text-xs sm:text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                                <span>{item.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <Badge
                            variant={
                              item.type === "current"
                                ? "default"
                                : item.type === "completed"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={`text-xs font-bold uppercase tracking-wide self-start sm:self-auto ${
                              item.type === "completed"
                                ? "text-green-600 dark:text-green-400"
                                : ""
                            }`}
                          >
                            {item.type === "current"
                              ? "Current"
                              : item.type === "completed"
                                ? "Completed"
                                : "Previous"}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Achievements/Highlights */}
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-primary mb-2 flex items-center">
                            <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" />
                            {item.category === "education"
                              ? "Key Highlights"
                              : "Key Achievements"}
                          </h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-xs sm:text-sm text-muted-foreground flex items-start"
                              >
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
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
