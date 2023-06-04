"use client";

import React, { MouseEventHandler } from "react";
import styles from "./Popover.module.scss";

interface PopoverProps {
  onClickItem: MouseEventHandler;
}

const Popover = ({ onClickItem }: PopoverProps) => {
  return (
    <ul className={styles.popover}>
      <li className={styles.selectItem} onClick={onClickItem}>
        삭제하기
      </li>
      <li className={styles.selectItem} onClick={onClickItem}>
        폴더에 추가
      </li>
    </ul>
  );
};

export default Popover;
