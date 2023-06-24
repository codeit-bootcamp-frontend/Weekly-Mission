"use client";

import { IFolder } from "@/types/linkbrary";

import Fab from "./Fab";
import FolderChip from "./FolderChip";
import styles from "./FolderChipField.module.scss";

interface IFolderChipFieldProps {
  userId: number;
  folders: IFolder[];
  currentTab: number;
  inView: boolean | null;
  isLinks: boolean;
  isTransition: boolean;
}

const FolderChipField = ({
  userId,
  folders,
  currentTab,
  inView,
  isLinks,
  isTransition,
}: IFolderChipFieldProps) => {
  return (
    <div className={styles.folderChipFieldWrapper}>
      <div className={styles.chipWrapper}>
        {folders.map((folder) => {
          return (
            <FolderChip
              key={folder.id}
              toRoute={folder.id}
              name={folder.name}
              isSelected={currentTab === folder.id}
            />
          );
        })}
      </div>
      <Fab
        userId={userId}
        inView={inView}
        isLinks={isLinks}
        isTransition={isTransition}
      />
    </div>
  );
};

export default FolderChipField;
