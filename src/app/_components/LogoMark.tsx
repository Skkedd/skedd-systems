export default function LogoMark() {
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
