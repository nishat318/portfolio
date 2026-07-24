"use client";

import Image from "next/image";
import { Sparkles, ArrowDown, MousePointer2 } from "lucide-react";
import { useScrollAnimate } from "@/lib/use-scroll-animate";

export function Hero() {
  const sectionRef = useScrollAnimate(0.1);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Animated gradient backdrop */}
      <div
        aria-hidden="true"
        className="animate-gradient pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.94 0.03 15) 0%, oklch(0.97 0.01 74) 25%, oklch(0.92 0.03 140) 50%, oklch(0.97 0.01 74) 75%, oklch(0.94 0.03 15) 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Subtle lily motif in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-10 w-72 opacity-15 md:w-96"
      >
        <Image
          src="/images/lily-line.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full mix-blend-multiply animate-float"
          style={{ animationDuration: "8s" }}
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-16 w-64 -scale-x-100 opacity-10 md:w-80"
      >
        <Image
          src="/images/lily-line.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full mix-blend-multiply animate-float"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pb-20 pt-24 text-center md:pb-28 md:pt-32">
        {/* Profile Image with animated glow */}
        <div className="animate-on-scroll relative">
          <div
            className="animate-pulse-glow absolute inset-0 -m-4 rounded-full bg-secondary blur-xl"
            aria-hidden="true"
          />
          <div
            className="animate-spin-slow absolute inset-0 -m-5 rounded-full border-2 border-dashed border-primary/20"
            aria-hidden="true"
          />
          <Image
            src="/images/profile.jpg"
            alt="Portrait of Nishat Tasnim"
            width={400}
            height={400}
            priority
            className="animate-float relative h-36 w-36 rounded-full border-4 border-card object-cover shadow-lg md:h-44 md:w-44"
            style={{ animationDuration: "6s" }}
          />
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Greeting Badge */}
          <p className="animate-on-scroll delay-200 flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-accent-foreground shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-bounce-subtle" aria-hidden="true" />
            Hello, lovely to meet you
          </p>

          {/* Heading */}
          <h1 className="animate-on-scroll delay-300 font-serif text-4xl leading-tight text-balance md:text-6xl">
            I&apos;m Nishat Tasnim, a designer crafting{" "}
            <span className="relative italic text-primary">
              soft &amp; soulful
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary/30"
                aria-hidden="true"
              />
            </span>{" "}
            brands
          </h1>

          {/* Subtitle */}
          <p className="animate-on-scroll delay-400 max-w-xl leading-relaxed text-pretty text-muted-foreground">
            From delicate brand identities to welcoming websites, I create work
            that feels like a warm invitation — thoughtful, elegant, and always
            in bloom.
          </p>
        </div>

        {/* CTA Button with shimmer */}
        <a
          href="#portfolio"
          className="animate-on-scroll delay-500 btn-shimmer group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl"
        >
          View my work
          <ArrowDown
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </a>

        {/* Scroll Indicator */}
        <div className="animate-on-scroll delay-700 mt-4 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <MousePointer2 className="h-4 w-4 animate-scroll-bounce" aria-hidden="true" />
        </div>
      </div>

      {/* ── Decorative Illustrations ── */}

      {/* Pink lily — right side */}
      <div
        className="pointer-events-none absolute -right-10 top-1/4 w-40 opacity-20 md:right-0 md:w-56 lg:w-64"
        aria-hidden="true"
      >
        <Image
          src="/images/lily-flower.png"
          alt=""
          width={500}
          height={600}
          className="h-auto w-full animate-float"
          style={{ animationDuration: "8s" }}
        />
      </div>

      {/* Magnolia vine — bottom left corner */}
      <div
        className="pointer-events-none absolute -bottom-4 -left-4 w-36 -scale-x-100 opacity-15 md:w-48 lg:w-56"
        aria-hidden="true"
      >
        <Image
          src="/images/magnolia-vine.png"
          alt=""
          width={500}
          height={400}
          className="h-auto w-full"
          style={{ animation: "sway 10s ease-in-out infinite" }}
        />
      </div>

      {/* Decorative floating lilies */}
      <svg
        className="pointer-events-none absolute left-6 top-1/2 h-14 w-14 opacity-[0.1] md:left-12 md:h-20 md:w-20"
        viewBox="0 0 40 40" fill="none" aria-hidden="true"
        style={{ animation: "sway 5s ease-in-out infinite, float 8s ease-in-out infinite" }}
      >
        <ellipse cx="20" cy="12" rx="6" ry="14" fill="oklch(0.78 0.07 14)" transform="rotate(-30 20 20)" />
        <ellipse cx="20" cy="12" rx="6" ry="14" fill="oklch(0.78 0.07 14)" transform="rotate(30 20 20)" />
        <ellipse cx="20" cy="10" rx="5" ry="12" fill="oklch(0.82 0.06 14)" transform="rotate(0 20 20)" />
        <circle cx="20" cy="20" r="3" fill="oklch(0.88 0.08 80)" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-16 right-8 h-10 w-10 opacity-[0.08] md:right-16 md:h-16 md:w-16"
        viewBox="0 0 40 40" fill="none" aria-hidden="true"
        style={{ animation: "sway 7s ease-in-out 2s infinite, float 10s ease-in-out 1s infinite" }}
      >
        <ellipse cx="20" cy="14" rx="5" ry="12" fill="oklch(0.82 0.06 350)" transform="rotate(-20 20 20)" />
        <ellipse cx="20" cy="14" rx="5" ry="12" fill="oklch(0.82 0.06 350)" transform="rotate(20 20 20)" />
        <circle cx="20" cy="22" r="2.5" fill="oklch(0.88 0.08 80)" opacity="0.5" />
      </svg>

      {/* Bottom floral divider vine */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center" aria-hidden="true">
        <svg className="h-8 w-full max-w-xs opacity-[0.12]" viewBox="0 0 200 30" fill="none" preserveAspectRatio="none">
          <path d="M0 25 Q50 5 100 20 Q150 35 200 15" stroke="oklch(0.72 0.09 14)" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="12" r="4" fill="oklch(0.78 0.07 14)" opacity="0.5" />
          <circle cx="100" cy="20" r="3" fill="oklch(0.82 0.06 14)" opacity="0.4" />
          <circle cx="150" cy="22" r="4" fill="oklch(0.78 0.07 14)" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
