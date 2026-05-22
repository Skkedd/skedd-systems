import Image from "next/image";
import nesImage from "@/assets/homepage/nes.png";

export default function NesSchematic() {
  return (
    <div
  style={{
    position: "absolute",
    left: "44%",
    top: "7%",
    zIndex: 20,
    width: "640px",

    // slightly calmer by default
    opacity: 0.72,

    overflow: "hidden",
    borderRadius: "8px",
    maskImage:
      "radial-gradient(ellipse at center, black 62%, transparent 100%)",
    WebkitMaskImage:
      "radial-gradient(ellipse at center, black 62%, transparent 100%)",
  }}
>
      <Image
        src={nesImage}
        alt=""
        priority
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}