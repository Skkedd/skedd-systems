import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative z-20 max-w-[390px] pt-4 md:pt-8">
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
        className="skedd-primary-cta mt-8 inline-flex items-center gap-6 border border-zinc-500/70 bg-black/25 px-6 py-4 text-sm uppercase tracking-[0.14em] text-zinc-100 transition hover:border-zinc-200 hover:bg-white/[0.06]"
      >
        Explore Our Projects
        <ArrowRight className="skedd-primary-cta-arrow h-4 w-4" />
      </a>
    </div>
  );
}