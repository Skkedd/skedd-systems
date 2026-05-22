import Image from "next/image";
import dataFlowImage from "@/assets/homepage/data_flow.png";

export default function DataFlow() {
  return (
    <Image
      src={dataFlowImage}
      alt=""
      priority
      className="h-auto w-full select-none object-contain"
    />
  );
}