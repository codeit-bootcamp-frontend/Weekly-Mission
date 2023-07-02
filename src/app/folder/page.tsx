"use client";
import React, { useState, use } from "react";
import styles from "@/styles/folder.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import CardList from "@/components/CardList/CardList";
import AddLinkBar from "@/components/AddLinkBar/AddLinkBar";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import FolderHeader from "@/components/FolderHeader/FolderHeader";
import { Folder, Link } from "$/types";
import { userId } from "@/utils/common.api";
import { getData } from "$/src/utils/getData";

function FolderPage() {
  const [currentFolderTitle, setCurrentFolderTitle] = useState<string>("전체");
  const [isAddLinkBarBottom, setIsAddLinkBarBottom] = useState<boolean>(false);

  const tabs = use(getData<Folder[]>(`/api/users/${userId}/folders`));

  return (
    <>
      <div className={styles.heroSection}>
        <AddLinkBar tabs={tabs} onIsAddLinkBarBottom={setIsAddLinkBarBottom} />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
        <FolderMenu
          tabs={tabs}
          onCurrentFolderTitle={setCurrentFolderTitle}
          isAddLinkBarBottom={isAddLinkBarBottom}
        />
        <FolderHeader currentFolderTitle={currentFolderTitle} />
      </div>
      <div className={styles.cardWrapper}>
        <CardList userId={userId} />
      </div>
    </>
  );
}

export default FolderPage;
