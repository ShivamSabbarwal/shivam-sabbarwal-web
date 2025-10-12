import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'link' | 'text' | 'card' | 'input'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [lastHoveredElement, setLastHoveredElement] = useState<HTMLElement | null>(null);
  
  // Refs to hold latest values for event handlers
  const isHoveringRef = useRef(isHovering);
  const lastHoveredElementRef = useRef(lastHoveredElement);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 }; // Reduced for better performance
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Update refs when state changes
  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    lastHoveredElementRef.current = lastHoveredElement;
  }, [lastHoveredElement]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleWindowMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Prevent flickering by checking if we're already hovering over the same element
      if (isHoveringRef.current && target === lastHoveredElementRef.current) {
        return;
      }
      
      setIsHovering(true);
      setLastHoveredElement(target);
      
      // Determine cursor type based on element, checking for closest matching element
      const linkElement = target.closest('a');
      const buttonElement = target.closest('button, [role="button"], .angular-button');
      const inputElement = target.closest('input, textarea, [contenteditable="true"], .angular-input');
      const cardElement = target.closest('.angular-card');
      const textElement = target.closest('p, span, h1, h2, h3, h4, h5, h6');
      
      if (linkElement) {
        setCursorType('link');
      } else if (buttonElement) {
        setCursorType('button');
      } else if (inputElement) {
        setCursorType('input');
      } else if (cardElement) {
        setCursorType('card');
      } else if (textElement) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;
      
      // Guard against null relatedTarget
      if (!relatedTarget) {
        setIsHovering(false);
        setCursorType('default');
        setLastHoveredElement(null);
        return;
      }
      
      // Only reset if we're actually leaving the element (not moving to a child)
      if (!target.contains(relatedTarget)) {
        setIsHovering(false);
        setCursorType('default');
        setLastHoveredElement(null);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleWindowMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Use mouseover/mouseout for proper hover detection with bubbling
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleWindowMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
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
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          opacity: isClicking ? 0.7 : isHovering ? 0.9 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
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
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] cursor-element"
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
