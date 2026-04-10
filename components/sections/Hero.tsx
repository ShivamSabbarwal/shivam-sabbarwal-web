"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { LuArrowDown } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { PERSONAL, SOCIAL_ICONS } from "@/constants";

const STICKERS: { label: string; cat: string; style: React.CSSProperties; rotate: number; duration: number; delay: number }[] = [
  { label: "TECH LEAD", cat: "var(--primary)", style: { top: "4%", left: "0%" }, rotate: -6, duration: 6.5, delay: 0 },
  { label: "REACT · TS", cat: "var(--color-frontend)", style: { top: "0%", right: "2%" }, rotate: 5, duration: 5.5, delay: 0.8 },
  { label: "FINTECH", cat: "var(--color-backend)", style: { top: "44%", left: "-4%" }, rotate: -4, duration: 7, delay: 0.3 },
  { label: "FULL-STACK", cat: "var(--accent)", style: { top: "40%", right: "-2%" }, rotate: 3, duration: 6, delay: 1.2 },
  { label: "CLOUD · AWS", cat: "var(--color-cloud)", style: { bottom: "4%", left: "2%" }, rotate: 4, duration: 5.8, delay: 0.6 },
  { label: `${PERSONAL.yearsExperience}+ YEARS`, cat: "var(--color-ai)", style: { bottom: "0%", right: "4%" }, rotate: -3, duration: 6.8, delay: 1.0 },
];

/* ── Magnetic button wrapper ── */
function MagneticButton({ children, className, ...props }: React.ComponentProps<typeof Button>) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  }, [x, y]);

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <Button ref={ref} className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}

const Hero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.dispatchEvent(new CustomEvent("nav:scroll-start"));
    el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => scrollToSection("timeline");
  const scrollToContact = () => scrollToSection("contact");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseMove={(e) => {
        const el = spotlightRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
        el.style.opacity = "1";
      }}
      onMouseLeave={() => {
        if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
      }}
    >
      {/* Spotlight cursor follower */}
      <div
        ref={spotlightRef}
        className="spotlight pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500"
        style={{ opacity: 0 }}
      />

      {/* Ambient background glows */}
      <div className="hero-glow absolute w-[700px] h-[700px] top-[10%] left-[5%]" />
      <div className="hero-glow absolute w-[500px] h-[500px] bottom-[10%] right-[5%] opacity-60" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14 sm:py-20 text-center">
        {/* Role label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] sm:text-sm font-semibold tracking-widest sm:tracking-[0.2em] uppercase text-primary mb-6 text-balance [word-break:keep-all]"
        >
          {PERSONAL.title}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal leading-[0.9] tracking-tight mb-6"
        >
          <span className="block">Shivam</span>
          <span className="block text-pop italic">Sabbarwal</span>
        </motion.h1>

        {/* Accent gradient line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="accent-line w-32 sm:w-48 mx-auto" />
        </motion.div>

        {/* Portrait with floating stickers + manga speed lines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-2xl py-8 md:py-16 my-2 md:my-8"
        >
          {/* Speed lines behind portrait */}
          <div className="speed-lines absolute inset-0 z-0" />
          {/* Portrait */}
          <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 group">
            <motion.div
              className="absolute -inset-3 rounded-3xl opacity-60"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--accent), var(--primary))",
                backgroundSize: "200% 200%",
              }}
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="absolute -inset-3 rounded-3xl blur-xl opacity-25"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden ring-2 ring-background">
              <Image
                src="/assets/profile-pic.jpg"
                alt={`${PERSONAL.name} - ${PERSONAL.title}`}
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                className="object-cover scale-110 grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-500"
                priority
              />
            </div>
          </div>

          {/* Floating stickers */}
          {STICKERS.map((sticker, i) => (
            <motion.div
              key={sticker.label}
              className="absolute flex items-center cat-chip px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[11px] font-semibold tracking-wider uppercase select-none shadow-sm cursor-default will-change-transform"
              style={{ ...sticker.style, "--cat": sticker.cat } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
                rotate: [sticker.rotate, sticker.rotate + 2, sticker.rotate],
              }}
              transition={{
                opacity: { duration: 0.4, delay: 0.8 + i * 0.15 },
                scale: { duration: 0.4, delay: 0.8 + i * 0.15 },
                y: { duration: sticker.duration, repeat: Infinity, ease: "easeInOut", delay: sticker.delay },
                rotate: { duration: sticker.duration, repeat: Infinity, ease: "easeInOut", delay: sticker.delay },
              }}
              whileHover={{ scale: 1.1, rotate: 0 }}
            >
              {sticker.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10"
        >
          Full-stack engineer with {PERSONAL.yearsExperience}+ years crafting scalable
          web applications and leading technical teams across{" "}
          <span className="text-emphasis">fintech</span>,{" "}
          <span className="text-accent-emphasis">SaaS</span>, and{" "}
          <span className="text-highlight">enterprise platforms</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <MagneticButton onClick={scrollToNext} size="lg">
            View My Work
          </MagneticButton>
          <MagneticButton variant="outline" onClick={scrollToContact} size="lg">
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex items-center gap-1 justify-center"
        >
          {PERSONAL.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            );
          })}
          <span className="text-border mx-2">|</span>
          <span className="text-xs text-muted-foreground tracking-wide">Based in {PERSONAL.location}</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground/50 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <LuArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
