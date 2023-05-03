import React, { useCallback, useEffect, useState } from "react";
import FolderInfo from "../components/FolderInfo";
import SearchBar from "../components/SearchBar";
import styles from "./SharedPage.module.css";
import Card from "../components/Card";
import { getFolderData } from "../api";
import useAsync from "../hooks/useAsync";

function SharedPage() {
  const [folder, setFolder] = useState(null);
  const [isApplying, ApplyingError, onApplyAsync] = useAsync(getFolderData);

  const applyFolderInfoData = useCallback(async () => {
    const folderData = await onApplyAsync();
    if (!folderData) return;
    setFolder(folderData);
  }, [onApplyAsync]);

  useEffect(() => {
    applyFolderInfoData();
  }, [applyFolderInfoData]);

  if (ApplyingError) return <div>{ApplyingError.message}</div>;
  return (
    folder && (
      <>
        <FolderInfo folder={folder} />
        <main>
          <section className={styles.searchBarContainer}>
            <SearchBar />
          </section>
          <section className={styles.cardContainer}>
            {folder?.links.map((link) => (
              <Card key={link.id} cardData={link} />
            ))}
          </section>
        </main>
      </>
    )
  );
}

export default SharedPage;
