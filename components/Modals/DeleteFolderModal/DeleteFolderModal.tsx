"use clinet";

import ModalLayout from "../ModalLayout";
import styles from "./DeleteFolderModal.module.scss";

interface IDeleteFolderModalProps {
  handleCloseModal: () => void;
  currentFolderName: string;
}

const DeleteFolderModal = ({
  handleCloseModal,
  currentFolderName,
}: IDeleteFolderModalProps) => {
  const handleClickDeleteFolder = () => {
    // TODO: 해당 폴더 삭제 기능
    setTimeout(() => {
      handleCloseModal();
    }, 500);
  };

  return (
    <ModalLayout
      portalId="delete-folder-portal"
      handleClickCloseModal={handleCloseModal}
    >
      <h3 className={styles.title}>폴더 삭제</h3>
      <h4 className={styles.subTitle}>{currentFolderName}</h4>
      <button className={styles.deleteButton} onClick={handleClickDeleteFolder}>
        삭제하기
      </button>
    </ModalLayout>
  );
};

export default DeleteFolderModal;
