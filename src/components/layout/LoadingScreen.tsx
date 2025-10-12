import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, Palette } from "lucide-react";
import { useLoading } from "@/contexts/LoadingContext";

const LoadingScreen = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    document.body.style.overflow = 'unset';
  }, [setIsLoading]);

  const progressIncrement = useMemo(() => Math.random() * 8 + 2, []);

  useEffect(() => {
    // Disable scroll when loading
    document.body.style.overflow = 'hidden';
    
    // Reduce loading time from 6s to 2s for better UX
    const timer = setTimeout(handleLoadingComplete, 2000);

    // Simulate progress with faster, more realistic progression
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // More realistic progress increments
        return prev + progressIncrement;
      });
    }, 50); // Update every 50ms for smoother progress

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      // Ensure scroll is re-enabled on cleanup
      document.body.style.overflow = 'unset';
    };
  }, [handleLoadingComplete, progressIncrement]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ 
            opacity: 0,
            scale: 0.95
          }}
          animate={{ 
            opacity: 1,
            scale: 1
          }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: {
              duration: 0.5,
              ease: "easeInOut"
            }
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut"
          }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Simplified Background Elements */}
          <div className="absolute inset-0 -z-10">
            {/* Simple geometric background pattern */}
            <div className="absolute inset-0 geometric-bg opacity-5" />
            
            {/* Single floating shape for performance */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/10 rounded-full"
            />
          </div>

          <div className="text-center space-y-12 max-w-2xl mx-auto px-6">
            {/* Simplified Logo */}
            <motion.div
              initial={{ 
                scale: 0.8, 
                opacity: 0
              }}
              animate={{ 
                scale: 1, 
                opacity: 1
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut"
              }}
              className="relative"
            >
              <div className="angular-card p-8 inline-block">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="cartoon-text-large">Shivam</span>
                  <br />
                  <span className="cartoon-accent-large">Sabbarwal</span>
                </h1>
              </div>
              
              {/* Static icons for better performance */}
              <div className="absolute -top-4 -right-4 w-12 h-12 angular-card flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 angular-card flex items-center justify-center">
                <Palette className="w-6 h-6 text-accent" />
              </div>
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

            {/* Simplified Progress Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              {/* Progress Bar Container */}
              <div className="w-full max-w-md mx-auto">
                <div className="angular-card p-4">
                  <div className="w-full h-4 bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress, 100)}%` }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary via-accent to-cartoon-highlight"
                    />
                  </div>
                  
                  {/* Progress percentage */}
                  <div className="text-center mt-2">
                    <span className="text-sm font-bold text-primary">
                      {Math.round(Math.min(progress, 100))}%
                    </span>
                  </div>
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
