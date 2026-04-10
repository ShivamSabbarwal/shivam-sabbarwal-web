"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

const FadeIn = ({ children, direction = "up", delay = 0, className }: FadeInProps) => {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -20 }
      : direction === "right"
        ? { opacity: 0, x: 20 }
        : { opacity: 0, y: 16 };
  const animate = direction === "up" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
