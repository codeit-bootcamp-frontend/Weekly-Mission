import React from "react";
import Image from "next/image";
import styles from "./folder-header.module.css";
const FolderHeader = ({ currentTab }) => {
  return (
    <div className={styles.folderHeaderContainer}>
      <div className={styles.folderTitle}>{currentTab}</div>
      <div className={styles.folderHeaderOptionsContainer}>
        <div className={styles.button}>
          <div className={styles.iconContainer}>
            <Image
              fill
              className={styles.icon}
              src="/assets/images/share-modal.svg"
              alt="share modal"
            />
          </div>
          <span className={styles.text}>공유</span>
        </div>
        <div className={styles.button}>
          <div className={styles.iconContainer}>
            <Image
              fill
              className={styles.icon}
              src="/assets/images/edit-modal.svg"
              alt="edit modal"
            />
          </div>
          <span className={styles.text}>이름 변경</span>
        </div>
        <div className={styles.button}>
          <div className={styles.iconContainer}>
            <Image
              fill
              className={styles.icon}
              src="/assets/images/delete-folder-modal.svg"
              alt="delete folder modal"
            />
          </div>
          <span className={styles.text}>삭제</span>
        </div>
      </div>
    </div>
  );
};

export default FolderHeader;
