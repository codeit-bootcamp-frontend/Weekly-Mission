"use client";

import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./DeleteModal.module.scss";
import ModalFrame from "./ModalFrame";

const cx = classNames.bind(styles);

export default function DeleteModal({ folder, onClose, onDelete }) {
  const handleDelete = () => {
    onDelete(folder.id);
    onClose();
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className={cx("container")}>
        <div className={cx("textContainer")}>
          <h3 className={cx("title")}>폴더 삭제</h3>
          <p className={cx("content")}>{folder.name}</p>
        </div>
        <button className={cx("button")} onClick={handleDelete}>
          삭제하기
        </button>
      </div>
    </ModalFrame>
  );
}

DeleteModal.propTypes = {
  folder: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
