import BlueprintFlavor from "./BlueprintFlavor";
import CodeFlavor from "./CodeFlavor";
import DataFlow from "./DataFlow";
import NesSchematic from "./NesSchematic";
import SystemOverlay from "./SystemOverview";

export default function HeroFlavorStage() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Background tech texture */}
      <div
        style={{
          position: "absolute",
          left: "3%",
          top: "5%",
          width: "50%",
          opacity: 0.2,
          zIndex: 0,
        }}
      >
        <DataFlow />
      </div>

      {/* Each image now owns its own positioning */}
      <NesSchematic />
      <CodeFlavor />
      <BlueprintFlavor />
      <SystemOverlay />
    </div>
  );
}