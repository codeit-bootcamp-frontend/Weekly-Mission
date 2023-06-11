"use client";

import ModalLayout from "../ModalLayout";
import styles from "./DeleteLinkModal.module.scss";

interface IDeleteLinkModalProps {
  setOpenDeleteLinkModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLinkValue: string;
}

const DeleteLinkModal = ({
  setOpenDeleteLinkModal,
  selectedLinkValue,
}: IDeleteLinkModalProps) => {
  const handleClickDeleteLink = () => {
    // TODO: 해당 link를 폴더에서 삭제 기능
    setTimeout(() => {
      setOpenDeleteLinkModal(false);
    }, 500);
  };

  return (
    <ModalLayout
      portalId="delete-link-portal"
      handleClickCloseModal={() => setOpenDeleteLinkModal(false)}
    >
      <h3 className={styles.title}>링크 삭제</h3>
      <h4 className={styles.subTitle}>{selectedLinkValue}</h4>
      <button className={styles.deleteButton} onClick={handleClickDeleteLink}>
        삭제하기
      </button>
    </ModalLayout>
  );
};

export default DeleteLinkModal;
