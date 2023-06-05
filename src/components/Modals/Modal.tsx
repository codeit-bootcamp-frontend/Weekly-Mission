import React from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";

export interface ModalProps {
  type: string;
  modalRef: React.RefObject<HTMLDialogElement>;
  title: string;
  subtitle?: string;
  ui?: React.ReactNode;
  proceedBtnText?: string;
  onClickProceed?: (() => {}) | (() => void);
  onClose: () => void;
}

const Modal = ({
  type,
  modalRef,
  title,
  subtitle,
  ui,
  proceedBtnText,
  onClickProceed,
  onClose,
}: ModalProps) => {
  return (
    <dialog
      className={styles.modalContainer}
      id="modal"
      ref={modalRef}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div
        className={styles.closeIconBox}
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <Image src="/close-modal-icon.svg" alt="close modal" fill />
      </div>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
      {ui && <div className={styles.uiContainer}>{ui}</div>}
      {proceedBtnText && (
        <button
          className={`${styles.proceedBtn} ${styles[`${type}`]}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (onClickProceed) onClickProceed();
            onClose();
          }}
        >
          {proceedBtnText}
        </button>
      )}
    </dialog>
  );
};

export default Modal;
