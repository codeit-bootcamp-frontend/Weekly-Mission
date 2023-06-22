"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import { Folder, Link } from "@/utils/api/types";

import ModalFrame from "../ModalFrame";

import styles from "./AddToFolderModal.module.scss";
import FolderListItem from "./FolderListItem";

const cx = classNames.bind(styles);

interface AddToFolderModalProps {
  link: Link;
  folders: Folder[];
  onClose: () => void;
}

export default function AddToFolderModal({
  link,
  folders,
  onClose,
}: AddToFolderModalProps) {
  const [selectedItemId, setSelectedItemId] = useState(0);
  const handleClickItem = (itemId: number) => {
    setSelectedItemId(itemId);
  };

  const onAddToFolder = (link: Link, folderID: number) => {
    link;
    return folderID;
  };

  const handleClickAddButton = () => {
    onAddToFolder(link, selectedItemId);
    onClose();
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className={cx("container")}>
        <div className={cx("textContainer")}>
          <h3 className={cx("title")}>폴더에 추가</h3>
          <p className={cx("content")}>{link.url}</p>
        </div>
        <div className={cx("list")}>
          {folders.map((folder) => (
            <FolderListItem
              key={folder.id}
              folder={folder}
              selected={selectedItemId === folder.id}
              onClick={handleClickItem}
            />
          ))}
        </div>
        <button className={cx("button")} onClick={handleClickAddButton}>
          추가하기
        </button>
      </div>
    </ModalFrame>
  );
}
