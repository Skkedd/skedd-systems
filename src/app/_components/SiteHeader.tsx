"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import skeddLogo from "@/assets/homepage/SkeddSystems.png";

const navRows = [
  [
    { label: "Home", href: "/" },
    { label: "Software", href: "/software" },
    { label: "Games", href: "/games" },
  ],
  [
    { label: "Media", href: "/media" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
];

const desktopNavItems = navRows.flat();

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-zinc-700/60 bg-black/15 backdrop-blur-sm">
      <nav className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-4 md:h-[82px] md:px-8">
        <a
          href="/"
          className="skedd-primary-cta flex items-center gap-4 border border-transparent px-2 py-1 md:gap-5"
        >
          <Image
            src={skeddLogo}
            alt="Skedd Systems"
            width={64}
            height={64}
            className="h-10 w-10 object-contain md:h-10 md:w-10"
            priority
          />

          <span className="text-lg font-bold uppercase tracking-[0.18em] md:text-2xl md:tracking-[0.22em]">
            Skedd Systems
          </span>
        </a>

        <div className="skedd-desktop-nav items-center gap-12 text-sm uppercase tracking-[0.16em] text-zinc-300">
          {desktopNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="skedd-primary-cta border border-transparent px-2 py-2 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
          className="skedd-primary-cta skedd-compact-nav-button h-10 w-10 items-center justify-center border border-zinc-700/70 text-zinc-300 transition hover:border-zinc-400 hover:text-white"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-zinc-800 bg-[#080a0c]/95 px-4 py-5 backdrop-blur-md md:px-8">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-5 text-sm uppercase tracking-[0.18em] text-zinc-200">
            {navRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap items-center justify-start">
                {row.map((item, index) => (
                  <div key={item.label} className="flex items-center">
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="skedd-primary-cta inline-flex border border-transparent border-b-zinc-300 px-2 py-1 transition hover:border-cyan-200 hover:text-white"
                    >
                      {item.label}
                    </a>

                    {index < row.length - 1 && (
                      <span className="px-4 text-zinc-500">|</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}