import Image from "next/image";
import { Flower } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-serif text-lg">
          <Flower className="h-5 w-5 text-primary" aria-hidden="true" />
          Nishat Tasnim
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <Image
          src="/images/lily-line.png"
          alt=""
          aria-hidden="true"
          width={120}
          height={120}
          className="h-16 w-auto opacity-30 mix-blend-multiply"
        />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nisho. Designed with love &amp;
          lilies.
        </p>
      </div>
    </footer>
  );
}
