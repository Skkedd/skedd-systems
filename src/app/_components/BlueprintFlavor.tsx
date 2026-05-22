import Image from "next/image";
import blueprintImage from "@/assets/homepage/blueprint.png";

export default function BlueprintFlavor() {
  return (
    <div
      style={{
        position: "absolute",
        left: "84%",
        top: "58%",
        zIndex: 10,
        width: "420px",
        opacity: 0.90,
      }}
    >
      <Image
        src={blueprintImage}
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