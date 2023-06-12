"use client";

import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Modal.module.css";

const cx = classNames.bind(styles);

export default function Modal({ title = "폴더 이름 변경", onClose }) {
  const handleCloseModal = (e) => {
    e.stopPropagation();
    onClose(false);
  };

  return (
    <div className={cx("background")}>
      <div className={cx("modal-container")}>
        <button className={cx("close")} type="button" onClick={handleCloseModal}>
          <Image src="/images/close.svg" alt="닫기" width={24} height={24} />
        </button>
        <h1 className={cx("title")}>{title}</h1>
      </div>
    </div>
  );
}
