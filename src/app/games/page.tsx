import {
  ArrowRight,
  Cpu,
  ExternalLink,
  Gamepad2,
  Route,
  Sparkles,
  Sword,
} from "lucide-react";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import SiteWallpaper from "../_components/SiteWallpaper";

const gameSystems = [
  {
    title: "Valmore",
    status: "In development",
    icon: Sword,
    href: "https://playvalmore.com",
    external: true,
    description:
      "An original RPG with a strange small-town vibe, job-based progression, oddball characters, gated town expansion, in-world arcades and layered systems that make the world feel built rather than simply decorated.",
    points: [
      "Weird world tone",
      "Job and town progression",
      "Living character systems",
      "Arcades inside the RPG",
    ],
  },
  {
    title: "Skedgine",
    status: "Proprietary game engine",
    icon: Cpu,
    href: "/games/skedgine",
    external: false,
    description:
      "A proprietary game creation engine growing through Valmore. The long-term goal is an editor-driven environment where future games can be authored inside the engine with little to no direct coding.",
    points: [
      "Editor-driven game creation",
      "World, actor and route systems",
      "Diagnostics and review tools",
      "Simulation window direction",
    ],
  },
];

export default function GamesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <Gamepad2 className="h-5 w-5" />
            <span>Skedd Systems Games</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Weird Worlds
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Original games and proprietary engine systems built through real
            project needs, starting RPG-first with Valmore and growing into a
            reusable creation ecosystem.
          </p>
        </div>

        <div
          style={{
            marginTop: "64px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {gameSystems.map((system, index) => {
            const Icon = system.icon;

            return (
              <article
                key={system.title}
                style={{
                  maxWidth: "1220px",
                  width: "100%",
                }}
                className="border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm transition hover:border-cyan-200/50 hover:bg-white/[0.04] md:p-8"
              >
                <div className="mb-6 flex items-center gap-5">
                  <Icon className="h-12 w-12 text-zinc-200" />
                  <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
                  {system.title}
                </h2>

                <div className="mt-5 inline-flex border border-cyan-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200/80">
                  {system.status}
                </div>

                <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                  {system.description}
                </p>

                <div
                  style={{
                    maxWidth: "850px",
                    marginTop: "32px",
                    paddingTop: "24px",
                    borderTop: "1px solid rgba(63, 63, 70, 0.7)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {system.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <Sparkles className="h-4 w-4 shrink-0 text-cyan-300/70" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {system.external ? (
                  <a
                    href={system.href}
                    target="_blank"
                    rel="noreferrer"
                    className="skedd-primary-cta mt-8 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
                  >
                    <span>Visit Valmore</span>
                    <ExternalLink className="skedd-primary-cta-arrow h-4 w-4" />
                  </a>
                ) : (
                  <a
                    href={system.href}
                    className="skedd-primary-cta mt-8 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
                  >
                    <span>View Page</span>
                    <ArrowRight className="skedd-primary-cta-arrow h-4 w-4" />
                  </a>
                )}
              </article>
            );
          })}
        </div>

        <div
          style={{
            maxWidth: "1220px",
            marginTop: "48px",
          }}
          className="border border-zinc-500/25 bg-black/20 p-6 text-sm leading-7 text-zinc-400 backdrop-blur-sm md:p-8"
        >
          <div className="mb-4 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-cyan-300/70">
            <Route className="h-5 w-5" />
            <span>Project-grown engine direction</span>
          </div>

          <p style={{ maxWidth: "950px" }}>
            Skedgine grows through real game needs, not speculative engine
            detours. Valmore stays RPG-first until it ships, while arcades and
            in-world systems may naturally push new functionality forward when
            they directly support the game.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}