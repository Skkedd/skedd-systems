import {
  ArrowRight,
  Building2,
  Gamepad2,
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
    title: "Skedd Systems",
    email: "info@skeddsystems.com",
    label: "Company / Studio / General",
    description:
      "For Skedd Systems, business inquiries, software projects, studio questions and general messages.",
    icon: Building2,
  },
  {
    title: "Deep Site Control",
    email: "info@deepsitecontrol.com",
    label: "Facilities / SaaS / Demos",
    description:
      "For Deep Site Control product questions, facilities platform inquiries, demo requests and customer conversations.",
    icon: ShieldCheck,
  },
  {
    title: "Valmore",
    email: "info@playvalmore.com",
    label: "Games / Media / Feedback",
    description:
      "For Valmore, game-related questions, media, feedback and project-specific messages.",
    icon: Gamepad2,
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
            Reach the right inbox for Skedd Systems, Deep Site Control or
            Valmore without wandering through a tiny corporate maze.
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
            Three inboxes, one ecosystem
          </h2>

          <div className="mt-6 h-px w-40 bg-zinc-600/80" />

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            Use Skedd Systems for company, studio and general software
            messages. Use Deep Site Control for facilities platform questions,
            demos and SaaS conversations. Use Valmore for game-specific
            feedback, media and project messages.
          </p>
        </section>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.email}
                className="border border-zinc-500/35 bg-black/30 p-7 backdrop-blur-sm transition hover:border-cyan-200/50 hover:bg-white/[0.04]"
              >
                <Icon className="mb-6 h-12 w-12 text-zinc-200" />

                <div className="mb-5 inline-flex border border-cyan-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200/80">
                  {card.label}
                </div>

                <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
                  {card.title}
                </h2>

                <p className="mt-6 min-h-[120px] text-sm leading-7 text-zinc-400">
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
                  <Mail className="h-4 w-4" />
                  <span>Routes to the right project lane</span>
                </div>
              </article>
            );
          })}
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
            Pick the project, send the message
          </h2>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            If the message is about the company, software work or something
            broad, send it to Skedd Systems. If it is about facilities maps,
            demos or product access, send it to Deep Site Control. If it is
            about the game, send it to Valmore.
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