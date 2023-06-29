"use client";

import classNames from "classnames/bind";
import Image from "next/image";

import { Folder } from "@/utils/api/types";

import styles from "./FolderListItem.module.scss";

import checkIcon from "@/public/images/check.svg";

const cx = classNames.bind(styles);

interface folderAddedLinkNumType extends Folder {
  linkNum: number;
}

interface FolderListItemProps {
  folder: folderAddedLinkNumType;
  selected: boolean;
  onClick: (itemId: number, selected: boolean) => void;
}

export default function FolderListItem({
  folder,
  selected,
  onClick,
}: FolderListItemProps) {
  return (
    <div
      className={cx("container", { selected })}
      onClick={() => onClick(folder.id, selected)}
    >
      <div className={cx("textContainer")}>
        <p className={cx("name", { selected })}>{folder.name}</p>
        <p className={cx("linksNum")}>{folder.linkNum}개 링크</p>
      </div>
      {selected && (
        <Image width={14} height={14} src={checkIcon} alt="체크 아이콘" />
      )}
    </div>
  );
}
