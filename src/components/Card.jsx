import React from "react";
import styles from "./Card.module.css";
import Star from "./Star";
import defaultCardImg from "/src/assets/default-background.png";

function Card({ cardData }) {
  const calculatePassedTime = (time) => {
    const MINUTE = 60 * 1000;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const MONTH = 31 * DAY;
    const YEAR = 12 * MONTH;

    const currentTime = new Date();
    const createdTime = new Date(time);
    const timeDiff = currentTime - createdTime;

    switch (true) {
      case timeDiff < 2 * MINUTE:
        return "1 minute ago";
      case timeDiff < HOUR:
        return `${Math.floor(timeDiff / MINUTE)} minutes ago`;
      case timeDiff < 2 * HOUR:
        return "1 hour ago";
      case timeDiff < DAY:
        return `${Math.floor(timeDiff / HOUR)} hours ago`;
      case timeDiff < 2 * DAY:
        return "1 day ago";
      case timeDiff < MONTH:
        return `${Math.floor(timeDiff / DAY)} days ago`;
      case timeDiff < 2 * MONTH:
        return "1 month ago";
      case timeDiff < YEAR:
        return `${Math.floor(timeDiff / MONTH)} months ago`;
      case timeDiff < 2 * YEAR:
        return "1 year ago";
      default:
        return `${Math.floor(timeDiff / YEAR)} years ago`;
    }
  };

  const changeDateFormat = (time) => {
    return Intl.DateTimeFormat("kr").format(new Date(time));
  };

  return (
    <article className={styles.card}>
      <a href={cardData.url} target="_blank" rel="noreferrer">
        <div className={styles.imageContainer}>
          <div
            className={styles.cardImg}
            style={{
              backgroundImage: `url(${cardData.imageSource ?? defaultCardImg})`,
            }}
          ></div>
          <div className={styles.star}>
            <Star />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.passedTime}>
            {calculatePassedTime(cardData.createdAt)}
          </div>
          <button className={styles.btnMore} />
          <h2 className={styles.content}>{cardData.description}</h2>
          <div className={styles.createdDate}>
            {changeDateFormat(cardData.createdAt)}
          </div>
        </div>
      </a>
    </article>
  );
}

export default Card;
