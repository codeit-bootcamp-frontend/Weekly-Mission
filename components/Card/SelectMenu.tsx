"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import AddToFolderModal from "@/components/Modal/AddToFolderModal/AddToFolderModal";
import DeleteModal from "@/components/Modal/DeleteModal";
import { Folder, Link } from "@/types";

import styles from "./SelectMenu.module.scss";

const cx = classNames.bind(styles);

interface SelectMenuProps {
  link: Link;
  folders: Folder[];
  onDelete: (id: number) => number;
}

export default function SelectMenu({
  link,
  folders,
  onDelete,
}: SelectMenuProps) {
  const [shownDeleteModal, setShownDeleteModal] = useState(false);
  const [shownAddToFolderModal, setShownAddToFolderModal] = useState(false);

  const openDeleteModal = () => {
    setShownDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShownDeleteModal(false);
  };

  const openAddToFolderModal = () => {
    setShownAddToFolderModal(true);
  };

  const closeAddToFolderModal = () => {
    setShownAddToFolderModal(false);
  };

  return (
    <>
      <div className={cx("selectMenu")}>
        <div className={cx("menu")} onClick={openDeleteModal}>
          삭제하기
        </div>
        <div className={cx("menu")} onClick={openAddToFolderModal}>
          폴더에 추가
        </div>
      </div>
      {shownDeleteModal && (
        <DeleteModal
          item={{ title: "링크 삭제", id: link.id, content: link.url }}
          onClose={closeDeleteModal}
          onDelete={onDelete}
        />
      )}
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
