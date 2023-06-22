"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { ILink } from "@/types/linkbrary";
import beautifyDate from "@/utils/beautifyDate";

import Kebab from "./Kebab";
import styles from "./LinkCard.module.scss";

interface ILinkCardProps {
  link: ILink;
  isClickedKebab: boolean;
  handleClickOpenKebab: () => void;
  handleClickCloseKebab: () => void;
}

const LinkCard = ({
  link,
  isClickedKebab,
  handleClickOpenKebab,
  handleClickCloseKebab,
}: ILinkCardProps) => {
  const { beautifiedDate, beautifiedTimeDiff } = beautifyDate(link.created_at);
  const [isCheckAsterisk, setIsCheckAsterisk] = useState<boolean>(false);
  const notTargetRefs = useRef<HTMLElement[]>([]);

  const handleClickNavigation = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isClickedKebab) return;
    const isValidTarget = notTargetRefs.current.every(
      (ref) => ref !== e.target
    );

    if (isValidTarget) window.open(link.url);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card} onClick={handleClickNavigation}>
        <div
          className={styles.cardAsterisk}
          onClick={() => setIsCheckAsterisk((prev) => !prev)}
        >
          {isCheckAsterisk ? (
            <Image
              ref={(el: HTMLImageElement) => (notTargetRefs.current[0] = el)}
              className={styles.image}
              src="/assets/card-asterisk-check.svg"
              alt="Checked Card Asterisk"
              fill
            />
          ) : (
            <Image
              ref={(el: HTMLImageElement) => (notTargetRefs.current[0] = el)}
              className={styles.image}
              src="/assets/card-asterisk.svg"
              alt="Card Asterisk"
              fill
            />
          )}
        </div>
        <div className={styles.cardImgTop}>
          <img
            className={styles.image}
            src={link.image_source ?? "/assets/image-dummy.png"}
            alt={link.title}
          />
        </div>
        <div className={styles.cardCaption}>
          <div className={styles.info}>
            <span className={styles.time}>{beautifiedTimeDiff}</span>
          </div>
          <p className={styles.text}>{link.description}</p>
          <div className={styles.creation}>{beautifiedDate}</div>
        </div>
      </div>

      <Kebab
        ref={(el: HTMLDivElement) => (notTargetRefs.current[1] = el)}
        linkUrl={link.url}
        isClickedKebab={isClickedKebab}
        handleClickOpenKebab={handleClickOpenKebab}
        handleClickCloseKebab={handleClickCloseKebab}
      />
    </div>
  );
};

export default LinkCard;
