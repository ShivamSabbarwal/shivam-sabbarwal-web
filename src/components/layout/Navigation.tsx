import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, FileText } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useSounds } from "../../lib/audio/sounds";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { NAV_ITEMS } from "@/constants";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { playClick, playHover } = useSounds();

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
    window.open('/resume', '_blank');
  };


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      layout
      className="fixed z-50 top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-fit rounded-xl sm:rounded-2xl floating-dock"
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
              aria-label="Open Resume"
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
                <SheetContent side="right" className="w-[280px] sm:w-[350px] md:w-[400px]">
                  <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                    {/* Navigation Links */}
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Button
                            onClick={() => handleNavClick(item.href)}
                            variant={activeSection === item.href.substring(1) ? "default" : "outline"}
                            className={`w-full justify-start text-left text-sm sm:text-base py-3 sm:py-4 ${
                              activeSection === item.href.substring(1)
                                ? "hover:animate-glow"
                                : "hover:animate-pulse-color"
                            }`}
                          >
                            {item.name}
                          </Button>
                        </motion.div>
                      ))}
                    </div>

                    <Separator />

                    {/* Resume Button */}
                    <div className="space-y-3 sm:space-y-4">
                      <Button
                        onClick={openResume}
                        variant="outline"
                        className="w-full justify-start text-left text-sm sm:text-base py-3 sm:py-4 hover:animate-pulse-color"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="mr-2"
                        >
                          <FileText className="w-4 h-4" />
                        </motion.div>
                        Resume
                      </Button>
                    </div>

                    <Separator />

                    {/* Theme Controls */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base">Theme</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={toggleTheme}
                          className="hover:animate-glow w-8 h-8 sm:w-10 sm:h-10"
                        >
                          {theme === 'light' ? (
                            <Moon className="w-4 h-4" />
                          ) : (
                            <Sun className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
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
