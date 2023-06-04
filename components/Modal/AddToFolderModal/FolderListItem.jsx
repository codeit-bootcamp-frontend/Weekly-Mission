"use client";

import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./FolderListItem.module.scss";

import checkIcon from "@/public/images/check.svg";

const cx = classNames.bind(styles);

export default function FolderListItem({ folder, selected, onClick }) {
  return (
    <div
      className={cx("container", { selected })}
      onClick={() => onClick(folder.id)}
    >
      <div className={cx("textContainer")}>
        <p className={cx("name", { selected })}>{folder.name}</p>
        <p className={cx("linksNum")}>{folder.linksNum}개 링크</p>
      </div>
      {selected && (
        <Image width={14} height={14} src={checkIcon} alt="체크 아이콘" />
      )}
    </div>
  );
}
