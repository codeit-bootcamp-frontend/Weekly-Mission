"use client";

import styles from "@/layout/AddFolderModal.module.css";
import { useState } from "react";

import { createPortal } from "react-dom";

const folderObj = [
  {
    content: "코딩팁",
    link: "7개 링크",
  },
  {
    content: "채용 사이트",
    link: "12개 링크",
  },
  {
    content: "유용한 글",
    link: "30개 링크",
  },
  {
    content: "나만의 장소",
    link: "3개 링크",
  },
];

const Backdrop = ({
  modalHandler,
}: {
  modalHandler: (e: { preventDefault: () => void }) => void;
}) => {
  return <div onClick={modalHandler} className={styles.backdrop} />;
};

const ModalOverlay = ({
  modalHandler,
  title,
  content,
}: {
  modalHandler: (e: { preventDefault: () => void }) => void;
  title: string;
  content: string;
}) => {
  const [selectedFolder, setSelectedFolder] = useState("");
  const selectedFolderHandler = (
    e: { preventDefault: () => void },
    folder: string
  ) => {
    e.preventDefault();
    setSelectedFolder(folder);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.img}>
        <img src="/close.svg" onClick={modalHandler} />
      </div>
      <div className={styles.box}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
        {folderObj.map((folder) => (
          <div
            onClick={(e) => selectedFolderHandler(e, folder.content)}
            className={
              folder.content === selectedFolder ? styles.selected : undefined
            }
            key={folder.content}
          >
            <div>
              <span>{folder.content}</span>
              <span>{folder.link}</span>
            </div>
            {folder.content === selectedFolder && (
              <img src="/check.svg" alt="check" />
            )}
          </div>
        ))}
        <button>추가하기</button>
      </div>
    </div>
  );
};

const AddfolderModal = ({
  modal,
  modalHandler,
  title,
  content,
}: {
  modal: boolean;
  modalHandler: (e: { preventDefault: () => void }) => void;
  title: string;
  content: string;
}) => {
  return modal
    ? createPortal(
        <>
          <Backdrop modalHandler={modalHandler} />
          <ModalOverlay
            modalHandler={modalHandler}
            title={title}
            content={content}
          />
        </>,
        document.body
      )
    : null;
};

export default AddfolderModal;
