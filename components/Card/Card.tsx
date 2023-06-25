"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

import classNames from "classnames/bind";
import Image from "next/image";

import { Link } from "@/utils/api/types";
import calculatePassedTime from "@/utils/calculatePassedTime";
import changeDateFormat from "@/utils/changeDateFormat";

import styles from "./Card.module.scss";
import Star from "./Star";

import kebab from "@/public/images/show-more.png";

const cx = classNames.bind(styles);

interface CardProps {
  link: Link;
  menuComponent: ReactNode;
}

export default function Card({ link, menuComponent }: CardProps) {
  const defaultCardImg = "/images/default-background.png";

  const [shownMenu, setShownMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [createdTime, setCreatedTime] = useState<Date | null>(null);

  const handleClickKebab = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setShownMenu((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const modalPortal = document.getElementById("modal-portal");
    const clickedInsideMenu = menuRef.current?.contains(e.target as Node);
    const clickedInsideModal = modalPortal?.contains(e.target as Node);
    if (!clickedInsideMenu && !clickedInsideModal) {
      setShownMenu(false);
    }
  };

  const handleClickCard = () => {
    if (!shownMenu) {
      const httpUrl = link.url.match(/^https?:\/\//i)
        ? link.url
        : "http://" + link.url;
      window.open(httpUrl, "_blank");
    }
  };

  useEffect(() => {
    if (shownMenu) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [shownMenu]);

  useEffect(() => {
    setCurrentTime(new Date());
    setCreatedTime(new Date(link.created_at));
  }, [link.created_at]);

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
          {calculatePassedTime(createdTime, currentTime)}
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
            {menuComponent}
          </div>
        )}
        <h2 className={cx("content")}>{link.description}</h2>
        <div className={cx("createdDate")}>{changeDateFormat(createdTime)}</div>
      </div>
    </article>
  );
}
