"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuCalendar, LuMapPin, LuBuilding2, LuAward, LuGraduationCap, LuChevronDown } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { TIMELINE } from "@/constants";

const TimelineCard = forwardRef<HTMLDivElement, { item: (typeof TIMELINE)[number]; expanded: boolean }>(
  function TimelineCard({ item, expanded }, ref) {
  return (
    <div
      ref={ref}
      className={`surface-card p-5 sm:p-6 select-none ${
        item.type === "current"
          ? "border-l-3 border-l-primary"
          : item.category === "education"
            ? "border-l-3 border-l-accent/50"
            : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground font-sans leading-snug">
            {item.title}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
            {item.category === "education" ? (
              <LuGraduationCap className="w-3.5 h-3.5" />
            ) : (
              <LuBuilding2 className="w-3.5 h-3.5" />
            )}
            <span className="text-sm font-medium">{item.company}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {item.type === "current" && (
            <Badge variant="default" className="text-[10px]">
              Current
            </Badge>
          )}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <LuChevronDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-1">
        <span className="flex items-center gap-1">
          <LuCalendar className="w-3 h-3" />
          {item.period}
        </span>
        <span className="flex items-center gap-1">
          <LuMapPin className="w-3 h-3" />
          {item.location}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground mt-3 mb-4 leading-relaxed">
              {item.description}
            </p>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-primary/70 mb-2 flex items-center gap-1">
                <LuAward className="w-3 h-3" />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const Timeline = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;
    const findActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });
      setActiveIndex(bestIdx);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(findActive);
        ticking = true;
      }
    };
    findActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", findActive);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", findActive);
    };
  }, []);

  return (
    <section id="timeline" className="py-20 sm:py-28 relative section-timeline-bg">
      <div className="section-glow absolute inset-0 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            My <span className="text-pop italic">Timeline</span>
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
            {TIMELINE.map((item, index) => (
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
                {/* Year marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.04 + 0.1 }}
                    viewport={{ once: true }}
                    className={`w-16 h-8 rounded-full flex items-center justify-center ${
                      item.type === "current"
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : item.category === "education"
                          ? "bg-background border border-accent/40 text-accent"
                          : "bg-background border border-border text-primary"
                    }`}
                  >
                    <span className="text-xs font-bold font-sans tracking-wider">
                      {item.year}
                    </span>
                  </motion.div>
                  {item.type === "current" && (
                    <motion.div
                      className="absolute inset-0 w-16 h-8 rounded-full border border-primary/40"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 flex-1 min-w-0 md:flex-none md:ml-0 md:w-[44%] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <TimelineCard
                    item={item}
                    expanded={activeIndex === index}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                  />
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
