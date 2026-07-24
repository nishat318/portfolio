"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook that uses IntersectionObserver to add the `is-visible`
 * class to child elements with `animate-on-scroll`, `animate-slide-left`,
 * `animate-slide-right`, or `animate-scale-in` when they enter the viewport.
 */
export function useScrollAnimate(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll(
      ".animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in"
    );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
