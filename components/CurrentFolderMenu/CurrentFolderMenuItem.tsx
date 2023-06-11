"use client";

import { useState } from "react";

import Image from "next/image";

import DeleteFolderModal from "../Modals/DeleteFolderModal/DeleteFolderModal";
import EditFolderModal from "../Modals/EditFolderModal/EditFolderModal";
import ShareFolderModal from "../Modals/ShareFolderModal/ShareFolderModal";
import styles from "./CurrentFolderMenu.module.scss";

interface ICurrentFolderMenuItem {
  modalType: string;
  currentFolderName: string;
  imgSrc: string;
  imgAlt: string;
  menuName: string;
}

const CurrentFolderMenuItem = ({
  modalType,
  currentFolderName,
  imgSrc,
  imgAlt,
  menuName,
}: ICurrentFolderMenuItem) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <div className={styles.button} onClick={() => setOpenModal(true)}>
        <div className={styles.imageWrapper}>
          <Image
            fill
            className={styles.image}
            src={`/assets/${imgSrc}`}
            alt={imgAlt}
          />
        </div>
        <span className={styles.text}>{menuName}</span>
      </div>
      {openModal && modalType === "delete" && (
        <DeleteFolderModal
          handleCloseModal={() => setOpenModal(false)}
          currentFolderName={currentFolderName}
        />
      )}
      {openModal && modalType === "edit" && (
        <EditFolderModal
          handleCloseModal={() => setOpenModal(false)}
          currentFolderName={currentFolderName}
        />
      )}
      {openModal && modalType === "share" && (
        <ShareFolderModal
          handleCloseModal={() => setOpenModal(false)}
          currentFolderName={currentFolderName}
        />
      )}
    </>
  );
};

export default CurrentFolderMenuItem;
