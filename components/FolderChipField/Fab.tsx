"use client";

import { useState } from "react";

import Image from "next/image";

import AddFolderModal from "../Modals/AddFolderModal/AddFolderModal";
import styles from "./FolderChipField.module.scss";

interface IFabProps {
  userId: number;
  inView: boolean | null;
  isLinks: boolean;
  isTransition: boolean;
}

const Fab = ({ userId, inView, isLinks, isTransition }: IFabProps) => {
  const [openAddFolderModal, setOpenAddFolderModal] = useState<boolean>(false);

  const addPosition = (inView: boolean | null, isLinks: boolean) => {
    if (inView && !isLinks) return "upperFooter";
    else if (inView && isLinks) return "upperBottom";
    else if (inView === false) return "upperAddLink";
  };

  return (
    <>
      <div
        className={`${styles.buttonWrapper} ${
          styles[`${isTransition ? "tr" : "not-tr"}`]
        } ${styles[`${addPosition(inView, isLinks)}`]}`}
        onClick={() => setOpenAddFolderModal(true)}
      >
        <span className={styles.buttonText}>폴더 추가</span>
        <div className={styles.ImageWrapper}>
          <Image
            className={styles.image}
            fill
            src="/assets/add-folder.svg"
            alt="add folder"
          />
        </div>
      </div>

      {openAddFolderModal && (
        <AddFolderModal
          userId={userId}
          setOpenAddFolderModal={setOpenAddFolderModal}
        />
      )}
    </>
  );
};

export default Fab;
