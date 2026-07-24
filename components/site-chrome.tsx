"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

/** Inline lily SVG matching the favicon */
function LilyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="14" rx="6" ry="13" fill="currentColor" opacity="0.6" transform="rotate(-30 20 20)" />
      <ellipse cx="20" cy="14" rx="6" ry="13" fill="currentColor" opacity="0.6" transform="rotate(30 20 20)" />
      <ellipse cx="20" cy="12" rx="5" ry="11" fill="currentColor" opacity="0.8" transform="rotate(0 20 20)" />
      <circle cx="20" cy="21" r="3" fill="oklch(0.88 0.08 80)" opacity="0.7" />
    </svg>
  );
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy — track which section is active
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as HTMLElement[];

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/85 shadow-sm backdrop-blur-lg"
          : "border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-serif text-lg transition-colors duration-300 hover:text-primary"
        >
          <LilyIcon
            className="h-6 w-6 text-primary transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          Nishat Tasnim
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link-animated text-sm transition-colors duration-300 ${
                    activeSection === link.href
                      ? "active font-medium text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors duration-300 hover:bg-secondary md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{ animation: `fadeInUp 0.3s ease ${index * 60}ms both` }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      activeSection === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 py-10">
      {/* Subtle gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, oklch(0.94 0.025 15) 0%, transparent 100%)",
        }}
      />

      {/* Magnolia vine — left corner */}
      <div
        className="pointer-events-none absolute -bottom-2 -left-4 w-36 opacity-15 md:w-48"
        aria-hidden="true"
      >
        <Image
          src="/images/magnolia-vine.png"
          alt=""
          width={500}
          height={400}
          className="h-auto w-full -scale-x-100"
          style={{ animation: "sway 10s ease-in-out infinite" }}
        />
      </div>

      {/* Magnolia bud — right side */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 w-20 opacity-12 md:right-4 md:w-28"
        aria-hidden="true"
      >
        <Image
          src="/images/magnolia-bud.png"
          alt=""
          width={300}
          height={300}
          className="h-auto w-full animate-float"
          style={{ animationDuration: "8s" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <Image
          src="/images/lily-line.png"
          alt=""
          aria-hidden="true"
          width={120}
          height={120}
          className="h-16 w-auto animate-float opacity-30 mix-blend-multiply"
          style={{ animationDuration: "8s" }}
        />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nishat Tasnim. Designed by my love, with lots of lilies TwT
        </p>
        {/* Back to top */}
        <a
          href="#home"
          className="mt-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
