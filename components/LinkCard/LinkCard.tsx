"use client";

import { useRef, useState } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

import { IFolder, ILink } from "@/types/linkbrary";
import beautifyDate from "@/utils/beautifyDate";

import Kebab from "./Kebab";
import styles from "./LinkCard.module.scss";

const DynamicImage = dynamic(() => import("./DynamicImage"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface ILinkCardProps {
  userId?: number;
  folders?: IFolder[] | [];
  links: ILink[] | [];
  link: ILink;
  isClickedKebab: boolean;
  handleClickOpenKebab: () => void;
  handleClickCloseKebab: () => void;
}

const LinkCard = ({
  userId,
  folders,
  links,
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
          <DynamicImage imgSrc={link.image_source} title={link.title} />
        </div>
        <div className={styles.cardCaption}>
          <div className={styles.info}>
            <span className={styles.time}>{beautifiedTimeDiff}</span>
          </div>
          <p className={styles.text}>{link.description ?? "설명이 없습니다"}</p>
          <div className={styles.creation}>{beautifiedDate}</div>
        </div>
      </div>

      <Kebab
        ref={(el: HTMLDivElement) => (notTargetRefs.current[1] = el)}
        userId={userId}
        folders={folders}
        links={links}
        linkId={link.id}
        linkUrl={link.url}
        isClickedKebab={isClickedKebab}
        handleClickOpenKebab={handleClickOpenKebab}
        handleClickCloseKebab={handleClickCloseKebab}
      />
    </div>
  );
};

export default LinkCard;
