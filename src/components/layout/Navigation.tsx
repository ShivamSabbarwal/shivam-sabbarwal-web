import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Sun, Moon, Music, VolumeX } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useSounds } from "../../lib/audio/sounds";
import { useBackgroundMusicContext } from "@/contexts/BackgroundMusicContext";
import Logo from "../Logo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const { playClick, playHover } = useSounds();
  const { toggleBackgroundMusic, isPlaying } = useBackgroundMusicContext();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "timeline", "projects", "contact"];
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
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    playClick();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
      className={`fixed z-50 ${
        isScrolled 
          ? "top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-fit rounded-2xl floating-dock" 
          : "top-0 left-0 right-0 bg-transparent"
      }`}
      style={{
        transition: "none" // Disable CSS transitions in favor of Framer Motion
      }}
    >
      <motion.div 
        layout
        className={`mx-auto ${
          isScrolled ? "px-6 py-3" : "max-w-7xl px-6 py-4"
        }`}
        transition={{
          layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          padding: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        }}
      >
        <motion.div 
          layout
          className={`flex items-center ${
            isScrolled ? "space-x-4" : "justify-between"
          }`}
          transition={{
            layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            gap: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          {/* Logo - Hidden in floating dock mode */}
          <motion.div
            layout
            animate={{
              opacity: isScrolled ? 0 : 1,
              scale: isScrolled ? 0.8 : 1,
              x: isScrolled ? -20 : 0
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 },
              x: { duration: 0.3 }
            }}
            style={{ 
              pointerEvents: isScrolled ? "none" : "auto",
              position: isScrolled ? "absolute" : "relative"
            }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            onHoverStart={playHover}
            className="cursor-pointer"
          >
            <Logo size="md" />
          </motion.div>

          {/* Navigation Items */}
          <motion.div 
            layout
            className={`flex items-center ${
              isScrolled ? "space-x-2" : "hidden md:flex space-x-8"
            }`}
            transition={{
              layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              gap: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                layout
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: isScrolled ? 0.9 : 1,
                  padding: isScrolled ? "8px 12px" : "8px 16px"
                }}
                transition={{ 
                  delay: index * 0.1 + 0.3, 
                  duration: 0.1, 
                  ease: "easeOut",
                  layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  padding: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92, y: 1 }}
                onHoverStart={playHover}
                onTapStart={playClick}
                onClick={() => scrollToSection(item.href)}
                className={`relative ${
                  isScrolled 
                    ? `text-xs font-bold rounded-lg ${
                        activeSection === item.href.slice(1)
                          ? "text-primary-foreground bg-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`
                    : `text-sm font-bold ${
                        activeSection === item.href.slice(1)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`
                }`}
                style={{
                  transition: "none" // Disable CSS transitions
                }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && !isScrolled && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 angular-card -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Theme Toggle, Music Toggle & Mobile Menu */}
          <motion.div 
            layout
            className={`flex items-center ${
              isScrolled ? "space-x-1" : "space-x-2"
            }`}
            transition={{
              layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              gap: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
          >
            {/* Music Toggle */}
            <motion.button
              layout
              animate={{
                padding: isScrolled ? "6px" : "8px",
                scale: isScrolled ? 0.9 : 1
              }}
              transition={{
                layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                padding: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              onHoverStart={playHover}
              onTapStart={playClick}
              onClick={toggleMusic}
              className="relative angular-card hover:animate-glow"
              aria-label={isPlaying ? "Turn off music" : "Turn on music"}
              title={`Music: ${isPlaying ? 'ON' : 'OFF'}`}
              style={{
                transition: "none" // Disable CSS transitions
              }}
            >
              {/* Icon */}
              <motion.div 
                className="relative z-10"
                animate={{
                  scale: isScrolled ? 0.8 : 1
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

            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              layout
              animate={{
                padding: isScrolled ? "6px" : "8px",
                scale: isScrolled ? 0.9 : 1
              }}
              transition={{
                layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                padding: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              onHoverStart={playHover}
              onTapStart={playClick}
              onClick={toggleTheme}
              className="angular-card hover:animate-glow"
              aria-label="Toggle theme"
              style={{
                transition: "none" // Disable CSS transitions
              }}
            >
              <motion.div
                animate={{
                  scale: isScrolled ? 0.8 : 1
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
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              layout
              animate={{
                padding: isScrolled ? "6px" : "8px",
                scale: isScrolled ? 0.9 : 1
              }}
              transition={{
                layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                padding: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              onHoverStart={playHover}
              onTapStart={playClick}
              className="md:hidden angular-card hover:animate-glow"
              style={{
                transition: "none" // Disable CSS transitions
              }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  scale: isScrolled ? 0.83 : 1
                }}
                transition={{
                  scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
