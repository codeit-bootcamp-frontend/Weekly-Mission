"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import { useCurrentUser } from "@/hooks/useCurrentUserContext";
import useFolderLinksCount from "@/hooks/useFolderLinksCount";
import { Folder, Link } from "@/utils/api/types";

import ModalFrame from "../ModalFrame";

import styles from "./AddToFolderModal.module.scss";
import FolderListItem from "./FolderListItem";

const cx = classNames.bind(styles);

interface AddToFolderModalProps {
  url: Link["url"];
  folders: Folder[];
  onClose: () => void;
  onAddLink: (url: string, folderId: number | null) => void;
}

export default function AddToFolderModal({
  url,
  folders,
  onClose,
  onAddLink,
}: AddToFolderModalProps) {
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const { id: userId } = useCurrentUser();
  const linkNums = useFolderLinksCount(folders, userId);

  const handleClickItem = (itemId: number, selected: boolean) => {
    selected ? setSelectedFolderId(null) : setSelectedFolderId(itemId);
  };

  const handleClickAddButton = () => {
    onAddLink(url, selectedFolderId);
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
          {linkNums.length > 0 &&
            folders.map((folder, idx) => (
              <FolderListItem
                key={folder.id}
                folder={folder}
                linkNum={linkNums[idx]}
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
