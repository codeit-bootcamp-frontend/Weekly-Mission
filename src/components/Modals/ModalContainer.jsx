import Modal from "@/presentation/Modal";
import { useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal-container.module.css";
import Image from "next/image";

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
              <div className={styles.closeIconContainer} onClick={onClose}>
                <Image
                  className={styles.closeIcon}
                  src="/assets/images/modal-close-icon.svg"
                  alt="close modal"
                  fill
                />
              </div>
              {children}
            </Modal>
          </div>,
          document.querySelector("#modal-root")
        )}
    </>
  );
};

export default ModalContainer;
