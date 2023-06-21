"use client";

import styles from "@/layout/DeleteModal.module.css";

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
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
        <button>삭제하기</button>
      </div>
    </div>
  );
};

const DeleteModal = ({ modal, modalHandler, title, content }) => {
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

export default DeleteModal;
