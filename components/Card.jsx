import Link from "next/link";
import Star from "@/components/Star";
import styles from "@/components/Card.module.css";
import classNames from "classnames/bind";
import { formatDate } from "@/utils/formatDate";
import { formatTimeSpan } from "@/utils/formatTimeSpan";

export default function Card({ link, today }) {
  const { createdAt, url, title, description, imageSource } = link;
  const cx = classNames.bind(styles);

  const createdDate = new Date(createdAt);
  const timeDiffMinutes = (today - createdDate) / 1000 / 60;

  const formattedDate = formatDate(createdDate);
  const formattedTimeSpan = formatTimeSpan(timeDiffMinutes);

  return (
    <div className={cx("card")}>
      <div className={cx("star-container")}>
        <Star />
      </div>
      <Link href={url} target="_blank">
        <div className={cx("card-image-container")}>
          {imageSource ? (
            <img
              className={cx("card-image")}
              fill
              src={imageSource}
              alt={title}
            />
          ) : (
            <img className={cx("card-image")} fill src="/images/no-image.svg" />
          )}
        </div>
        <div className={cx("card-info")}>
          <img className={cx("kebab")} src="/images/kebab.svg" alt="kebab" />
          <div className={cx("time-span")}>{formattedTimeSpan}</div>
          <div className={cx("description")}>{description}</div>
          <div className={cx("created-date")}>{formattedDate}</div>
        </div>
      </Link>
    </div>
  );
}
