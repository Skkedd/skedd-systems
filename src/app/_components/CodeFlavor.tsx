import Image from "next/image";
import codeImage from "@/assets/homepage/dog_lore_code_transparent.png";

export default function CodeFlavor() {
  return (
    <div
      style={{
        position: "absolute",
        left: "22%",
        top: "58%",
        zIndex: 10,
        width: "460px",
        opacity: 0.92,
      }}
    >
      <Image
        src={codeImage}
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