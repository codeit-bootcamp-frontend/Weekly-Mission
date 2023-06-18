"use client";

import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./AddLinkBar.module.scss";

import copyLink from "@/public/images/copy-link.svg";

const cx = classNames.bind(styles);

export default function AddLinkBar() {
  return (
    <div className={cx("container")}>
      <div className={cx("inputContainer")}>
        <Image width={20} height={20} src={copyLink} alt="링크 공유" />
        <input className={cx("input")} placeholder="링크를 추가해 보세요" />
      </div>
      <button className={cx("button")} type="submit">
        추가하기
      </button>
    </div>
  );
}
