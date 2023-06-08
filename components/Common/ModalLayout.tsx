"use clinet";

import Image from "next/image";

import styles from "./ModalLayout.module.scss";
import ModalPortalWrapper from "./ModalPortalWrapper";

const ModalLayout = ({
  portalId,
  handleClickCloseModal,
  children,
}: {
  portalId: string;
  handleClickCloseModal: () => void;
  children: React.ReactNode;
}) => {
  return (
    <ModalPortalWrapper id={portalId}>
      <div className={styles.overlay} onClick={handleClickCloseModal}>
        <div
          className={styles.modalWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.closeWrapper} onClick={handleClickCloseModal}>
            <Image
              className={styles.image}
              fill
              src="/assets/modal-close.svg"
              alt="close modal"
            />
          </div>
          <div className={styles.contents}>{children}</div>
        </div>
      </div>
    </ModalPortalWrapper>
  );
};

export default ModalLayout;
