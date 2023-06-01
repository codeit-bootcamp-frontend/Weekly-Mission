import React from "react";

import AddLink from "@/components/AddLink/addLink";
import CardWrapper from "@/components/CardWrapper/cardWrapper";
import SearchBar from "@/components/SearchBar/searchbar";
import getFolderData from "@/lib/getFolderData";

import styles from "./page.module.css";

const Folder = async () => {
  const userFolder = await getFolderData();
  return (
    <main className={styles.main}>
      <AddLink />
      <div className={styles.contents}>
        <SearchBar placeholder="제목을 검색해 보세요" />
        <CardWrapper links={userFolder.links} />
      </div>
    </main>
  );
};

export default Folder;
