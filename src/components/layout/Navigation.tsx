import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, FileText } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useSounds } from "../../lib/audio/sounds";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { playClick, playHover } = useSounds();
  const isMobile = useIsMobile();

  const navItems = NAV_ITEMS;

  // Scroll spy functionality to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (href: string) => {
    playClick();
    if (href.startsWith('#')) {
      // Handle hash navigation for sections on the home page
      const hash = href.substring(1);
      setActiveSection(hash); // Update active section immediately
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const openResume = () => {
    playClick();
    
    if (isMobile) {
      // On mobile, automatically trigger PDF download
      // Open resume page in new tab and trigger print after a short delay
      const newWindow = window.open('/resume', '_blank');
      
      // Wait for the page to load, then trigger print
      setTimeout(() => {
        if (newWindow && !newWindow.closed) {
          newWindow.focus();
          // Trigger print dialog which allows PDF download
          newWindow.print();
          newWindow.close();
        }
      }, 1000);
    } else {
      // On desktop, open resume page normally
      window.open('/resume', '_blank');
    }
  };


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      layout
      className="fixed z-40 top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-fit rounded-xl sm:rounded-2xl floating-dock"
      style={{
        transition: "none" // Disable CSS transitions in favor of Framer Motion
      }}
    >
      <motion.div 
        layout
        className="mx-auto px-3 sm:px-6 py-2 sm:py-3"
        transition={{
          layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          padding: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        }}
      >
        <motion.div 
          layout
          className="flex items-center space-x-2 sm:space-x-4"
          transition={{
            layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            gap: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
          }}
        >

          {/* Navigation Items - Hidden on mobile, shown on larger screens */}
          <motion.div 
            layout
            className="hidden md:flex items-center space-x-1 sm:space-x-2"
            transition={{
              layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              gap: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 0.9,
                }}
                transition={{ 
                  delay: index * 0.1 + 0.3, 
                  duration: 0.1, 
                  ease: "easeOut",
                  layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92, y: 1 }}
                onHoverStart={playHover}
                onTapStart={playClick}
                style={{
                  transition: "none" // Disable CSS transitions
                }}
              >
                <Button
                  onClick={() => handleNavClick(item.href)}
                  variant={activeSection === item.href.substring(1) ? "default" : "outline"}
                  size="sm"
                  className={`text-xs font-bold px-2 sm:px-3 py-2 ${
                    activeSection === item.href.substring(1)
                      ? "hover:animate-glow"
                      : "hover:animate-pulse-color"
                  }`}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume Button */}
          <motion.div
            layout
            animate={{
              scale: 0.9
            }}
            transition={{
              layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            onHoverStart={playHover}
            onTapStart={playClick}
            style={{
              transition: "none" // Disable CSS transitions
            }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={openResume}
              className="hover:animate-glow w-8 h-8 sm:w-10 sm:h-10"
              aria-label={isMobile ? "Download Resume PDF" : "Open Resume"}
            >
              <motion.div
                animate={{
                  scale: 0.8
                }}
                transition={{
                  scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </Button>
          </motion.div>

          {/* Theme Toggle & Mobile Menu */}
          <motion.div 
            layout
            className="flex items-center space-x-1 sm:space-x-2"
            transition={{
              layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              gap: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
          >
            {/* Theme Toggle */}
            <motion.div
              layout
              animate={{
                scale: 0.9
              }}
              transition={{
                layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              onHoverStart={playHover}
              onTapStart={playClick}
              style={{
                transition: "none" // Disable CSS transitions
              }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="hover:animate-pulse-color w-8 h-8 sm:w-10 sm:h-10"
                aria-label="Toggle theme"
              >
                <motion.div
                  animate={{
                    scale: 0.8
                  }}
                  transition={{
                    scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                  whileHover={{ rotate: 360 }}
                >
                  {theme === 'light' ? (
                    <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </motion.div>
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <motion.div
              layout
              animate={{
                scale: 0.9
              }}
              transition={{
                layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              onHoverStart={playHover}
              onTapStart={playClick}
              style={{
                transition: "none" // Disable CSS transitions
              }}
            >
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden hover:animate-glow w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <motion.div
                      animate={{
                        scale: 0.83
                      }}
                      transition={{
                        scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                      }}
                    >
                      <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </Button>
                </SheetTrigger>
                  <SheetContent 
                    side="right" 
                    className="w-[320px] sm:w-[380px] md:w-[420px] backdrop-blur-xl border-l-4 border-primary/20 z-[60]"
                  >
                    {/* Accessibility Title and Description */}
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                      Navigate through different sections of the portfolio
                    </SheetDescription>

                    {/* Cool Background Effects */}
                    <div className="absolute inset-0 -z-10">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 20, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-xl"
                      />
                      <motion.div
                        animate={{ 
                          rotate: [360, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 25, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute -bottom-20 -left-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"
                      />
                    </div>

                    <div className="relative z-10 mt-8 mx-4 space-y-6">
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center pb-6 border-b border-border/50"
                      >
                        <h2 className="text-2xl font-black cartoon-text">Navigation</h2>
                        <p className="text-sm text-muted-foreground mt-2">Explore my portfolio</p>
                      </motion.div>

                    {/* Navigation Links */}
                    <div className="space-y-3">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Button
                            onClick={() => handleNavClick(item.href)}
                            variant={activeSection === item.href.substring(1) ? "default" : "outline"}
                            className={`w-full justify-start text-left text-base py-4 px-6 angular-card hover:cartoon-shadow-lg transition-all duration-300 ${
                              activeSection === item.href.substring(1)
                                ? "hover:animate-glow transform scale-105"
                                : "hover:animate-pulse-color hover:scale-105 hover:-translate-y-1"
                            }`}
                          >
                            <motion.div
                              whileHover={{ rotate: 5 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-center w-full"
                            >
                              <span className="font-bold">{item.name}</span>
                              {activeSection === item.href.substring(1) && (
                                <motion.div
                                  className="ml-auto w-2 h-2 bg-primary-foreground rounded-full"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                />
                              )}
                            </motion.div>
                          </Button>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </SheetContent>
              </Sheet>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
