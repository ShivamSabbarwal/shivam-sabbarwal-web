"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  GithubIcon,
  Linkedin01Icon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: GithubIcon, href: "https://github.com/ShivamSabbarwal", label: "GitHub" },
  { icon: Linkedin01Icon, href: "https://linkedin.com/in/shivamsabbarwal", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://instagram.com/shiv.sabb", label: "Instagram" },
];

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="hero-glow absolute w-[700px] h-[700px] top-[15%] left-[10%]" />
      <div className="hero-glow absolute w-[500px] h-[500px] bottom-[10%] right-[5%] opacity-60" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          {/* Profile Image — with warm glow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[35%] flex justify-center lg:justify-start mb-14 lg:mb-0"
          >
            <div className="relative">
              {/* Warm animated glow ring */}
              <motion.div
                className="absolute -inset-3 rounded-3xl opacity-60"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent), var(--primary))",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute -inset-3 rounded-3xl blur-xl opacity-25"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
              />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden ring-2 ring-background">
                <Image
                  src="/assets/profile-pic.jpg"
                  alt="Shivam Sabbarwal - Senior Software Engineer"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-[65%] text-center lg:text-left">
            {/* Role label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6"
            >
              Senior Software Engineer
            </motion.p>

            {/* Name — large editorial serif */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal leading-[0.9] tracking-tight mb-6"
            >
              <span className="block">Shivam</span>
              <span className="block text-primary italic">Sabbarwal</span>
            </motion.h1>

            {/* Accent gradient line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left mb-8"
            >
              <div className="accent-line w-32 sm:w-48 mx-auto lg:mx-0" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Full-stack engineer with 7+ years crafting scalable web applications
              and leading technical teams across{" "}
              <span className="text-emphasis">fintech</span>,{" "}
              <span className="text-accent-emphasis">geospatial</span>, and{" "}
              <span className="text-highlight">AI domains</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button onClick={scrollToNext} size="lg">
                View My Work
              </Button>
              <Button variant="outline" onClick={scrollToContact} size="lg">
                Get In Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-1 justify-center lg:justify-start"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <HugeiconsIcon icon={social.icon} className="w-[18px] h-[18px]" />
                </a>
              ))}
              <span className="text-border mx-2">|</span>
              <span className="text-xs text-muted-foreground tracking-wide">Based in Ontario, Canada</span>
            </motion.div>
          </div>
        </div>
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
          <HugeiconsIcon icon={ArrowDown01Icon} className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
