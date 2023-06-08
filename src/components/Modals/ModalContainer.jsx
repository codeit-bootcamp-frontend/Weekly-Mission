import Modal from "@/presentation/Modal";
import { useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal-container.module.css";

const ModalContainer = ({
  isOpen,
  onClose,
  children,
  modalTitle,
  modalSubTitle,
}) => {
  const overlayRef = useRef(null);

  const handleClickOutside = (event) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={handleClickOutside}
            ref={overlayRef}
          >
            <Modal
              onClose={onClose}
              modalTitle={modalTitle}
              modalSubTitle={modalSubTitle}
            >
              {children}
            </Modal>
          </div>,
          document.querySelector("#modal-root")
        )}
    </>
  );
};

export default ModalContainer;
