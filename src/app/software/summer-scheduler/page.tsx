import {
  ArrowLeft,
  CalendarClock,
  ClipboardCheck,
  Download,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import SiteWallpaper from "../../_components/SiteWallpaper";

const schedulerPoints = [
  "Room scheduling and cleaning sequence planning",
  "Staffing logic based on real available work time",
  "Progress tracking for summer cleaning workflows",
  "Workbook-driven structure for setup, scope and reporting",
];

const accessPoints = [
  "Program launch/download link will be added later",
  "Current version is not public-facing yet",
  "Future page can host instructions, screenshots and release notes",
  "Designed for practical summer operations, not generic scheduling fluff",
];

export default function SummerSchedulerPage() {
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
          <span className="text-cyan-300/70">Summer Scheduler</span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <CalendarClock className="h-5 w-5" />
            <span>Skedd Systems Software / 03</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Summer Scheduler
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            A planning tool for summer cleaning work, staffing, room scope,
            carpet work, progress tracking and the awkward real-world timing
            problems that spreadsheets usually make worse.
          </p>
        </div>

        <article className="mt-16 max-w-[1220px] border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-5">
            <ClipboardCheck className="h-12 w-12 text-zinc-200" />
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
              Scheduler Overview
            </span>
          </div>

          <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
            Built for Summer Operations
          </h2>

          <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            Summer Scheduler is designed around the actual work of getting rooms
            cleaned, tracked and completed with limited staff, shifting site
            access, different room scopes and task types that do not all behave
            the same.
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
            {schedulerPoints.map((point) => (
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

        <article className="mt-8 max-w-[1220px] border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-5">
            <Download className="h-12 w-12 text-zinc-200" />
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
              Program Access
            </span>
          </div>

          <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
            Launch Program
          </h2>

          <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            This section will eventually open or download the Summer Scheduler
            program. For now, the public page is live so the program can have a
            permanent home while the release workflow is finalized.
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
            {accessPoints.map((point) => (
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
            // href="/downloads/summer-scheduler"
            className="skedd-primary-cta mt-8 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
          >
            <span>Coming Soon</span>
            <Download className="skedd-primary-cta-arrow h-4 w-4" />
          </a>
        </article>

        <article className="mt-8 max-w-[1220px] border border-zinc-500/25 bg-black/20 p-6 text-sm leading-7 text-zinc-400 backdrop-blur-sm md:p-8">
          <div className="mb-4 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-cyan-300/70">
            <Layers3 className="h-5 w-5" />
            <span>Workbook-driven direction</span>
          </div>

          <p style={{ maxWidth: "950px" }}>
            The scheduler is built around a structured workbook workflow so
            sites, rooms, staffing, scope, setup and progress can stay visible
            and practical. The goal is a usable operations tool first, with
            polish and reporting layered in after the core schedule works.
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