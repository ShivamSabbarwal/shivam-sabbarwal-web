"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { ResumeVariantKey } from "@/constants";

const LONG_PRESS_MS = 1500;
/** Cancel the hold if the finger drifts; that gesture is a scroll, not a press. */
const DRIFT_TOLERANCE_PX = 12;

const isVariantKey = (value: string | null): value is ResumeVariantKey =>
  value === "engineer" || value === "leader";

/**
 * Variant selection for the resume page.
 *
 * Press and hold (~1500ms, pointer-based so it works on touch), double-click,
 * or load `?variant=leader`. No keyboard hotkeys.
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
    const requested = new URLSearchParams(window.location.search).get(
      "variant",
    );
    if (isVariantKey(requested)) {
      setVariant(requested);
      setShowBadge(true);
    }
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
      const drift = Math.hypot(
        event.clientX - origin.x,
        event.clientY - origin.y,
      );
      if (drift > DRIFT_TOLERANCE_PX) cancelPress();
    },
    onPointerUp: cancelPress,
    onPointerLeave: cancelPress,
    onPointerCancel: cancelPress,
  };

  return { variant, showBadge, toggle, longPressHandlers };
}
