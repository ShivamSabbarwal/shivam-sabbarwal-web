"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { ResumeVariantKey } from "@/constants";

const LONG_PRESS_MS = 600;
/** Cancel the hold if the finger drifts; that gesture is a scroll, not a press. */
const DRIFT_TOLERANCE_PX = 12;

const isVariantKey = (value: string | null): value is ResumeVariantKey =>
  value === "engineer" || value === "leader";

/**
 * Variant selection for the resume page.
 *
 * Every input works without a keyboard, so the leadership version is reachable
 * on a phone: press and hold, or load `?variant=leader`. Keyboard shortcuts stay
 * available on desktop as a faster path.
 */
export function useResumeVariant() {
  const [variant, setVariant] = useState<ResumeVariantKey>("engineer");
  const [showBadge, setShowBadge] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pressOrigin = useRef<{ x: number; y: number } | null>(null);

  const toggle = () => {
    setVariant((current) => (current === "engineer" ? "leader" : "engineer"));
    setShowBadge(true);
  };

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("variant");
    if (isVariantKey(requested)) {
      setVariant(requested);
      setShowBadge(true);
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const key = event.key.toLowerCase();
      if (key === "v") setVariant((c) => (c === "engineer" ? "leader" : "engineer"));
      else if (key === "e") setVariant("engineer");
      else if (key === "l") setVariant("leader");
      else return;
      setShowBadge(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!showBadge) return;
    const timeout = setTimeout(() => setShowBadge(false), 2400);
    return () => clearTimeout(timeout);
  }, [showBadge, variant]);

  useEffect(() => {
    return () => {
      if (pressTimer.current) clearTimeout(pressTimer.current);
    };
  }, []);

  const cancelPress = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
    pressOrigin.current = null;
  };

  const longPressHandlers = {
    onPointerDown: (event: ReactPointerEvent) => {
      pressOrigin.current = { x: event.clientX, y: event.clientY };
      pressTimer.current = setTimeout(() => {
        pressTimer.current = null;
        toggle();
      }, LONG_PRESS_MS);
    },
    onPointerMove: (event: ReactPointerEvent) => {
      const origin = pressOrigin.current;
      if (!origin) return;
      const drift = Math.hypot(event.clientX - origin.x, event.clientY - origin.y);
      if (drift > DRIFT_TOLERANCE_PX) cancelPress();
    },
    onPointerUp: cancelPress,
    onPointerLeave: cancelPress,
    onPointerCancel: cancelPress,
  };

  return { variant, showBadge, toggle, longPressHandlers };
}
