"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./folder-header.module.css";
import EditFolderModal from "../Modals/EditFolderModal";
import ShareModal from "../Modals/ShareModal";
import DeleteFolderModal from "../Modals/DeleteFolderModal";
import CurrentTabContext from "$/src/contexts/CurrentTabContext";

const FolderHeader = ({ currentTabId }: { currentTabId?: number }) => {
  const [isFolderEditModalOpen, setIsFolderEditModalOpen] = useState(false);
  const [isFolderDeleteModalOpen, setIsFolderDeleteModalOpen] = useState(false);
  const [isFolderShareModalOpen, setIsFolderShareModalOpen] = useState(false);
  const { currentFolderTitle, setCurrentFolderTitle } =
    useContext(CurrentTabContext);

  const handleEditClick = () => {
    setIsFolderEditModalOpen(!isFolderEditModalOpen);
  };
  const handleShareClick = () => {
    setIsFolderShareModalOpen(!isFolderShareModalOpen);
  };
  const handleDeleteClick = () => {
    setIsFolderDeleteModalOpen(!isFolderDeleteModalOpen);
  };

  return (
    <>
      <div className={styles.folderHeaderContainer}>
        <div className={styles.folderTitle}>{currentFolderTitle}</div>
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
        currentFolderTitle={currentFolderTitle}
        currentTabId={currentTabId}
      />
      <ShareModal
        isFolderShareModalOpen={isFolderShareModalOpen}
        onClose={() => setIsFolderShareModalOpen(false)}
        currentFolderTitle={currentFolderTitle}
      />
      <DeleteFolderModal
        currentTabId={currentTabId}
        isFolderDeleteModalOpen={isFolderDeleteModalOpen}
        onClose={() => setIsFolderDeleteModalOpen(false)}
        currentFolderTitle={currentFolderTitle}
      />
    </>
  );
};

export default FolderHeader;
