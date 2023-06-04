import classNames from "classnames/bind";
import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";
import KebabButton from "./KebabButton";
import Star from "./Star";

const cx = classNames.bind(styles);

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

export default function Card({ cardData }) {
  const defaultCardImg = "/images/default-background.png";
  return (
    <article className={cx("card")}>
      <Link href={cardData.url} target="_blank" rel="noreferrer">
        <div className={cx("imageContainer")}>
          <div
            className={cx("cardImg")}
            style={{
              backgroundImage: `url(${cardData.imageSource ?? defaultCardImg})`,
            }}
          ></div>
          <div className={cx("star")}>
            <Star />
          </div>
        </div>
        <div className={cx("contentContainer")}>
          <div className={cx("passedTime")}>
            {calculatePassedTime(cardData.createdAt)}
          </div>
          <KebabButton
            buttonStyle={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
            }}
          />
          <h2 className={cx("content")}>{cardData.description}</h2>
          <div className={cx("createdDate")}>
            {changeDateFormat(cardData.createdAt)}
          </div>
        </div>
      </Link>
    </article>
  );
}

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
};
