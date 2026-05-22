import HeroFlavorStage from "./_components/HeroFlavorStage";
import HeroSection from "./_components/HeroSection";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import SiteWallpaper from "./_components/SiteWallpaper";
import SoftwareCards from "./_components/SoftwareCards";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0c] font-mono text-zinc-100">
      <SiteWallpaper />
      <SiteHeader />

      <section className="relative z-10 mx-auto min-h-[820px] max-w-[1500px] px-4 pt-10 md:px-8 md:pt-16">
        <HeroSection />
        <HeroFlavorStage />
      </section>

      <SoftwareCards />
      <SiteFooter />
    </main>
  );
}