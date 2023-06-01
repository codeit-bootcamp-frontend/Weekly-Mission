"use client";

import React, { useState } from "react";

import Image from "next/image";

import styles from "./addLink.module.css";

const AddLink = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmitOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmitOpenModal}>
        <div className={styles.linkWrapper}>
          <div className={styles.linkIconWrapper}>
            <Image
              fill
              alt="add link"
              src="/assets/folder-link.svg"
              className={styles.image}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="링크를 추가해 보세요"
            />
          </div>
        </div>
        <button className={styles.button} type="submit">
          추가하기
        </button>
      </form>
    </div>
  );
};

export default AddLink;
