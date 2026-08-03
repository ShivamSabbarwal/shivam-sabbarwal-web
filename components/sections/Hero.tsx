"use client";

import Image from "next/image";
import type { ComponentProps, MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { LuArrowDown } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { PERSONAL, SOCIAL_ICONS } from "@/constants";
import { DURATION, EASE_OUT, EASE_REVEAL } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";

const PORTRAIT_MARKERS: {
  label: string;
  cat: string;
  side: "left" | "right";
  position: string;
  tempo: number;
  delay: number;
}[] = [
  {
    label: "Leads the work",
    cat: "cat-frontend",
    side: "left",
    position: "top-[7%] -left-[30%]",
    tempo: 7,
    delay: 0,
  },
  {
    label: "Ships the code",
    cat: "cat-backend",
    side: "right",
    position: "top-[40%] -right-[32%] md:-right-[18%] xl:-right-[28%]",
    tempo: 8,
    delay: DURATION.slow,
  },
  {
    label: "Untangles systems",
    cat: "cat-cloud",
    side: "left",
    position: "bottom-[31%] -left-[34%]",
    tempo: 9,
    delay: DURATION.fast,
  },
];

function MagneticButton({
  children,
  className,
  wrapperClassName,
  ...props
}: ComponentProps<typeof Button> & { wrapperClassName?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 18 });
  const springY = useSpring(y, { stiffness: 280, damping: 18 });

  const handleMouse = (e: MouseEvent) => {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.18);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.18);
  };

  return (
    <motion.div
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={wrapperClassName ?? "inline-block"}
    >
      <Button ref={ref} className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}

/** Masked line reveal: the hero's entrance signature. */
function RevealLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        initial={reduceMotion ? false : { y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: DURATION.hero, delay, ease: EASE_REVEAL }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const spotlightFrame = useRef(0);
  const spotlightCoords = useRef({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [9, -9]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-9, 9]), {
    stiffness: 180,
    damping: 22,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0.12]);

  const handleSpotlightMove = (e: MouseEvent) => {
    spotlightCoords.current = { x: e.clientX, y: e.clientY };
    if (spotlightFrame.current) return;
    spotlightFrame.current = requestAnimationFrame(() => {
      spotlightFrame.current = 0;
      const el = spotlightRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const { x, y } = spotlightCoords.current;
      el.style.setProperty("--spotlight-x", `${x - rect.left}px`);
      el.style.setProperty("--spotlight-y", `${y - rect.top}px`);
      el.style.opacity = "1";
    });
  };

  const handleTiltMove = (e: MouseEvent) => {
    if (reduceMotion) return;
    const rect = tiltRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100svh] overflow-hidden"
      onMouseMove={handleSpotlightMove}
      onMouseLeave={() => {
        if (spotlightFrame.current) {
          cancelAnimationFrame(spotlightFrame.current);
          spotlightFrame.current = 0;
        }
        if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
      }}
    >
      <div
        ref={spotlightRef}
        className="spotlight pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500"
        style={{ opacity: 0 }}
      />

      <motion.div
        className="hero-glow absolute inset-0"
        style={reduceMotion ? undefined : { y: parallaxY, scale: parallaxScale }}
      />

      <div className="dot-field pointer-events-none absolute inset-0" />

      <motion.div
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-20 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-20 pb-10 sm:px-8 sm:pb-14 md:pt-24 lg:pt-28 lg:pb-20"
      >
        <div className="grid items-center gap-5 sm:gap-7 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:gap-12">
          {/* ── Portrait: leads the stack on mobile, sits right from md up ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: DURATION.hero, delay: 0.2, ease: EASE_OUT }}
            className="relative order-1 mx-auto w-full max-w-[13rem] sm:max-w-[15rem] md:order-2 md:max-w-[17rem] lg:max-w-[19rem] xl:max-w-[21rem]"
          >
            <div className="speed-lines absolute inset-0 z-0" />

            <motion.div
              ref={tiltRef}
              onMouseMove={handleTiltMove}
              onMouseLeave={() => {
                mouseX.set(0.5);
                mouseY.set(0.5);
              }}
              style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
              className="panel corner-ticks relative z-10 mx-auto flex w-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden sm:aspect-square">
                <Image
                  src={PERSONAL.portrait}
                  alt={`Portrait of ${PERSONAL.name}`}
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, (max-width: 1024px) 272px, (max-width: 1280px) 304px, 336px"
                  className="scale-105 object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>

              {/* Same three facts at every width: only the type scale moves. */}
              <dl className="border-border grid grid-cols-3 gap-1.5 border-t-[1.5px] p-3 sm:gap-3 sm:p-5">
                <div className="min-w-0">
                  <dt className="hud-label">Now</dt>
                  <dd className="mt-1 truncate text-[13px] font-bold sm:text-[15px]">Cardata</dd>
                </div>
                <div className="border-border/70 min-w-0 border-l pl-1.5 sm:pl-3">
                  <dt className="hud-label">Years</dt>
                  <dd className="hud-value mt-1 text-[13px] font-bold sm:text-[15px]">
                    {PERSONAL.yearsExperience}
                  </dd>
                </div>
                <div className="border-border/70 min-w-0 border-l pl-1.5 sm:pl-3">
                  <dt className="hud-label">Status</dt>
                  <dd className="mt-1 flex items-center gap-1 text-[13px] font-bold sm:gap-1.5 sm:text-[15px]">
                    <motion.span
                      animate={reduceMotion ? undefined : { opacity: [1, 0.25, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-primary h-2 w-2 shrink-0 rounded-full"
                    />
                    <span className="text-emphasis truncate">Open</span>
                  </dd>
                </div>
              </dl>
            </motion.div>

            {PORTRAIT_MARKERS.map((marker, i) => (
              <motion.div
                key={marker.label}
                className={`portrait-marker portrait-marker--${marker.side} ${marker.position} ${marker.cat} absolute z-20 select-none`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  reduceMotion
                    ? { opacity: 1, scale: 1 }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -4, 0],
                      }
                }
                transition={{
                  opacity: { duration: DURATION.fast, delay: 0.85 + i * 0.08 },
                  scale: { duration: DURATION.fast, delay: 0.85 + i * 0.08 },
                  y: {
                    duration: DURATION.hero * marker.tempo,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: marker.delay,
                  },
                }}
                whileHover={{ scale: 1.04 }}
              >
                <span className="portrait-marker__index">{String(i + 1).padStart(2, "0")}</span>
                <span>{marker.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Identity ───────────────────────────────────────── */}
          <div className="relative z-10 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.1 }}
              className="eyebrow mb-3 sm:mb-4"
            >
              {PERSONAL.title} · platform modernization
            </motion.p>

            <h1 className="font-heading text-[clamp(2.75rem,8.5vw,6rem)] leading-[0.88] tracking-[-0.045em]">
              <RevealLine delay={0.2}>Shivam</RevealLine>
              <RevealLine delay={0.32}>
                <span className="name-plate mt-1 -rotate-[1.5deg]">Sabbarwal</span>
              </RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.6 }}
              className="text-muted-foreground mt-5 max-w-md text-base leading-relaxed sm:mt-7 sm:text-lg"
            >
              I build <span className="text-foreground font-semibold">technology</span> that keeps
              pace with ambition, creating products, platforms, and{" "}
              <span className="text-emphasis">engineering foundations</span> that help companies
              grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.72 }}
              className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center"
            >
              <MagneticButton
                onClick={() => scrollToSection("timeline")}
                size="lg"
                wrapperClassName="block sm:inline-block"
                className="w-full px-4 sm:w-auto sm:px-8"
              >
                See my career
              </MagneticButton>
              <MagneticButton
                variant="outline"
                onClick={() => scrollToSection("contact")}
                size="lg"
                wrapperClassName="block sm:inline-block"
                className="w-full px-4 sm:w-auto sm:px-8"
              >
                Let&apos;s talk
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: DURATION.slow, delay: 0.9 }}
              className="mt-5 flex flex-wrap items-center gap-1.5 sm:mt-7"
            >
              {PERSONAL.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label={social.name}
                    className="text-muted-foreground hover:bg-primary/15 hover:text-foreground flex h-11 w-11 items-center justify-center rounded-lg transition-colors"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
              <span className="hud-label ml-2">{PERSONAL.location}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection("timeline")}
        className="text-muted-foreground hover:text-primary-strong absolute bottom-3 left-1/2 z-20 hidden min-h-11 -translate-x-1/2 flex-col items-center justify-center gap-1.5 px-4 transition-colors md:flex"
        aria-label="Scroll to career timeline"
      >
        <span className="hud-label">Scroll</span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <LuArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
