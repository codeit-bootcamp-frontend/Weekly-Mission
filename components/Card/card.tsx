"use client";

import { Link } from "@/components/CardWrapper/cardWrapper";
import styles from "./card.module.css";
import beautifyDate from "@/lib/beautifyData";
import Image from "next/image";

interface Props {
  link: Link;
}

const Card = ({ link }: Props) => {
  const { beautifiedDate, beautifiedTimeDiff } = beautifyDate(link.createdAt);

  return (
    <div className={styles.card} onClick={() => {}}>
      <div className={styles.cardAsterisk}>
        <Image
          className={styles.image}
          src="/assets/card-asterisk.svg"
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
