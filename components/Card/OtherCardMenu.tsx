"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import AddToFolderModal from "@/components/Modal/AddToFolderModal/AddToFolderModal";
import { Folder, Link } from "@/utils/api/types";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

interface OtherCardMenuProps {
  link: Link;
  folders: Folder[];
}

export default function OtherCardMenu({ link, folders }: OtherCardMenuProps) {
  const [shownAddToFolderModal, setShownAddToFolderModal] = useState(false);

  const openAddToFolderModal = () => {
    setShownAddToFolderModal(true);
  };

  const closeAddToFolderModal = () => {
    setShownAddToFolderModal(false);
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
          link={link}
          folders={folders}
          onClose={closeAddToFolderModal}
        />
      )}
    </>
  );
}
