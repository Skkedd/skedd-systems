import {
  Archive,
  ArrowRight,
  Clapperboard,
  MonitorPlay,
  Radio,
  RadioTower,
  ScrollText,
  Sparkles,
  Video,
} from "lucide-react";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import SiteWallpaper from "../_components/SiteWallpaper";

const mediaSystems = [
  {
    title: "Desk Council Plays",
    status: "Coming soon",
    icon: MonitorPlay,
    href: "/media/desk-council-plays",
    description:
      "Gameplay, early builds, strange experiments and Council reactions from inside the Skedd Systems world. A place where unfinished systems, weird features and game progress can become part of the show.",
    points: [
      "Valmore early builds",
      "Council play sessions",
      "Project updates",
      "Dev-state chaos",
    ],
  },
  {
    title: "Demo Vault",
    status: "Planned showcase lane",
    icon: Clapperboard,
    href: "/media/demo-vault",
    description:
      "A home for system demos, short feature clips and controlled showcase content. Things like Time Engine previews, Skedgine windows, editor behavior and visual experiments can live here.",
    points: [
      "Feature demos",
      "System previews",
      "Site-only videos",
      "Interactive showcases",
    ],
  },
  {
    title: "App Lore Feed",
    status: "Public lore archive",
    icon: Archive,
    href: "/media/app-lore",
    description:
      "A public feed for weird build history, happy accidents, cursed bugs, strange discoveries and moments where temporary workarounds become permanent truths.",
    points: ["Happy accidents", "Cursed bugs", "Design origins", "Milestones"],
  },
  {
    title: "Studio Notes",
    status: "Planned",
    icon: ScrollText,
    href: "/media/studio-notes",
    description:
      "Behind-the-scenes notes from software builds, game development, systems design and ongoing creative work. Enough detail to be useful without turning into a giant dev dump.",
    points: ["Build notes", "Dev logs", "Design thoughts", "Progress updates"],
  },
  {
    title: "Channels & Streams",
    status: "Future links hub",
    icon: RadioTower,
    href: "/media/channels",
    description:
      "A central place for Council streaming pages, public feeds, archives and outgoing media once those links are ready to go live.",
    points: ["Streaming links", "Channel hubs", "Archives", "Council feeds"],
  },
];

export default function MediaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <Video className="h-5 w-5" />
            <span>Skedd Systems Media</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Signal Feed
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Media, demos, Council chaos and public lore from the desk, the
            builds and the worlds in progress.
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
          {mediaSystems.map((system, index) => {
            const Icon = system.icon;

            return (
              <article
                key={system.title}
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

                <a
                  href={system.href}
                  className="skedd-primary-cta mt-8 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
                >
                  <span>View Page</span>
                  <ArrowRight className="skedd-primary-cta-arrow h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>

        <div
          style={{ maxWidth: "1220px", marginTop: "48px" }}
          className="border border-zinc-500/25 bg-black/20 p-6 text-sm leading-7 text-zinc-400 backdrop-blur-sm md:p-8"
        >
          <div className="mb-4 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-cyan-300/70">
            <Radio className="h-5 w-5" />
            <span>Public signal direction</span>
          </div>

          <p style={{ maxWidth: "950px" }}>
            Media gives Skedd a place to show the work without forcing every
            update into a formal announcement. Early builds, feature demos,
            Council play sessions, app lore and studio notes can all live here
            as the public signal of the larger ecosystem.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}