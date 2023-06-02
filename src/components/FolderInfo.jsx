import React from "react";
import styles from "./FolderInfo.module.css";

function FolderInfo({ folder }) {
  return (
    <header className={styles.headerFolder}>
      <div className={styles.ownerContainer}>
        <img
          className={styles.ownerImg}
          src={folder.owner.profileImageSource}
          alt="폴더 사용자 프로필 이미지"
        />
        <p className={styles.ownerName}>{`@${folder.owner.name}`}</p>
      </div>
      <h1 className={styles.folderDataName}>{folder.name}</h1>
    </header>
  );
}

export default FolderInfo;
