"use client";

import { useEffect, useRef, useCallback } from "react";

type CursorType = "default" | "button" | "link" | "text" | "card" | "input";

const CURSOR_COLORS: Record<CursorType, string> = {
  button: "var(--primary)",
  link: "var(--accent)",
  input: "var(--cartoon-highlight, #ffc107)",
  card: "var(--cartoon-secondary, #9c27b0)",
  text: "var(--cartoon-accent, #2196f3)",
  default: "var(--primary)",
};

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const cursorType = useRef<CursorType>("default");
  const visible = useRef(false);
  const hovering = useRef(false);
  const pressing = useRef(false);
  // Smooth spring positions
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const rafId = useRef(0);

  const updateStyle = useCallback(() => {
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!dot) return;

    const color = CURSOR_COLORS[cursorType.current];
    const hoverScale = hovering.current ? 1.2 : 1;
    const scale = pressing.current ? hoverScale * 0.8 : hoverScale;
    const opacity = visible.current ? 0.8 : 0;

    dot.style.transform = `translate3d(${pos.current.x - 8}px, ${pos.current.y - 8}px, 0) scale(${scale})`;
    dot.style.opacity = String(opacity);
    dot.style.background = color;
    dot.style.borderColor = color;
    dot.style.boxShadow = `0 0 12px ${color}, 0 0 24px ${color}`;

    if (label) {
      const showLabel = hovering.current && (cursorType.current === "link" || cursorType.current === "button");
      label.style.transform = `translate3d(${pos.current.x + 12}px, ${pos.current.y + 12}px, 0)`;
      label.style.opacity = showLabel ? "1" : "0";
      label.style.scale = showLabel ? "1" : "0.6";
      label.textContent = cursorType.current === "link" ? "Click" : "Press";
    }
  }, []);

  useEffect(() => {
    const loop = () => {
      // Spring interpolation
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      updateStyle();
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, [updateStyle]);

  // Hide on touch/mobile devices
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const check = () => {
      const dot = dotRef.current;
      const label = labelRef.current;
      if (!mq.matches) {
        if (dot) dot.style.display = "none";
        if (label) label.style.display = "none";
      } else {
        if (dot) dot.style.display = "";
        if (label) label.style.display = "";
      }
    };
    check();
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current) visible.current = true;
    };

    const onLeave = () => {
      visible.current = false;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovering.current = true;

      if (t.closest("a")) cursorType.current = "link";
      else if (t.closest('button, [role="button"]')) cursorType.current = "button";
      else if (t.closest('input, textarea, [contenteditable="true"]')) cursorType.current = "input";
      else if (t.closest(".angular-card")) cursorType.current = "card";
      else if (t.closest("p, span, h1, h2, h3, h4, h5, h6")) cursorType.current = "text";
      else cursorType.current = "default";
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !(e.target as HTMLElement).contains(related)) {
        hovering.current = false;
        cursorType.current = "default";
      }
    };

    const onDown = () => {
      pressing.current = true;
    };
    const onUp = () => {
      pressing.current = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full border-2 pointer-events-none backdrop-blur-sm"
        style={{
          zIndex: 9999,
          willChange: "transform",
          opacity: 0,
          transition: "background 0.15s, border-color 0.15s, box-shadow 0.15s",
        }}
      >
        <div className="absolute top-1 left-1 w-2 h-2 bg-white/30 rounded-full blur-sm" />
      </div>
      <div
        ref={labelRef}
        className="fixed top-0 left-0 pointer-events-none px-2 py-1 bg-foreground/90 text-background text-xs font-medium rounded shadow-lg"
        style={{
          zIndex: 9999,
          willChange: "transform",
          opacity: 0,
          transition: "opacity 0.15s, scale 0.15s",
        }}
      />
    </>
  );
};

export default Cursor;
