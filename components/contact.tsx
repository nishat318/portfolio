"use client";

import { useState } from "react";
import { Send, Mail, Camera, Globe, CircleCheck } from "lucide-react";

const inputClasses =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring focus:shadow-[0_0_16px_-2px] focus:shadow-primary/30";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
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

        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-md backdrop-blur-sm md:p-10">
          {submitted ? (
            <div
              className="flex flex-col items-center gap-3 py-10 text-center"
              role="status"
            >
              <CircleCheck
                className="h-10 w-10 text-accent-foreground"
                aria-hidden="true"
              />
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
                    className={inputClasses}
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
                    className={inputClasses}
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
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
              >
                Send message
                <Send
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="mailto:hello@nishattasnim.com"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            <Camera className="h-4 w-4" aria-hidden="true" />
            Instagram
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
