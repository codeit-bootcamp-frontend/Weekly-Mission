"use client";

import styles from "@/layout/UpdateModal.module.css";

import { createPortal } from "react-dom";

const Backdrop = ({
  modalHandler,
}: {
  modalHandler: (e: { preventDefault: () => void }) => void;
}) => {
  return <div onClick={modalHandler} className={styles.backdrop} />;
};

const ModalOverlay = ({
  modalHandler,
  content,
  placeholder,
}: {
  modalHandler: (e: { preventDefault: () => void }) => void;
  content: string;
  placeholder: string;
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.img}>
        <img src="/close.svg" onClick={modalHandler} />
      </div>
      <div className={styles.content}>
        <p>{content}</p>
        <input placeholder={placeholder} />
        <button>변경하기</button>
      </div>
    </div>
  );
};

const UpdateModal = ({
  modal,
  modalHandler,
  content,
  placeholder,
}: {
  modal: boolean;
  modalHandler: (e: { preventDefault: () => void }) => void;
  content: string;
  placeholder: string;
}) => {
  return modal
    ? createPortal(
        <>
          <Backdrop modalHandler={modalHandler} />
          <ModalOverlay
            modalHandler={modalHandler}
            content={content}
            placeholder={placeholder}
          />
        </>,
        document.body
      )
    : null;
};

export default UpdateModal;
