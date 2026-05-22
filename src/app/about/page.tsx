import {
  ArrowRight,
  Cpu,
  Gamepad2,
  Hammer,
  Layers3,
  Lightbulb,
  MonitorCog,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import SiteWallpaper from "../_components/SiteWallpaper";

const values = [
  {
    title: "Useful First",
    icon: Hammer,
    description:
      "Tools should solve real problems before they try to impress anyone.",
  },
  {
    title: "Systems Thinking",
    icon: Layers3,
    description:
      "Good software connects workflows, context, people and place into something easier to use.",
  },
  {
    title: "Creative Machinery",
    icon: Cpu,
    description:
      "Skedd Systems mixes practical software, games, media and experiments under one roof.",
  },
];

const buildAreas = [
  {
    title: "Software",
    href: "/software",
    icon: MonitorCog,
    description:
      "Operational tools, planning systems and practical platforms built around real workflows.",
  },
  {
    title: "Games",
    href: "/games",
    icon: Gamepad2,
    description:
      "Original worlds, playable systems and game projects that grow from the same engine-first mindset.",
  },
  {
    title: "Media",
    href: "/media",
    icon: WandSparkles,
    description:
      "Videos, demos, notes, lore and public-facing project history from the Skedd ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <Sparkles className="h-5 w-5" />
            <span>About Skedd Systems</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Built From Real Problems
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Skedd Systems is an independent studio focused on practical systems,
            original creative projects and software that grows out of real work
            instead of imaginary whiteboard nonsense.
          </p>
        </div>

        <section
          style={{ marginTop: "64px", maxWidth: "1220px" }}
          className="border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
            <Lightbulb className="h-5 w-5" />
            <span>The idea</span>
          </div>

          <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
            Making the useful stuff real
          </h2>

          <div className="mt-6 h-px w-40 bg-zinc-600/80" />

          <div className="mt-8 grid gap-8 text-sm leading-7 text-zinc-400 md:grid-cols-2 md:text-base md:leading-8">
            <p>
              Skedd Systems started from the simple idea that the best tools do
              not come from guessing what people need. They come from living
              inside the problem long enough to understand the messy parts.
            </p>

            <p>
              The studio uses modern software, internet-based tools and a lot of
              stubborn experimentation to turn workflows, creative ideas and
              long-term dreams into systems people can actually use.
            </p>
          </div>
        </section>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="border border-zinc-500/35 bg-black/30 p-7 backdrop-blur-sm transition hover:border-cyan-200/50 hover:bg-white/[0.04]"
              >
                <Icon className="mb-6 h-12 w-12 text-zinc-200" />
                <h2 className="text-xl uppercase tracking-[0.14em] text-zinc-100">
                  {value.title}
                </h2>
                <p className="mt-6 text-sm leading-7 text-zinc-400">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

        <section style={{ marginTop: "72px" }}>
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
              <Layers3 className="h-5 w-5" />
              <span>What Skedd Builds</span>
            </div>

            <h2 className="text-4xl font-black uppercase tracking-tight text-zinc-100 md:text-6xl">
              One ecosystem, multiple outputs
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400">
              The projects may look different from the outside, but they share
              the same center: build systems, learn from the work and keep
              turning ideas into usable tools.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {buildAreas.map((area) => {
              const Icon = area.icon;

              return (
                <a
                  key={area.title}
                  href={area.href}
                  className="skedd-primary-cta group border border-zinc-500/35 bg-black/30 p-7 backdrop-blur-sm transition hover:border-cyan-200/50 hover:bg-white/[0.04]"
                >
                  <Icon className="mb-6 h-12 w-12 text-zinc-200" />

                  <h3 className="text-xl uppercase tracking-[0.14em] text-zinc-100">
                    {area.title}
                  </h3>

                  <p className="mt-6 min-h-[112px] text-sm leading-7 text-zinc-400">
                    {area.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-cyan-200/70">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section
          style={{ marginTop: "72px", maxWidth: "1220px" }}
          className="border border-cyan-300/25 bg-cyan-300/[0.04] p-6 backdrop-blur-sm md:p-8"
        >
          <div className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
            <Cpu className="h-5 w-5" />
            <span>The through line</span>
          </div>

          <h2 className="max-w-4xl text-3xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
            Practical tools, strange ideas and systems that keep getting bigger
          </h2>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            Skedd Systems is where practical facilities software, scheduling
            tools, game systems, media experiments and odd little creative
            sparks all feed the same machine. Some projects solve immediate
            problems. Some build toward future games. Some start as tiny
            experiments and accidentally become core infrastructure. That is the
            point.
          </p>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}