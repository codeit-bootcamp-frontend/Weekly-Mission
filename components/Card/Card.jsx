"use client";

import { useEffect, useRef, useState } from "react";

import classNames from "classnames/bind";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";
import SelectMenu from "./SelectMenu";
import Star from "./Star";

import kebab from "@/public/images/show-more.png";

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

export default function Card({ link, folders, onDeleteLink }) {
  const defaultCardImg = "/images/default-background.png";

  const [shownMenu, setShownMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClickKebab = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShownMenu((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current) {
      const modalPortal = document.getElementById("modal-portal");
      const clickedInsideMenu = menuRef.current.contains(e.target);
      const clickedInsideModal = modalPortal.contains(e.target);
      if (!clickedInsideMenu && !clickedInsideModal) {
        setShownMenu(false);
      }
    }
  };

  const handleClickCard = () => {
    if (!shownMenu) window.open(link.url, "_blank");
  };

  useEffect(() => {
    if (shownMenu) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [shownMenu]);

  return (
    <article
      className={cx("card", { notShownMenu: !shownMenu })}
      onClick={handleClickCard}
    >
      <div className={cx("imageContainer")}>
        <div
          className={cx("cardImg")}
          style={{
            backgroundImage: `url(${link.image_source ?? defaultCardImg})`,
          }}
        ></div>
        <div className={cx("star")}>
          <Star />
        </div>
      </div>
      <div className={cx("contentContainer")}>
        <div className={cx("passedTime")}>
          {calculatePassedTime(link.created_at)}
        </div>
        <button
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "2rem",
          }}
          onClick={handleClickKebab}
        >
          <Image width={21} height={17} src={kebab} alt="케밥 버튼" />
        </button>
        {shownMenu && (
          <div className={cx("menuContainer")} ref={menuRef}>
            <SelectMenu link={link} folders={folders} onDelete={onDeleteLink} />
          </div>
        )}
        <h2 className={cx("content")}>{link.description}</h2>
        <div className={cx("createdDate")}>
          {changeDateFormat(link.created_at)}
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  link: PropTypes.object.isRequired,
  folders: PropTypes.array.isRequired,
  onDeleteLink: PropTypes.func.isRequired,
};
