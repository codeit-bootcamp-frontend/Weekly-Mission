"use client";

import styles from "@layout/DeleteModal.module.css";

import { createPortal } from "react-dom";

const Backdrop = ({ modalHandler }) => {
  return <div onClick={modalHandler} className={styles.backdrop} />;
};

const ModalOverlay = ({ modalHandler, title, placeholder, content }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.img}>
        <img src="/close.svg" onClick={modalHandler} />
      </div>
      <div className={styles.content}>
        <p>{title}</p>
        <p className={styles.content}>{content}</p>
        <button>변경하기</button>
      </div>
    </div>
  );
};

const DeleteModal = ({ modal, modalHandler, title, placeholder, content }) => {
  return modal
    ? createPortal(
        <>
          <Backdrop modalHandler={modalHandler} />
          <ModalOverlay
            modalHandler={modalHandler}
            title={title}
            placeholder={placeholder}
            content={content}
          />
        </>,
        document.body
      )
    : null;
};

export default DeleteModal;
