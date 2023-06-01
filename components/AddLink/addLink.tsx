"use client";

import React, { useRef, useState } from "react";

import Image from "next/image";

import styles from "./addLink.module.css";

const AddLink = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState<string>("");
  const linkInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitOpenModal = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (linkInputRef.current) {
      // TODO: 모달창 열고 모달창에서 onClick일 때 데이터 전송하기
      setSelectedLink(linkInputRef.current.value);
      setIsOpen(!isOpen);
    }
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
              ref={linkInputRef}
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
