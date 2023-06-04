import React from "react";
import Image from "next/image";
import styles from "./FolderInfo.module.css";

function FolderInfo({ folder }) {
  const {
    owner: { profileImageSource = "/assets/images/users/codeit-avatar.png", name = "@코드잇" } = {},
    name: folderName,
  } = folder || {};

  return (
    <div className={styles.userInfo}>
      <div className={styles.codeitAvatar}>
        <Image
          src={profileImageSource}
          alt="Avatar"
          width={64}
          height={64}
        />
      </div>
      <p className={styles.userName}>{name}</p>
      <h1 className={styles.pageHeading}>{folderName}</h1>
    </div>
  );
}

export default FolderInfo;
