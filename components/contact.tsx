"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, Mail, Camera, Globe, CircleCheck } from "lucide-react";
import { useScrollAnimate } from "@/lib/use-scroll-animate";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useScrollAnimate(0.1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative bg-secondary/40 py-20 md:py-28"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Decorative lilies */}
      <svg
        className="pointer-events-none absolute left-6 top-10 h-14 w-14 opacity-[0.07] md:left-14 md:h-18 md:w-18"
        viewBox="0 0 40 40" fill="none" aria-hidden="true"
        style={{ animation: "sway 6s ease-in-out infinite" }}
      >
        <ellipse cx="20" cy="12" rx="5" ry="13" fill="oklch(0.78 0.07 14)" transform="rotate(-35 20 20)" />
        <ellipse cx="20" cy="12" rx="5" ry="13" fill="oklch(0.78 0.07 14)" transform="rotate(35 20 20)" />
        <ellipse cx="20" cy="11" rx="4" ry="11" fill="oklch(0.85 0.05 14)" />
        <circle cx="20" cy="20" r="2.5" fill="oklch(0.88 0.08 80)" opacity="0.6" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-14 right-8 h-10 w-10 opacity-[0.06] md:right-20"
        viewBox="0 0 40 40" fill="none" aria-hidden="true"
        style={{ animation: "sway 8s ease-in-out 2s infinite" }}
      >
        <ellipse cx="20" cy="14" rx="4" ry="10" fill="oklch(0.82 0.06 350)" transform="rotate(-15 20 20)" />
        <ellipse cx="20" cy="14" rx="4" ry="10" fill="oklch(0.82 0.06 350)" transform="rotate(15 20 20)" />
        <circle cx="20" cy="22" r="2" fill="oklch(0.88 0.08 80)" opacity="0.5" />
      </svg>

      {/* Lily illustration — left side */}
      <div
        className="pointer-events-none absolute -left-12 top-1/4 w-28 opacity-15 md:-left-4 md:w-36 lg:w-44"
        aria-hidden="true"
      >
        <Image
          src="/images/lily-flower.png"
          alt=""
          width={400}
          height={500}
          className="h-auto w-full -scale-x-100 animate-float"
          style={{ animationDuration: "9s", animationDelay: "2s" }}
        />
      </div>

      {/* Magnolia vine — bottom right corner */}
      <div
        className="pointer-events-none absolute -bottom-2 -right-4 w-32 opacity-12 md:w-44"
        aria-hidden="true"
      >
        <Image
          src="/images/magnolia-vine.png"
          alt=""
          width={500}
          height={400}
          className="h-auto w-full"
          style={{ animation: "sway 12s ease-in-out 1s infinite" }}
        />
      </div>

      <div className="mx-auto max-w-2xl px-6">
        {/* Section Header */}
        <div className="animate-on-scroll mb-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground">
            Contact
          </p>
          <h2 className="font-serif text-3xl text-balance md:text-4xl">
            Let&apos;s create something lovely
          </h2>
          <p className="max-w-md leading-relaxed text-pretty text-muted-foreground">
            Have a project in mind, or just want to say hello? My inbox is
            always open.
          </p>
        </div>

        {/* Form Card */}
        <div className="animate-on-scroll delay-200 rounded-3xl border border-border bg-card/80 p-8 shadow-md backdrop-blur-sm md:p-10">
          {submitted ? (
            <div
              className="flex flex-col items-center gap-3 py-10 text-center"
              role="status"
            >
              <div className="animate-bounce-subtle flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <CircleCheck
                  className="h-8 w-8 text-accent-foreground"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-serif text-xl">Thank you for reaching out</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your message has been received. I&apos;ll reply within two
                business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="input-glow w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm transition-all duration-300 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="input-glow w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm transition-all duration-300 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="input-glow w-full resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm transition-all duration-300 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl"
              >
                Send message
                <Send
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="animate-on-scroll delay-400 mt-8 flex items-center justify-center gap-6">
          <a
            href="mailto:hello@nishattasnim.com"
            className="social-hover flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a
            href="#"
            className="social-hover flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Camera className="h-4 w-4" aria-hidden="true" />
            Instagram
          </a>
          <a
            href="#"
            className="social-hover flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            Portfolio
          </a>
        </div>

        {/* Decorative lily bud */}
        <div className="mt-6 flex justify-center">
          <svg className="h-6 w-6 animate-bounce-subtle opacity-30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <ellipse cx="20" cy="16" rx="5" ry="11" fill="oklch(0.78 0.07 14)" transform="rotate(-15 20 20)" />
            <ellipse cx="20" cy="16" rx="5" ry="11" fill="oklch(0.78 0.07 14)" transform="rotate(15 20 20)" />
            <circle cx="20" cy="22" r="2" fill="oklch(0.88 0.08 80)" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
