import React from "react";
import styles from "./FolderInfo.module.css";
import ownerImg from "/src/assets/owner.png";

function FolderInfo() {
  return (
    <header className={styles.headerFolder}>
      <div className={styles.ownerContainer}>
        <img className={styles.ownerImg} src={ownerImg} alt="폴더owner이미지" />
        <p className={styles.ownerName}>@코드잇</p>
      </div>
      <h1 className={styles.folderName}>⭐️ 즐겨찾기</h1>
    </header>
  );
}

export default FolderInfo;
