/** Clears the fixed nav dock so a section heading is not hidden on arrival. */
const NAV_OFFSET = 88;
const DURATION = 620;
/**
 * The nearest career card expands while the page is moving, which shifts the
 * destination after the jump has already started. Keep steering for a moment
 * after the easing ends so the scroll settles on the section instead of near it.
 */
const SETTLE = 400;

/**
 * Jumps to a section, driving the scroll frame by frame instead of handing it to
 * `scrollIntoView`. The browser's own smooth scroll is abandoned the moment
 * anything adjusts the scroll offset, and the auto-expanding career cards do
 * exactly that, so a native jump past them stops partway down the page.
 */
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const destination = () => {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    return Math.max(0, Math.min(top, maxScroll));
  };

  // `behavior: instant` matters: the stylesheet sets `scroll-behavior: smooth`,
  // so a plain scrollTo would hand control back to the browser and every frame
  // below would restart its animation instead of advancing.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: destination(), behavior: "instant" });
    return;
  }

  const start = window.scrollY;
  const startedAt = performance.now();
  let cancelled = false;

  const cancel = () => {
    cancelled = true;
  };
  const stopListening = () => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("keydown", cancel);
  };

  // Any deliberate input outranks the jump.
  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("keydown", cancel);

  const step = (now: number) => {
    if (cancelled) {
      stopListening();
      return;
    }

    const elapsed = now - startedAt;
    const progress = Math.min(1, elapsed / DURATION);
    const eased = 1 - (1 - progress) ** 3;
    window.scrollTo({ top: start + (destination() - start) * eased, behavior: "instant" });

    if (elapsed < DURATION + SETTLE) {
      requestAnimationFrame(step);
    } else {
      stopListening();
    }
  };

  requestAnimationFrame(step);
}
