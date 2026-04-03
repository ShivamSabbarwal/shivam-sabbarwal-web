"use client";

import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  MapPinIcon,
  Building01Icon,
  Award01Icon,
  GraduationScrollIcon,
} from "@hugeicons/core-free-icons";
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

  return (
    <section id="timeline" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software engineering, from education to
            leading architectural transformations and CTO roles.
          </p>
        </motion.header>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2">
            <div className="w-full h-full bg-border" />
            <motion.div
              className="absolute top-0 left-0 w-full timeline-progress"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {timelineHistory.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 sm:left-6 md:left-1/2 w-4 h-4 transform md:-translate-x-1/2 z-10 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05 + 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                  {item.type === "current" && item.category === "work" && (
                    <motion.div
                      className="absolute inset-0 w-4 h-4 rounded-full border border-primary/40"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <div
                  className={`ml-14 sm:ml-18 md:ml-0 md:w-[45%] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-10"
                      : "md:ml-auto md:pl-10"
                  }`}
                >
                  <Card className="p-5 sm:p-6 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 font-sans">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            {item.category === "education" ? (
                              <HugeiconsIcon icon={GraduationScrollIcon} className="w-3.5 h-3.5" />
                            ) : (
                              <HugeiconsIcon icon={Building01Icon} className="w-3.5 h-3.5" />
                            )}
                            <span className="font-medium text-sm">
                              {item.company}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <HugeiconsIcon icon={Calendar01Icon} className="w-3 h-3" />
                              <span>{item.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <HugeiconsIcon icon={MapPinIcon} className="w-3 h-3" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>

                        <Badge
                          variant={
                            item.type === "current"
                              ? "default"
                              : item.type === "completed"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs font-medium self-start"
                        >
                          {item.type === "current"
                            ? "Current"
                            : item.type === "completed"
                              ? "Completed"
                              : "Previous"}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                          <HugeiconsIcon icon={Award01Icon} className="w-3.5 h-3.5" />
                          {item.category === "education"
                            ? "Key Highlights"
                            : "Key Achievements"}
                        </h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1 h-1 bg-primary/60 rounded-full mt-1.5 shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
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
