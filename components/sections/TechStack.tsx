"use client";

import { motion, useInView, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { TECH_CATEGORIES, TECH_STATS } from "@/constants";

function AnimatedCounter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl font-semibold text-primary font-sans tabular-nums">
      {display}{suffix}
    </span>
  );
}

function BentoCard({ category, index }: { category: typeof TECH_CATEGORIES[number]; index: number }) {
  const SectionIcon = category.sectionIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="surface-card p-5 sm:p-6"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className={`${category.colorClass} cat-chip w-8 h-8 rounded-lg flex items-center justify-center`}>
          <SectionIcon className="w-4 h-4" />
        </div>
        <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className={`${category.colorClass} cat-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium cursor-default transition-transform duration-200 hover:scale-105`}
            >
              <Icon
                className="w-3.5 h-3.5 shrink-0"
                style={tech.color ? { color: tech.color } : undefined}
              />
              {tech.name}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 relative section-tinted section-tech-bg">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            Tech <span className="text-pop italic">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and frameworks powering scalable, innovative applications.
          </p>
          <div className="accent-line w-24 mx-auto mt-6" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TECH_CATEGORIES.map((category, index) => (
            <BentoCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {TECH_STATS.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <StatIcon className="w-4 h-4 text-primary/60" />
                  <AnimatedCounter value={stat.value} />
                </div>
                <span className="text-xs text-muted-foreground tracking-wide">{stat.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
