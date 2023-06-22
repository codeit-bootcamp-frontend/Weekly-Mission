"use client";

import { useState } from "react";

import Image from "next/image";

import AddFolderModal from "../Modals/AddFolderModal/AddFolderModal";
import styles from "./FolderChipField.module.scss";

interface IFabProps {
  inView: boolean | null;
  isLinks: boolean;
}

const Fab = ({ inView, isLinks }: IFabProps) => {
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
          styles[`${addPosition(inView, isLinks)}`]
        }`}
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
        <AddFolderModal setOpenAddFolderModal={setOpenAddFolderModal} />
      )}
    </>
  );
};

export default Fab;
