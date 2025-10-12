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
            
            {/* Simplified angular shapes - reduced animations */}
            <motion.div
              animate={{
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
                rotate: [0, -45, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-accent/20 diagonal-cut-reverse"
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
                      {/* Simplified Background Elements */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-cartoon-highlight/20 rounded-3xl blur-sm"
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
                      src="/assets/profile-pic.jpg" 
                      alt="Shivam Sabbarwal - Senior Software Engineer" 
                      className="w-full h-full object-cover scale-125 hover:scale-110 transition-transform duration-500" 
                      loading="eager"
                      width="320"
                      height="320"
                    />
                    
                    {/* Fun Overlay Effects */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                    
                        {/* Simplified Sparkle Effects */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{ 
                            duration: 3, 
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
                            duration: 4, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                          className="absolute bottom-6 left-6 w-2 h-2 bg-accent rounded-full"
                        />
                  </motion.div>
                  
                  {/* Simplified Border Animation */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 12, 
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
                className="text-center"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black cartoon-text-large leading-tight mb-1">
                  Shivam
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black cartoon-text-large leading-tight">
                  Sabbarwal
                </h2>
              </motion.div>    
            </motion.div>

            <div className="w-full lg:w-[60%] text-center lg:text-left lg:order-2 lg:pt-8">
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight cartoon-accent-large"
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
                className="flex flex-row justify-center items-center gap-4 sm:gap-6 py-6 sm:py-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-2 px-3 py-1 rounded-full border-2 border-primary bg-primary/5 shadow-sm"
                  style={{ boxShadow: '2px 2px 0 var(--cartoon-shadow)' }}
                >
                  <Code className="w-3 h-3 text-primary" />
                  <span className="text-xs font-bold cartoon-text">Development</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-2 px-3 py-1 rounded-full border-2 border-accent bg-accent/5 shadow-sm"
                  style={{ boxShadow: '2px 2px 0 var(--cartoon-shadow-accent)' }}
                >
                  <Palette className="w-3 h-3 text-accent" />
                  <span className="text-xs font-bold cartoon-accent">Design</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-2 px-3 py-1 rounded-full border-2 border-amber-600 bg-amber-600/5 shadow-sm"
                  style={{ boxShadow: '2px 2px 0 var(--cartoon-shadow-highlight)' }}
                >
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span className="text-xs font-bold cartoon-highlight">Innovation</span>
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
                  className="sm:w-auto"
                >
                  <Button
                    onClick={scrollToNext}
                    className="sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg hover:animate-glow normal-case"
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
                  className="sm:w-auto"
                >
                  <Button
                    variant="outline"
                    onClick={scrollToContact}
                    className="sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg hover:animate-pulse-color transition-all duration-150 normal-case"
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
