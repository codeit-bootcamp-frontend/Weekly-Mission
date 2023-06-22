"use client";

import Image from "next/image";

import styles from "./ShareFolderModal.module.scss";

interface IShareButtonProps {
  handleClickShare: () => void;
  imgName: string;
  imgAlt: string;
  shareName: string;
}

const ShareButton = ({
  handleClickShare,
  imgName,
  imgAlt,
  shareName,
}: IShareButtonProps) => {
  return (
    <button className={styles.button} onClick={handleClickShare}>
      <div className={styles.imageWrapper}>
        <Image
          fill
          className={styles.image}
          src={`/assets/${imgName}`}
          alt={imgAlt}
        />
      </div>
      <span className={styles.text}>{shareName}</span>
    </button>
  );
};

export default ShareButton;
