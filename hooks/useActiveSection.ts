"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[], rootMargin = "-40% 0px -55% 0px"): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
  const key = ids.join("|");

  useEffect(() => {
    const idList = key.split("|").filter(Boolean);
    const elements = idList
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((best, e) =>
          e.boundingClientRect.top < best.boundingClientRect.top ? e : best,
        );
        setActiveId(top.target.id);
      },
      { rootMargin, threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key, rootMargin]);

  return activeId;
}

/**
 * Where the winning element's top edge is aimed, as a fraction of viewport
 * height. Tuned against measurements rather than picked by feel. An element
 * takes the slot while its top is still roughly half an expanded card below
 * this line; collapsing the card above then lifts it to just under the line.
 * Lower these and tall cards open with their heading already scrolled off.
 * Phones need the larger value because an expanded card there is taller than
 * the viewport, so there is more collapse to absorb.
 */
function targetLineRatio(width: number) {
  return width < 768 ? 0.5 : 0.4;
}

/**
 * Picks whichever element's top edge sits closest to a target line in the upper
 * half of the viewport, re-measured on scroll.
 *
 * `useActiveSection` answers "which section am I in", which is what the nav
 * needs. This answers "which card should be open", which is a different
 * question: the winner grows several hundred pixels when it activates and its
 * neighbour shrinks by the same amount, so a fixed IntersectionObserver band
 * is fragile. Measuring real rects every frame handles the reflow.
 *
 * The geometry is self-correcting. A card wins while its top is still well
 * below the line; collapsing the expanded card above it then lifts it up so it
 * settles roughly on the line, which is why the expanded card lands in view
 * instead of jumping past the top of the screen.
 */
export function useNearestSection(ids: readonly string[]): string {
  const [activeId, setActiveId] = useState<string>("");
  const key = ids.join("|");

  useEffect(() => {
    const idList = key.split("|").filter(Boolean);
    if (idList.length === 0) return;

    let frame = 0;

    const pick = () => {
      frame = 0;
      const line = window.innerHeight * targetLineRatio(window.innerWidth);

      let bestId = "";
      let bestDistance = Infinity;

      for (const id of idList) {
        const el = document.getElementById(id);
        if (!el) continue;
        const distance = Math.abs(el.getBoundingClientRect().top - line);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      }

      if (bestId) setActiveId(bestId);
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [key]);

  return activeId;
}
