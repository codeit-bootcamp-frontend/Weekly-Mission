"use client";

import React from "react";

import Image from "next/image";

import styles from "./CardListOptions.module.css";

interface ICardListOptions {
  currentFolder: {
    id: number;
    name: string;
  };
}

const CardListOptions = ({ currentFolder }: ICardListOptions) => {
  return (
    <div className={styles.optionsWrapper}>
      <div className={styles.folderTitle}>{currentFolder.name}</div>
      <div className={styles.modalList}>
        <div className={styles.button}>
          <div className={styles.imageWrapper}>
            <Image
              fill
              className={styles.image}
              src="/assets/share-modal.svg"
              alt="share modal"
            />
          </div>
          <span className={styles.text}>공유</span>
        </div>
        <div className={styles.button}>
          <div className={styles.imageWrapper}>
            <Image
              fill
              className={styles.image}
              src="/assets/edit-modal.svg"
              alt="edit modal"
            />
          </div>
          <span className={styles.text}>이름 변경</span>
        </div>
        <div className={styles.button}>
          <div className={styles.imageWrapper}>
            <Image
              fill
              className={styles.image}
              src="/assets/delete-folder-modal.svg"
              alt="delete folder modal"
            />
          </div>
          <span className={styles.text}>삭제</span>
        </div>
      </div>
    </div>
  );
};

export default CardListOptions;
