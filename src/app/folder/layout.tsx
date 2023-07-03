"use client";
import { Metadata } from "next";
import styles from "@/styles/folderLayout.module.css";
import AddLinkBar from "@/components/AddLinkBar/AddLinkBar";
import SearchBar from "@/components/SearchBar/SearchBar";
import FolderHeader from "@/components/FolderHeader/FolderHeader";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import { getData } from "@/utils/getData";
import { userId } from "@/utils/common.api";
import { Folder } from "$/types";
import { useState, use } from "react";
import FoderTabsContextProvider from "@/contexts/FoderTabsContextProvider";

export const metadata: Metadata = {
  title: "Linkbrary",
  description: "아 그 블로그 뭐더라 folder",
};

export default function FloderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentFolderTitle, setCurrentFolderTitle] = useState<string>("전체");
  const [isAddLinkBarBottom, setIsAddLinkBarBottom] = useState<boolean>(false);

  return (
    <FoderTabsContextProvider>
      <div className={styles.heroSection}>
        <AddLinkBar onIsAddLinkBarBottom={setIsAddLinkBarBottom} />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
        <FolderMenu
          onCurrentFolderTitle={setCurrentFolderTitle}
          isAddLinkBarBottom={isAddLinkBarBottom}
        />
        <FolderHeader currentFolderTitle={currentFolderTitle} />
      </div>
      {children}
      <div id="modal-root" />
    </FoderTabsContextProvider>
  );
}
