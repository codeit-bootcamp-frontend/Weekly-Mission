"use client";

import ModalLayout from "../ModalLayout";
import ShareButtonContainer from "./ShareButtonContainer";
import styles from "./ShareFolderModal.module.scss";

interface IShareFolderModalProps {
  handleCloseModal: () => void;
  currentFolderName: string;
}

const ShareFolderModal = ({
  handleCloseModal,
  currentFolderName,
}: IShareFolderModalProps) => {
  // TODO: 폴더 공유 관련 api 처리
  return (
    <ModalLayout
      portalId="share-folder-portal"
      handleClickCloseModal={handleCloseModal}
    >
      <h3 className={styles.title}>폴더 공유</h3>
      <h4 className={styles.subTitle}>{currentFolderName}</h4>
      <ShareButtonContainer handleClickCloseModal={handleCloseModal} />
    </ModalLayout>
  );
};

export default ShareFolderModal;
