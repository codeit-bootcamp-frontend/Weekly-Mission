"use client";

import { useState } from "react";

import classNames from "classnames/bind";
import PropTypes from "prop-types";

import ModalFrame from "../ModalFrame";

import styles from "./AddToFolderModal.module.scss";
import FolderListItem from "./FolderListItem";

const cx = classNames.bind(styles);

export default function AddToFolderModal({ link, folders, onClose }) {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const handleClickItem = (itemId) => {
    setSelectedItemId(itemId);
  };

  const onAddToFolder = (link, folderID) => {
    return link, folderID;
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

AddToFolderModal.propTypes = {
  link: PropTypes.object.isRequired,
  folders: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};
