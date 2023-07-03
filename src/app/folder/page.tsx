"use client";
import React, { useContext, useState } from "react";
import CardList from "@/components/CardList/CardList";
import { userId } from "@/utils/common.api";
import styles from "@/styles/folder.module.css";
import FolderHeader from "@/components/FolderHeader/FolderHeader";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import CurrentTabContext from "@/contexts/CurrentTabContext";
function FolderPage() {
  const { currentFolderTitle, setCurrentFolderTitle } =
    useContext(CurrentTabContext);

  return (
    <>
      <div className={styles.wrapper}>
        <FolderMenu onCurrentFolderTitle={setCurrentFolderTitle} />
        <FolderHeader currentFolderTitle={currentFolderTitle} />
      </div>
      <div className={styles.cardWrapper}>
        <CardList userId={userId} />
      </div>
    </>
  );
}

export default FolderPage;
