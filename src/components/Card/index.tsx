"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Card.module.css";
import Star from "@/components/Star";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DropDown from "@/presentation/DropDown/DropDown";
import DeleteLinkModal from "@/components/Modals/DeleteLinkModal";
import AddLinkModal from "@/components/Modals/AddLinkModal";
import { Link } from "$/types";
import calculateTimeDiff from "@/utils/calculateTimeDiff";

interface CardProps {
  card: Link;
}

const Card = ({ card }: CardProps) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const [isDeleteLinkModalOpen, setIsDeleteLinkModalOpen] = useState(false);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);
  const {
    image_source,
    description,
    created_at: createdAt,
    url,
    folder_id,
  } = card;
  const router = useRouter();

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
        <div className={styles.cardImageContainer}>
          <img
            className={styles.cardImage}
            src={image_source || "/assets/images/default-card-img.png"}
            alt="card image"
          />
        </div>
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
        folder_id={folder_id}
      />
    </>
  );
};

export default Card;
