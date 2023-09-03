import { Metadata } from "next";
import styles from "@/styles/folderLayout.module.css";
import AddLinkBar from "@/components/AddLinkBar/AddLinkBar";
import SearchBar from "@/components/SearchBar/SearchBar";
import FolderTabsContextProvider from "@/contexts/FolderTabsContextProvider";
import CurrentTabContextProvider from "@/contexts/CurrentTabContextProvider";
import CardsContextProvider from "@/contexts/CardsContextProvider";

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
    <FolderTabsContextProvider>
      <CardsContextProvider>
        <div className={styles.heroSection}>
          <AddLinkBar />
        </div>
        <div className={styles.wrapper}>
          <SearchBar />
        </div>
        <CurrentTabContextProvider>{children}</CurrentTabContextProvider>
        <div id="modal-root" />
      </CardsContextProvider>
    </FolderTabsContextProvider>
  );
}
