"use client";

import Image from "next/image";
import { Code, BookOpen, Coffee } from "lucide-react";
import { useScrollAnimate } from "@/lib/use-scroll-animate";

const highlights = [
  {
    icon: Code,
    title: "Learning to Code",
    text: "CS student writing small programs, big dreams, and occasional heroic one-line fixes.",
    gradient: "from-rose-100 to-pink-100",
  },
  {
    icon: BookOpen,
    title: "Curious Problem-Solving",
    text: "I love debugging puzzles: turning 'why won't this run' into 'oh — of course!'.",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Coffee,
    title: "Pairing & Practice",
    text: "Happy to pair program, swap notes, or test whether coffee truly speeds up compilation.",
    gradient: "from-amber-50 to-orange-50",
  },
];

export function About() {
  const sectionRef = useScrollAnimate(0.1);

  return (
    <section
      id="about"
      className="relative bg-secondary/40 py-20 md:py-28"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Magnolia bud illustration — right side */}
      <div
        className="pointer-events-none absolute -right-8 top-10 w-28 opacity-15 md:right-4 md:w-40 lg:w-48"
        aria-hidden="true"
      >
        <Image
          src="/images/magnolia-bud.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full animate-float"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
      </div>

      {/* Decorative corner lilies */}
      <svg
        className="pointer-events-none absolute right-4 top-8 h-12 w-12 opacity-[0.08] md:right-12 md:h-16 md:w-16"
        viewBox="0 0 40 40" fill="none" aria-hidden="true"
        style={{ animation: "sway 6s ease-in-out infinite" }}
      >
        <ellipse cx="20" cy="12" rx="5" ry="12" fill="oklch(0.78 0.07 14)" transform="rotate(-25 20 20)" />
        <ellipse cx="20" cy="12" rx="5" ry="12" fill="oklch(0.78 0.07 14)" transform="rotate(25 20 20)" />
        <ellipse cx="20" cy="11" rx="4" ry="10" fill="oklch(0.85 0.05 14)" />
        <circle cx="20" cy="20" r="2.5" fill="oklch(0.88 0.08 80)" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-12 left-6 h-10 w-10 opacity-[0.06] md:left-16"
        viewBox="0 0 40 40" fill="none" aria-hidden="true"
        style={{ animation: "sway 8s ease-in-out 3s infinite" }}
      >
        <ellipse cx="20" cy="14" rx="4" ry="10" fill="oklch(0.8 0.06 350)" transform="rotate(-15 20 20)" />
        <ellipse cx="20" cy="14" rx="4" ry="10" fill="oklch(0.8 0.06 350)" transform="rotate(15 20 20)" />
        <circle cx="20" cy="22" r="2" fill="oklch(0.88 0.08 80)" opacity="0.5" />
      </svg>

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="animate-on-scroll mb-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground">
            About me
          </p>
          <h2 className="font-serif text-3xl text-balance md:text-4xl">
            A little about my world
          </h2>
        </div>

        {/* Main Card with animated border */}
        <div className="animate-on-scroll delay-200 animate-border-glow rounded-3xl border border-border bg-card/80 p-8 shadow-md backdrop-blur-sm md:p-12">
          <p className="mx-auto max-w-2xl text-center leading-relaxed text-pretty text-muted-foreground">
            Hi — I&apos;m Nishat, a computer science student learning web
            development and making experiments that may or may not be
            production-ready. I don&apos;t have client projects yet (mostly
            coursework, prototypes, and the occasional program that compiles on
            the first try). When I&apos;m not wrestling with a stubborn bug,
            I&apos;m sketching silly UI ideas, collecting error messages, and
            testing whether tea improves my debugging skills.
          </p>

          {/* Highlight Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className={`animate-on-scroll delay-${(index + 3) * 100} card-tilt flex flex-col items-center gap-3 rounded-2xl bg-background/70 p-6 text-center shadow-sm`}
              >
                <span className="animate-wiggle flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-lg">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom vine divider */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center" aria-hidden="true">
        <svg className="h-6 w-full max-w-sm opacity-[0.1]" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
          <path d="M0 15 Q40 0 80 12 Q120 24 160 8 Q180 2 200 10" stroke="oklch(0.65 0.05 140)" strokeWidth="1" fill="none" />
          <circle cx="80" cy="12" r="3" fill="oklch(0.78 0.07 14)" opacity="0.4" />
          <circle cx="160" cy="8" r="2.5" fill="oklch(0.78 0.07 14)" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
}
