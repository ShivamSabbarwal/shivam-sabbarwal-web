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
