import React, { useEffect, useState } from "react";
import styles from "./FolderInfo.module.css";
import { getFolderData } from "../api";

function FolderInfo() {
  const [folder, setFolder] = useState(null);

  const applyFolderInfoData = async () => {
    const folderData = await getFolderData();
    setFolder(folderData);
  };

  useEffect(() => {
    applyFolderInfoData();
  }, []);

  return (
    folder && (
      <header className={styles.headerFolder}>
        <div className={styles.ownerContainer}>
          <img
            className={styles.ownerImg}
            src={folder.owner.profileImageSource}
            alt="폴더owner이미지"
          />
          <p className={styles.ownerName}>{`@${folder.owner.name}`}</p>
        </div>
        <h1 className={styles.folderName}>{folder.name}</h1>
      </header>
    )
  );
}

export default FolderInfo;
