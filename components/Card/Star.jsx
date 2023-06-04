"use client";

import { useState } from "react";

import Image from "next/image";

import starImgDefault from "@/public/images/gray-star.png";
import starImgFavor from "@/public/images/purple-star.png";

export default function Star() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClickStar = (e) => {
    e.preventDefault();
    setIsFavorite((prevIsFavor) => !prevIsFavor);
  };

  return (
    <Image
      fill
      src={isFavorite ? starImgFavor : starImgDefault}
      alt="별(favorite)"
      onClick={handleClickStar}
    />
  );
}
