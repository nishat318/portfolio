import { Sparkles } from "lucide-react";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl text-balance md:text-4xl">
            Selected work in bloom
          </h2>
          <p className="max-w-lg leading-relaxed text-pretty text-muted-foreground">
            {/* This site is currently not showing any projects. */}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <p className="col-span-full text-center text-muted-foreground">
            No projects here! currently perfecting the art of convincing my
            plants to pay rent. Come back soon for real work
            <Sparkles
              className="inline-block ml-2 -mt-0.5 h-4 w-4 text-primary"
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
