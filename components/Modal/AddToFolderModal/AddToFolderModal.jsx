"use client";

import classNames from "classnames/bind";

import ModalFrame from "../ModalFrame";

import styles from "./AddToFolderModal.module.scss";
import FolderList from "./FolderList";

const cx = classNames.bind(styles);

export default function AddToFolderModal() {
  return (
    <ModalFrame>
      <div className={cx("container")}>
        <div className={cx("textContainer")}>
          <h3 className={cx("title")}>폴더에 추가</h3>
          <p className={cx("content")}>링크 주소</p>
        </div>
        <FolderList />
        <button className={cx("button")}>추가하기</button>
      </div>
    </ModalFrame>
  );
}
