import { motion } from "motion/react";
import { ArrowDown, Sparkles, Code, Palette } from "lucide-react";
import { useSounds } from "../../lib/audio/sounds";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { playClick, playHover, playBounce } = useSounds();
  
  const scrollToNext = () => {
    playClick();
    const timelineSection = document.getElementById("timeline");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    playClick();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Content - Desktop: Side by side, Mobile: Stacked */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
            
            {/* Profile Section - Left side on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="w-full lg:w-[40%] flex flex-col items-center lg:order-1 mb-12 lg:mb-0"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <motion.div 
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                  whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Fun Background Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-cartoon-highlight/20 rounded-3xl blur-sm"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 bg-gradient-to-br from-accent/30 to-cartoon-highlight/30 rounded-2xl blur-sm"
                  />
                  
                  {/* Main Image Container */}
                  <motion.div 
                    className="relative w-full h-full rounded-2xl overflow-hidden angular-card hover:cartoon-shadow-lg transition-all duration-300"
                    style={{
                      boxShadow: '8px 8px 0 var(--cartoon-shadow), 16px 16px 0 var(--cartoon-shadow-accent), 24px 24px 0 var(--cartoon-shadow-highlight)',
                      transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)'
                    }}
                    whileHover={{ 
                      boxShadow: '12px 12px 0 var(--cartoon-shadow), 24px 24px 0 var(--cartoon-shadow-accent), 36px 36px 0 var(--cartoon-shadow-highlight)',
                      transform: 'perspective(1000px) rotateX(8deg) rotateY(-8deg) scale(1.02)'
                    }}
                  >
                    <img 
                      src="/src/assets/profile-pic.jpg" 
                      alt="Shivam Sabbarwal" 
                      className="w-full h-full object-cover scale-125 hover:scale-110 transition-transform duration-500" 
                    />
                    
                    {/* Fun Overlay Effects */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                    
                    {/* Sparkle Effects */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-4 right-4 w-3 h-3 bg-cartoon-highlight rounded-full"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="absolute bottom-6 left-6 w-2 h-2 bg-accent rounded-full"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ 
                        duration: 1.8, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-primary rounded-full"
                    />
                  </motion.div>
                  
                  {/* Fun Border Animation */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -inset-1 border-2 border-dashed border-primary/30 rounded-2xl"
                  />
                </motion.div>
              </div>
              
              {/* Name under profile image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center mb-6"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black cartoon-text-large leading-tight mb-2">
                  Shivam
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black cartoon-text-large leading-tight">
                  Sabbarwal
                </h2>
              </motion.div>
              
            </motion.div>

            {/* Text Content - Right side on desktop */}
            <div className="w-full lg:w-[60%] text-center lg:text-left lg:order-2 lg:pt-8">
              {/* Main Heading */}
              <div className="space-y-6 sm:space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight cartoon-accent-large"
                >
                  Software Engineer
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto lg:mx-0 leading-relaxed font-medium px-2 lg:px-0"
                >
                  Full-stack software engineer with over 7 years of experience building 
                  <span className="cartoon-text"> scalable web applications</span> and 
                  <span className="cartoon-highlight"> innovative digital solutions</span>
                </motion.p>
              </div>
              
              {/* Feature Badges */}
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
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg hover:animate-glow normal-case"
                  >
                    View My Timeline
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
                    onClick={scrollToContact}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg hover:animate-pulse-color transition-all duration-150 normal-case"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
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
