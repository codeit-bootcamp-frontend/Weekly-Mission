"use client";

import { useState } from "react";

import Image from "next/image";

import AddFolderModal from "@/components/Modals/AddFolderModal/AddFolderModal";
import { IFolder } from "@/types/linkbrary";

import styles from "./FolderList.module.scss";
import FolderListItem from "./FolderListItem";

interface IFolderListProps {
  folders: IFolder[];
  currentTab: number;
  inView: boolean | null;
  isLinks: number;
}

const FolderList = ({
  folders,
  currentTab,
  inView,
  isLinks,
}: IFolderListProps) => {
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
        {folders.map((folder) => {
          return (
            <FolderListItem
              key={folder.id}
              toRoute={folder.id}
              name={folder.name}
              isSelected={currentTab === folder.id}
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
