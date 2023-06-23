"use client";

import { IFolder } from "@/types/linkbrary";

import styles from "./CurrentFolderMenu.module.scss";
import CurrentFolderMenuItem from "./CurrentFolderMenuItem";

interface ICurrentFolderMenuProps {
  currentFolder: IFolder;
}

const CurrentFolderMenu = ({ currentFolder }: ICurrentFolderMenuProps) => {
  return (
    <>
      <div className={styles.currentFolderMenuWrapper}>
        <div className={styles.folderTitle}>{currentFolder.name}</div>
        <div className={styles.menuWrapper}>
          <CurrentFolderMenuItem
            modalType="share"
            imgSrc="share-modal.svg"
            imgAlt="Folder Share Modal"
            menuName="공유"
            currentFolder={currentFolder}
          />

          {currentFolder.id !== 0 && currentFolder.id !== 41 && (
            <CurrentFolderMenuItem
              modalType="edit"
              imgSrc="edit-modal.svg"
              imgAlt="Folder Edit Modal"
              menuName="이름 변경"
              currentFolder={currentFolder}
            />
          )}
          {currentFolder.id !== 0 && currentFolder.id !== 41 && (
            <CurrentFolderMenuItem
              modalType="delete"
              imgSrc="delete-folder-modal.svg"
              imgAlt="Folder Delete Modal"
              menuName="삭제"
              currentFolder={currentFolder}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CurrentFolderMenu;
