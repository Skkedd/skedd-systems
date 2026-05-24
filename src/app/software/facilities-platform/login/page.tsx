import {
  ArrowLeft,
  ExternalLink,
  LockKeyhole,
  MapPinned,
  MonitorPlay,
  ShieldCheck,
} from "lucide-react";
import SiteFooter from "../../../_components/SiteFooter";
import SiteHeader from "../../../_components/SiteHeader";
import SiteWallpaper from "../../../_components/SiteWallpaper";

const accessNotes = [
  "Live district data remains protected behind authentication",
  "Public demo data will be separated from production",
  "Embedded windows can host the live app and the sandbox demo",
  "Visitors can see the platform concept without accessing private tools",
];

function EmbedWindow({
  title,
  status,
  description,
}: {
  title: string;
  status: string;
  description: string;
}) {
  return (
    <article className="border border-zinc-500/35 bg-black/30 p-5 backdrop-blur-sm md:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg uppercase tracking-[0.14em] text-zinc-100">
            {title}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-cyan-200/70">
            {status}
          </p>
        </div>

        <MonitorPlay className="h-8 w-8 shrink-0 text-zinc-300" />
      </div>

      <div
        style={{
          height: "340px",
        }}
        className="flex items-center justify-center border border-zinc-700/70 bg-black/45"
      >
        <div className="max-w-sm px-6 text-center">
          <LockKeyhole className="mx-auto mb-5 h-10 w-10 text-zinc-300" />
          <p className="text-sm leading-7 text-zinc-400">{description}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-zinc-500">
        <ExternalLink className="h-4 w-4" />
        <span>Embedded live window placeholder</span>
      </div>
    </article>
  );
}

export default function DeepSCLoginPage() {
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
          <a href="/software/deep-site-control" className="hover:text-white">
            Deep Site Control
          </a>
          <span className="px-3">/</span>
          <span className="text-cyan-300/70">Access Portal</span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <LockKeyhole className="h-5 w-5" />
            <span>Protected Platform Portal</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Deep SC Access
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            This portal will host embedded access points for the real facilities
            platform and a public demo environment. The live system will stay
            protected behind login before any live data is exposed.
          </p>
        </div>

        <article className="mt-16 max-w-[1220px] border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-5">
            <MapPinned className="h-12 w-12 text-zinc-200" />
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
              Portal Windows
            </span>
          </div>

          <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
            Embedded Platform Access
          </h2>

          <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            The live platform and public demo can eventually appear directly
            inside this page as embedded windows. The protected window will show
            the app login/shell, while the public demo can use safe sample data,
            fake pins and a non-district test environment.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <EmbedWindow
              title="Live Platform"
              status="Login protected - coming soon"
              description="This window will eventually embed the live Deep Site Control login. Access beyond the login screen will require authorization."
            />

            <EmbedWindow
              title="Public Demo"
              status="Sandbox environment - coming soon"
              description="This window will eventually embed a sanitized demo with fake maps, sample assets and safe interactive features."
            />
          </div>
        </article>

        <article className="mt-8 max-w-[1220px] border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-5">
            <ShieldCheck className="h-12 w-12 text-zinc-200" />
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
              Access Rules
            </span>
          </div>

          <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
            Public Showcase, Private Data
          </h2>

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
            {accessNotes.map((point) => (
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
            href="/software/deep-site-control"
            className="skedd-primary-cta mt-8 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
          >
            <ArrowLeft className="skedd-primary-cta-arrow h-4 w-4" />
            <span>Back to Platform Page</span>
          </a>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}