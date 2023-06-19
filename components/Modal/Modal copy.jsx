"use client";

import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import SimpleButton from "@/components/SimpleButton/SimpleButton";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  content,
  button,
}) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={cx("modal-overlay")}>
        <div className={cx("modal")}>
          <Image
            src="/assets/close.svg"
            alt="close-btn"
            width={24}
            height={24}
            className={cx("close-btn")}
            onClick={onClose}
          />
          <div className={cx("title-container")}>
            <h2 className={cx("main-title")}>{title}</h2>
            {subtitle && <p className={cx("sub-title")}>{subtitle}</p>}
          </div>
          <div className={cx("content-container")}>
            {content}
            {button && <SimpleButton {...button} onClose={onClose} />}
          </div>
        </div>
      </div>
    </>
  );
}
