"use client";

import { useState } from "react";

import Image from "next/image";

import AddFolderModal from "components/AddFolderModal/AddFolderModal";

import styles from "./FolderList.module.scss";
import FolderListItem from "./FolderListItem";

interface IFolderList {
  folders: { id: number; name: string }[];
  currentTab: number;
  inView: boolean | null;
  isLinks: number;
}

const FolderList = ({ folders, currentTab, inView, isLinks }: IFolderList) => {
  const [openAddFolderModal, setOpenAddFolderModal] = useState<boolean>(false);

  const addPosition = (inView: boolean | null, isLinks: number) => {
    if (inView === true && isLinks === 0) return "upperFooter";
    else if (inView === true && isLinks !== 0) return "upperBottom";
    else if (inView === false && (isLinks !== 0 || isLinks === 0))
      return "upperAddLink";
  };

  return (
    <div className={styles.folderListWrapper}>
      <div className={styles.tabList}>
        {folders.map((folder, index) => {
          return (
            <FolderListItem
              key={folder.id}
              toRoute={folder.id}
              name={folder.name}
              isSelected={currentTab === index}
            />
          );
        })}
      </div>
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
    </div>
  );
};

export default FolderList;
