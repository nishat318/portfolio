import Image from "next/image";
import { Sparkles, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
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
          className="h-auto w-full mix-blend-multiply"
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
          className="h-auto w-full mix-blend-multiply"
        />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pb-20 pt-24 text-center md:pb-28 md:pt-32">
        <div className="relative">
          <div
            className="absolute inset-0 -m-3 rounded-full bg-secondary blur-xl"
            aria-hidden="true"
          />
          <Image
            src="/images/profile.jpg"
            alt="Portrait of Nishat Tasnim holding a white lily"
            width={400}
            height={400}
            priority
            className="relative h-36 w-36 rounded-full border-4 border-card object-cover shadow-lg md:h-44 md:w-44"
          />
        </div>

        <div className="flex flex-col items-center gap-5">
          <p className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-accent-foreground shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Hello, lovely to meet you
          </p>
          <h1 className="font-serif text-4xl leading-tight text-balance md:text-6xl">
            I&apos;m Nishat Tasnim, a designer crafting{" "}
            <span className="italic text-primary">soft &amp; soulful</span>{" "}
            brands
          </h1>
          <p className="max-w-xl leading-relaxed text-pretty text-muted-foreground">
            From delicate brand identities to welcoming websites, I create work
            that feels like a warm invitation — thoughtful, elegant, and always
            in bloom.
          </p>
        </div>

        <a
          href="#portfolio"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
        >
          View my work
          <ArrowDown
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
