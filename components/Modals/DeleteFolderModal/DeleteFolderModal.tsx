"use clinet";

import ModalLayout from "../ModalLayout";
import styles from "./DeleteFolderModal.module.scss";

interface IDeleteFolderModal {
  setOpenDeleteFolderModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentFolderName: string;
}

const DeleteFolderModal = ({
  setOpenDeleteFolderModal,
  currentFolderName,
}: IDeleteFolderModal) => {
  const handleClickDeleteFolder = () => {
    // TODO: 해당 폴더를 삭제
    const timer = setTimeout(() => {
      setOpenDeleteFolderModal(false);
      clearTimeout(timer);
    }, 500);
  };

  return (
    <ModalLayout
      portalId="delete-folder-portal"
      handleClickCloseModal={() => setOpenDeleteFolderModal(false)}
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
