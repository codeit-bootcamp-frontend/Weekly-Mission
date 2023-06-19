"use client";

import styles from "./SimpleButton.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function SimpleButton({ content, color, onClose, addFolder }) {
  const handleClick = () => {
    if (addFolder) {
      addFolder();
    }
    if (onClose) {
      onClose();
    }
  };
  return (
    <>
      <button className={cx("button", color)} onClick={handleClick}>
        {content}
      </button>
    </>
  );
}
