import { motion } from "motion/react";
import { useState } from "react";
import { Sun, Moon, Menu, FileText } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useSounds } from "../../lib/audio/sounds";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "@tanstack/react-router";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { playClick, playHover } = useSounds();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Timeline", href: "/#timeline" },
    { name: "Tech Stack", href: "/#tech-stack" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    playClick();
    if (href.startsWith('/#')) {
      // Handle hash navigation for sections on the home page
      const hash = href.split('#')[1];
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
                <Link
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative text-xs font-bold px-2 sm:px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.href || (item.href === "/" && location.pathname === "/")
                      ? "text-primary-foreground bg-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
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
                className="hover:animate-glow w-8 h-8 sm:w-10 sm:h-10"
                aria-label="Toggle theme"
              >
                <motion.div
                  animate={{
                    scale: 0.8
                  }}
                  transition={{
                    scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
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
                          <Link
                            to={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className="w-full justify-start text-left text-sm sm:text-base py-3 sm:py-4 rounded-md hover:bg-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <Separator />

                    {/* Resume Button */}
                    <div className="space-y-3 sm:space-y-4">
                      <Link
                        to="/resume"
                        target="_blank"
                        onClick={openResume}
                        className="w-full justify-start text-left text-sm sm:text-base py-3 sm:py-4 rounded-md border border-input hover:bg-accent transition-colors flex items-center"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Resume
                      </Link>
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
