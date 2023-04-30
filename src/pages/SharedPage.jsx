import React, { useEffect, useState } from "react";
import FolderInfo from "../components/FolderInfo";
import SearchBar from "../components/SearchBar";
import styles from "./SharedPage.module.css";
import Card from "../components/Card";
import { getFolderData } from "../api";

function SharedPage() {
  const [folderData, setFolderData] = useState(null);

  const applyFolderInfoData = async () => {
    setFolderData(await getFolderData());
  };

  useEffect(() => {
    applyFolderInfoData();
  }, []);

  return (
    <>
      <FolderInfo folderData={folderData} />
      <main>
        <section className={styles.searchBarContainer}>
          <SearchBar />
        </section>
        <section className={styles.cardContainer}>
          {folderData?.links.map((link) => (
            <Card key={link.id} cardData={link} />
          ))}
        </section>
      </main>
    </>
  );
}

export default SharedPage;
