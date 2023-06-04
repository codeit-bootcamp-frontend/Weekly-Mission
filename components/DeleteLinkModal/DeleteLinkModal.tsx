"use client";

import React, { useEffect } from "react";

import Image from "next/image";

import { allowScroll, preventScroll } from "lib/modal";

import styles from "./DeleteLinkModal.module.css";
import DeleteLinkPortalWrapper from "./DeleteLinkPortalWrapper";

interface IDeleteLinkModal {
  setOpenDeleteLinkModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLinkValue: string;
}

const DeleteLinkModal = ({
  setOpenDeleteLinkModal,
  selectedLinkValue,
}: IDeleteLinkModal) => {
  const handleClickDeleteLink = () => {
    // TODO: 해당 link를 폴더에서 삭제, 어떤 폴더인지 알아야 하므로 나중에 폴더 식별할 수 있는 Prop 추가하기
    const timer = setTimeout(() => {
      setOpenDeleteLinkModal(false);
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
    <DeleteLinkPortalWrapper>
      <div
        className={styles.overlay}
        onClick={() => setOpenDeleteLinkModal(false)}
      >
        <div
          className={styles.modalWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={styles.closeWrapper}
            onClick={() => setOpenDeleteLinkModal(false)}
          >
            <Image
              className={styles.image}
              fill
              src="/assets/modal-close.svg"
              alt="close modal"
            />
          </div>
          <div className={styles.contents}>
            <h3 className={styles.title}>링크 삭제</h3>
            <h4 className={styles.subTitle}>{selectedLinkValue}</h4>
            <button
              className={styles.deleteButton}
              onClick={handleClickDeleteLink}
            >
              삭제하기
            </button>
          </div>
        </div>
      </div>
    </DeleteLinkPortalWrapper>
  );
};

export default DeleteLinkModal;
