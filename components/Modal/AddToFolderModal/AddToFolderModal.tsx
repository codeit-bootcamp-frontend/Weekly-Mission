"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import { useCurrentUser } from "@/hooks/useCurrentUserContext";
import { Folder, Link } from "@/utils/api/types";

import ModalFrame from "../ModalFrame";

import styles from "./AddToFolderModal.module.scss";
import FolderListItem from "./FolderListItem";

const cx = classNames.bind(styles);

interface AddToFolderModalProps {
  url: Link["url"];
  folders: Folder[];
  onClose: () => void;
  onAddLink: (url: string, userId: string, folderId: string | null) => void;
}

export default function AddToFolderModal({
  url,
  folders,
  onClose,
  onAddLink,
}: AddToFolderModalProps) {
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const { id: userId } = useCurrentUser();

  const handleClickItem = (itemId: string, selected: boolean) => {
    selected ? setSelectedFolderId(null) : setSelectedFolderId(itemId);
  };

  const handleClickAddButton = () => {
    onAddLink(url, userId, selectedFolderId);
    onClose();
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className={cx("container")}>
        <div className={cx("textContainer")}>
          <h3 className={cx("title")}>폴더에 추가</h3>
          <p className={cx("content")}>{url}</p>
        </div>
        <div className={cx("list")}>
          {/* // TODO: Suspense 처리 */}
          {folders.map((folder) => (
            <FolderListItem
              key={folder.id}
              folder={folder}
              selected={selectedFolderId === folder.id}
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
