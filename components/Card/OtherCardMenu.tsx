"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import AddToFolderModal from "@/components/Modal/AddToFolderModal/AddToFolderModal";
import { postLink } from "@/utils/api";
import { Folder, Link } from "@/utils/api/types";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

interface OtherCardMenuProps {
  url: Link["url"];
  currentUserFolders: Folder[];
}

export default function OtherCardMenu({
  url,
  currentUserFolders,
}: OtherCardMenuProps) {
  const [shownAddToFolderModal, setShownAddToFolderModal] = useState(false);

  const openAddToFolderModal = () => {
    setShownAddToFolderModal(true);
  };

  const closeAddToFolderModal = () => {
    setShownAddToFolderModal(false);
  };

  const onAddLink = async (
    url: string,
    currentUserId: string,
    folderId: string | null,
  ) => {
    await postLink(url, currentUserId, folderId);
  };

  return (
    <>
      <div className={cx("selectMenu")}>
        <div className={cx("menu")} onClick={openAddToFolderModal}>
          폴더에 추가
        </div>
      </div>
      {shownAddToFolderModal && (
        <AddToFolderModal
          url={url}
          folders={currentUserFolders}
          onClose={closeAddToFolderModal}
          onAddLink={onAddLink}
        />
      )}
    </>
  );
}
