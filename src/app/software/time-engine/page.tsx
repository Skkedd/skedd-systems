import {
  ArrowLeft,
  CalendarClock,
  Clock3,
  Gauge,
  GitBranch,
  Layers3,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import SiteWallpaper from "../../_components/SiteWallpaper";

const engineSections = [
  {
    title: "Planning Backbone",
    status: "Core timing system",
    icon: Clock3,
    description:
      "Time Engine is the shared timing layer behind planning, sequencing, estimates and operational logic. It starts inside real facilities workflows, then becomes reusable infrastructure.",
    points: [
      "Work duration estimates",
      "Schedule-aware planning",
      "Task sequencing",
      "Real-world timing assumptions",
    ],
  },
  {
    title: "Route & Workflow Timing",
    status: "Operational logic",
    icon: Route,
    description:
      "Routes, inspections, cleaning sequences and field workflows all depend on time. The engine can model how long work takes, how movement affects schedules and where timing pressure appears.",
    points: [
      "Route timing",
      "Workflow sequencing",
      "Inspection support",
      "Movement-aware estimates",
    ],
  },
  {
    title: "Simulation Direction",
    status: "Future capability",
    icon: Gauge,
    description:
      "The long-term direction is a lightweight simulation backbone that can preview workflows, compare timing assumptions and support live demo windows with sliders, timelines and changing speeds.",
    points: [
      "Timeline previews",
      "Speed controls",
      "Scenario testing",
      "Interactive demo windows",
    ],
  },
  {
    title: "Cross-System Infrastructure",
    status: "Shared Skedd engine",
    icon: GitBranch,
    description:
      "Time Engine begins inside facilities, but the same timing backbone can later support Skedgine, routes, actors, world events, inspections, schedules and other Skedd systems.",
    points: [
      "Facilities workflows",
      "Game route timing",
      "World event logic",
      "Reusable engine layer",
    ],
  },
];

const publicNotes = [
  "Facilities work shapes the first real version of the engine",
  "The engine grows through project needs instead of speculative features",
  "Future demos can show sliders, timelines and changing task speed",
  "Long-term direction is shared timing infrastructure across Skedd systems",
];

export default function TimeEnginePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="mb-8 text-xs uppercase tracking-[0.22em] text-zinc-500">
          <a href="/" className="hover:text-white">
            Home
          </a>
          <span className="px-3">/</span>
          <a href="/software" className="hover:text-white">
            Software
          </a>
          <span className="px-3">/</span>
          <span className="text-cyan-300/70">Time Engine</span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <CalendarClock className="h-5 w-5" />
            <span>Skedd Systems Software / 04</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Time Engine
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            A shared timing backbone for planning, sequencing, estimates,
            schedules and lightweight simulation across the wider Skedd
            ecosystem.
          </p>
        </div>

        <article className="mt-16 max-w-[1220px] border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-5">
            <Layers3 className="h-12 w-12 text-zinc-200" />
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
              Engine Philosophy
            </span>
          </div>

          <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
            Built Inside Real Work
          </h2>

          <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            Time Engine follows the same Skedd pattern: build the engine inside
            a real product first, let real workflows shape it, then extract the
            mature pieces into reusable infrastructure. Facilities work is the
            proving ground.
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
            {publicNotes.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 text-sm text-zinc-300"
              >
                <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-300/70" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </article>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {engineSections.map((section, index) => {
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
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <Sparkles className="h-4 w-4 shrink-0 text-cyan-300/70" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <article
          style={{ maxWidth: "1220px", marginTop: "48px" }}
          className="border border-zinc-500/25 bg-black/20 p-6 text-sm leading-7 text-zinc-400 backdrop-blur-sm md:p-8"
        >
          <div className="mb-4 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-cyan-300/70">
            <Clock3 className="h-5 w-5" />
            <span>Future demo direction</span>
          </div>

          <p style={{ maxWidth: "950px" }}>
            A future public demo could show Time Engine through a safe sandbox:
            sliders for task speed, route timing, timeline progression and
            scenario changes, all without exposing private operational data.
          </p>

          <a
            href="/software"
            className="skedd-primary-cta mt-8 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
          >
            <ArrowLeft className="skedd-primary-cta-arrow h-4 w-4" />
            <span>Back to Software</span>
          </a>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}