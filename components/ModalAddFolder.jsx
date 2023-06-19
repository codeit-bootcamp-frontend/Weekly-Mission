"use client";

import classNames from "classnames/bind";
import Modal from "./Modal";
import styles from "@/styles/ModalAddFolder.module.css";
import { useRef } from "react";

const cx = classNames.bind(styles);

export default function ModalAddFolder({ onClose }) {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log("폴더 추가", inputRef.current?.value);
    onClose(false);
  };

  return (
    <Modal title="폴더 추가" onClose={onClose}>
      <div className={cx("input-content")}>
        <input className={cx("input")} type="text" placeholder="내용 입력" ref={inputRef} />
      </div>
      <button className={cx("add-button")} type="button" onClick={handleSubmit}>
        추가하기
      </button>
    </Modal>
  );
}
