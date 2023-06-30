"use client";

import { useState } from "react";

import Image from "next/image";

import { IFolder } from "@/types/linkbrary";

import DeleteFolderModal from "../Modals/DeleteFolderModal/DeleteFolderModal";
import EditFolderModal from "../Modals/EditFolderModal/EditFolderModal";
import ShareFolderModal from "../Modals/ShareFolderModal/ShareFolderModal";
import styles from "./CurrentFolderMenu.module.scss";

interface ICurrentFolderMenuItemProps {
  modalType: string;
  imgSrc: string;
  imgAlt: string;
  menuName: string;
  currentFolder: IFolder;
}

const CurrentFolderMenuItem = ({
  modalType,
  imgSrc,
  imgAlt,
  menuName,
  currentFolder,
}: ICurrentFolderMenuItemProps) => {
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
          currentFolder={currentFolder}
        />
      )}
      {openModal && modalType === "edit" && (
        <EditFolderModal
          handleCloseModal={() => setOpenModal(false)}
          currentFolder={currentFolder}
        />
      )}
      {openModal && modalType === "share" && (
        <ShareFolderModal
          handleCloseModal={() => setOpenModal(false)}
          currentFolder={currentFolder}
        />
      )}
    </>
  );
};

export default CurrentFolderMenuItem;
