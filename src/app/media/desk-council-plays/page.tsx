import {
  ArrowLeft,
  Gamepad2,
  MonitorPlay,
  Play,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import SiteWallpaper from "../../_components/SiteWallpaper";

const sections = [
  {
    title: "Gameplay Sessions",
    status: "Coming soon",
    icon: Gamepad2,
    description:
      "A home for gameplay videos, early builds, test sessions and strange moments from Skedd projects in motion.",
    points: ["Valmore footage", "Early builds", "Arcade tests", "Project experiments"],
  },
  {
    title: "Council Reactions",
    status: "Planned",
    icon: Users,
    description:
      "Desk Council appearances, reactions and playful media built around the little chaos crew that lives near the workstation.",
    points: ["Council commentary", "Desk setups", "Tiny chaos", "Playable weirdness"],
  },
  {
    title: "Build Progress",
    status: "Ongoing lane",
    icon: MonitorPlay,
    description:
      "Short public updates showing what is being built, tested or polished without needing every update to become a full devlog.",
    points: ["Feature clips", "Bug moments", "Milestones", "Before and afters"],
  },
];

export default function DeskCouncilPlaysPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="mb-8 text-xs uppercase tracking-[0.22em] text-zinc-500">
          <a href="/" className="hover:text-white">Home</a>
          <span className="px-3">/</span>
          <a href="/media" className="hover:text-white">Media</a>
          <span className="px-3">/</span>
          <span className="text-cyan-300/70">Desk Council Plays</span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <Video className="h-5 w-5" />
            <span>Skedd Systems Media / 01</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Desk Council Plays
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Gameplay, Council chaos, early builds and public-facing project moments from inside the Skedd Systems world.
          </p>
        </div>

        <div style={{ marginTop: "64px", display: "flex", flexDirection: "column", gap: "32px" }}>
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                style={{ maxWidth: "1220px", width: "100%" }}
                className="border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm transition hover:border-cyan-200/50 hover:bg-white/[0.04] md:p-8"
              >
                <div className="mb-6 flex items-center gap-5">
                  <Icon className="h-12 w-12 text-zinc-200" />
                  <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
                  {section.title}
                </h2>

                <div className="mt-5 inline-flex border border-cyan-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200/80">
                  {section.status}
                </div>

                <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                  {section.description}
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
                  {section.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Sparkles className="h-4 w-4 shrink-0 text-cyan-300/70" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <a
          href="/media"
          className="skedd-primary-cta mt-10 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Media</span>
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}