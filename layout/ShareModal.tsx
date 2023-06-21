"use client";

import styles from "@/layout/ShareModal.module.css";

import { createPortal } from "react-dom";

const Backdrop = ({ modalHandler }) => {
  return <div onClick={modalHandler} className={styles.backdrop} />;
};

const ModalOverlay = ({ modalHandler, title, content }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.img}>
        <img src="/close.svg" onClick={modalHandler} />
      </div>
      <div className={styles.box}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
      </div>
      <div className={styles["icon-box"]}>
        <div>
          <img src="/Frame 3.svg" alt="카카오톡" />
          <p>카카오톡</p>
        </div>
        <div>
          <img src="/Frame 3-1.svg" alt="페이스북" />
          <p>페이스북</p>
        </div>
        <div>
          <img src="/Frame 3-2.svg" alt="링크복사" />
          <p>링크 복사</p>
        </div>
      </div>
    </div>
  );
};

const ShareModal = ({ modal, modalHandler, title, content }) => {
  return modal
    ? createPortal(
        <>
          <Backdrop modalHandler={modalHandler} />
          <ModalOverlay
            modalHandler={modalHandler}
            title={title}
            content={content}
          />
        </>,
        document.body
      )
    : null;
};

export default ShareModal;
