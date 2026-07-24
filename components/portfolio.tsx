"use client";

import Image from "next/image";
import { Sparkles, Coffee, Bug, Rocket } from "lucide-react";
import { useScrollAnimate } from "@/lib/use-scroll-animate";

export function Portfolio() {
  const sectionRef = useScrollAnimate(0.1);

  return (
    <section
      id="portfolio"
      className="relative py-20 md:py-28"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Magnolia bud illustration — bottom left */}
      <div
        className="pointer-events-none absolute -left-6 bottom-8 w-24 opacity-15 md:left-2 md:w-32 lg:w-40"
        aria-hidden="true"
      >
        <Image
          src="/images/magnolia-bud.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full -scale-x-100 animate-float"
          style={{ animationDuration: "11s", animationDelay: "3s" }}
        />
      </div>

      {/* Decorative lilies */}
      <svg
        className="pointer-events-none absolute left-4 top-12 h-12 w-12 opacity-[0.07] md:left-10 md:h-16 md:w-16"
        viewBox="0 0 40 40" fill="none" aria-hidden="true"
        style={{ animation: "sway 7s ease-in-out 1s infinite" }}
      >
        <ellipse cx="20" cy="12" rx="6" ry="14" fill="oklch(0.78 0.07 14)" transform="rotate(-30 20 20)" />
        <ellipse cx="20" cy="12" rx="6" ry="14" fill="oklch(0.78 0.07 14)" transform="rotate(30 20 20)" />
        <ellipse cx="20" cy="10" rx="5" ry="12" fill="oklch(0.82 0.06 14)" transform="rotate(0 20 20)" />
        <circle cx="20" cy="20" r="3" fill="oklch(0.88 0.08 80)" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-16 right-6 h-10 w-10 opacity-[0.06] md:right-14"
        viewBox="0 0 40 40" fill="none" aria-hidden="true"
        style={{ animation: "sway 5s ease-in-out 2s infinite" }}
      >
        <ellipse cx="20" cy="14" rx="5" ry="11" fill="oklch(0.8 0.06 350)" transform="rotate(-20 20 20)" />
        <ellipse cx="20" cy="14" rx="5" ry="11" fill="oklch(0.8 0.06 350)" transform="rotate(20 20 20)" />
        <circle cx="20" cy="22" r="2" fill="oklch(0.88 0.08 80)" opacity="0.5" />
      </svg>
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="animate-on-scroll mb-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl text-balance md:text-4xl">
            Selected work in bloom
          </h2>
        </div>

        {/* Humorous Empty State */}
        <div className="animate-on-scroll delay-200 rounded-3xl border border-border bg-card/80 p-10 shadow-md backdrop-blur-sm md:p-16">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Animated flower icon */}
            <div className="animate-bounce-subtle flex h-24 w-24 items-center justify-center rounded-full bg-accent/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 48 48" aria-hidden="true">
                <linearGradient id="fl_gr1" x1="4.856" x2="28.223" y1="4.071" y2="27.438" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fcfcfc"/><stop offset=".495" stopColor="#f4f4f4"/><stop offset=".946" stopColor="#e8e8e8"/><stop offset="1" stopColor="#e8e8e8"/></linearGradient>
                <path fill="url(#fl_gr1)" d="M45.384,16.679c-1.982-2.371-5.027-3.676-8.576-3.676c-0.002,0-0.003,0-0.004,0c-3.539,0.001-7.048,1.312-8.842,3.284c-0.089-0.354-0.192-0.724-0.313-1.106l-0.094-0.188c0.005-0.066-0.004-0.134-0.026-0.199c-0.53-1.54-1.246-2.917-2.129-4.093c-2.469-3.292-7.416-3.389-9.438-3.285c-0.183,0.01-0.346,0.12-0.425,0.285c-0.078,0.166-0.06,0.361,0.049,0.509c2.744,3.753,1.318,9.332,1.005,10.412c-0.044,0.153-0.012,0.311,0.075,0.432C12.299,18.669,8.213,19.218,5.6,22.7c-1.424,1.898-1.896,3.489-2.043,4.49c-0.027,0.19,0.056,0.379,0.215,0.486c0.16,0.108,0.366,0.114,0.532,0.018c1.469-0.854,3.781-1.591,6.473-0.247c1.983,0.991,3.087,1.047,5.739,0.957c0.112-0.004,0.22-0.046,0.306-0.118c0.806-0.683,1.66-1.221,2.441-1.635c-2.534,2.605-5.887,7.688-4.274,15.409c0.049,0.233,0.254,0.397,0.489,0.397c0.013,0,0.026-0.001,0.04-0.002c0.252-0.021,0.448-0.225,0.46-0.476c0.072-1.649,2.024-2.555,4.496-3.7c0.57-0.265,1.16-0.538,1.75-0.833c2.996-1.498,4.295-4.427,4.856-6.807c0.038,0.062,0.091,0.114,0.153,0.154C28.232,31.432,30.57,32.5,35,32.5c5.462,0,7.476,2.37,8.189,3.783c0.094,0.186,0.293,0.292,0.5,0.271c0.207-0.022,0.379-0.171,0.431-0.373c0.576-2.245,1.157-6.487-1.429-9.662c-1.646-2.021-4.293-3.293-7.902-3.806c0.086-0.001,0.172-0.002,0.258-0.002c0.261,0,0.477-0.201,0.497-0.459c0.166-2.041,0.994-3.542,2.463-4.461c1.777-1.115,4.451-1.242,6.813-0.324c0.21,0.08,0.455,0.01,0.587-0.175C45.539,17.106,45.53,16.854,45.384,16.679z"/>
                <linearGradient id="fl_gr2" x1="32.241" x2="40.862" y1="11.073" y2="21.566" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ec81a3"/><stop offset="1" stopColor="#dd386d"/></linearGradient>
                <path fill="url(#fl_gr2)" d="M27,15l1,2c2.734-3.645,12.331-5.585,17,0c-4.065-1.58-10-0.513-10,6h2c0,0,0-7,9-5C46,15,38,6,27,15z"/>
                <linearGradient id="fl_gr3" x1="30.376" x2="43.58" y1="22.45" y2="38.519" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ec81a3"/><stop offset="1" stopColor="#dd386d"/></linearGradient>
                <path fill="url(#fl_gr3)" d="M46,29c-3-10-17-6-17-6c16.419-0.782,15.722,8.828,14.636,13.058C42.904,34.611,40.788,32,35,32c-6,0-8-2-8-2v2c0,0,3,2,9,2s7,6,7,6S48.092,35.973,46,29z"/>
                <linearGradient id="fl_gr4" x1="13.294" x2="25.7" y1="6.304" y2="21.403" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ec81a3"/><stop offset="1" stopColor="#dd386d"/></linearGradient>
                <path fill="url(#fl_gr4)" d="M13,6c0,0,4,5,1,13h3c0,0,2.214-6.677-1.01-11.085C19,8,22.691,8.921,25,12c3,4,3,8,3,8s0.811,0.473,1-1c0.156-1.215-0.199-4.193-1-6C26.373,9.332,21.611,4.565,13,6z"/>
                <linearGradient id="fl_gr5" x1="6.079" x2="15.115" y1="19.511" y2="30.508" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ec81a3"/><stop offset="1" stopColor="#dd386d"/></linearGradient>
                <path fill="url(#fl_gr5)" d="M11,27c-3.006-1.503-5.58-0.534-6.948,0.263C4.177,26.406,4.597,24.871,6,23c3-4,8-4,14-3c0,0-9-5-15,0c-2.068,1.724-4,5-3,11c0,0,3-4,8-2c1.59,0.636,4.192,0.765,7,0.647v-1.76C14,28,13,28,11,27z"/>
                <linearGradient id="fl_gr6" x1="15.876" x2="23.698" y1="28.747" y2="38.266" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ec81a3"/><stop offset="1" stopColor="#dd386d"/></linearGradient>
                <path fill="url(#fl_gr6)" d="M27,27c0,0,0.215,7.392-5,10c-3.212,1.606-6.417,2.57-6.522,4.958C13.059,30.373,22,25,22,25s-8,2-9,9s3,10,3,10s1.352-2.741,7-5C28,37,28,31,27,27z"/>
                <linearGradient id="fl_gr7" x1="14.184" x2="27.742" y1="9.684" y2="23.242" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffd869"/><stop offset="1" stopColor="#fec52b"/></linearGradient>
                <path fill="url(#fl_gr7)" d="M25.987,20.724C25.839,11.969,19,10,19,10c3.788,2.526,4.784,6.642,5.005,9.336C17.247,11.703,9,15,9,15c7.946-0.722,12.238,3.772,14.009,6.324C16,19,12,24,12,24c8-4,14,1,14,1c2.241-4.371,5.537-7.74,10-10C36,15,30.755,15.003,25.987,20.724z"/>
                <linearGradient id="fl_gr8" x1="12.461" x2="13.718" y1="25.461" y2="26.718" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fba62d"/><stop offset=".174" stopColor="#fc8e2c"/><stop offset=".548" stopColor="#fe602a"/><stop offset=".835" stopColor="#ff4329"/><stop offset="1" stopColor="#ff3829"/></linearGradient>
                <circle cx="13" cy="26" r="1" fill="url(#fl_gr8)"/>
                <linearGradient id="fl_gr9" x1="9.461" x2="10.718" y1="22.461" y2="23.718" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fba62d"/><stop offset=".174" stopColor="#fc8e2c"/><stop offset=".548" stopColor="#fe602a"/><stop offset=".835" stopColor="#ff4329"/><stop offset="1" stopColor="#ff3829"/></linearGradient>
                <circle cx="10" cy="23" r="1" fill="url(#fl_gr9)"/>
                <linearGradient id="fl_gr10" x1="8.461" x2="9.718" y1="12.461" y2="13.718" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fba62d"/><stop offset=".174" stopColor="#fc8e2c"/><stop offset=".548" stopColor="#fe602a"/><stop offset=".835" stopColor="#ff4329"/><stop offset="1" stopColor="#ff3829"/></linearGradient>
                <circle cx="9" cy="13" r="1" fill="url(#fl_gr10)"/>
                <linearGradient id="fl_gr11" x1="5.461" x2="6.718" y1="15.461" y2="16.718" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fba62d"/><stop offset=".174" stopColor="#fc8e2c"/><stop offset=".548" stopColor="#fe602a"/><stop offset=".835" stopColor="#ff4329"/><stop offset="1" stopColor="#ff3829"/></linearGradient>
                <circle cx="6" cy="16" r="1" fill="url(#fl_gr11)"/>
                <linearGradient id="fl_gr12" x1="12.461" x2="13.718" y1="11.461" y2="12.718" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fba62d"/><stop offset=".174" stopColor="#fc8e2c"/><stop offset=".548" stopColor="#fe602a"/><stop offset=".835" stopColor="#ff4329"/><stop offset="1" stopColor="#ff3829"/></linearGradient>
                <circle cx="13" cy="12" r="1" fill="url(#fl_gr12)"/>
                <linearGradient id="fl_gr13" x1="16.461" x2="17.718" y1="24.461" y2="25.718" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fba62d"/><stop offset=".174" stopColor="#fc8e2c"/><stop offset=".548" stopColor="#fe602a"/><stop offset=".835" stopColor="#ff4329"/><stop offset="1" stopColor="#ff3829"/></linearGradient>
                <circle cx="17" cy="25" r="1" fill="url(#fl_gr13)"/>
              </svg>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl">
              Nothing here yet&hellip; just vibes
              <Sparkles
                className="ml-2 inline-block -mt-1 h-5 w-5 animate-bounce-subtle text-primary"
                aria-hidden="true"
              />
            </h3>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              My portfolio is currently emptier than my coffee mug at 3&nbsp;AM during a debugging session.
              I&apos;m too busy convincing my houseplants to pay rent and negotiating
              with my code to compile on the first try.
            </p>

            {/* Fun stats row */}
            <div className="mt-4 grid w-full max-w-md gap-4 sm:grid-cols-3">
              <div className="animate-on-scroll delay-300 card-tilt flex flex-col items-center gap-2 rounded-2xl bg-background/70 p-5 shadow-sm">
                <Coffee className="h-5 w-5 text-primary animate-wiggle" aria-hidden="true" />
                <span className="font-serif text-2xl font-bold text-foreground">247</span>
                <span className="text-xs text-muted-foreground">Cups of tea consumed</span>
              </div>
              <div className="animate-on-scroll delay-400 card-tilt flex flex-col items-center gap-2 rounded-2xl bg-background/70 p-5 shadow-sm">
                <Bug className="h-5 w-5 text-primary animate-wiggle" aria-hidden="true" />
                <span className="font-serif text-2xl font-bold text-foreground">∞</span>
                <span className="text-xs text-muted-foreground">Bugs created (fixed?)</span>
              </div>
              <div className="animate-on-scroll delay-500 card-tilt flex flex-col items-center gap-2 rounded-2xl bg-background/70 p-5 shadow-sm">
                <Rocket className="h-5 w-5 text-primary animate-wiggle" aria-hidden="true" />
                <span className="font-serif text-2xl font-bold text-foreground">0</span>
                <span className="text-xs text-muted-foreground">Projects shipped (soon!)</span>
              </div>
            </div>

            <p className="mt-2 text-sm italic text-muted-foreground/70">
              Real projects are brewing, check back before my plants learn to code faster than me TwT
            </p>
          </div>
        </div>
      </div>

      {/* Bottom vine divider */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center" aria-hidden="true">
        <svg className="h-6 w-full max-w-xs opacity-[0.1]" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
          <path d="M0 10 Q50 0 100 15 Q150 30 200 12" stroke="oklch(0.72 0.09 14)" strokeWidth="1" fill="none" />
          <circle cx="60" cy="6" r="3" fill="oklch(0.78 0.07 14)" opacity="0.4" />
          <circle cx="140" cy="20" r="2.5" fill="oklch(0.78 0.07 14)" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
}
