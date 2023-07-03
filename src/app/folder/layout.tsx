"use client";
import { Metadata } from "next";
import styles from "@/styles/folderLayout.module.css";
import AddLinkBar from "@/components/AddLinkBar/AddLinkBar";
import SearchBar from "@/components/SearchBar/SearchBar";
import FoderTabsContextProvider from "@/contexts/FoderTabsContextProvider";
import AddLinkBarBottomContextProvider from "$/src/contexts/AddLinkBarBottomContextProvider";

export const metadata: Metadata = {
  title: "Linkbrary",
  description: "아 그 블로그 뭐더라 folder",
};

export default function FloderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FoderTabsContextProvider>
      <div className={styles.heroSection}>
        <AddLinkBar />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
      </div>
      {children}
      <div id="modal-root" />
    </FoderTabsContextProvider>
  );
}
