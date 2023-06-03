"use client";

import { useState } from "react";
import styles from "./LinkCard.module.scss";
import Image from "next/image";

export interface linkCardProp {
  id: number;
  href: string;
  thumbnailSrc?: string;
  createdDate: string;
  description: string;
}

const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return [year, month, day].join(".");
};

const getTimeSinceCreation = (dateString: string) => {
  const updatedDate = new Date(dateString);
  const today = new Date();
  const timeDiff = today.getTime() - updatedDate.getTime();

  const MINUTE = 60 * 1000;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 31;

  const timeMap = {
    [MINUTE * 2]: () => "1 minute ago",
    [MINUTE * 59]: (diff: number) => Math.floor(diff / MINUTE) + " minutes ago",
    [HOUR * 2]: () => "1 hour ago",
    [HOUR * 23]: (diff: number) => Math.floor(diff / HOUR) + " hours ago",
    [DAY * 2]: () => "1 day ago",
    [DAY * 30]: (diff: number) => Math.floor(diff / DAY) + " days ago",
    [MONTH * 2]: () => "1 month ago",
    [MONTH * 12]: (diff: number) => Math.floor(diff / MONTH) + " months ago",
    [MONTH * 12 * 2]: () => "1 year ago",
  };

  const diff = Object.keys(timeMap).find((key) => timeDiff < Number(key));

  if (diff) {
    return timeMap[Number(diff)](timeDiff);
  }

  const years = Math.floor(timeDiff / (MONTH * 12));
  return years + " years ago";
};

const LinkCard = ({
  href,
  thumbnailSrc,
  createdDate,
  description,
}: linkCardProp) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <a id={styles["card-link"]} href={href} target="_blank">
      <div className={styles.cardContainer}>
        <div className={styles.thumbnailBox}>
          <Image
            className={styles.thumbnailImg}
            src={thumbnailSrc ?? "/default-thumbnail.svg"}
            alt="thumbnail"
            fill
          />
          <div
            className={styles.likeBtnBox}
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
          >
            <Image
              src={isLiked ? "/like-btn-liked.svg" : "/like-btn-unliked.svg"}
              alt="like button"
              fill
            />
          </div>
        </div>
        <div className={styles.metadataContainer}>
          <div className={styles.kebab}>
            <Image src="/kebab.svg" alt="kebab" fill />
          </div>
          <p className={styles.updatedTime}>
            {getTimeSinceCreation(createdDate)}
          </p>
          <div className={styles.descriptionContainer}>{description}</div>
          <p className={styles.date}>{parseDate(createdDate)}</p>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
