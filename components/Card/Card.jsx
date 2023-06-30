"use client";

import styles from "./Card.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import StarButton from "@/components/StarButton/StarButton";
import formatCurrentDate from "@/lib/formatCurrentDate";
import calcElapsedTime from "@/lib/calcElapsedTime";

const cx = classNames.bind(styles);
// const cardDefaultImg = "../public/assets/card-default.png";

function Card({ card }) {
  return (
    <>
      <Link href={card.url}>
        <article className={cx("card")}>
          <div className={cx("like-btn")}>
            <StarButton />
          </div>
          <div
            className={cx("card-image")}
            // style={{
            //   backgroundImage: `url(${card.imageSource ?? cardDefaultImg})`,
            // }}
          >
            <Image
              src={card.imageSource || "/assets/card-default.png"}
              alt="card-image"
              fill
            />
          </div>
          <div className={cx("card-body")}>
            <button className={cx("menu-btn")}>
              <Image
                src="/assets/kebab.svg"
                alt="kebab-icon"
                width="21"
                height="17"
              />
            </button>
            <div className={cx("elapsed-time")}>
              {calcElapsedTime(card.createdAt)}
            </div>
            <p className={cx("card-description")}>{card.description}</p>
            <div className={cx("created-date")}>
              {formatCurrentDate(card.createdAt)}
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}

export default Card;
