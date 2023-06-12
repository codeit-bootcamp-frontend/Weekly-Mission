"use client";

import classNames from "classnames/bind";
import Image from "next/image";
import styles from "@/styles/Modal.module.css";

const cx = classNames.bind(styles);

export default function Modal({ title = "폴더 이름 변경", children, onClose }) {
  const handleCloseModal = (e) => {
    e.stopPropagation();
    onClose(false);
  };

  return (
    <div className={cx("background")} onClick={handleCloseModal}>
      <div className={cx("modal-container")} onClick={(e) => e.stopPropagation()}>
        <button className={cx("close")} type="button" onClick={handleCloseModal}>
          <Image src="/images/close.svg" alt="닫기" width={24} height={24} />
        </button>
        <h1 className={cx("title")}>{title}</h1>
        {children}
      </div>
    </div>
  );
}
