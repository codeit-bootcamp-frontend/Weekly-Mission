"use client";

import classNames from "classnames/bind";

import ModalFrame from "../ModalFrame";

import styles from "./DeleteModal.module.scss";

const cx = classNames.bind(styles);

interface Item {
  title: string;
  id: number;
  content: string;
}

interface DeleteModalProps {
  item: Item;
  onClose: () => void;
  onDelete: (id: number) => void;
}

export default function DeleteModal({
  item,
  onClose,
  onDelete,
}: DeleteModalProps) {
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
