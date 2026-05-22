import Image from "next/image";
import systemOverlayImage from "@/assets/homepage/system_overlay.png";

export default function SystemOverview() {
  return (
    <div
      style={{
        position: "absolute",
        left: "82%",
        top: "8%",
        zIndex: 10,
        width: "460px",
        opacity: 0.48,
      }}
    >
      <Image
        src={systemOverlayImage}
        alt=""
        priority
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 18%, black 42%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 18%, black 42%, transparent 100%)",
        }}
      />
    </div>
  );
}