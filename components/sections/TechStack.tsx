"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { TECH_CATEGORIES, TECH_STATS } from "@/constants";
import { DURATION, EASE_OUT, STAGGER, VIEWPORT } from "@/lib/motion";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, reduceMotion]);

  return (
    <span ref={ref} className="font-heading text-primary-strong text-3xl tabular-nums">
      {String(display).padStart(2, "0")}
      {suffix}
    </span>
  );
}

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
          <p className="hud-label shrink-0 text-right">
            {category.technologies.length} tools
          </p>
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
          <p className="eyebrow mb-3">Capabilities · {TECH_CATEGORIES.length} areas</p>
          <h2 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
            What I Work <span className="text-pop italic">On</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Four recurring engineering problems, with tools chosen for the work.
          </p>
          <div className="accent-line mx-auto mt-6 w-24" />
        </motion.div>

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

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: DURATION.slow, ease: EASE_OUT }}
          viewport={VIEWPORT}
          className="border-border mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4 sm:gap-8"
        >
          {TECH_STATS.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * STAGGER, duration: DURATION.base, ease: EASE_OUT }}
                viewport={VIEWPORT}
                className="flex flex-col-reverse items-center text-center"
              >
                <dt className="hud-label mt-1.5">{stat.label}</dt>
                <dd className="flex items-center gap-2">
                  <StatIcon className="text-muted-foreground h-4 w-4" />
                  <AnimatedCounter value={stat.value} />
                </dd>
              </motion.div>
            );
          })}
        </motion.dl>
      </div>
    </section>
  );
};

export default TechStack;
