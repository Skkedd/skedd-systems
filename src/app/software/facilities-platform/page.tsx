import { ArrowRight, Layers3, LockKeyhole, MapPinned, ShieldCheck } from "lucide-react";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import SiteWallpaper from "../../_components/SiteWallpaper";

const points = [
  "Interactive campus and building maps",
  "Assets, shutoffs, photos and field notes",
  "Layered site context and navigation",
  "Designed for real maintenance workflows",
];

export default function DeepSiteControlPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="mb-8 text-xs uppercase tracking-[0.22em] text-zinc-500">
          <a href="/" className="hover:text-white">Home</a>
          <span className="px-3">/</span>
          <a href="/software" className="hover:text-white">Software</a>
          <span className="px-3">/</span>
          <span className="text-cyan-300/70">Deep Site Control</span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <MapPinned className="h-5 w-5" />
            <span>Skedd Systems Software / 01</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Deep Site Control
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            A visual site intelligence platform for facilities, campuses and complex properties, built around interactive maps, asset records, layered site context and real-world operational knowledge.
          </p>
        </div>

        <article className="mt-16 max-w-[1220px] border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-5">
            <Layers3 className="h-12 w-12 text-zinc-200" />
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
              Platform Overview
            </span>
          </div>

          <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
            Built for Field Context
          </h2>

          <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            The platform is designed to make facilities knowledge easier to find, update and use. Instead of burying critical information in folders, binders or memory, the system places it directly on maps, layers and assets.
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
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm text-zinc-300">
                <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-300/70" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="mt-8 max-w-[1220px] border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-5">
            <LockKeyhole className="h-12 w-12 text-zinc-200" />
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
              Protected Access
            </span>
          </div>

          <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
            Launch Platform
          </h2>

          <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            Live platform access will be protected behind login before it is connected here. Public visitors can view this information page, but real data and internal tools will stay locked behind authentication.
          </p>

          <a
            href="https://www.deepsitecontrol.com"
            target="_blank"
            rel="noreferrer"
            className="skedd-primary-cta mt-8 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
          >
            <span>Visit Deep Site Control</span>
            <ArrowRight className="skedd-primary-cta-arrow h-4 w-4" />
          </a>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}