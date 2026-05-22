import {
  ArrowRight,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import SiteWallpaper from "../_components/SiteWallpaper";

const contactCards = [
  {
    title: "General Contact",
    email: "info@skeddsystems.com",
    label: "Studio / Software / General",
    description:
      "For Skedd Systems, software projects, studio questions, business inquiries and general messages.",
  },
  {
    title: "Valmore Contact",
    email: "info@playvalmore.com",
    label: "Games / Valmore / Media",
    description:
      "For Valmore, game-related questions, media, feedback and project-specific messages.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 pb-20 pt-16 md:px-8 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <MessageSquare className="h-5 w-5" />
            <span>Contact Skedd Systems</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Open Channel
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Reach the right inbox for Skedd Systems, software work, Valmore or
            general project questions without creating five separate contact
            portals purely to annoy everyone.
          </p>
        </div>

        <section
          style={{ marginTop: "64px", maxWidth: "1220px" }}
          className="border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
            <Sparkles className="h-5 w-5" />
            <span>Choose the closest lane</span>
          </div>

          <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
            Two inboxes, no maze
          </h2>

          <div className="mt-6 h-px w-40 bg-zinc-600/80" />

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            Use the general Skedd address for studio, software and business
            questions. Use the Valmore address for game-specific messages,
            media, feedback or anything tied directly to that project.
          </p>
        </section>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {contactCards.map((card) => (
            <article
              key={card.email}
              className="border border-zinc-500/35 bg-black/30 p-7 backdrop-blur-sm transition hover:border-cyan-200/50 hover:bg-white/[0.04]"
            >
              <Mail className="mb-6 h-12 w-12 text-zinc-200" />

              <div className="mb-5 inline-flex border border-cyan-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200/80">
                {card.label}
              </div>

              <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
                {card.title}
              </h2>

              <p className="mt-6 min-h-[96px] text-sm leading-7 text-zinc-400">
                {card.description}
              </p>

              <a
                href={`mailto:${card.email}`}
                className="skedd-primary-cta group mt-8 flex items-center justify-between border-t border-zinc-700/70 pt-5 text-sm text-zinc-300 transition hover:text-white"
              >
                <span>{card.email}</span>
                <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-cyan-200/60">
                <ShieldCheck className="h-4 w-4" />
                <span>Routes to one managed inbox</span>
              </div>
            </article>
          ))}
        </div>

        <section
          style={{ marginTop: "72px", maxWidth: "1220px" }}
          className="border border-cyan-300/25 bg-cyan-300/[0.04] p-6 backdrop-blur-sm md:p-8"
        >
          <div className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
            <Mail className="h-5 w-5" />
            <span>Simple contact rule</span>
          </div>

          <h2 className="max-w-4xl text-3xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
            If it is not Valmore-specific, send it to Skedd
          </h2>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            The Skedd inbox is the main route for software, systems, studio work
            and general questions. The Valmore inbox keeps game-specific
            messages clean so that feedback, media and project communication do
            not get buried under everything else.
          </p>

          <a
            href="mailto:info@skeddsystems.com"
            className="skedd-primary-cta mt-8 inline-flex items-center gap-3 border border-zinc-600/70 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
          >
            <span>Send to Skedd Systems</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}