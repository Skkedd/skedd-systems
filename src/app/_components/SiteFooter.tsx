import Image from "next/image";
import { Mail } from "lucide-react";
import skeddLogo from "@/assets/homepage/SkeddSystems.png";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-zinc-700/60 bg-black/20">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-4 py-5 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4">
          <Image
            src={skeddLogo}
            alt="Skedd Systems"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />

          <span>© 2025 Skedd Systems. All rights reserved.</span>
        </div>

        <a
          href="mailto:info@skeddsystems.com"
          title="Send an email to info@skeddsystems.com"
          aria-label="Send an email to info@skeddsystems.com"
          className="skedd-primary-cta flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700/60 text-zinc-500 transition hover:border-white hover:text-white"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}