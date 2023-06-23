"use client";

import { SyntheticEvent } from "react";

import styles from "./LinkCard.module.scss";

const DynamicImage = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/assets/image-dummy.png";
  };

  return (
    <img
      className={styles.image}
      src={imgSrc ?? "/assets/image-dummy.png"}
      onError={handleImgError}
      alt={title}
    />
  );
};

export default DynamicImage;
