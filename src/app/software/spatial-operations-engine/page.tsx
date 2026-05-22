"use client";

import {
  ArrowLeft,
  Cpu,
  Layers3,
  Maximize2,
  MonitorPlay,
  PencilRuler,
  Route,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import SiteWallpaper from "../../_components/SiteWallpaper";

/*
  Drop future images here:

  import overviewLayerImage from "@/assets/spatial-operations/overview-layer.png";

  Then add to galleryItems:
  {
    title: "Overview Layer",
    image: overviewLayerImage,
    description: "Short public-safe caption.",
  },
*/

type GalleryItem = {
  title: string;
  image: StaticImageData;
  description: string;
};

const galleryItems: GalleryItem[] = [];

const systemSections = [
  {
    title: "In-App Authoring",
    status: "Core direction",
    icon: PencilRuler,
    description:
      "The Spatial Operations Engine is the editor layer behind the facilities platform. The goal is to build and update operational environments from inside the app instead of relying on one-off external diagrams.",
    points: [
      "Layer creation and editing",
      "Map and image-based workspaces",
      "Asset-owned geometry",
      "Field-ready spatial context",
    ],
  },
  {
    title: "Layered Environments",
    status: "Platform foundation",
    icon: Layers3,
    description:
      "Sites, buildings, floor plans, utility views and deep-dive image layers can become connected spaces. The system treats navigation, assets, geometry and context as part of one expandable spatial model.",
    points: [
      "Campus-level navigation",
      "Building and floor-plan layers",
      "Deep-dive equipment views",
      "Reusable layer structure",
    ],
  },
  {
    title: "Operational Geometry",
    status: "Editor system",
    icon: Route,
    description:
      "Geometry is not just decoration. Boundaries, routes, outlines, asset-linked shapes and future operational zones can describe how the place works, where things are and what field staff need to understand.",
    points: [
      "Boundaries and outlines",
      "Asset-linked shapes",
      "Routes and coverage thinking",
      "Future zone workflows",
    ],
  },
  {
    title: "Reusable Engine Direction",
    status: "Long-term infrastructure",
    icon: Cpu,
    description:
      "The engine starts inside the facilities platform, but the direction is bigger than one app. A reusable spatial operations backbone can eventually support other sites, workflows and operational systems.",
    points: [
      "Project-grown engine work",
      "Reusable site-building logic",
      "Expandable workflow modules",
      "Cross-system infrastructure",
    ],
  },
];

export default function SpatialOperationsEnginePage() {
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
          <a href="/software" className="hover:text-white">
            Software
          </a>
          <span className="px-3">/</span>
          <span className="text-cyan-300/70">
            Spatial Operations Engine
          </span>
        </div>

        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-cyan-300/70">
            <PencilRuler className="h-5 w-5" />
            <span>Skedd Systems Software / 02</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-zinc-100 md:text-7xl">
            Spatial Operations Engine
          </h1>

          <div className="mt-6 h-px w-48 bg-zinc-500/70" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            The authoring engine behind the facilities platform, built to turn
            maps, images, assets, geometry and operational knowledge into a
            connected working environment.
          </p>
        </div>

        <article
          style={{
            maxWidth: "1220px",
            marginTop: "64px",
          }}
          className="border border-zinc-500/35 bg-black/30 p-5 backdrop-blur-sm md:p-6"
        >
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-cyan-300/70">
            <MonitorPlay className="h-5 w-5" />
            <span>Visual System Notes</span>
          </div>

          {galleryItems.length > 0 ? (
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
                  gridTemplateRows: "repeat(2, 190px)",
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
          ) : (
            <div className="border border-zinc-700/70 bg-black/40 p-6 text-sm leading-7 text-zinc-400">
              Screenshots, editor views, layer examples and demo clips can be
              added here later using the same two-row horizontal media shelf as
              the Skedgine page.
            </div>
          )}
        </article>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {systemSections.map((section, index) => {
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
          style={{
            maxWidth: "1220px",
            marginTop: "48px",
          }}
          className="border border-zinc-500/25 bg-black/20 p-6 text-sm leading-7 text-zinc-400 backdrop-blur-sm md:p-8"
        >
          <div className="mb-4 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-cyan-300/70">
            <ShieldCheck className="h-5 w-5" />
            <span>Public-safe showcase direction</span>
          </div>

          <p style={{ maxWidth: "950px" }}>
            Future public examples should use safe mock environments, sample
            assets and sanitized media. The goal is to show how the spatial
            engine works without exposing real district data, private maps or
            internal maintenance records.
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