import styles from "@folder/Folder.module.css";
import AddLinkBar from "@/components/AddLinkBar";
import AddPage from "@/components/AddPage";
import SearchBar from "@/components/SearchBar";
import React, { ReactElement } from "react";

const layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <AddLinkBar />
      <div className={styles["main-container"]}>
        <SearchBar />
        <AddPage />
        {children}
      </div>
    </>
  );
};

export default layout;
