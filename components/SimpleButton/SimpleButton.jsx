"use client";

import styles from "@/components/SimpleButton/SimpleButton.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function SimpleButton({
  content,
  color,
  onClose,
  handleButton,
}) {
  const handleClick = () => {
    if (handleButton) {
      handleButton();
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
