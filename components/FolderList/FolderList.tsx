"use client";

import React, { useState } from "react";

import Image from "next/image";

import AddFolderModal from "@/components/AddFolderModal/AddFolderModal";

import styles from "./FolderList.module.css";
import FolderListItem from "./FolderListItem";

interface IFolderList {
  folders: { id: number; name: string }[];
  currentTab: number;
}

const FolderList = ({ folders, currentTab }: IFolderList) => {
  const [openAddFolderModal, setOpenAddFolderModal] = useState<boolean>(false);

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
        className={styles.buttonWrapper}
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
