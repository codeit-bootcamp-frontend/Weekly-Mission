"use clinet";

import React, { useEffect } from "react";

import Image from "next/image";

import { allowScroll, preventScroll } from "@/lib/modal";

import styles from "./DeleteFolderModal.module.css";
import DeleteFolderPortalWrapper from "./DeleteFolderPortalWrapper";

interface IDeleteFolderModal {
  setOpenDeleteFolderModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentFolderName: string;
}

const DeleteFolderModal = ({
  setOpenDeleteFolderModal,
  currentFolderName,
}: IDeleteFolderModal) => {
  const handleClickDeleteFolder = () => {
    // TODO: 해당 폴더를 삭제
    const timer = setTimeout(() => {
      setOpenDeleteFolderModal(false);
      clearTimeout(timer);
    }, 500);
  };

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <DeleteFolderPortalWrapper>
      <div
        className={styles.overlay}
        onClick={() => setOpenDeleteFolderModal(false)}
      >
        <div
          className={styles.modalWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={styles.closeWrapper}
            onClick={() => setOpenDeleteFolderModal(false)}
          >
            <Image
              className={styles.image}
              fill
              src="/assets/modal-close.svg"
              alt="close modal"
            />
          </div>
          <div className={styles.contents}>
            <h3 className={styles.title}>폴더 삭제</h3>
            <h4 className={styles.subTitle}>{currentFolderName}</h4>
            <button
              className={styles.deleteButton}
              onClick={handleClickDeleteFolder}
            >
              삭제하기
            </button>
          </div>
        </div>
      </div>
    </DeleteFolderPortalWrapper>
  );
};

export default DeleteFolderModal;
