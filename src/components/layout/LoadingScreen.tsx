import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Code, Palette } from "lucide-react";
import { useLoading } from "@/contexts/LoadingContext";

const LoadingScreen = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scroll when loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scroll when loading is done
      document.body.style.overflow = 'unset';
    }, 4000);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      // Ensure scroll is re-enabled on cleanup
      document.body.style.overflow = 'unset';
    };
  }, [setIsLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ 
            opacity: 0,
            scale: 1.1,
            rotateX: 15,
            rotateY: 5
          }}
          animate={{ 
            opacity: 1,
            scale: 1,
            rotateX: 0,
            rotateY: 0
          }}
          exit={{ 
            opacity: 0,
            x: "-100vw",
            scale: 0.9,
            rotateY: -15,
            filter: "blur(10px)",
            transition: {
              duration: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10">
            {/* Geometric background pattern */}
            <div className="absolute inset-0 geometric-bg opacity-5" />
            
            {/* Floating angular shapes */}
            <motion.div
              animate={{
                x: [0, 200, 0],
                y: [0, -150, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 diagonal-cut"
            />
            <motion.div
              animate={{
                x: [0, -200, 0],
                y: [0, 150, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 diagonal-cut-reverse"
            />
            
            {/* Rotating triangular elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 w-24 h-24 bg-cartoon-highlight/20"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
              }}
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/20"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
              }}
            />
          </div>

          <div className="text-center space-y-12 max-w-2xl mx-auto px-6">
            {/* Main Logo with Angular Design */}
            <motion.div
              initial={{ 
                scale: 0, 
                rotate: -180,
                y: 100,
                opacity: 0
              }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: 0,
                opacity: 1
              }}
              transition={{ 
                duration: 1.5, 
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                bounce: 0.4
              }}
              className="relative"
            >
              <motion.div
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  rotateX: 90,
                  y: 50
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateX: 0,
                  y: 0
                }}
                transition={{ 
                  delay: 0.5, 
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="angular-card p-8 inline-block"
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="cartoon-text-large">Shivam</span>
                  <br />
                  <span className="cartoon-accent-large">Sabbarwal</span>
                </h1>
              </motion.div>
              
              {/* Floating icons around the logo */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-12 h-12 angular-card flex items-center justify-center"
              >
                <Code className="w-6 h-6 text-primary" />
              </motion.div>
              
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 angular-card flex items-center justify-center"
              >
                <Palette className="w-6 h-6 text-accent" />
              </motion.div>
            </motion.div>

            {/* Dynamic Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-4"
            >
              <motion.p
                key={Math.floor(progress / 25)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-bold text-muted-foreground"
              >
                {progress < 25 && "Initializing creative engine..."}
                {progress >= 25 && progress < 50 && "Loading design systems..."}
                {progress >= 50 && progress < 75 && "Crafting digital experiences..."}
                {progress >= 75 && "Almost ready to amaze..."}
              </motion.p>
            </motion.div>

            {/* Modern Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-4"
            >
              {/* Progress Bar Container */}
              <div className="w-full max-w-md mx-auto">
                <div className="angular-card p-4">
                  <div className="w-full h-4 bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress, 100)}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary via-accent to-cartoon-highlight relative"
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Progress percentage */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mt-2"
                  >
                    <span className="text-sm font-bold text-primary">
                      {Math.round(Math.min(progress, 100))}%
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
