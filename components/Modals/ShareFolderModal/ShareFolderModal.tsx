"use client";

import ModalLayout from "../ModalLayout";
import ShareButtonContainer from "./ShareButtonContainer";
import styles from "./ShareFolderModal.module.scss";

interface IShareFolderModalProps {
  setOpenShareFolderModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentFolderName: string;
}

const ShareFolderModal = ({
  setOpenShareFolderModal,
  currentFolderName,
}: IShareFolderModalProps) => {
  // TODO: 폴더 공유 관련 api 처리
  return (
    <ModalLayout
      portalId="share-folder-portal"
      handleClickCloseModal={() => setOpenShareFolderModal(false)}
    >
      <h3 className={styles.title}>폴더 공유</h3>
      <h4 className={styles.subTitle}>{currentFolderName}</h4>
      <ShareButtonContainer setOpenShareFolderModal={setOpenShareFolderModal} />
    </ModalLayout>
  );
};

export default ShareFolderModal;
