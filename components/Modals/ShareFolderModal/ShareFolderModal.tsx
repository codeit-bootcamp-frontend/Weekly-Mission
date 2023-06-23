"use client";

import { IFolder } from "@/types/linkbrary";

import ModalLayout from "../ModalLayout";
import ShareButtonContainer from "./ShareButtonContainer";
import styles from "./ShareFolderModal.module.scss";

interface IShareFolderModalProps {
  handleCloseModal: () => void;
  currentFolder: IFolder;
}

const ShareFolderModal = ({
  handleCloseModal,
  currentFolder,
}: IShareFolderModalProps) => {
  const {
    id: currentFolderId,
    name: currentFolderName,
    user_id: userId,
  } = currentFolder;

  console.log(currentFolderId, currentFolderName, userId);

  // TODO: 폴더 공유 관련 api 처리
  return (
    <ModalLayout
      portalId="share-folder-portal"
      handleClickCloseModal={handleCloseModal}
    >
      <h3 className={styles.title}>폴더 공유</h3>
      <h4 className={styles.subTitle}>{currentFolderName}</h4>
      <ShareButtonContainer
        currentUserId={userId}
        currentFolderId={currentFolderId}
        handleClickCloseModal={handleCloseModal}
      />
    </ModalLayout>
  );
};

export default ShareFolderModal;
