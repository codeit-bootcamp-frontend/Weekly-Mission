"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import AddToFolderModal from "@/components/Modal/AddToFolderModal/AddToFolderModal";
import { postLink } from "@/utils/api";
import { Link } from "@/utils/api/types";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

export default function OtherCardMenu({ url }: { url: Link["url"] }) {
  const [shownAddToFolderModal, setShownAddToFolderModal] = useState(false);

  const openAddToFolderModal = () => {
    setShownAddToFolderModal(true);
  };

  const closeAddToFolderModal = () => {
    setShownAddToFolderModal(false);
  };

  const onAddLink = async (
    url: string,
    currentUserId: number,
    folderId: number | null,
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
          onClose={closeAddToFolderModal}
          onAddLink={onAddLink}
        />
      )}
    </>
  );
}
