"use client";

import { useState } from "react";
import Image from "next/image";

export default function StarButton() {
  const [isSelected, SetisSelected] = useState(false);

  return (
    <>
      <Image
        src={
          isSelected ? "/assets/star-active.png" : "/assets/star-inactive.png"
        }
        alt="like-btn"
        fill
        onClick={(e) => {
          e.preventDefault();
          SetisSelected(!isSelected);
        }}
      />
    </>
  );
}
