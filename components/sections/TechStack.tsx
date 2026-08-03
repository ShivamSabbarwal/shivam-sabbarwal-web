"use client";

import { motion } from "motion/react";
import { useState, type CSSProperties } from "react";
import { CAPABILITY_PRACTICES, TECH_CATEGORIES } from "@/constants";
import { DURATION, EASE_OUT, STAGGER, VIEWPORT } from "@/lib/motion";

function SkillGroup({
  category,
  index,
  dimmed,
  onFocus,
  onBlur,
}: {
  category: (typeof TECH_CATEGORIES)[number];
  index: number;
  dimmed: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const SlotIcon = category.sectionIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow, delay: index * STAGGER, ease: EASE_OUT }}
      viewport={VIEWPORT}
    >
      {/* Reveal lives on the wrapper so the hover-dim opacity below is free
          of Motion's inline style. */}
      <div
        onMouseEnter={onFocus}
        onMouseLeave={onBlur}
        className={`${category.colorClass} panel cat-card h-full p-5 transition-opacity duration-300 sm:p-6 ${
          dimmed ? "opacity-70" : "opacity-100"
        }`}
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="cat-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
            <SlotIcon className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-lg leading-tight tracking-tight">{category.title}</h3>
          </div>
          <p className="hud-label shrink-0 text-right">{category.technologies.length} tools</p>
        </div>

        <p className="text-muted-foreground mb-4 text-[15px] leading-relaxed">
          {category.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {category.technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <span
                key={tech.name}
                style={{ "--brand": tech.color || "var(--cat-ink)" } as CSSProperties}
                className="cat-chip group/chip inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px]"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 opacity-70 transition-colors group-hover/chip:text-[var(--brand)] group-hover/chip:opacity-100" />
                {tech.name}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

const TechStack = () => {
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <section id="tech-stack" className="section-tinted relative py-20 sm:py-28">
      <div className="dot-field dot-field-fade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE_OUT }}
          viewport={VIEWPORT}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">Capabilities · leadership and craft</p>
          <h2 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
            What I <span className="text-pop italic">Own</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Engineering leadership across architecture, delivery, and team practice. Tools below are
            the evidence.
          </p>
          <div className="accent-line mx-auto mt-6 w-24" />
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITY_PRACTICES.map((practice, index) => {
            const PracticeIcon = practice.icon;
            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: DURATION.slow, delay: index * STAGGER, ease: EASE_OUT }}
                viewport={VIEWPORT}
                className="panel h-full p-4 sm:p-5"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="bg-primary/12 text-primary-strong flex h-9 w-9 shrink-0 items-center justify-center rounded-md">
                    <PracticeIcon className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading text-base leading-tight tracking-tight">
                    {practice.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  {practice.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="hud-label mb-4">Tools as evidence · {TECH_CATEGORIES.length} areas</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TECH_CATEGORIES.map((category, index) => (
            <SkillGroup
              key={category.title}
              category={category}
              index={index}
              dimmed={focused !== null && focused !== index}
              onFocus={() => setFocused(index)}
              onBlur={() => setFocused(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
