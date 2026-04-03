"use client";

import { useEffect, useRef, useCallback } from "react";

interface Bubble {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  radius: number;
  element: HTMLDivElement | null;
}

interface FloatingBubblesProps {
  count?: number;
  className?: string;
}

const BUBBLE_COLORS = [
  "96, 125, 139",
  "156, 39, 176",
  "76, 175, 80",
  "255, 152, 0",
  "33, 150, 243",
  "233, 30, 99",
  "103, 58, 183",
  "0, 150, 136",
  "255, 193, 7",
  "63, 81, 181",
  "139, 195, 74",
  "255, 87, 34",
];

const FloatingBubbles = ({ count = 8, className = "" }: FloatingBubblesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const initBubbles = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth || window.innerWidth;
    const height = container.offsetHeight || window.innerHeight;

    // Clear existing bubble elements
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const bubbles: Bubble[] = [];

    for (let i = 0; i < count; i++) {
      let size: number;
      if (i < count * 0.3) size = Math.random() * 16 + 16;
      else if (i < count * 0.6) size = Math.random() * 32 + 32;
      else if (i < count * 0.8) size = Math.random() * 32 + 64;
      else size = Math.random() * 24 + 96;

      const rgb = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
      const margin = Math.max(50, size * 0.5);

      const el = document.createElement("div");
      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(${rgb}, 0.35);
        filter: drop-shadow(0 0 6px rgba(${rgb}, 0.2));
        will-change: transform;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.8s ease-out;
      `;
      container.appendChild(el);

      // Fade in with stagger
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = "0.7";
        }, i * 100);
      });

      bubbles.push({
        x: margin + Math.random() * (width - margin * 2),
        y: margin + Math.random() * (height - margin * 2),
        size,
        color: rgb,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 1.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 5,
        radius: size / 2,
        element: el,
      });
    }

    bubblesRef.current = bubbles;
  }, [count]);

  // Mouse tracking via ref — no React re-render
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Animation loop — pure DOM, no setState
  useEffect(() => {
    initBubbles();

    let lastTime = 0;
    const frameInterval = 1000 / 24; // 24 fps

    const animate = (now: number) => {
      if (now - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = now;

      const container = containerRef.current;
      if (!container) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const width = container.offsetWidth || window.innerWidth;
      const height = container.offsetHeight || window.innerHeight;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseInfluenceRadius = 80;
      const bubbles = bubblesRef.current;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        let nx = b.x + b.speedX;
        let ny = b.y + b.speedY;

        // Cursor avoidance
        const dx = mx - (nx + b.radius);
        const dy = my - (ny + b.radius);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseInfluenceRadius && dist > 0) {
          const norm = (mouseInfluenceRadius - dist) / mouseInfluenceRadius;
          const force = norm * norm * 6;
          const angle = Math.atan2(-dy, -dx);
          nx += Math.cos(angle) * force;
          ny += Math.sin(angle) * force;
          b.speedX += Math.cos(angle) * norm * 0.3;
          b.speedY += Math.sin(angle) * norm * 0.3;
        }

        // Bubble-bubble collision (simplified, only nearby)
        if (Math.random() < 0.3) {
          for (let j = i + 1; j < bubbles.length; j++) {
            const o = bubbles[j];
            const cdx = (nx + b.radius) - (o.x + o.radius);
            const cdy = (ny + b.radius) - (o.y + o.radius);
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
            const minDist = b.radius + o.radius;

            if (cdist < minDist && cdist > 0) {
              const sep = ((minDist - cdist) / cdist) * 0.5;
              nx += cdx * sep;
              ny += cdy * sep;
              b.speedX *= -0.5;
              b.speedY *= -0.5;
            }
          }
        }

        // Boundary bounce
        if (nx <= 0 || nx >= width - b.size) {
          b.speedX *= -0.8;
          nx = Math.max(0, Math.min(width - b.size, nx));
        }
        if (ny <= 0 || ny >= height - b.size) {
          b.speedY *= -0.8;
          ny = Math.max(0, Math.min(height - b.size, ny));
        }

        // Random drift
        if (Math.random() < 0.15) {
          b.speedX += (Math.random() - 0.5) * 0.05;
          b.speedY += (Math.random() - 0.5) * 0.05;
        }

        // Damping & speed limit
        b.speedX *= 0.98;
        b.speedY *= 0.98;
        b.speedX = Math.max(-2, Math.min(2, b.speedX));
        b.speedY = Math.max(-2, Math.min(2, b.speedY));

        b.x = nx;
        b.y = ny;
        b.rotation += b.rotationSpeed;

        // Direct DOM update — no React reconciliation
        if (b.element) {
          b.element.style.transform = `translate3d(${nx}px, ${ny}px, 0) rotate(${b.rotation}deg)`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [initBubbles]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default FloatingBubbles;
