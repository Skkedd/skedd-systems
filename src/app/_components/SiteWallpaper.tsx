export default function SiteWallpaper() {
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
