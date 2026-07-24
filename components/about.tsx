import { Code, BookOpen, Coffee } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Learning to Code",
    text: "CS student writing small programs, big dreams, and occasional heroic one-line fixes.",
  },
  {
    icon: BookOpen,
    title: "Curious Problem-Solving",
    text: "I love debugging puzzles: turning 'why won't this run' into 'oh — of course!'.",
  },
  {
    icon: Coffee,
    title: "Pairing & Practice",
    text: "Happy to pair program, swap notes, or test whether coffee truly speeds up compilation.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground">
            About me
          </p>
          <h2 className="font-serif text-3xl text-balance md:text-4xl">
            A little about my world
          </h2>
        </div>

        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-md backdrop-blur-sm md:p-12">
          <p className="mx-auto max-w-2xl text-center leading-relaxed text-pretty text-muted-foreground">
            Hi — I&apos;m Nishat, a computer science student learning web
            development and making experiments that may or may not be
            production-ready. I don&apos;t have client projects yet (mostly
            coursework, prototypes, and the occasional program that compiles on
            the first try). When I&apos;m not wrestling with a stubborn bug,
            I&apos;m sketching silly UI ideas, collecting error messages, and
            testing whether tea improves my debugging skills.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-3 rounded-2xl bg-background/70 p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
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
    </section>
  );
}
