import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Sun, Moon, Music, VolumeX, Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useSounds } from "../../lib/audio/sounds";
import { useBackgroundMusicContext } from "@/contexts/BackgroundMusicContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { playClick, playHover } = useSounds();
  const { toggleBackgroundMusic, isPlaying } = useBackgroundMusicContext();
  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ["home", "timeline", "tech-stack", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Timeline", href: "#timeline" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    playClick();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const toggleMusic = async () => {
    try {
      await toggleBackgroundMusic();
    } catch (e) {
      console.warn('Failed to toggle music:', e);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      layout
      className="fixed z-50 top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-fit rounded-2xl floating-dock"
      style={{
        transition: "none" // Disable CSS transitions in favor of Framer Motion
      }}
    >
      <motion.div 
        layout
        className="mx-auto px-6 py-3"
        transition={{
          layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          padding: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        }}
      >
        <motion.div 
          layout
          className="flex items-center space-x-4"
          transition={{
            layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            gap: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
          }}
        >

          {/* Navigation Items */}
          <motion.div 
            layout
            className="flex items-center space-x-2"
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
                  variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-xs font-bold ${
                    activeSection === item.href.slice(1)
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Theme Toggle, Music Toggle & Mobile Menu */}
          <motion.div 
            layout
            className="flex items-center space-x-1"
            transition={{
              layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              gap: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
          >
            {/* Music Toggle */}
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
                onClick={toggleMusic}
                className="relative hover:animate-glow"
                aria-label={isPlaying ? "Turn off music" : "Turn on music"}
                title={`Music: ${isPlaying ? 'ON' : 'OFF'}`}
              >
                {/* Icon */}
                <motion.div 
                  className="relative z-10"
                  animate={{
                    scale: 0.8
                  }}
                  transition={{
                    scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                >
                  {isPlaying ? (
                    <Music className="w-5 h-5" />
                  ) : (
                    <VolumeX className="w-5 h-5" />
                  )}
                </motion.div>
              </Button>
            </motion.div>

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
                className="hover:animate-glow"
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
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
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
                    className="md:hidden hover:animate-glow"
                  >
                    <motion.div
                      animate={{
                        scale: 0.83
                      }}
                      transition={{
                        scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                      }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="text-left">
                      <span className="cartoon-text">Navigation</span>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="mt-8 space-y-6">
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
                            variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
                            className="w-full justify-start text-left"
                            onClick={() => scrollToSection(item.href)}
                          >
                            {item.name}
                            {activeSection === item.href.slice(1) && (
                              <Badge variant="secondary" className="ml-auto">
                                Active
                              </Badge>
                            )}
                          </Button>
                        </motion.div>
                      ))}
                    </div>

                    <Separator />

                    {/* Theme & Music Controls */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-muted-foreground">Settings</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Theme</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={toggleTheme}
                          className="hover:animate-glow"
                        >
                          {theme === 'light' ? (
                            <Moon className="w-4 h-4" />
                          ) : (
                            <Sun className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Music</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={toggleMusic}
                          className="hover:animate-glow"
                        >
                          {isPlaying ? (
                            <Music className="w-4 h-4" />
                          ) : (
                            <VolumeX className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    {/* Current Section Indicator */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground">Current Section</h4>
                      <Badge variant="outline" className="w-full justify-center">
                        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                      </Badge>
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
