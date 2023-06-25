"use client";
import React, { ReactNode, Suspense } from "react";
import styles from "./MainContent.module.scss";
import FolderChip from "../FolderChip/FolderChip";
import { Folder } from "@/app/types/types";
import AddFolderBtn from "../AddFolderBtn/AddFolderBtn";
import FolderChipList from "../FolderChipList/FolderChipList";
import Loader from "@/app/components/Loader/Loader";
import { notFound } from "next/navigation";
import { RecoilRoot } from "recoil";

interface MainContentProps {
  params: { id?: string[] };
  userId: number;
  folderList: Folder[];
  children: ReactNode;
}

const MainContent = ({
  params,
  userId,
  folderList,
  children,
}: MainContentProps) => {
  const folderId = params.id?.[0] ?? "0";
  const folderName =
    folderId !== "0"
      ? folderList.find((folder) => folder.id === +folderId)?.name
      : "전체";
  if (!folderName) {
    notFound();
  }
  return (
    <RecoilRoot>
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
              style={{
                width: "100%",
                height: "152.63px",
                position: "relative",
              }}
            >
              <Loader />
            </div>
          }
        >
          {children}
        </Suspense>
      </div>
    </RecoilRoot>
  );
};

export default MainContent;
