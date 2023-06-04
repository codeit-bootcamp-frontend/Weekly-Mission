"use client";

import Link from "next/link";
import React, { useRef, useEffect } from "react";
import styles from "./SharedCard.module.css";
import kebab from "/public/kebab.svg";
import defaultImage from "/public/defaultImage.svg";
import { timeForToday } from "@library/timeForToday";
import { getToday } from "@library/getToday";
import { useState } from "react";

const SharedCard = ({ link }) => {
  const { createdAt, url, description, imageSource } = link;
  const [isClick, setIsClick] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);

  let popEl = useRef();

  const handleIsClick = (e) => {
    e.preventDefault();
    setIsClick(!isClick);
  };

  const handleClickOutside = ({ target }) => {
    if (showPopOver && !popEl.current.contains(target)) setShowPopOver(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showPopOver]);

  const popHandler = (event) => {
    event.preventDefault();
    setShowPopOver(!showPopOver);
  };

  return (
    <Link href={url} className={styles.card}>
      <div className={styles["img-box"]}>
        <img
          className={styles["card-img"]}
          src={imageSource || "/defaultImage.svg"}
          alt="card"
        />
        <div
          onClick={handleIsClick}
          className={isClick ? styles.click : styles.star}
        ></div>
      </div>
      <div className={styles["p-box"]}>
        <div className={styles["post-time"]}>
          <p className="postTimeComparison">{timeForToday(createdAt)}</p>
          <div className={styles["kabab-box"]} ref={popEl} onClick={popHandler}>
            <img src="/kebab.svg" alt="kabab" />
            {showPopOver && (
              <div className={styles.pop}>
                <p>삭제하기</p>
                <p>폴더에 추가</p>
              </div>
            )}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles["post-date"]}>{getToday(createdAt)}</p>
      </div>
    </Link>
  );
};

export default SharedCard;
