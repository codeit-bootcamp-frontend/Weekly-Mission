import Image from "next/image";
import styles from "./modal.module.css";

const Modal = ({ children, modalTitle }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.closeIconContainer}>
          <Image
            className={styles.closeIcon}
            src="/assets/images/modal-close-icon.svg"
            alt="close modal"
            fill
          />
        </div>
        <div className={styles.contents}>
          <h3 className={styles.title}>{modalTitle}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
