import {
  ArrowRight,
  Database,
  Gamepad2,
  GitBranch,
  Info,
  Mail,
  MonitorCog,
  Play,
  Server,
  Shield,
  Wrench,
} from "lucide-react";

const navItems = ["Home", "Software", "Games", "Media", "About", "Contact"];

const projectPanels = [
  {
    title: "Software",
    icon: MonitorCog,
    description:
      "Practical tools and platforms designed to streamline operations and solve real-world problems.",
    links: ["Facilities Platform", "Summer Scheduler"],
  },
  {
    title: "Games",
    icon: Gamepad2,
    description:
      "Immersive worlds and engaging experiences built with creativity and intention.",
    links: ["Valmore"],
  },
  {
    title: "Media",
    icon: Play,
    description: "Stories, streams and content from the Desk Council.",
    links: ["Desk Council Plays"],
  },
  {
    title: "About",
    icon: Info,
    description:
      "Skedd Systems is an independent studio focused on useful systems and original creative projects.",
    links: ["Learn More"],
  },
];

function LogoMark() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center border border-zinc-500/70 bg-zinc-100/5 text-xl font-black text-zinc-100">
      <span>S</span>
      <span className="absolute -left-1 top-1/2 h-px w-2 bg-zinc-400" />
      <span className="absolute -right-1 top-1/2 h-px w-2 bg-zinc-400" />
      <span className="absolute left-1/2 -top-1 h-2 w-px bg-zinc-400" />
      <span className="absolute bottom-[-4px] left-1/2 h-2 w-px bg-zinc-400" />
    </div>
  );
}

function BlueprintWorld() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#080a0c]" />

      <div className="absolute inset-0 opacity-[0.32] bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:88px_88px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_32%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.055),transparent_35%)]" />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/75 to-transparent" />
    </div>
  );
}

function FacilityBlueprint() {
  return (
    <svg
      className="absolute left-[30%] top-[96px] h-[250px] w-[430px] opacity-[0.42]"
      viewBox="0 0 430 250"
      fill="none"
    >
      <text x="145" y="18" fill="rgba(255,255,255,0.62)" fontSize="10" letterSpacing="2">
        FACILITIES ARCHITECTURE
      </text>

      <rect x="46" y="48" width="312" height="178" stroke="rgba(255,255,255,0.5)" />
      <rect x="68" y="72" width="86" height="62" stroke="rgba(255,255,255,0.38)" />
      <rect x="154" y="72" width="98" height="62" stroke="rgba(255,255,255,0.38)" />
      <rect x="252" y="72" width="84" height="104" stroke="rgba(255,255,255,0.38)" />
      <rect x="68" y="134" width="184" height="72" stroke="rgba(255,255,255,0.32)" />
      <rect x="154" y="134" width="98" height="72" stroke="rgba(255,255,255,0.32)" />
      <path d="M46 48H24M358 48H390M46 226H20M358 226H392" stroke="rgba(255,255,255,0.32)" />
      <path d="M46 38V30H358V38M46 236V244H358V236" stroke="rgba(255,255,255,0.22)" />
      <path d="M111 48V30M216 48V30M310 48V30" stroke="rgba(255,255,255,0.22)" />
      <path d="M96 103H126M184 103H220M276 128H310M112 170H142M184 170H222" stroke="rgba(255,255,255,0.3)" strokeDasharray="4 6" />

      <circle cx="282" cy="128" r="10" stroke="rgba(255,255,255,0.65)" />
      <path d="M282 136C282 136 275 129 275 123C275 119 278 116 282 116C286 116 289 119 289 123C289 129 282 136 282 136Z" fill="rgba(255,255,255,0.65)" />
    </svg>
  );
}

function NesSchematic() {
  return (
    <svg
      className="absolute left-[48%] top-[105px] h-[430px] w-[560px] -translate-x-1/2 opacity-[0.72]"
      viewBox="0 0 560 430"
      fill="none"
    >
      <g opacity="0.92">
        <path d="M232 72L438 136V270L232 206V72Z" stroke="rgba(255,255,255,0.72)" />
        <path d="M232 72L114 150V284L232 206" stroke="rgba(255,255,255,0.58)" />
        <path d="M114 150L320 214L438 136" stroke="rgba(255,255,255,0.5)" />
        <path d="M114 284L320 348L438 270" stroke="rgba(255,255,255,0.5)" />
        <path d="M320 214V348" stroke="rgba(255,255,255,0.46)" />

        <path d="M158 172L318 222L394 172" stroke="rgba(255,255,255,0.34)" />
        <path d="M174 190L320 236L382 196" stroke="rgba(255,255,255,0.24)" />
        <path d="M188 208L320 250L370 218" stroke="rgba(255,255,255,0.24)" />

        <rect x="260" y="126" width="96" height="44" transform="rotate(17 260 126)" stroke="rgba(255,255,255,0.28)" />
        <rect x="292" y="145" width="34" height="22" transform="rotate(17 292 145)" stroke="rgba(255,255,255,0.3)" />
        <path d="M262 188L336 211L386 177" stroke="rgba(255,255,255,0.34)" />
        <path d="M288 104L348 122M306 96L366 114M324 90L384 108" stroke="rgba(255,255,255,0.2)" />

        <text x="156" y="236" fill="rgba(255,255,255,0.74)" fontSize="12" letterSpacing="1" transform="rotate(17 156 236)">
          Nintendo
        </text>
        <text x="158" y="250" fill="rgba(255,255,255,0.38)" fontSize="7" letterSpacing="1" transform="rotate(17 158 250)">
          ENTERTAINMENT SYSTEM
        </text>

        <rect x="154" y="266" width="32" height="18" transform="rotate(17 154 266)" stroke="rgba(255,255,255,0.3)" />
        <rect x="196" y="280" width="32" height="18" transform="rotate(17 196 280)" stroke="rgba(255,255,255,0.3)" />
      </g>

      <g opacity="0.76">
        <path d="M150 308L294 354L368 310L224 264L150 308Z" stroke="rgba(255,255,255,0.62)" />
        <path d="M150 308V348L294 394V354" stroke="rgba(255,255,255,0.42)" />
        <path d="M294 394L368 350V310" stroke="rgba(255,255,255,0.42)" />
        <path d="M187 318V356M168 337L206 337" stroke="rgba(255,255,255,0.52)" strokeWidth="2" />
        <circle cx="292" cy="340" r="13" stroke="rgba(255,255,255,0.45)" />
        <circle cx="330" cy="328" r="13" stroke="rgba(255,255,255,0.45)" />
        <rect x="228" y="333" width="34" height="10" rx="3" stroke="rgba(255,255,255,0.36)" />
      </g>

      <path d="M66 284H132V250H196" stroke="rgba(255,255,255,0.7)" />
      <path d="M88 330H152V286H216" stroke="rgba(255,255,255,0.42)" />
      <path d="M382 252H458V208H524" stroke="rgba(255,255,255,0.52)" />
      <path d="M252 244L252 286H210" stroke="rgba(255,255,255,0.56)" />
      <path d="M318 198V242H384" stroke="rgba(255,255,255,0.5)" />

      {[66, 132, 196, 88, 152, 216, 458, 524, 252, 210, 318, 384].map((value, index) => {
        const coords = [
          [66, 284],
          [132, 250],
          [196, 250],
          [88, 330],
          [152, 286],
          [216, 286],
          [458, 208],
          [524, 208],
          [252, 244],
          [210, 286],
          [318, 198],
          [384, 242],
        ][index];

        return (
          <circle
            key={`${value}-${index}`}
            cx={coords[0]}
            cy={coords[1]}
            r={index % 3 === 0 ? 4 : 3}
            fill="rgba(255,255,255,0.92)"
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
        );
      })}
    </svg>
  );
}

function CodeSnapshot() {
  return (
    <div className="absolute left-[29%] top-[360px] w-[330px] rounded border border-zinc-500/45 bg-black/45 p-3 shadow-2xl backdrop-blur-sm">
      <div className="mb-2 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
        Code Snapshot
      </div>

      <div className="relative h-[126px] overflow-hidden font-mono text-[10px] leading-5 text-zinc-300">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-7 bg-gradient-to-b from-black/90 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-black/90 to-transparent" />

        <pre>{`01  // Facilities: Get assets within map bounds
02  export function getAssetsInBounds(bounds) {
03    return supabase
04      .from('assets')
05      .select('*')
06      .within('geom', bounds)
07      .order('type');
08  }
09
10  // ownerId -> geometry ownership
11  // Freeze spell: pause movement, keep life`}</pre>
      </div>
    </div>
  );
}

function RightRail() {
  return (
    <aside className="absolute right-12 top-[105px] hidden w-[250px] xl:block">
      <div className="mb-20">
        <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-zinc-300">
          System Overview
        </h3>
        <ul className="space-y-3 text-xs uppercase tracking-[0.12em] text-zinc-400">
          {["Map Layers", "Asset Management", "Permissions", "Real-Time Sync", "Exports"].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-zinc-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-10 rounded border border-zinc-500/35 bg-black/25 p-4">
        <h3 className="mb-4 text-center text-xs uppercase tracking-[0.18em] text-zinc-400">
          Data Flow
        </h3>
        <div className="flex items-center justify-between text-zinc-400">
          <MonitorCog className="h-9 w-9 rounded border border-zinc-500/40 p-2" />
          <ArrowRight className="h-4 w-4" />
          <Shield className="h-9 w-9 rounded border border-zinc-500/40 p-2" />
          <ArrowRight className="h-4 w-4" />
          <Database className="h-9 w-9 rounded border border-zinc-500/40 p-2" />
        </div>
        <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.12em] text-zinc-500">
          <span>Client</span>
          <span>API</span>
          <span>Database</span>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs uppercase tracking-[0.18em] text-zinc-300">
          System Status
        </h3>
        <div className="rounded border border-zinc-500/35 bg-black/25 p-4 text-xs uppercase tracking-[0.12em]">
          {[
            ["Services", "Online"],
            ["Database", "Healthy"],
            ["Storage", "Secure"],
            ["Backups", "Active"],
          ].map(([label, value]) => (
            <div key={label} className="mb-3 flex items-center justify-between last:mb-0">
              <span className="text-zinc-500">{label}</span>
              <span className="text-zinc-300">{value}</span>
              <span className="h-2 w-2 rounded-full bg-zinc-300 shadow-[0_0_10px_rgba(255,255,255,0.65)]" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function ProjectPanel({ panel }: { panel: (typeof projectPanels)[0] }) {
  const Icon = panel.icon;

  return (
    <article className="min-h-[245px] border border-zinc-500/35 bg-black/25 p-7 backdrop-blur-sm transition hover:border-zinc-300/60 hover:bg-white/[0.04]">
      <Icon className="mb-6 h-12 w-12 text-zinc-300" />

      <div className="mb-5 flex items-center gap-5">
        <h3 className="text-lg uppercase tracking-[0.14em] text-zinc-100">{panel.title}</h3>
        <span className="h-px w-10 bg-zinc-400" />
      </div>

      <p className="mb-7 text-sm leading-6 text-zinc-400">{panel.description}</p>

      <div className="border-t border-zinc-700/70 pt-4">
        {panel.links.map((link) => (
          <a
            key={link}
            href={link === "Valmore" ? "https://playvalmore.com" : "#"}
            className="flex items-center justify-between py-1.5 text-sm text-zinc-300 hover:text-white"
          >
            <span>{link}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        ))}
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <BlueprintWorld />

      <header className="relative z-10 border-b border-zinc-700/60 bg-black/15 backdrop-blur-sm">
        <nav className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-8">
          <a href="#" className="flex items-center gap-5">
            <LogoMark />
            <span className="text-2xl font-bold uppercase tracking-[0.22em]">
              Skedd Systems
            </span>
          </a>

          <div className="hidden items-center gap-12 text-sm uppercase tracking-[0.16em] text-zinc-300 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className={item === "Home" ? "border-b border-zinc-200 pb-2 text-white" : "pb-2 hover:text-white"}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="relative z-10 mx-auto min-h-[570px] max-w-[1500px] px-8 pt-16">
        <div className="relative z-20 max-w-[390px] pt-8">
          <h1 className="text-[68px] font-black uppercase leading-[0.86] tracking-[-0.08em] text-zinc-100 md:text-[92px]">
            Skedd
            <span className="block text-zinc-500">Systems</span>
          </h1>

          <div className="mt-7 h-px w-48 bg-zinc-500" />

          <p className="mt-7 text-2xl leading-8 tracking-[0.04em] text-zinc-200">
            Practical Systems. Weird Worlds.
          </p>

          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
            Building software, games and digital systems that solve real problems
            and create new worlds.
          </p>

          <a
            href="#software"
            className="mt-8 inline-flex items-center gap-6 border border-zinc-500/70 bg-black/25 px-6 py-4 text-sm uppercase tracking-[0.14em] text-zinc-100 transition hover:border-zinc-200 hover:bg-white/[0.06]"
          >
            Explore Our Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <FacilityBlueprint />
        <NesSchematic />
        <CodeSnapshot />
        <RightRail />
      </section>

      <section id="software" className="relative z-10 mx-auto grid max-w-[1280px] gap-5 px-8 pb-16 md:grid-cols-2 xl:grid-cols-4">
        {projectPanels.map((panel) => (
          <ProjectPanel key={panel.title} panel={panel} />
        ))}
      </section>

      <footer className="relative z-10 border-t border-zinc-700/60 bg-black/20">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-5 text-xs text-zinc-500">
          <div className="flex items-center gap-6">
            <LogoMark />
            <span>© 2025 Skedd Systems. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-500">
            <GitBranch className="h-5 w-5" />
            <Mail className="h-5 w-5" />
            <Server className="h-5 w-5" />
          </div>
        </div>
      </footer>
    </main>
  );
}