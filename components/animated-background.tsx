"use client";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Large soft pink orb — top right */}
      <div
        className="animate-float-slow absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.09 14) 0%, transparent 70%)",
        }}
      />
      {/* Medium sage orb — bottom left */}
      <div
        className="animate-float-slow absolute -bottom-32 -left-24 h-[400px] w-[400px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.06 140) 0%, transparent 70%)",
          animationDelay: "4s",
          animationDuration: "16s",
        }}
      />
      {/* Small warm orb — center */}
      <div
        className="animate-float-slow absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.06 50) 0%, transparent 70%)",
          animationDelay: "8s",
          animationDuration: "20s",
        }}
      />
      {/* Tiny accent orb — mid right */}
      <div
        className="animate-float-slow absolute right-1/4 top-2/3 h-[200px] w-[200px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.09 14) 0%, transparent 70%)",
          animationDelay: "6s",
          animationDuration: "14s",
        }}
      />

      {/* ──── Static decorative lilies ──── */}

      {/* Top-left corner lily */}
      <svg className="absolute -left-4 top-[15%] h-16 w-16 opacity-[0.08]" viewBox="0 0 40 40" fill="none"
        style={{ animation: "sway 6s ease-in-out infinite" }}>
        <ellipse cx="20" cy="12" rx="6" ry="14" fill="oklch(0.78 0.07 14)" transform="rotate(-30 20 20)" />
        <ellipse cx="20" cy="12" rx="6" ry="14" fill="oklch(0.78 0.07 14)" transform="rotate(30 20 20)" />
        <ellipse cx="20" cy="10" rx="5" ry="12" fill="oklch(0.82 0.06 14)" transform="rotate(0 20 20)" />
        <circle cx="20" cy="20" r="3" fill="oklch(0.88 0.08 80)" opacity="0.6" />
      </svg>

      {/* Right side lily cluster */}
      <svg className="absolute -right-2 top-[45%] h-20 w-20 opacity-[0.06]" viewBox="0 0 40 40" fill="none"
        style={{ animation: "sway 8s ease-in-out 2s infinite" }}>
        <ellipse cx="20" cy="10" rx="7" ry="16" fill="oklch(0.8 0.06 350)" transform="rotate(-45 20 20)" />
        <ellipse cx="20" cy="10" rx="7" ry="16" fill="oklch(0.8 0.06 350)" transform="rotate(45 20 20)" />
        <ellipse cx="20" cy="10" rx="7" ry="16" fill="oklch(0.8 0.06 350)" transform="rotate(0 20 20)" />
        <ellipse cx="20" cy="10" rx="7" ry="16" fill="oklch(0.8 0.06 350)" transform="rotate(-90 20 20)" />
        <ellipse cx="20" cy="10" rx="7" ry="16" fill="oklch(0.8 0.06 350)" transform="rotate(90 20 20)" />
        <circle cx="20" cy="20" r="4" fill="oklch(0.88 0.08 80)" opacity="0.5" />
      </svg>

      {/* Bottom-left small bud */}
      <svg className="absolute left-[10%] top-[75%] h-10 w-10 opacity-[0.07]" viewBox="0 0 40 40" fill="none"
        style={{ animation: "sway 5s ease-in-out 1s infinite" }}>
        <ellipse cx="20" cy="14" rx="5" ry="12" fill="oklch(0.82 0.06 14)" transform="rotate(-15 20 20)" />
        <ellipse cx="20" cy="14" rx="5" ry="12" fill="oklch(0.82 0.06 14)" transform="rotate(15 20 20)" />
        <circle cx="20" cy="22" r="2.5" fill="oklch(0.88 0.08 80)" opacity="0.5" />
      </svg>

      {/* Center-right tiny blossom */}
      <svg className="absolute right-[20%] top-[30%] h-8 w-8 opacity-[0.05]" viewBox="0 0 40 40" fill="none"
        style={{ animation: "sway 7s ease-in-out 3s infinite" }}>
        <ellipse cx="20" cy="12" rx="4" ry="10" fill="oklch(0.78 0.07 14)" transform="rotate(0 20 20)" />
        <ellipse cx="20" cy="12" rx="4" ry="10" fill="oklch(0.78 0.07 14)" transform="rotate(72 20 20)" />
        <ellipse cx="20" cy="12" rx="4" ry="10" fill="oklch(0.78 0.07 14)" transform="rotate(144 20 20)" />
        <ellipse cx="20" cy="12" rx="4" ry="10" fill="oklch(0.78 0.07 14)" transform="rotate(216 20 20)" />
        <ellipse cx="20" cy="12" rx="4" ry="10" fill="oklch(0.78 0.07 14)" transform="rotate(288 20 20)" />
        <circle cx="20" cy="20" r="2" fill="oklch(0.88 0.08 80)" opacity="0.6" />
      </svg>
    </div>
  );
}
