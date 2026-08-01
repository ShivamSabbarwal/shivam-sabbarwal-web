"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import {
  LuBuilding2,
  LuCalendar,
  LuChevronDown,
  LuGraduationCap,
  LuListChecks,
  LuMapPin,
} from "react-icons/lu";
import { TIMELINE } from "@/constants";
import { useNearestSection } from "@/hooks/useActiveSection";
import { DURATION, EASE_OUT, VIEWPORT } from "@/lib/motion";

const TIMELINE_CARD_IDS = TIMELINE.map((item) => `timeline-card-${item.id}`);

/** The backdrop marquee reads the same employers the rail below enumerates. */
const EMPLOYERS = TIMELINE.filter((item) => item.category === "work")
  .map((item) => item.company.replace(/\s*\(.*\)$/, ""))
  .join(" · ");

/** Derived from the existing job title, so it makes no new claims. */
function scopeOf(item: (typeof TIMELINE)[number]) {
  if (item.category === "education") return "Education";
  const title = item.title.toLowerCase();
  if (title.includes("chief")) return "Executive";
  if (title.includes("senior")) return "Senior";
  if (title.includes("co-op")) return "Co-op";
  return "Engineer";
}

const TimelineCard = ({
  item,
  expanded,
}: {
  item: (typeof TIMELINE)[number];
  expanded: boolean;
}) => {
  const reduceMotion = useReducedMotion();
  const isEducation = item.category === "education";

  return (
    <div className={`panel p-5 select-none sm:p-6 ${expanded ? "panel-live corner-ticks" : ""}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="hud-label text-primary-strong shrink-0 truncate">{scopeOf(item)}</span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {item.type === "current" && (
            <span className="bg-primary text-primary-foreground flex items-center gap-1.5 rounded-sm px-2 py-0.5">
              <motion.span
                animate={reduceMotion ? undefined : { opacity: [1, 0.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="bg-primary-foreground h-1.5 w-1.5 rounded-full"
              />
              <span className="hud-label text-primary-foreground">Current</span>
            </span>
          )}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: DURATION.fast }}
          >
            <LuChevronDown className="text-muted-foreground h-4 w-4" />
          </motion.div>
        </div>
      </div>

      <h3 className="font-heading text-foreground text-lg leading-snug font-bold tracking-tight sm:text-xl">
        {item.title}
      </h3>
      <div className="text-muted-foreground mt-1.5 flex items-center gap-1.5">
        {isEducation ? (
          <LuGraduationCap className="h-3.5 w-3.5 shrink-0" />
        ) : (
          <LuBuilding2 className="h-3.5 w-3.5 shrink-0" />
        )}
        <span className="text-[15px] font-semibold">{item.company}</span>
      </div>

      <div className="text-muted-foreground mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        <span className="hud-label flex items-center gap-1.5">
          <LuCalendar className="h-3 w-3" />
          {item.period}
        </span>
        <span className="hud-label flex items-center gap-1.5">
          <LuMapPin className="h-3 w-3" />
          {item.location}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : DURATION.fast, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground mt-4 mb-4 text-[15px] leading-relaxed sm:text-base">
              {item.description}
            </p>
            <div className="border-border border-t pt-3.5">
              <h4 className="hud-label text-primary-strong mb-2.5 flex items-center gap-1.5">
                <LuListChecks className="h-3 w-3" />
                {isEducation ? "Highlights" : "Selected work"}
              </h4>
              <ul className="space-y-2">
                {item.achievements.map((achievement, i) => (
                  <motion.li
                    key={achievement}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: DURATION.fast, delay: 0.06 + i * 0.05 }
                    }
                    className="text-muted-foreground flex items-start gap-2.5 text-[15px] leading-relaxed"
                  >
                    <span className="bg-primary mt-[0.5rem] h-1.5 w-1.5 shrink-0 rotate-45" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Timeline = () => {
  const activeId = useNearestSection(TIMELINE_CARD_IDS);
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 65%"],
  });
  const railProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  // Parallax backdrop: the employer wordmark drifts sideways across the whole
  // career scroll, so the names move past you as the rail advances.
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const marqueeX = useTransform(sectionProgress, [0, 1], ["4%", "-38%"]);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative overflow-x-clip py-20 sm:py-28"
    >
      <div className="section-glow pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="sticky top-1/2 -translate-y-1/2">
          <motion.p
            style={reduceMotion ? undefined : { x: marqueeX }}
            className="font-heading text-foreground/[0.055] dark:text-primary/[0.07] text-[clamp(3.5rem,11vw,7rem)] leading-none font-bold tracking-tight whitespace-nowrap"
          >
            {EMPLOYERS} · {EMPLOYERS} ·
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE_OUT }}
          viewport={VIEWPORT}
          className="mb-14 text-center sm:mb-20"
        >
          <p className="eyebrow mb-3">Experience · 2016 to present</p>
          <h2 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Where I&apos;ve <span className="text-pop italic">Worked</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            A career spent shipping new products and untangling established systems.
          </p>
          <div className="accent-line mx-auto mt-6 w-24" />
        </motion.header>

        <div ref={railRef} className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-[2px] sm:left-8 lg:left-1/2 lg:-translate-x-[1px]">
            <div className="timeline-line h-full w-full" />
            <motion.div
              className="timeline-progress absolute top-0 left-0 h-full w-full"
              style={{ scaleY: reduceMotion ? 1 : railProgress }}
            />
          </div>

          <div className="space-y-3">
            {TIMELINE.map((item, index) => {
              const expanded = activeId === `timeline-card-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: DURATION.slow, delay: index * 0.03, ease: EASE_OUT }}
                  viewport={VIEWPORT}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-0 z-10 flex flex-col items-center lg:left-1/2 lg:-translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: DURATION.fast, delay: index * 0.03 + 0.1 }}
                      viewport={VIEWPORT}
                      className={`flex h-8 w-[52px] items-center justify-center rounded-md border-[1.5px] transition-colors duration-300 sm:w-16 ${
                        expanded || item.type === "current"
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground"
                      }`}
                    >
                      <span className="font-mono text-xs font-bold tracking-wider">
                        {item.year}
                      </span>
                    </motion.div>
                    {item.type === "current" && !reduceMotion && (
                      <motion.div
                        className="border-primary/50 absolute inset-0 h-8 w-[52px] rounded-md border sm:w-16"
                        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Connector tick: bridges the year marker to the live card */}
                  <motion.div
                    animate={{ opacity: expanded ? 1 : 0 }}
                    transition={{ duration: DURATION.fast }}
                    className={`bg-primary absolute top-[15px] hidden h-[2px] w-6 lg:block ${
                      index % 2 === 0 ? "lg:right-1/2 lg:mr-8" : "lg:left-1/2 lg:ml-8"
                    }`}
                  />

                  <div
                    id={`timeline-card-${item.id}`}
                    className={`ml-[68px] min-w-0 flex-1 sm:ml-24 lg:ml-0 lg:w-[46%] lg:flex-none ${
                      index % 2 === 0 ? "lg:mr-auto lg:pr-14" : "lg:ml-auto lg:pl-14"
                    }`}
                  >
                    <TimelineCard item={item} expanded={expanded} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
