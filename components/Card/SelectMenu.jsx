"use client";

import { useState } from "react";

import classNames from "classnames/bind";
import PropTypes from "prop-types";

import AddToFolderModal from "@/components/Modal/AddToFolderModal/AddToFolderModal";
import DeleteModal from "@/components/Modal/DeleteModal";

import styles from "./SelectMenu.module.scss";

const cx = classNames.bind(styles);

export default function SelectMenu({ link, folders, onDelete }) {
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
          link={link}
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

SelectMenu.propTypes = {
  onDelete: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired,
  folders: PropTypes.array.isRequired,
};
