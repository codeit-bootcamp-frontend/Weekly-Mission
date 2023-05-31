"use client";

import { LinkType } from "@/components/CardWrapper/cardWrapper";
import styles from "./card.module.css";
import beautifyDate from "@/lib/beautifyData";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface Props {
  link: LinkType;
}

interface ClickHandler {
  (e: React.MouseEvent<HTMLElement>): void;
}

const Card = ({ link }: Props) => {
  const { beautifiedDate, beautifiedTimeDiff } = beautifyDate(link.createdAt);
  const [isChecked, setIsChecked] = useState("");
  const asteriskImage = useRef<HTMLImageElement>(null);

  const handleClickNavigation: ClickHandler = useCallback(
    (e) => {
      if (e.target === asteriskImage.current) return;
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
          ref={asteriskImage}
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
          <div className={styles.more}>
            <span className={styles.moreDot}></span>
            <span className={styles.moreDot}></span>
            <span className={styles.moreDot}></span>
          </div>
        </div>
        <p className={styles.text}>{link.description}</p>
        <div className={styles.creation}>{beautifiedDate}</div>
      </div>
    </div>
  );
};

export default Card;
