"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import AddModal from "@/components/Modals/AddModal/AddModal";
import DeleteLinkModal from "@/components/Modals/DeleteLinkModal/DeleteLinkModal";
import useOutsideClick from "@/hooks/useOutsideClick";
import beautifyDate from "@/lib/beautifyDate";
import { ILinkData } from "@/lib/getFolderData";

import styles from "./Card.module.scss";

interface ICardProps {
  link: ILinkData;
  isClickedKebab: boolean;
  handleClickOpenKebab: () => void;
  handleClickCloseKebab: () => void;
}

const Card = ({
  link,
  isClickedKebab,
  handleClickOpenKebab,
  handleClickCloseKebab,
}: ICardProps) => {
  const { beautifiedDate, beautifiedTimeDiff } = beautifyDate(link.createdAt);
  const [isCheckAsterisk, setIsCheckAsterisk] = useState<boolean>(false);
  const notTargetRefs = useRef<HTMLElement[]>([]);
  const kebabRef = useRef<HTMLDivElement | null>(null);

  const [openDeleteLinkModal, setOpenDeleteLinkModal] =
    useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const handleClickNavigation = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isClickedKebab) return;
    const isValidTarget = notTargetRefs.current.every(
      (ref) => ref !== e.target
    );

    if (isValidTarget) window.open(link.url);
  };

  useOutsideClick(kebabRef, handleClickCloseKebab);

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
          </div>
          <p className={styles.text}>{link.description}</p>
          <div className={styles.creation}>{beautifiedDate}</div>
        </div>
      </div>

      <div
        ref={(el: HTMLDivElement) => (notTargetRefs.current[1] = el)}
        className={styles.kebabMenu}
        onClick={handleClickOpenKebab}
      >
        <span className={styles.kebabDot}></span>
        <span className={styles.kebabDot}></span>
        <span className={styles.kebabDot}></span>
        {isClickedKebab && (
          <div className={styles.popOverWrapper} ref={kebabRef}>
            <div
              className={styles.deleteButton}
              onClick={() => setOpenDeleteLinkModal(true)}
            >
              삭제하기
            </div>
            <div
              className={styles.addFolderButton}
              onClick={() => setOpenAddModal(true)}
            >
              폴더에 추가
            </div>
          </div>
        )}
      </div>
      {openAddModal && (
        <AddModal
          setOpenAddModal={setOpenAddModal}
          selectedLinkValue={link.url}
        />
      )}
      {openDeleteLinkModal && (
        <DeleteLinkModal
          setOpenDeleteLinkModal={setOpenDeleteLinkModal}
          selectedLinkValue={link.url}
        />
      )}
    </div>
  );
};

export default Card;
