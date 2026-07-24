"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Floating lily petals that drift across the screen as users scroll.
 * Uses deterministic seeded values to avoid hydration mismatches,
 * then mounts only on client via useEffect.
 */

const PETAL_COUNT = 18;

interface Petal {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  variant: number;
  speed: number;
  drift: number;
}

/** Deterministic pseudo-random based on seed */
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function generatePetals(): Petal[] {
  return Array.from({ length: PETAL_COUNT }, (_, i) => {
    const r = (n: number) => seededRandom(i * 7 + n);
    return {
      id: i,
      x: r(1) * 100,
      y: 20 + r(2) * 80,
      delay: r(3) * 12,
      duration: 14 + r(4) * 10,
      size: 16 + r(5) * 20,
      opacity: 0.12 + r(6) * 0.18,
      variant: Math.floor(r(7) * 3),
      speed: 0.15 + r(8) * 0.4,
      drift: (r(9) - 0.5) * 80,
    };
  });
}

const petals = generatePetals();

function PetalSVG({ variant, size }: { variant: number; size: number }) {
  if (variant === 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="16" rx="8" ry="14" fill="oklch(0.78 0.07 14)" opacity="0.8"
          transform="rotate(-10 20 16)" />
        <ellipse cx="20" cy="18" rx="5" ry="10" fill="oklch(0.85 0.05 14)" opacity="0.5"
          transform="rotate(-10 20 18)" />
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M20 4 Q28 16 24 32 Q20 36 16 32 Q12 16 20 4Z" fill="oklch(0.82 0.06 350)" opacity="0.7" />
        <path d="M20 8 Q24 18 22 28 Q20 30 18 28 Q16 18 20 8Z" fill="oklch(0.9 0.04 14)" opacity="0.4" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="12" rx="5" ry="10" fill="oklch(0.8 0.06 14)" opacity="0.7" />
      <ellipse cx="20" cy="12" rx="5" ry="10" fill="oklch(0.8 0.06 14)" opacity="0.7"
        transform="rotate(72 20 20)" />
      <ellipse cx="20" cy="12" rx="5" ry="10" fill="oklch(0.8 0.06 14)" opacity="0.7"
        transform="rotate(144 20 20)" />
      <ellipse cx="20" cy="12" rx="5" ry="10" fill="oklch(0.8 0.06 14)" opacity="0.7"
        transform="rotate(216 20 20)" />
      <ellipse cx="20" cy="12" rx="5" ry="10" fill="oklch(0.8 0.06 14)" opacity="0.7"
        transform="rotate(288 20 20)" />
      <circle cx="20" cy="20" r="3" fill="oklch(0.88 0.08 80)" opacity="0.8" />
    </svg>
  );
}

export function FloralParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  // Only render petals on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !mounted) return;

    let ticking = false;

    function onScroll() {
      scrollYRef.current = window.scrollY;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const petalEls = container!.querySelectorAll<HTMLElement>("[data-petal]");
          petalEls.forEach((el) => {
            const speed = parseFloat(el.dataset.speed || "0.5");
            const drift = parseFloat(el.dataset.drift || "0");
            const scrollOffset = scrollYRef.current * speed;
            const driftOffset = Math.sin(scrollYRef.current * 0.003 + drift) * 30;
            el.style.transform = `translateY(${-scrollOffset}px) translateX(${driftOffset}px) rotate(${scrollYRef.current * speed * 0.5}deg)`;
          });
          ticking = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          data-petal
          data-speed={petal.speed.toFixed(2)}
          data-drift={petal.drift.toFixed(1)}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            opacity: petal.opacity,
            animation: `petalFloat ${petal.duration}s ease-in-out ${petal.delay}s infinite`,
            willChange: "transform",
          }}
        >
          <PetalSVG variant={petal.variant} size={petal.size} />
        </div>
      ))}
    </div>
  );
}
