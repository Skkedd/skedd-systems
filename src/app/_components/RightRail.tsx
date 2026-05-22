import DataFlow from "./DataFlow";
import SystemOverview from "./SystemOverview";

export default function RightRail() {
  return (
    <aside className="absolute right-4 top-28 z-50 w-[420px] border border-red-500 bg-black/40">
      <div className="mb-4 border border-yellow-500">
        <SystemOverview />
      </div>

      <div className="border border-cyan-500">
        <DataFlow />
      </div>
    </aside>
  );
}