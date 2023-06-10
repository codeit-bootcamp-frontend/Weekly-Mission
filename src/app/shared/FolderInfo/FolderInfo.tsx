import React from "react";
import styles from "./FolderInfo.module.scss";
import Image from "next/image";

export interface FolderInfoProps {
  ownerName: string;
  folderName: string;
  profileImgSrc?: string;
}

const DEFAULT_PROFILE_IMG_SRC = "/avatar.png";

const FolderInfo: React.FC<FolderInfoProps> = ({
  ownerName,
  folderName,
  profileImgSrc = DEFAULT_PROFILE_IMG_SRC,
}: FolderInfoProps) => {
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileImgBox}>
          <Image src={profileImgSrc} alt="avatar" fill sizes="10vw" />
        </div>
        <p className={styles.username}>{"@" + ownerName}</p>
      </div>
      <h1 className={styles.title}>{folderName}</h1>
    </div>
  );
};

export default FolderInfo;
