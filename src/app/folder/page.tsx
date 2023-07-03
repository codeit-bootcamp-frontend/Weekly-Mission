import React from "react";
import CardList from "@/components/CardList/CardList";
import { userId } from "@/utils/common.api";
import styles from "@/styles/folder.module.css";
import FolderHeader from "@/components/FolderHeader/FolderHeader";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
function FolderPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <FolderMenu />
        <FolderHeader />
      </div>
      <div className={styles.cardWrapper}>
        <CardList userId={userId} />
      </div>
    </>
  );
}

export default FolderPage;
