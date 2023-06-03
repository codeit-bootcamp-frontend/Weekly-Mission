import Image from "next/image";

import starImgDefault from "@/public/images/gray-star.png";
import starImgFavor from "@/public/images/purple-star.png";

export default function Star() {
  const isFavorite = true;

  return (
    <Image
      fill
      src={isFavorite ? starImgFavor : starImgDefault}
      alt="별(favorite)"
    />
  );
}
