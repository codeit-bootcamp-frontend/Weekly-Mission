import React, { Suspense } from "react";
import styles from "./MainContent.module.scss";
import FolderChip from "../FolderChip/FolderChip";
import { Folder } from "@/app/types/types";
import AddFolderBtn from "../AddFolderBtn/AddFolderBtn";
import FolderChipList from "../FolderChipList/FolderChipList";
import CardListContainer from "../CardListContainer/CardListContainer";
import Loader from "@/app/components/Loader/Loader";

export const fetchCache = "force-cache";

interface MainContentProps {
  params: { id?: string[] };
  userId: number;
  folderList: Folder[];
}

const MainContent = ({ params, userId, folderList }: MainContentProps) => {
  const folderId = params.id?.[0] ?? "0";

  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.chipListRow}>
        <ul className={styles.chipListContainer}>
          <li>
            <FolderChip href="/folder" label="전체" selected={!params.id} />
          </li>
          <FolderChipList folderList={folderList} folderId={+folderId} />
        </ul>
        <AddFolderBtn userId={`${userId}`} />
      </div>
      <Suspense
        fallback={
          <div
            style={{ width: "100%", height: "152.63px", position: "relative" }}
          >
            <Loader />
          </div>
        }
      >
        <CardListContainer
          folderId={+folderId}
          userId={userId}
          folderList={folderList}
        />
      </Suspense>
    </div>
  );
};

export default MainContent;
