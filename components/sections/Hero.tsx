"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const timelineSection = document.getElementById("timeline");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Warm ambient glow */}
      <div className="hero-glow absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[38%] flex flex-col items-center lg:order-1 mb-12 lg:mb-0"
          >
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute -inset-4 bg-linear-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
                <Image
                  src="/assets/profile-pic.jpg"
                  alt="Shivam Sabbarwal - Senior Software Engineer"
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
                  className="object-cover scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-[62%] text-center lg:text-left lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Senior Software Engineer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] mb-6 tracking-tight"
            >
              Shivam{" "}
              <em className="not-italic text-primary">Sabbarwal</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Full-stack engineer with 7+ years crafting scalable web applications
              and leading technical teams across fintech, geospatial, and AI domains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToNext}
                className="px-8 py-3 text-base font-semibold"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="px-8 py-3 text-base font-semibold"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="text-muted-foreground hover:text-foreground"
          >
            <HugeiconsIcon icon={ArrowDown01Icon} className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
