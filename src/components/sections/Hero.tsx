import { motion } from "motion/react";
import { ArrowDown, Sparkles, Code, Palette } from "lucide-react";
import { useSounds } from "../../lib/audio/sounds";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { playClick, playHover, playBounce } = useSounds();
  
  const scrollToNext = () => {
    playClick();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 geometric-bg opacity-10" />
        
        {/* Angular shapes */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-primary/20 diagonal-cut"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-accent/20 diagonal-cut-reverse"
        />
        
        {/* Additional angular elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 bg-cartoon-highlight/30"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight"
            >
              <span className="cartoon-text-large">Software Engineer</span>
              <br />
              <span className="cartoon-accent-large">CTO @ Remittor</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium px-2"
            >
              Software Engineer and CTO with over 7 years of experience helping businesses 
              <span className="cartoon-text"> turn ideas into real, effective products</span> through 
              <span className="cartoon-highlight"> technical leadership and scalable solutions</span>
            </motion.p>
          </div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 8, y: -5 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              className="flex items-center space-x-2 angular-card px-4 sm:px-6 py-3 hover:animate-float"
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-bold">Development</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: -8, y: -5 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              className="flex items-center space-x-2 angular-card px-4 sm:px-6 py-3 hover:animate-float"
            >
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-bold">Design</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: 8, y: -5 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              className="flex items-center space-x-2 angular-card px-4 sm:px-6 py-3 hover:animate-float"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cartoon-highlight" />
              <span className="text-xs sm:text-sm font-bold">Innovation</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95, y: 1 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              onTapStart={playClick}
              className="w-full sm:w-auto"
            >
              <Button
                onClick={scrollToNext}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg hover:animate-glow"
              >
                View My Work
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95, y: 1 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onHoverStart={playHover}
              onTapStart={playClick}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg hover:animate-pulse-color transition-all duration-150"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onHoverStart={playHover}
          onTapStart={playBounce}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToNext}
            className="p-4 hover:animate-bounce-slow transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
