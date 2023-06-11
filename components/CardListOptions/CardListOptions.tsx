"use client";

import { useState } from "react";

import Image from "next/image";

import DeleteFolderModal from "@/components/Modals/DeleteFolderModal/DeleteFolderModal";
import EditFolderModal from "@/components/Modals/EditFolderModal/EditFolderModal";
import ShareFolderModal from "@/components/Modals/ShareFolderModal/ShareFolderModal";
import { IFolder } from "@/types/linkbrary";

import styles from "./CardListOptions.module.scss";

interface ICardListOptionsProps {
  currentFolder: IFolder;
}

const CardListOptions = ({ currentFolder }: ICardListOptionsProps) => {
  // TODO: 카카오 공유하기에 들어갈 제목, 설명, 이미지 주소 필요.

  const [openShareFolderModal, setOpenShareFolderModal] =
    useState<boolean>(false);
  const [openEditFolderModal, setOpenEditFolderModal] =
    useState<boolean>(false);
  const [openDeleteFolderModal, setOpenDeleteFolderModal] =
    useState<boolean>(false);

  return (
    <>
      <div className={styles.optionsWrapper}>
        <div className={styles.folderTitle}>{currentFolder.name}</div>
        <div className={styles.modalList}>
          <div
            className={styles.button}
            onClick={() => setOpenShareFolderModal(true)}
          >
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
          <div
            className={styles.button}
            onClick={() => setOpenEditFolderModal(true)}
          >
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
          <div
            className={styles.button}
            onClick={() => setOpenDeleteFolderModal(true)}
          >
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
      {openDeleteFolderModal && (
        <DeleteFolderModal
          setOpenDeleteFolderModal={setOpenDeleteFolderModal}
          currentFolderName={currentFolder.name}
        />
      )}
      {openEditFolderModal && (
        <EditFolderModal
          setOpenEditFolderModal={setOpenEditFolderModal}
          currentFolderName={currentFolder.name}
        />
      )}
      {openShareFolderModal && (
        <ShareFolderModal
          setOpenShareFolderModal={setOpenShareFolderModal}
          currentFolderName={currentFolder.name}
        />
      )}
    </>
  );
};

export default CardListOptions;
