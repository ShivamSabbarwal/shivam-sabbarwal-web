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

const Timeline = () => {
  const timelineHistory = [
    {
      id: 1,
      title: "Software Engineer",
      company: "3vGeomatics (Orica Digital Solutions)",
      location: "Vancouver, BC",
      period: "July 2025 – Present",
      year: "2025",
      description:
        "Developing Motionary and Agora platforms using ESRI mapping technologies, React, TypeScript, and Redux Toolkit (RTK), refactoring legacy codebase to implement modern functional components and hooks",
      achievements: [
        "Implementing user consent management system with PostHog product analytics, ensuring GDPR compliance",
        "Collaborating with backend API teams to integrate RESTful APIs and optimize data visualization workflows",
      ],
      type: "current",
      category: "work",
    },
    {
      id: 2,
      title: "Chief Technology Officer",
      company: "Remittor AI",
      location: "Surrey, BC",
      period: "December 2023 – Present",
      year: "2023",
      description:
        "Architected a cross-border transaction platform serving 10,000+ NRIs across India, Canada, USA, and Australia.",
      achievements: [
        "Led platform development with CI/CD pipelines using Docker and Kubernetes for scalable deployment",
        "Designed secure tax compliance systems integrating directly with ICICI Bank and HDFC Bank APIs",
        "Built overseas property sales platform reducing processing time by 60%",
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
      year: "2022",
      description:
        "Transformed technology stack delivering measurable business results across frontend, backend, database, and cloud.",
      achievements: [
        "Doubled client acquisition by building tools that solved major pain points",
        "Modernized full stack across React, Node.js/Express, Python/Django, PostgreSQL, and AWS",
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
      year: "2020",
      description:
        "Delivered fintech solutions: custom CRM platform, real-time video conferencing, and interactive data dashboards.",
      achievements: [
        "Built full-featured CRM platform using MERN stack",
        "Integrated video conferencing using WebRTC and AWS Chime",
        "Designed interactive data dashboards with D3.js and Recharts",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 5,
      title: "Full-Stack Developer",
      company: "NB Innovation Foundation",
      location: "Fredericton, NB",
      period: "May 2019 – August 2019",
      year: "2019",
      description:
        "Designed and developed a web-based CRM platform using MERN stack to streamline financial processes.",
      achievements: [
        "Built CRM platform from scratch using MERN stack",
        "Integrated 3rd party APIs for technically challenging features",
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
      year: "2018",
      description:
        "Enhanced product functionality and developed new modules using ASP.NET, C#, JavaScript, HTML, and CSS.",
      achievements: [
        "Developed new application modules replacing outdated UI",
        "Created SQL queries and stored procedures using SQL Server 2016",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 7,
      title: "Co-op Roles",
      company: "Irving Oil",
      location: "Saint John, NB",
      period: "2016 – 2017",
      year: "2016",
      description:
        "Assistant Project Manager and QA/BI Analyst roles: coordinated operations, developed corrective action plans, and designed test cases.",
      achievements: [
        "Managed day-to-day business operations across technical and management teams",
        "Developed QA strategies to improve product reliability",
      ],
      type: "previous",
      category: "work",
    },
    {
      id: 8,
      title: "BSc Software Engineering",
      company: "University of New Brunswick",
      location: "Fredericton, NB",
      period: "September 2014 – April 2020",
      year: "2014",
      description:
        "Comprehensive software engineering education with co-op certification and biomedical engineering minor.",
      achievements: [
        "Co-op Certification Program",
        "Minor in Biomedical Engineering",
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
            My <span className="text-primary italic">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From education through to CTO — a decade of building and leading.
          </p>
          <div className="accent-line w-24 mx-auto mt-6" />
        </motion.header>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="w-full h-full timeline-line" />
            <motion.div
              className="absolute top-0 left-0 w-full timeline-progress"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-2">
            {timelineHistory.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year marker — large, bold number at the dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.04 + 0.1 }}
                    viewport={{ once: true }}
                    className="w-16 h-8 rounded-full bg-background border border-border flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-primary font-sans tracking-wider">
                      {item.year}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 md:ml-0 md:w-[44%] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="surface-card p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground font-sans leading-snug">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
                          {item.category === "education" ? (
                            <HugeiconsIcon icon={GraduationScrollIcon} className="w-3.5 h-3.5" />
                          ) : (
                            <HugeiconsIcon icon={Building01Icon} className="w-3.5 h-3.5" />
                          )}
                          <span className="text-sm font-medium">{item.company}</span>
                        </div>
                      </div>
                      {item.type === "current" && (
                        <Badge variant="default" className="text-[10px] shrink-0">
                          Current
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <HugeiconsIcon icon={Calendar01Icon} className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HugeiconsIcon icon={MapPinIcon} className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-primary/70 mb-2 flex items-center gap-1">
                        <HugeiconsIcon icon={Award01Icon} className="w-3 h-3" />
                        {item.category === "education" ? "Highlights" : "Achievements"}
                      </h4>
                      <ul className="space-y-1.5">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary/40 rounded-full mt-1.5 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
