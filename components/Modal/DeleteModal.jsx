"use client";

import classNames from "classnames/bind";

import styles from "./DeleteModal.module.scss";
import ModalFrame from "./ModalFrame";

const cx = classNames.bind(styles);

export default function DeleteModal() {
  return (
    <ModalFrame>
      <div className={cx("container")}>
        <div className={cx("textContainer")}>
          <h3 className={cx("title")}>폴더 삭제</h3>
          <p className={cx("content")}>폴더명</p>
        </div>
        <button className={cx("button")}>삭제하기</button>
      </div>
    </ModalFrame>
  );
}
