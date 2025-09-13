import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  pixelSize: number;
  pattern: number[][];
  radius: number;
}

interface FloatingBubblesProps {
  count?: number;
  className?: string;
}

const FloatingBubbles = ({ count = 12, className = "" }: FloatingBubblesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);

  // Simple pixel art patterns for clean bubbles
  const pixelPatterns = {
    small: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    medium: [
      [0, 1, 1, 0],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 0]
    ],
    large: [
      [0, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 0, 0]
    ],
    xlarge: [
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0]
    ]
  };

  // Better colors with more vibrancy and variety
  const bubbleColors = [
    'rgba(96, 125, 139, 0.4)',   // Blue-gray
    'rgba(156, 39, 176, 0.4)',   // Purple
    'rgba(76, 175, 80, 0.4)',    // Green
    'rgba(255, 152, 0, 0.4)',    // Orange
    'rgba(33, 150, 243, 0.4)',   // Blue
    'rgba(233, 30, 99, 0.4)',    // Pink
    'rgba(103, 58, 183, 0.4)',   // Deep purple
    'rgba(0, 150, 136, 0.4)',    // Teal
    'rgba(255, 193, 7, 0.4)',    // Amber
    'rgba(63, 81, 181, 0.4)',    // Indigo
    'rgba(139, 195, 74, 0.4)',   // Light green
    'rgba(255, 87, 34, 0.4)'     // Deep orange
  ];

  // Initialize bubbles
  useEffect(() => {
    const initializeBubbles = () => {
      const newBubbles: Bubble[] = [];
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      // Ensure we have valid dimensions
      const width = containerRect.width || window.innerWidth;
      const height = containerRect.height || window.innerHeight;
      
      for (let i = 0; i < count; i++) {
        // Better size distribution to ensure visibility
        let size;
        if (i < count * 0.3) {
          // 30% small bubbles (16-32px)
          size = Math.random() * 16 + 16;
        } else if (i < count * 0.6) {
          // 30% medium bubbles (32-64px)
          size = Math.random() * 32 + 32;
        } else if (i < count * 0.8) {
          // 20% large bubbles (64-96px)
          size = Math.random() * 32 + 64;
        } else {
          // 20% extra large bubbles (96-120px)
          size = Math.random() * 24 + 96;
        }
        
        const pixelSize = Math.max(2, Math.floor(size / 10)); // Ensure minimum pixel size
        
        let pattern;
        if (size < 32) pattern = pixelPatterns.small;
        else if (size < 64) pattern = pixelPatterns.medium;
        else if (size < 96) pattern = pixelPatterns.large;
        else pattern = pixelPatterns.xlarge;

        newBubbles.push({
          id: i,
          x: Math.random() * (width - size),
          y: Math.random() * (height - size),
          size,
          color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          pixelSize,
          pattern,
          radius: size / 2
        });
      }
      
      setBubbles(newBubbles);
    };

    initializeBubbles();
  }, [count]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  // Collision detection functions
  const checkBubbleCollision = (bubble1: Bubble, bubble2: Bubble) => {
    const dx = (bubble1.x + bubble1.radius) - (bubble2.x + bubble2.radius);
    const dy = (bubble1.y + bubble1.radius) - (bubble2.y + bubble2.radius);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (bubble1.radius + bubble2.radius);
  };

  // Cache UI elements for better performance
  const uiElementsRef = useRef<Element[]>([]);
  
  useEffect(() => {
    // Cache UI elements once instead of querying every frame
    uiElementsRef.current = Array.from(document.querySelectorAll('nav, header, main, section, article, aside, footer, [role="banner"], [role="navigation"], [role="main"], [role="complementary"], [role="contentinfo"]'));
  }, []);

  const checkUIElementCollision = (bubble: Bubble) => {
    const bubbleCenterX = bubble.x + bubble.radius;
    const bubbleCenterY = bubble.y + bubble.radius;
    
    for (const element of uiElementsRef.current) {
      const rect = element.getBoundingClientRect();
      
      // Quick bounds check
      if (bubbleCenterX > rect.left - bubble.radius && 
          bubbleCenterX < rect.right + bubble.radius &&
          bubbleCenterY > rect.top - bubble.radius && 
          bubbleCenterY < rect.bottom + bubble.radius) {
        return { collided: true, element, rect };
      }
    }
    return { collided: false };
  };

  // Animation loop with performance optimization
  useEffect(() => {
    let lastTime = 0;
    const targetFPS = 30; // Reduce from 60fps to 30fps
    const frameInterval = 1000 / targetFPS;
    
    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;
      
      setBubbles(prevBubbles => {
        const container = containerRef.current;
        if (!container) return prevBubbles;

        const containerRect = container.getBoundingClientRect();
        const width = containerRect.width || window.innerWidth;
        const height = containerRect.height || window.innerHeight;
        const mouseInfluenceRadius = 200;

        return prevBubbles.map((bubble, index) => {
          let newX = bubble.x + bubble.speedX;
          let newY = bubble.y + bubble.speedY;

          // Cursor avoidance
          const distanceToMouse = Math.sqrt(
            Math.pow(mousePosition.x - (newX + bubble.radius), 2) +
            Math.pow(mousePosition.y - (newY + bubble.radius), 2)
          );

          if (distanceToMouse < mouseInfluenceRadius) {
            const avoidanceForce = (mouseInfluenceRadius - distanceToMouse) / mouseInfluenceRadius;
            const angle = Math.atan2(
              newY + bubble.radius - mousePosition.y,
              newX + bubble.radius - mousePosition.x
            );
            
            newX += Math.cos(angle) * avoidanceForce * 2;
            newY += Math.sin(angle) * avoidanceForce * 2;
          }

          // Optimized collision detection - only check nearby bubbles
          const maxCollisionDistance = 100; // Only check bubbles within this distance
          for (let i = 0; i < prevBubbles.length; i++) {
            if (i !== index) {
              const otherBubble = prevBubbles[i];
              
              // Quick distance check before expensive collision calculation
              const quickDx = Math.abs((newX + bubble.radius) - (otherBubble.x + otherBubble.radius));
              const quickDy = Math.abs((newY + bubble.radius) - (otherBubble.y + otherBubble.radius));
              
              if (quickDx < maxCollisionDistance && quickDy < maxCollisionDistance) {
                const tempBubble = { ...bubble, x: newX, y: newY };
                
                if (checkBubbleCollision(tempBubble, otherBubble)) {
                  // Calculate collision response
                  const dx = (newX + bubble.radius) - (otherBubble.x + otherBubble.radius);
                  const dy = (newY + bubble.radius) - (otherBubble.y + otherBubble.radius);
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  
                  if (distance > 0) {
                    const overlap = (bubble.radius + otherBubble.radius) - distance;
                    const separationX = (dx / distance) * overlap * 0.5;
                    const separationY = (dy / distance) * overlap * 0.5;
                    
                    newX += separationX;
                    newY += separationY;
                    
                    // Bounce effect
                    const bounceForce = 0.8;
                    bubble.speedX += separationX * bounceForce;
                    bubble.speedY += separationY * bounceForce;
                  }
                }
              }
            }
          }

          // Check collision with UI elements
          const uiCollision = checkUIElementCollision({ ...bubble, x: newX, y: newY });
          if (uiCollision.collided && uiCollision.rect) {
            const rect = uiCollision.rect;
            const bubbleCenterX = newX + bubble.radius;
            const bubbleCenterY = newY + bubble.radius;
            
            // Calculate bounce direction away from UI element
            let bounceX = 0;
            let bounceY = 0;
            
            if (bubbleCenterX < rect.left) bounceX = -1;
            else if (bubbleCenterX > rect.right) bounceX = 1;
            
            if (bubbleCenterY < rect.top) bounceY = -1;
            else if (bubbleCenterY > rect.bottom) bounceY = 1;
            
            // Apply bounce
            bubble.speedX += bounceX * 0.8;
            bubble.speedY += bounceY * 0.8;
            
            // Move bubble away from UI element
            newX += bounceX * 1;
            newY += bounceY * 1;
          }

          // Boundary collision with bounce
          if (newX <= 0 || newX >= width - bubble.size) {
            bubble.speedX *= -0.8; // Bounce with some energy loss
            newX = Math.max(0, Math.min(width - bubble.size, newX));
          }
          
          if (newY <= 0 || newY >= height - bubble.size) {
            bubble.speedY *= -0.8;
            newY = Math.max(0, Math.min(height - bubble.size, newY));
          }

          // Add some random drift (reduced frequency for performance)
          if (Math.random() < 0.1) { // Only 10% chance per frame
            bubble.speedX += (Math.random() - 0.5) * 0.02;
            bubble.speedY += (Math.random() - 0.5) * 0.02;
          }
          
          // Limit speed
          bubble.speedX = Math.max(-1.2, Math.min(1.2, bubble.speedX));
          bubble.speedY = Math.max(-1.2, Math.min(1.2, bubble.speedY));

          return {
            ...bubble,
            x: newX,
            y: newY,
            rotation: bubble.rotation + bubble.rotationSpeed
          };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  const renderPixelBubble = (bubble: Bubble) => {
    const { pattern, pixelSize, color, size } = bubble;
    const pixels = [];

    for (let row = 0; row < pattern.length; row++) {
      for (let col = 0; col < pattern[row].length; col++) {
        if (pattern[row][col] === 1) {
          pixels.push(
            <div
              key={`${row}-${col}`}
              className="absolute"
              style={{
                left: col * pixelSize,
                top: row * pixelSize,
                width: pixelSize,
                height: pixelSize,
                backgroundColor: color,
                opacity: 0.6
              }}
            />
          );
        }
      }
    }

    // Extract RGB values from the color for glow effect
    const colorMatch = bubble.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const rgbValues = colorMatch ? `${colorMatch[1]}, ${colorMatch[2]}, ${colorMatch[3]}` : '96, 125, 139';
    
    return (
      <div
        className="absolute bubble-glow"
        style={{
          left: bubble.x,
          top: bubble.y,
          width: size,
          height: size,
          transform: `rotate(${bubble.rotation}deg)`,
          '--bubble-rgb': rgbValues,
          filter: `
            drop-shadow(0 0 6px rgba(${rgbValues}, 0.2))
          `
        } as React.CSSProperties}
      >
        {pixels}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      {bubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: bubble.id * 0.1,
            ease: "easeOut"
          }}
        >
          {renderPixelBubble(bubble)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
