"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import AddModal from "@/components/Modals/AddModal/AddModal";
import DeleteLinkModal from "@/components/Modals/DeleteLinkModal/DeleteLinkModal";
import useOutsideClick from "hooks/useOutsideClick";
import beautifyDate from "lib/beautifyData";
import { ILink } from "lib/getFolderData";

import styles from "./Card.module.scss";

interface ICard {
  link: ILink;
  idx: number;
  isClicked: boolean;
  setIsClickedKebab: React.Dispatch<React.SetStateAction<number>>;
}

const Card = ({ link, idx, isClicked, setIsClickedKebab }: ICard) => {
  const { beautifiedDate, beautifiedTimeDiff } = beautifyDate(link.createdAt);
  const [isChecked, setIsChecked] = useState<string | undefined>("");
  const notTargetRefs = useRef<HTMLElement[]>([]);
  const hoverTargetRefs = useRef<HTMLElement[]>([]);
  const kebabRef = useRef<HTMLDivElement | null>(null);

  const [openDeleteLinkModal, setOpenDeleteLinkModal] =
    useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const handleClickNavigation = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (isClicked) return;

    let flag = false;
    notTargetRefs.current.forEach((ref) => {
      if (e.target === ref) {
        flag = true;
        return;
      }
    });
    if (!flag) window.open(link.url);
  };

  const handleClickCheck = () => {
    isChecked === "" ? setIsChecked("-check") : setIsChecked("");
  };

  const handleMouseOverCard = () => {
    if (isClicked) {
      hoverTargetRefs.current[0].style.transform = "scale(1)";
      hoverTargetRefs.current[1].style.background = "#ffffff";
    } else {
      hoverTargetRefs.current[0].style.transform = "scale(1.2)";
      hoverTargetRefs.current[1].style.background = "var(--linkbrary-bg)";
    }
  };
  const handleMouseOutCard = () => {
    hoverTargetRefs.current[0].style.transform = "scale(1)";
    hoverTargetRefs.current[1].style.background = "#ffffff";
  };

  const handleMouseOverPopOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === hoverTargetRefs.current[2]) {
      hoverTargetRefs.current[2].style.background = "#E7EFFB";
      hoverTargetRefs.current[2].style.color = "#6D6AFE";
    } else if (e.target === hoverTargetRefs.current[3]) {
      hoverTargetRefs.current[3].style.background = "#E7EFFB";
      hoverTargetRefs.current[3].style.color = "#6D6AFE";
    }
  };
  const handleMouseOutPopOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === hoverTargetRefs.current[2]) {
      hoverTargetRefs.current[2].style.background = "#ffffff";
      hoverTargetRefs.current[2].style.color = "#333236";
    } else if (e.target === hoverTargetRefs.current[3]) {
      hoverTargetRefs.current[3].style.background = "#ffffff";
      hoverTargetRefs.current[3].style.color = "#333236";
    }
  };

  useOutsideClick(kebabRef, () => {
    setIsClickedKebab(-1);
  });

  return (
    <>
      <div
        className={styles.card}
        onClick={handleClickNavigation}
        onMouseOver={handleMouseOverCard}
        onMouseOut={handleMouseOutCard}
      >
        <div className={styles.cardAsterisk} onClick={handleClickCheck}>
          <Image
            ref={(el: HTMLImageElement) => (notTargetRefs.current[0] = el)}
            className={styles.image}
            src={`/assets/card-asterisk${isChecked}.svg`}
            alt="Card Asterisk"
            fill
          />
        </div>
        <div className={styles.cardImgTop}>
          <Image
            className={styles.image}
            ref={(el: HTMLImageElement) => (hoverTargetRefs.current[0] = el)}
            src={link.imageSource ?? "/assets/image-dummy.png"}
            alt={link.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1199px) 100vw, 100vw"
            priority
          />
        </div>
        <div
          className={styles.cardCaption}
          ref={(el: HTMLDivElement) => (hoverTargetRefs.current[1] = el)}
        >
          <div className={styles.info}>
            <span className={styles.time}>{beautifiedTimeDiff}</span>
            <div
              ref={(el: HTMLDivElement) => (notTargetRefs.current[1] = el)}
              className={styles.kebabMenu}
              onClick={() => setIsClickedKebab(idx)}
            >
              <span className={styles.kebabDot}></span>
              <span className={styles.kebabDot}></span>
              <span className={styles.kebabDot}></span>
              {isClicked && (
                <div
                  className={styles.popOverWrapper}
                  ref={kebabRef}
                  onMouseOver={handleMouseOverPopOver}
                  onMouseOut={handleMouseOutPopOver}
                >
                  <div
                    className={styles.deleteButton}
                    ref={(el: HTMLDivElement) =>
                      (hoverTargetRefs.current[2] = el)
                    }
                    onClick={() => setOpenDeleteLinkModal(true)}
                  >
                    삭제하기
                  </div>
                  <div
                    className={styles.addFolderButton}
                    ref={(el: HTMLDivElement) =>
                      (hoverTargetRefs.current[3] = el)
                    }
                    onClick={() => setOpenAddModal(true)}
                  >
                    폴더에 추가
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className={styles.text}>{link.description}</p>
          <div className={styles.creation}>{beautifiedDate}</div>
        </div>
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
    </>
  );
};

export default Card;
