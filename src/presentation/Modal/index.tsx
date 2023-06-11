import styles from "./modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  modalTitle: string;
  modalSubTitle: string;
}

const Modal = ({ children, modalTitle, modalSubTitle }: ModalProps) => {
  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.contents}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{modalTitle}</h3>
            <h5 className={styles.subTitle}>{modalSubTitle}</h5>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
