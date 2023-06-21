"use client";

import React from "react";
import styles from "./ShareFolder.module.scss";
import Image from "next/image";

type folderObj = {
  title: string;
  link: string;
};

interface ShareFoldereProps {
  folderInfo: folderObj;
}

const ShareFolder = ({ folderInfo }: ShareFoldereProps) => {
  const handleClickShare = (target: folderObj) => {
    console.log("shared", target.title, target.link);
  };

  return (
    <div className={styles.shareLinksContainer}>
      <div
        className={styles.linkContainer}
        onClick={() => {
          handleClickShare(folderInfo);
        }}
      >
        <div className={styles.iconBox}>
          <Image src="/share-kakao.svg" alt="kakao icon" fill />
        </div>
        <p className={styles.linkLabel}>카카오톡</p>
      </div>
      <div
        className={styles.linkContainer}
        onClick={() => {
          handleClickShare(folderInfo);
        }}
      >
        <div className={styles.iconBox}>
          <Image src="/share-facebook.svg" alt="facebook icon" fill />
        </div>
        <p className={styles.linkLabel}>페이스북</p>
      </div>
      <div
        className={styles.linkContainer}
        onClick={() => {
          handleClickShare(folderInfo);
        }}
      >
        <div className={styles.iconBox}>
          <Image src="/share-copy-link.svg" alt="link icon" fill />
        </div>
        <p className={styles.linkLabel}>링크 복사</p>
      </div>
    </div>
  );
};

export default ShareFolder;
