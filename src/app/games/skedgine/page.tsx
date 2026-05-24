"use client";

import {
  Cpu,
  Maximize2,
  MonitorPlay,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import SiteWallpaper from "../../_components/SiteWallpaper";

import systems2Image from "@/assets/skedgine/skedgine-systems2.png";
import systemsInActionImage from "@/assets/skedgine/skedgine-systems-in-action.png";
import enemiesImage from "@/assets/skedgine/skedgine-enemies.png";
import warpsImage from "@/assets/skedgine/skedgine-warps.png";
import itemsImage from "@/assets/skedgine/skedgine-items.png";
import routesImage from "@/assets/skedgine/skedgine-routs.png";
import presentsImage from "@/assets/skedgine/skedgine-presents.png";
import partiesImage from "@/assets/skedgine/skedgine-parties.png";
import npcsImage from "@/assets/skedgine/skedgine-npcs.png";
import diagnosticsImage from "@/assets/skedgine/skedgine-diagnostics.png";
import cheatMenuImage from "@/assets/skedgine/skedgine-cheat-menu.png";
import itemCatalogImage from "@/assets/skedgine/skedgine-item-catalog.png";
import jsonImage from "@/assets/skedgine/skedgine-json.png";
import eventTabsImage from "@/assets/skedgine/skedgine-event-tabs.png";

type GalleryItem = {
  title: string;
  image: StaticImageData;
  description: string;
};

const skedginePreviewEmbedUrl = "https://www.youtube.com/embed/-oOqnh3yct8";

const galleryItems: GalleryItem[] = [
  {
    title: "Systems at Work",
    image: systems2Image,
    description:
      "Editor overlays, routes, warps, actors and diagnostic information running together inside the same world view.",
  },
  {
    title: "Enemy Framework",
    image: enemiesImage,
    description:
      "Enemy placement, spawn-zone setup and early hostile actor behavior exposed through the editor layer.",
  },
  {
    title: "Warp Logic",
    image: warpsImage,
    description:
      "Warp points, landing markers and linked return behavior used to connect maps and world spaces.",
  },
  {
    title: "Item Tools",
    image: itemsImage,
    description:
      "Item creation tools and preview panels used to build reusable equipment, objects and rewards.",
  },
  {
    title: "Route Editing",
    image: routesImage,
    description:
      "Route points, corridors and path tools for future NPC schedules, movement logic and world simulation.",
  },
  {
    title: "World Objects",
    image: presentsImage,
    description:
      "Placeable object tools for presents, pickups and interactive world items inside the editor.",
  },
  {
    title: "Party Framework",
    image: partiesImage,
    description:
      "Playable actor tooling for roster, definitions, timeline planning and future battle previews.",
  },
  {
    title: "NPC Tools",
    image: npcsImage,
    description:
      "NPC placement, preview and context tooling for static and zone-based actor workflows.",
  },
  {
    title: "Diagnostics",
    image: diagnosticsImage,
    description:
      "Runtime health panels used to watch enemy, warp and NPC systems while the world is running.",
  },
  {
    title: "Dev Utilities",
    image: cheatMenuImage,
    description:
      "Developer utility menus for opening tools, testing systems and controlling editor visibility.",
  },
  {
    title: "Catalog Systems",
    image: itemCatalogImage,
    description:
      "A broader item catalog view for organizing definitions, categories, stats and future item rules.",
  },
  {
    title: "Data Driven Core",
    image: jsonImage,
    description:
      "World data, warps, spawns and content structure stored in reusable data files instead of hardcoded one-offs.",
  },
  {
    title: "Event Tabs",
    image: eventTabsImage,
    description:
      "Early event-facing tabs for dialogue, cutscenes, audio, story events and ability systems.",
  },
  {
    title: "Systems in Action",
    image: systemsInActionImage,
    description:
      "A busy engine view showing multiple editor systems layered over the running game world.",
  },
];

const skedgineSections = [
  {
    title: "Core Systems",
    status: "Engine foundation",
    icon: Cpu,
    description:
      "Skedgine is built around reusable world, actor, route, timeline and content systems. These systems start inside Valmore, then mature into shared infrastructure for future projects.",
    points: [
      "World and map systems",
      "Actor and route infrastructure",
      "Data-driven content",
      "Reusable runtime logic",
    ],
  },
  {
    title: "Editor & Creation Tools",
    status: "No-code direction",
    icon: Workflow,
    description:
      "The long-term goal is to build full games inside the engine. Maps, actors, routes, dialogue, flow and presentation should all become authorable through editor tools instead of one-off coding.",
    points: [
      "Map-first editor workflows",
      "Actor and placement tools",
      "Shared tab framework",
      "Future full-game authoring",
    ],
  },
  {
    title: "Game Flow & Presentation",
    status: "Full lifecycle ownership",
    icon: MonitorPlay,
    description:
      "The engine should own the full game lifecycle: startup screens, title flow, menus, transitions, endings, credits and return-to-title behavior.",
    points: [
      "Startup and title flow",
      "Menu and transition logic",
      "Ending and credits authoring",
      "Presentation systems",
    ],
  },
  {
    title: "Diagnostics & Review",
    status: "Engine health suite",
    icon: ShieldCheck,
    description:
      "Skedgine needs a full diagnostic package for catching broken references, missing assets, bad warps, route issues, cutscene problems, audio hooks and other invisible problems before they spread.",
    points: [
      "Content validation",
      "Warp and route checks",
      "Actor diagnostics",
      "Cutscene and audio review",
    ],
  },
  {
    title: "Simulation Window",
    status: "Future sandbox direction",
    icon: Route,
    description:
      "A windowed environment should eventually let systems be tested from inside the site or engine: route previews, actor behavior, dialogue staging, battle checks, game flow and other live sandbox tools.",
    points: [
      "Interactive previews",
      "Route and actor simulation",
      "Battle and flow testing",
      "Feature demo windows",
    ],
  },
];

export default function SkedginePage() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

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
          <a href="/games" className="hover:text-white">
            Games
          </a>
          <span className="px-3">/</span>
          <span className="text-cyan-300/70">Skedgine</span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <Cpu className="h-5 w-5" />
            <span>Skedd Systems Games / Skedgine</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Skedgine
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-300">
            A proprietary game creation engine growing through Valmore. It starts RPG-first, stays focused on the game until Valmore ships and eventually becomes reusable infrastructure for future Skedd projects.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1220px",
            marginTop: "64px",
          }}
          className="border border-zinc-500/35 bg-black/30 p-5 backdrop-blur-sm md:p-6"
        >
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-cyan-300/70">
            <MonitorPlay className="h-5 w-5" />
            <span>Visual Engine Notes</span>
          </div>

          <div className="mb-8 grid gap-5 border border-cyan-300/30 bg-black/35 p-4 md:grid-cols-[minmax(0,560px)_minmax(0,1fr)]">
            <div className="relative aspect-video overflow-hidden border border-zinc-600/60 bg-black/50">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={skedginePreviewEmbedUrl}
                title="Skedgine In Motion"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-cyan-300/70">
                <MonitorPlay className="h-4 w-4" />
                <span>Featured Preview Video</span>
              </div>

              <h2 className="text-2xl uppercase tracking-[0.14em] text-zinc-100">
                Skedgine In Motion
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                Early runtime footage showing engine systems, debug tooling, world interaction and evolving editor infrastructure.
              </p>
            </div>
          </div>

          <div
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              paddingBottom: "14px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                gridTemplateRows: "repeat(3, 190px)",
                gridAutoColumns: "190px",
                gap: "18px",
                width: "max-content",
              }}
            >
              {galleryItems.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveImage(item)}
                  className="group flex h-[190px] flex-col text-left"
                >
                  <div
                    style={{
                      height: "92px",
                    }}
                    className="relative overflow-hidden border border-zinc-600/50 bg-black/40"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      className="transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                    />

                    <div className="absolute right-2 top-2 border border-zinc-500/60 bg-black/70 p-1.5 text-zinc-300">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <h2 className="mt-3 text-[11px] uppercase tracking-[0.18em] text-zinc-100">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-[10px] leading-4 text-zinc-500">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {skedgineSections.map((section, index) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                style={{
                  maxWidth: "1220px",
                  width: "100%",
                }}
                className="border border-zinc-500/35 bg-black/30 p-6 backdrop-blur-sm transition hover:border-cyan-200/50 hover:bg-white/[0.04] md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,850px)] lg:items-start">
                  <div>
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
                  </div>

                  <div style={{ maxWidth: "850px" }}>
                    <p className="text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                      {section.description}
                    </p>

                    <div className="mt-8 grid gap-3 border-t border-zinc-700/70 pt-6 sm:grid-cols-2">
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {activeImage && (
        <div
          style={{ zIndex: 999999 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close expanded image"
            onClick={() => setActiveImage(null)}
            className="absolute inset-0"
          />

          <div className="relative z-20 mx-auto flex h-screen max-w-[1400px] flex-col justify-center px-6 py-10">
            <div className="mb-5 flex items-start justify-between gap-6">
              <div>
                <h2 className="text-xl uppercase tracking-[0.18em] text-zinc-100">
                  {activeImage.title}
                </h2>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-400">
                  {activeImage.description}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close expanded image"
                onClick={() => setActiveImage(null)}
                className="relative z-30 flex h-14 w-14 shrink-0 items-center justify-center border border-zinc-600/70 bg-black/70 text-zinc-300 transition hover:border-cyan-200/70 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div
              style={{
                width: "80vw",
                maxWidth: "1100px",
                maxHeight: "70vh",
                margin: "0 auto",
                overflow: "hidden",
              }}
              className="border border-zinc-600/60 bg-black/70"
            >
              <Image
                src={activeImage.image}
                alt={activeImage.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </main>
  );
}