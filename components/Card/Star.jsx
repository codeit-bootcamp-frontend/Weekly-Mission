"use client";

import { useState } from "react";

import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./Star.module.scss";

import starImgDefault from "@/public/images/gray-star.png";
import starImgFavor from "@/public/images/purple-star.png";

const cx = classNames.bind(styles);

export default function Star() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClickStar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prevIsFavor) => !prevIsFavor);
  };

  return (
    <Image
      className={cx("star")}
      src={isFavorite ? starImgFavor : starImgDefault}
      alt="별(favorite)"
      onClick={handleClickStar}
    />
  );
}
