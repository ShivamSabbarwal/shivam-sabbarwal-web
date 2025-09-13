import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'link' | 'text' | 'card' | 'input'>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      
      // Determine cursor type based on element
      if (target.tagName === 'A' || target.closest('a')) {
        setCursorType('link');
      } else if (target.tagName === 'BUTTON' || target.closest('button') || target.getAttribute('role') === 'button' || target.classList.contains('angular-button')) {
        setCursorType('button');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true' || target.classList.contains('angular-input')) {
        setCursorType('input');
      } else if (target.classList.contains('angular-card')) {
        setCursorType('card');
      } else if (['P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(target.tagName)) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const handleElementMouseLeave = () => {
      setIsHovering(false);
      setCursorType('default');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover listeners for all interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea, [contenteditable], .angular-button, .angular-card, .angular-input, p, span, h1, h2, h3, h4, h5, h6");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleElementMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleElementMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  const getCursorContent = () => {
    const getCursorColor = () => {
      switch (cursorType) {
        case 'button': 
          return {
            bg: 'bg-primary',
            border: 'border-primary',
            glow1: 'shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]',
            glow2: 'shadow-[0_0_40px_rgba(var(--primary-rgb),0.6)]',
            glow3: 'shadow-[0_0_60px_rgba(var(--primary-rgb),0.4)]',
            innerGlow: 'shadow-[inset_0_0_10px_rgba(var(--primary-rgb),0.3)]'
          };
        case 'link': 
          return {
            bg: 'bg-accent',
            border: 'border-accent',
            glow1: 'shadow-[0_0_20px_rgba(var(--accent-rgb),0.8)]',
            glow2: 'shadow-[0_0_40px_rgba(var(--accent-rgb),0.6)]',
            glow3: 'shadow-[0_0_60px_rgba(var(--accent-rgb),0.4)]',
            innerGlow: 'shadow-[inset_0_0_10px_rgba(var(--accent-rgb),0.3)]'
          };
        case 'input': 
          return {
            bg: 'bg-cartoon-highlight',
            border: 'border-cartoon-highlight',
            glow1: 'shadow-[0_0_20px_rgba(255,193,7,0.8)]',
            glow2: 'shadow-[0_0_40px_rgba(255,193,7,0.6)]',
            glow3: 'shadow-[0_0_60px_rgba(255,193,7,0.4)]',
            innerGlow: 'shadow-[inset_0_0_10px_rgba(255,193,7,0.3)]'
          };
        case 'card': 
          return {
            bg: 'bg-cartoon-secondary',
            border: 'border-cartoon-secondary',
            glow1: 'shadow-[0_0_20px_rgba(156,39,176,0.8)]',
            glow2: 'shadow-[0_0_40px_rgba(156,39,176,0.6)]',
            glow3: 'shadow-[0_0_60px_rgba(156,39,176,0.4)]',
            innerGlow: 'shadow-[inset_0_0_10px_rgba(156,39,176,0.3)]'
          };
        case 'text': 
          return {
            bg: 'bg-cartoon-accent',
            border: 'border-cartoon-accent',
            glow1: 'shadow-[0_0_20px_rgba(33,150,243,0.8)]',
            glow2: 'shadow-[0_0_40px_rgba(33,150,243,0.6)]',
            glow3: 'shadow-[0_0_60px_rgba(33,150,243,0.4)]',
            innerGlow: 'shadow-[inset_0_0_10px_rgba(33,150,243,0.3)]'
          };
        default: 
          return {
            bg: 'bg-primary',
            border: 'border-primary',
            glow1: 'shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)]',
            glow2: 'shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)]',
            glow3: 'shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)]',
            innerGlow: 'shadow-[inset_0_0_10px_rgba(var(--primary-rgb),0.2)]'
          };
      }
    };

    const colors = getCursorColor();

    return (
      <motion.div
        className={`w-full h-full border-2 ${colors.bg} ${colors.border} ${colors.glow1} ${colors.glow2} ${colors.glow3} ${colors.innerGlow} rounded-full backdrop-blur-sm`}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
          opacity: isClicking ? 0.7 : isHovering ? 0.9 : 0.8,
          rotateY: isHovering ? 5 : 0,
          rotateX: isHovering ? -5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Inner highlight for 3D effect */}
        <motion.div
          className="absolute top-1 left-1 w-2 h-2 bg-white/30 rounded-full blur-sm"
          animate={{
            opacity: isHovering ? 0.8 : 0.4,
            scale: isHovering ? 1.2 : 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        />
      </motion.div>
    );
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {getCursorContent()}
      </motion.div>

      {/* Cursor text for special interactions */}
      {isHovering && (cursorType === 'link' || cursorType === 'button') && (
        <motion.div
          className="fixed top-3 left-3 pointer-events-none z-[9999]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            transform: 'translate(30px, 20px)',
          }}
          initial={{ opacity: 0, scale: 0.6}}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <div className="px-2 py-1 bg-foreground/90 text-background text-xs font-medium rounded shadow-lg">
            {cursorType === 'link' ? 'Click' : 'Press'}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Cursor;
