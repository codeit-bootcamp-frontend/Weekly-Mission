"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./SharedCard.module.css";
import kebab from "/public/kebab.svg";
import defaultImage from "/public/defaultImage.svg";
import { timeForToday } from "@library/timeForToday";
import { getToday } from "@library/getToday";
import { useState } from "react";

const SharedCard = ({ link }) => {
  const { createdAt, url, description, imageSource } = link;
  const [isClick, setIsClick] = useState(false);

  const handleIsClick = (e) => {
    e.preventDefault();
    setIsClick(!isClick);
  };

  return (
    <Link href={url} className={styles.card}>
      <div className={styles["img-box"]}>
        <Image
          className={styles["card-img"]}
          src={imageSource || "/defaultImage.svg"}
          alt="card"
          width={340}
          height={200}
        />
        <div
          onClick={handleIsClick}
          className={isClick ? styles.click : styles.star}
        ></div>
      </div>
      <div className={styles["p-box"]}>
        <div className={styles["post-time"]}>
          <p className="postTimeComparison">{timeForToday(createdAt)}</p>
          <div className="kabab-box">
            <img src="/kebab.svg" alt="kabab" />
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles["post-date"]}>{getToday(createdAt)}</p>
      </div>
    </Link>
  );
};

export default SharedCard;
