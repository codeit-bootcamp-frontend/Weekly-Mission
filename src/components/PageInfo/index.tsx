import React from "react";
import Image from "next/image";
import styles from "./PageInfo.module.css";
import { User } from "$/types";

interface PageInfoProps {
  folder: string;
  user?: User;
}

function PageInfo({ folder, user }: PageInfoProps) {
  const {
    image_source: profileImageSource = "/assets/images/users/codeit-avatar.png",
    name = "@코드잇",
  } = user || {};

  return (
    <div className={styles.userInfo}>
      <div className={styles.codeitAvatar}>
        <Image src={profileImageSource} alt="Avatar" width={64} height={64} />
      </div>
      <p className={styles.userName}>{name}</p>
      <h1 className={styles.pageHeading}>{folder}</h1>
    </div>
  );
}

export default PageInfo;
