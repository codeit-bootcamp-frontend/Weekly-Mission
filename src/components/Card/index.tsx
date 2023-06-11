import React, { useRef, useState, useEffect } from "react";
import styles from "./Card.module.css";
import Star from "@/components/Star";
import { useRouter } from "next/router";
import Image from "next/image";
import DropDown from "@/presentation/DropDown/DropDown";
import DeleteLinkModal from "@/components/Modals/DeleteLinkModal";
import AddLinkModal from "@/components/Modals/AddLinkModal";
import { Link as Card, Folder as Tab } from "$/types";

interface CardProps {
  card: Card;
  tabs: Tab[];
}

const Card: React.FC<CardProps> = ({ card, tabs }) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const [isDeleteLinkModalOpen, setIsDeleteLinkModalOpen] = useState(false);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);
  const {
    image_source: imageSource,
    description,
    created_at: createdAt,
    url,
  } = card;
  const router = useRouter();

  function calculateTimeDiff(dateString: string): string {
    const updatedDate = new Date(dateString);
    const today = Date.now();
    const timeDiff = today - updatedDate.getTime();

    const MINUTE = 60 * 1000;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const MONTH = DAY * 31;
    const YEAR = DAY * 365;

    const timeUnits = [
      { value: YEAR, label: "년" },
      { value: MONTH, label: "개월" },
      { value: DAY, label: "일" },
      { value: HOUR, label: "시간" },
      { value: MINUTE, label: "분" },
    ];

    for (let i = 0; i < timeUnits.length; i++) {
      const { value, label } = timeUnits[i];

      if (timeDiff < value) {
        continue;
      }

      const formattedTimeDiff = Math.floor(timeDiff / value);

      return (
        formattedTimeDiff +
        " " +
        label +
        (formattedTimeDiff > 1 ? " 전" : "") +
        ""
      );
    }
    return "";
  }

  function parseDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}. ${month}. ${day}.`;
  }

  const handleCardClick = () => {
    router.push(url);
  };

  const handleKebabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsKebabOpen(!isKebabOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      setIsKebabOpen(false);
    }
  };

  const handleDeleteLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    //TODO: 링크 삭제하기 API 요청
    e.stopPropagation();
    setIsDeleteLinkModalOpen(true);
  };

  const handleAddLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsAddLinkModalOpen(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.cardContainer} ${
          isKebabOpen ? styles.disableHover : ""
        }`}
        onClick={handleCardClick}
      >
        <Image
          className={styles.cardImage}
          src={imageSource || "/assets/images/default-card-img.png"}
          alt="card image"
          width={340}
          height={250}
        />

        <div className={styles.starIcon}>
          <Star />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardInfoHead}>
            <div className={styles.cardUpdateTime}>
              {calculateTimeDiff(createdAt)}
            </div>
            <button
              type="button"
              className={styles.kebabWrap}
              onClick={handleKebabClick}
              ref={cardRef}
            >
              <Image
                className={styles.kebabIcon}
                src="/assets/images/kebab.svg"
                alt="Kebab Icon"
                width={24}
                height={24}
              />
            </button>
            {isKebabOpen && (
              <DropDown>
                <div onClick={handleDeleteLinkClick}>삭제하기</div>
                <div onClick={handleAddLinkClick}>폴더에 추가</div>
              </DropDown>
            )}
          </div>
          <div className={styles.cardDescription}>{description}</div>
          <div className={styles.cardDate}>{parseDate(createdAt)}</div>
        </div>
      </div>
      <DeleteLinkModal
        isDeleteLinkModalOpen={isDeleteLinkModalOpen}
        onClose={() => {
          setIsDeleteLinkModalOpen(false);
        }}
        link={url}
      />
      <AddLinkModal
        isAddLinkModalOpen={isAddLinkModalOpen}
        onClose={() => {
          setIsAddLinkModalOpen(false);
        }}
        link={url}
        tabs={tabs}
      />
    </>
  );
};

export default Card;
