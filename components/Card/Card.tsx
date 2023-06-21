"use client";

import React, { useEffect, useRef, useState } from "react";

import classNames from "classnames/bind";
import Image from "next/image";

import { Folder, Link } from "@/utils/api/types";
import calculatePassedTime from "@/utils/calculatePassedTime";
import changeDateFormat from "@/utils/changeDateFormat";

import styles from "./Card.module.scss";
import SelectMenu from "./SelectMenu";
import Star from "./Star";

import kebab from "@/public/images/show-more.png";

const cx = classNames.bind(styles);
interface CardProps {
  link: Link;
  folders?: Folder[];
  onDeleteLink?: (id: number) => number;
  isNotOwn?: boolean;
}

export default function Card({
  link,
  folders,
  onDeleteLink,
  isNotOwn,
}: CardProps) {
  const defaultCardImg = "/images/default-background.png";

  const [shownMenu, setShownMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickKebab = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    isNotOwn || setShownMenu((prev) => !prev);
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
        {shownMenu && folders && onDeleteLink && (
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
