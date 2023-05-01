import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./Card.module.css";
import kebab from "/src/assets/kebab.png";
import cardDefaultImg from "/src/assets/card-default.png";
import Star from "./Star";

function Card(links) {
  const [data, setdata] = useState({
    createdAt: null,
    url: null,
    title: null,
    description: null,
    imageSource: cardDefaultImg
  }); 

  useEffect(() => {
    setdata(links.links);
  }, [links]);

  // 현재 시간 계산
  function fomattedCurrentDate() {
    let createdTime = new Date(data.createdAt);
    return new Intl.DateTimeFormat("ko-KR")
      .format(new Date(createdTime))
      .slice(0, -1);
  }

  //  경과 시간 계산
  function calcElapsedTime() {
    let createdTime = new Date(data.createdAt);
    let currentTime = new Date();
    let diffMSec = currentTime.getTime() - createdTime.getTime();
    let diffMin = Math.round(diffMSec / (60 * 1000)); // 현재 시간과 생성 시간과의 분 차이
    if (diffMin < 60) {
      return diffMin < 2 ? `1 minute ago` : `${diffMin} minutes ago`;
    } else if (diffMin < 24 * 60) {
      return (diffMin === 60
        ? `1 hour ago`
        : `${Math.floor(diffMin / 60)} hours ago`);
    } else if (diffMin < 24 * 60 * 31) {
      return diffMin < 24 * 60 * 2
        ? `1 day ago`
        : `${Math.floor(diffMin / 60 / 24)} days ago`;
    } else if (diffMin < 24 * 60 * 31 * 12) {
      return diffMin < 24 * 60 * 31 * 2
        ? `1 month ago`
        : `${Math.floor(diffMin / 60 / 24 / 31)} months ago`;
    } else {
      return diffMin < 24 * 60 * 31 * 12 * 2
        ? `1 year ago`
        : `${Math.floor(diffMin / 60 / 24 / 31 / 12)} years ago`;
    }
  }

  return (
    <>
      <a href={data.url}>
        <article className={styles.card}>
          <Star styles={styles} />
          <div
            className={styles.cardImage}
            style={{
              backgroundImage: `url(${data.imageSource ? data.imageSource : cardDefaultImg})`
            }}
          ></div>
          <div className={styles.cardBody}>
            <button className={styles.menuBtn}>
              <img src={kebab} />
            </button>
            <div className={styles.cardTime}>{data.createdAt && calcElapsedTime()}</div>
            <p className={styles.cardDescription}>{data.description}</p>
            <div className={styles.cardDime}>
              {data.createdAt && fomattedCurrentDate()}
            </div>
          </div>
        </article>
      </a>
    </>
  );
}

export default Card;
