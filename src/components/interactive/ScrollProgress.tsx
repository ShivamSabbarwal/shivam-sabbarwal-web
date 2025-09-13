import { motion, useScroll } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-2 z-50 origin-left ${
        theme === 'dark' ? 'bg-accent' : 'bg-primary'
      }`}
      style={{ scaleX: scrollYProgress }}
      animate={{
        backgroundColor: theme === 'dark' ? 'var(--accent)' : 'var(--primary)',
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
  );
};

export default ScrollProgress;
