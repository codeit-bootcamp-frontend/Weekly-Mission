import React, { useState } from "react";
import Image from "next/image";
import styles from "./folder-header.module.css";
import EditFolderModal from "../Modals/EditFolderModal";
const FolderHeader = ({ currentTab }) => {
  const [isFolderEditModalOpen, setIsFolderEditModalOpen] = useState(false);
  const [isFolderDeleteModalOpen, setIsFolderDeleteModalOpen] = useState(false);
  const [isFolderShareModalOpen, setIsFolderShareModalOpen] = useState(false);

  const handleShareClick = () => {
    setIsFolderEditModalOpen(!isFolderEditModalOpen);
  };
  const handleEditClick = () => {};
  const handleDeleteClick = () => {};

  return (
    <>
      <div className={styles.folderHeaderContainer}>
        <div className={styles.folderTitle}>{currentTab}</div>
        <div className={styles.folderHeaderOptionsContainer}>
          <button className={styles.button} onClick={handleShareClick}>
            <div className={styles.iconContainer}>
              <Image
                fill
                className={styles.icon}
                src="/assets/images/share-modal.svg"
                alt="share modal"
              />
            </div>
            <span className={styles.text}>공유</span>
          </button>
          <button className={styles.button} onClick={handleEditClick}>
            <div className={styles.iconContainer}>
              <Image
                fill
                className={styles.icon}
                src="/assets/images/edit-modal.svg"
                alt="edit modal"
              />
            </div>
            <span className={styles.text}>이름 변경</span>
          </button>
          <button className={styles.button} onClick={handleDeleteClick}>
            <div className={styles.iconContainer}>
              <Image
                fill
                className={styles.icon}
                src="/assets/images/delete-folder-modal.svg"
                alt="delete folder modal"
              />
            </div>
            <span className={styles.text}>삭제</span>
          </button>
        </div>
      </div>
      <EditFolderModal
        isFolderEditModalOpen={isFolderEditModalOpen}
        onClose={() => setIsFolderEditModalOpen(false)}
      />
    </>
  );
};

export default FolderHeader;
