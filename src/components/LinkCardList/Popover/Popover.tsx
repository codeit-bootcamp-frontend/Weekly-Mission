"use client";

import React, { MouseEventHandler } from "react";
import styles from "./Popover.module.scss";

interface PopoverProps {
  onClickItem: MouseEventHandler;
  onClickDelete: () => void;
  onClickAdd: () => void;
}

const Popover = ({ onClickItem, onClickDelete, onClickAdd }: PopoverProps) => {
  return (
    <ul className={styles.popover}>
      <li
        className={styles.selectItem}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onClickItem(e);
          onClickDelete();
        }}
      >
        삭제하기
      </li>
      <li
        className={styles.selectItem}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onClickItem(e);
          onClickAdd();
        }}
      >
        폴더에 추가
      </li>
    </ul>
  );
};

export default Popover;
