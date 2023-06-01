"use client";

import React from "react";
import { useCallback, useRef, useState } from "react";

import Image from "next/image";

import beautifyDate from "@/lib/beautifyData";
import { ILink } from "@/lib/getFolderData";

import styles from "./card.module.css";

interface ICard {
  link: ILink;
}

const Card = ({ link }: ICard) => {
  const { beautifiedDate, beautifiedTimeDiff } = beautifyDate(link.createdAt);
  const [isChecked, setIsChecked] = useState<string | undefined>("");
  const asteriskImageRef = useRef<HTMLImageElement>(null);

  const handleClickNavigation = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      if (e.target === asteriskImageRef.current) return;
      window.open(link.url);
    },
    [link.url]
  );

  const handleClickCheck = () => {
    isChecked === "" ? setIsChecked("-check") : setIsChecked("");
  };

  return (
    <div className={styles.card} onClick={handleClickNavigation}>
      <div className={styles.cardAsterisk} onClick={handleClickCheck}>
        <Image
          ref={asteriskImageRef}
          className={styles.image}
          src={`/assets/card-asterisk${isChecked}.svg`}
          alt="Card Asterisk"
          fill
        />
      </div>
      <div className={styles.cardImgTop}>
        <Image
          className={styles.image}
          src={link.imageSource ?? "/assets/image-dummy.png"}
          alt={link.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1199px) 100vw, 100vw"
          priority
        />
      </div>
      <div className={styles.cardCaption}>
        <div className={styles.info}>
          <span className={styles.time}>{beautifiedTimeDiff}</span>
          <div className={styles.kebabMenu}>
            <span className={styles.kebabDot}></span>
            <span className={styles.kebabDot}></span>
            <span className={styles.kebabDot}></span>
          </div>
        </div>
        <p className={styles.text}>{link.description}</p>
        <div className={styles.creation}>{beautifiedDate}</div>
      </div>
    </div>
  );
};

export default Card;
