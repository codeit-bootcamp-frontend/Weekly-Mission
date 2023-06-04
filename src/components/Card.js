import React from "react";
import styles from "./Card.module.css";
import Star from "@/components/Star";
import { useRouter } from "next/router";
import Image from "next/image";

function Card({ card }) {
  const { imageSource = "/assets/images/default-card-img.png", description, createdAt, url } = card;
  const router = useRouter();

  function calculateTimeDiff(dateString) {
    const updatedDate = new Date(dateString);
    const today = new Date();
    const timeDiff = today - updatedDate;

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
  }

  function parseDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}. ${month}. ${day}.`;
  }

  const handleCardClick = () => {
    router.push(url);
  };

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      <Image className={styles.cardImage} src={imageSource} alt="card image" width={340} height={250} />
      <div className={styles.starIcon}>
        <Star />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardInfoHead}>
          <div className={styles.cardUpdateTime}>{calculateTimeDiff(createdAt)}</div>
          <Image className={styles.kebabIconWrap} src="/assets/images/kebab.svg" alt="Kebab Icon" width={24} height={24} />
        </div>
        <div className={styles.cardDescription}>{description}</div>
        <div className={styles.cardDate}>{parseDate(createdAt)}</div>
      </div>
    </div>
  );
}

export default Card;
