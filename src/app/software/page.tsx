import {
  ArrowRight,
  Bot,
  CalendarClock,
  Clock3,
  Layers3,
  MapPinned,
  MonitorCog,
  PencilRuler,
  ShieldCheck,
} from "lucide-react";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import SiteWallpaper from "../_components/SiteWallpaper";

const softwareSystems = [
  {
    title: "Deep Site Control",
    status: "In active development",
    icon: MapPinned,
    href: "/software/deep-site-control",
    description:
      "A visual facilities management platform built around interactive site maps, layered building views, equipment records, photos, notes, shutoffs and real maintenance workflows.",
    points: [
      "Interactive campus maps",
      "Layered site and building views",
      "Asset records and field notes",
      "Maintenance-focused workflows",
    ],
  },
  {
    title: "Spatial Operations Engine",
    status: "Core platform direction",
    icon: PencilRuler,
    href: "/software/spatial-operations-engine",
    description:
      "Deep Site Control is also becoming an editor-driven software engine, where environments, layers, assets and operational context can be built and updated from inside the app.",
    points: [
      "In-app environment authoring",
      "Layer and asset editing",
      "Reusable mapping backbone",
      "Operational context tools",
    ],
  },
  {
    title: "Summer Scheduler",
    status: "Operational tool",
    icon: CalendarClock,
    href: "/software/summer-scheduler",
    description:
      "A scheduling and planning system for summer cleaning, room scope, staffing, carpet work, progress tracking and the real timing constraints that come with facilities work.",
    points: [
      "Room scheduling",
      "Staffing logic",
      "Progress tracking",
      "Workbook-driven workflow",
    ],
  },
  {
    title: "Time Engine",
    status: "Shared engine infrastructure",
    icon: Clock3,
    href: "/software/time-engine",
    description:
      "A shared timing backbone for planning, sequencing, route timing, workflow estimates and lightweight simulation logic. It starts inside facilities work, then grows into reusable Skedd infrastructure.",
    points: [
      "Planning and estimates",
      "Route and workflow timing",
      "Inspection sequencing",
      "Future cross-system backbone",
    ],
  },
  {
    title: "Robotics & Intelligent Systems",
    status: "Exploratory software lane",
    icon: Bot,
    href: "/software/robotics-intelligence-system",
    description:
      "Software-side exploration for robotics workflows, automation logic, behavior-driven functionality and human/software interaction. The focus is software behavior, not hardware manufacturing.",
    points: [
      "Automation logic",
      "Robotics workflow software",
      "Behavior-driven systems",
      "Smart interaction tools",
    ],
  },
];

export default function SoftwarePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <MonitorCog className="h-5 w-5" />
            <span>Skedd Systems Software</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Practical Systems
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Software built around real operational problems, field workflows
            and proprietary internal engines that grow through actual project
            needs.
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
          {softwareSystems.map((system, index) => {
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
                      <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-300/70" />
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
            <Layers3 className="h-5 w-5" />
            <span>Engine-first direction</span>
          </div>

          <p style={{ maxWidth: "950px" }}>
            Skedd software grows by embedding engine work inside real products
            first. Deep Site Control shapes the spatial operations
            engine, the scheduler and facilities workflows shape the time engine
            and each mature piece can later become reusable infrastructure
            across the wider Skedd ecosystem.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}