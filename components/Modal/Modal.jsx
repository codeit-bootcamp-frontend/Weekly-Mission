"use client";

import styles from "./Modal.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import SimpleButton from "@/components/SimpleButton/SimpleButton";

const cx = classNames.bind(styles);

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  content,
  button,
}) {
  if (!isOpen) return null;
  // 자식이 부모한테 데이터를 주려면 ? 콜백을 받는다.
  // 모달 설계시 버튼과 컨텐츠가 연관이 있으면 ui에 버튼까지 집어넣기(버튼은 매번 집어넣기도 해야됨)
  // 추상화 필요한 곳에서만 사용하기
  // 자식들끼리 데이터 공유하려면 부모를 거쳐야함

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
