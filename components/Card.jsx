"use client";

import { useState } from "react";
import getTimeDiffFormat from "@/utils/getTimeDiffFormat";
import getDateFormat from "@/utils/getDateFormat";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "@/styles/Card.module.css";

const DEFAULT = {
  createdAt: "2023. 3. 15",
  url: "https://www.codeit.kr/",
  description:
    "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
  title: "Linkbrary",
  imageSource: "/images/default_image.png",
};

export default function Card({
  data: { created_at = DEFAULT.createdAt, url = DEFAULT.url, title = DEFAULT.title, description = DEFAULT.description, image_source = DEFAULT.imageSource },
}) {
  const [isSelected, SetIsSelected] = useState(false);
  const timeDiffFormat = getTimeDiffFormat(created_at);
  const dateFormat = getDateFormat(created_at);

  const handleClickCard = () => {
    window.open(url);
  };

  const handleClickStar = (e) => {
    e.stopPropagation();
    const starImg = e.currentTarget.firstChild;

    if (isSelected) {
      starImg.src = "/images/default-star.svg";
    } else {
      starImg.src = "/images/selected-star.svg";
    }
    SetIsSelected(!isSelected);
  };

  const cx = classNames.bind(styles);

  return (
    <div className={cx("card")} onClick={handleClickCard}>
      <div className={cx("card-image-container")}>
        <Image fill className={cx("card-image")} src={image_source} alt={title} />
        <button className={cx("star-button")} onClick={handleClickStar}>
          <Image className={cx("star-icon")} src="/images/default-star.svg" alt="북마크 아이콘" width={30} height={31} />
        </button>
      </div>
      <div className={cx("text-box")}>
        <div className={cx("text-content")}>
          <div className={cx("card-info")}>
            <span className={cx("added-time")}>{timeDiffFormat}</span>
            <button className={cx("kebab-button")}>
              <Image src="/images/kebab.svg" alt="더보기" width={21} height={17} />
            </button>
          </div>
          <p className={cx("card-description")}>{description}</p>
          <span className={cx("datetime")}>{dateFormat}</span>
        </div>
      </div>
    </div>
  );
}
