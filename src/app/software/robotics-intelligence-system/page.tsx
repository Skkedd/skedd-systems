import {
  ArrowLeft,
  Bot,
  BrainCircuit,
  Cpu,
  Gauge,
  Hand,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import SiteWallpaper from "../../_components/SiteWallpaper";

const roboticsSections = [
  {
    title: "Software-First Robotics",
    status: "Exploratory lane",
    icon: Bot,
    description:
      "This lane focuses on the software side of robotics: behavior logic, control surfaces, automation patterns and ways to make robotic systems feel more useful, understandable and interactive.",
    points: [
      "Behavior-driven logic",
      "Software control systems",
      "Interaction design",
      "Automation workflows",
    ],
  },
  {
    title: "Council Experiments",
    status: "Creative testing ground",
    icon: Hand,
    description:
      "The Desk Council gives Skedd a playful test environment for robotics ideas, personality-driven interactions and software behavior experiments without pretending every prototype is a finished product.",
    points: [
      "Personality behaviors",
      "Interactive routines",
      "Small demo concepts",
      "Playful system testing",
    ],
  },
  {
    title: "Intelligent Systems",
    status: "Future capability",
    icon: BrainCircuit,
    description:
      "Future work can explore smart responses, state-aware behavior, simple decision systems and software that reacts to context without needing to become overcomplicated artificial intelligence theater.",
    points: [
      "State-aware behavior",
      "Context responses",
      "Decision logic",
      "Practical intelligence",
    ],
  },
  {
    title: "Reusable Control Logic",
    status: "Shared software direction",
    icon: Cpu,
    description:
      "The long-term direction is reusable control logic that can support robotics, app demos, simulation windows, interactive media and other Skedd systems that need behavior instead of static screens.",
    points: [
      "Shared behavior patterns",
      "Reusable interaction logic",
      "Demo-ready systems",
      "Cross-project software",
    ],
  },
];

const safetyNotes = [
  "This is software-side exploration, not hardware manufacturing",
  "Public examples should use safe demos, simulations or small controlled behaviors",
  "The focus is useful interaction and automation logic",
  "Future demos can connect robotics ideas to Council media, software showcases and Skedd systems",
];

export default function RoboticsIntelligenceSystemPage() {
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
          <span className="text-cyan-300/70">
            Robotics & Intelligent Systems
          </span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <Bot className="h-5 w-5" />
            <span>Skedd Systems Software / 05</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Robotics & Intelligent Systems
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            A software-side exploration lane for robotics workflows,
            automation logic, interactive behavior and practical intelligent
            systems.
          </p>
        </div>

        <article className="mt-16 max-w-[1220px] border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-5">
            <Layers3 className="h-12 w-12 text-zinc-200" />
            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">
              Direction
            </span>
          </div>

          <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
            Behavior Before Hardware
          </h2>

          <p className="mt-8 max-w-[850px] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            The goal is not to become a hardware manufacturer. This lane is
            about the software that makes systems act, react, automate and
            communicate in useful ways. Robotics becomes one possible outlet for
            that behavior work.
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
            {safetyNotes.map((point) => (
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
          {roboticsSections.map((section, index) => {
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
            <Gauge className="h-5 w-5" />
            <span>Future demo direction</span>
          </div>

          <p style={{ maxWidth: "950px" }}>
            Future public demos could show simple behavior routines, mock
            robotics controls, Council-style interaction tests or simulated
            automation workflows without exposing unsafe hardware controls or
            private systems.
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