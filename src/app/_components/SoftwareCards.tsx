import { ArrowRight, Gamepad2, Info, MonitorCog, Play } from "lucide-react";

const projectPanels = [
  {
    title: "Software",
    href: "/software",
    icon: MonitorCog,
    description:
      "Practical tools and platforms designed to streamline operations and solve real-world problems.",
    links: [
      { label: "Deep Site Control", href: "/software/deep-site-control" },
      { label: "Summer Scheduler", href: "/software/summer-scheduler" },
    ],
  },
  {
    title: "Games",
    href: "/games",
    icon: Gamepad2,
    description:
      "Immersive worlds and engaging experiences built with creativity and intention.",
    links: [{ label: "Valmore", href: "https://playvalmore.com" }],
  },
  {
    title: "Media",
    href: "/media",
    icon: Play,
    description: "Stories, streams and content from the Desk Council.",
    links: [{ label: "Desk Council Plays", href: "/media/desk-council-plays" }],
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
    description:
      "Skedd Systems is an independent studio focused on useful systems and original creative projects.",
    links: [
      { label: "Learn More", href: "/about" },
      { label: "itch.io Hub", href: "https://skeddsystems.itch.io/" },
    ],
  },
];

function ProjectPanel({ panel }: { panel: (typeof projectPanels)[0] }) {
  const Icon = panel.icon;

  return (
    <article className="min-h-[245px] border border-zinc-500/35 bg-black/25 p-7 backdrop-blur-sm transition hover:border-zinc-300/60 hover:bg-white/[0.04]">
      <a
        href={panel.href}
        className="skedd-primary-cta block border border-transparent p-1 text-zinc-300 hover:text-white"
      >
        <Icon className="mb-6 h-12 w-12" />

        <div className="mb-5 flex items-center gap-5">
          <h3 className="text-lg uppercase tracking-[0.14em] text-zinc-100">
            {panel.title}
          </h3>
          <span className="h-px w-10 bg-zinc-400" />
        </div>
      </a>

      <div style={{ height: "96px", marginBottom: "28px" }}>
        <p className="text-sm leading-6 text-zinc-400">{panel.description}</p>
      </div>

      <div className="border-t border-zinc-700/70 pt-4">
        {panel.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="skedd-primary-cta flex items-center justify-between py-1.5 text-sm text-zinc-300 hover:text-white"
          >
            <span>{link.label}</span>
            <ArrowRight className="skedd-primary-cta-arrow h-4 w-4" />
          </a>
        ))}
      </div>
    </article>
  );
}

export default function SoftwareCards() {
  return (
    <section
      id="software"
      style={{ marginTop: "0px" }}
      className="relative z-10 mx-auto grid max-w-[1280px] gap-5 px-4 pb-16 md:grid-cols-2 md:px-8 xl:grid-cols-4"
    >
      {projectPanels.map((panel) => (
        <ProjectPanel key={panel.title} panel={panel} />
      ))}
    </section>
  );
}