/**
 * Shared motion tokens.
 *
 * Every section reveal, expand, and hover on the marketing page pulls its
 * timing from here so the whole page moves with one rhythm instead of each
 * component inventing its own duration and easing.
 */

/** Standard decelerating curve. Used for anything entering the viewport. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Longer, softer variant reserved for the hero's first-paint reveals. */
export const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  /** Icon rotations, chevrons, colour swaps. */
  fast: 0.25,
  /** List items and small children inside an already-visible block. */
  base: 0.4,
  /** The default section / card reveal. */
  slow: 0.5,
  /** Hero headline reveals only. */
  hero: 0.8,
} as const;

/** Per-item stagger for a list or grid revealing together. */
export const STAGGER = 0.06;

/** Shared `whileInView` viewport config: reveal once, slightly before entry. */
export const VIEWPORT = { once: true, margin: "-64px" } as const;

/** The standard "rise into place" reveal, used by most section blocks. */
export const revealUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: DURATION.slow, delay, ease: EASE_OUT },
});
