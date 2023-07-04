import React from "react";
import CardList from "@/components/CardList/CardList";
import { userId } from "@/utils/common.api";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import FolderHeader from "@/components/FolderHeader/FolderHeader";
import styles from "@/styles/folder.module.css";

function FolderPage({ params }: { params: { [key: string]: string } }) {
  const folderId = params.slug;

  return (
    <>
      <div className={styles.wrapper}>
        <FolderMenu currentTab={folderId} />
        <FolderHeader currentTabId={Number(folderId)} />
      </div>
      <div className={styles.cardWrapper}>
        <CardList cardOwnerId={userId} folderId={folderId} />
      </div>
    </>
  );
}

export default FolderPage;
