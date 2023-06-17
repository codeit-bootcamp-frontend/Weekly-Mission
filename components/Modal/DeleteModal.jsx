"use client";

import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./DeleteModal.module.scss";
import ModalFrame from "./ModalFrame";

const cx = classNames.bind(styles);

export default function DeleteModal({ folder, link, onClose, onDelete }) {
  let item;
  if (folder)
    item = {
      title: "폴더 삭제",
      id: folder.id,
      content: folder.name,
    };
  else
    item = {
      title: "링크 삭제",
      id: link.id,
      content: link.url,
    };

  const handleDelete = () => {
    onDelete(item.id);
    onClose();
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className={cx("container")}>
        <div className={cx("textContainer")}>
          <h3 className={cx("title")}>{item.title}</h3>
          <p className={cx("content")}>{item.content}</p>
        </div>
        <button className={cx("button")} onClick={handleDelete}>
          삭제하기
        </button>
      </div>
    </ModalFrame>
  );
}

DeleteModal.propTypes = {
  folder: PropTypes.object,
  link: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
