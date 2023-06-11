import Modal from "@/presentation/Modal";
import { useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal-container.module.css";
import Image from "next/image";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalTitle: string;
  modalSubTitle: string;
}

const ModalContainer = ({
  children,
  isOpen,
  onClose,
  modalTitle,
  modalSubTitle,
}: ModalContainerProps) => {
  const overlayRef = useRef(null);

  const handleClickOutside = (event: React.MouseEvent) => {
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
            <Modal modalTitle={modalTitle} modalSubTitle={modalSubTitle}>
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
          document.querySelector("#modal-root") as HTMLElement
        )}
    </>
  );
};

export default ModalContainer;
