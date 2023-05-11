import styles from "@components/Card.module.css";
import StarOff from "@assets/img/Star-off.png";
import threeDots from "@assets/img/kebab.png";
import { getTimeDiffFormat, getDateFormat } from "@/utils/date";
import starOn from "@assets/img/Star-on.png";
import starOff from "@assets/img/Star-off.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import img4 from "@assets/img/img4.png";

export default function Card(props) {
  const { data } = props;
  const { imageSource, createdAt, description, url } = data;
  const [starClicked, setStarClicked] = useState(false);

  function starToggle(e) {
    e.preventDefault();
    setStarClicked(!starClicked);
  }

  return (
    <>
      <Link to={url}>
        <div className={styles.card}>
          <a className={`${styles.link} ${styles.transfer}`}>
            <img className={styles.cardImg} src={imageSource ?? img4} />
          </a>
          <div className={styles.starMarks}>
            <img
              className={styles.star}
              src={starClicked ? starOn : starOff}
              onClick={starToggle}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.upper}>
              <span>{getTimeDiffFormat(createdAt)}</span>
              <img src={threeDots} />
            </div>
            <div className={styles.middle}>
              <span>{description}</span>
            </div>
            <div className={styles.time}>
              <span>{getDateFormat(createdAt)}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
