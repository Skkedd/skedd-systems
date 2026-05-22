import {
  ArrowLeft,
  ClipboardList,
  Code2,
  FileText,
  PencilLine,
  Sparkles,
  Wrench,
} from "lucide-react";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import SiteWallpaper from "../../_components/SiteWallpaper";

const sections = [
  {
    title: "Build Notes",
    status: "Planned",
    icon: ClipboardList,
    description:
      "Readable updates about what changed, what was fixed and what is coming next across Skedd software, games and tools.",
    points: ["Progress summaries", "Feature changes", "Polish notes", "Known issues"],
  },
  {
    title: "Design Notes",
    status: "Ongoing lane",
    icon: PencilLine,
    description:
      "Short thoughts about how systems are shaped, why certain workflows matter and what design truths are being locked in.",
    points: ["System thinking", "UX direction", "Project decisions", "Design rules"],
  },
  {
    title: "Technical Notes",
    status: "Selective",
    icon: Code2,
    description:
      "Useful technical writeups without turning the site into a giant engineering diary. Enough detail to explain the work without drowning the page.",
    points: ["Architecture notes", "Tooling lessons", "Debug writeups", "Reusable patterns"],
  },
];

export default function StudioNotesPage() {
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
          <span className="text-cyan-300/70">Studio Notes</span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <FileText className="h-5 w-5" />
            <span>Skedd Systems Media / 04</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Studio Notes
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Behind-the-scenes notes from software builds, game development, systems design and creative work in progress.
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