import React from "react";
import styles from "./FolderInfo.module.css";

function FolderInfo({ folderData }) {
  return (
    folderData && (
      <header className={styles.headerFolder}>
        <div className={styles.ownerContainer}>
          <img
            className={styles.ownerImg}
            src={folderData.owner.profileImageSource}
            alt="폴더owner이미지"
          />
          <p className={styles.ownerName}>{`@${folderData.owner.name}`}</p>
        </div>
        <h1 className={styles.folderDataName}>{folderData.name}</h1>
      </header>
    )
  );
}

export default FolderInfo;
