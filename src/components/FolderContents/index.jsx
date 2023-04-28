import { useCallback } from "react";
import styles from "./folderContents.module.css";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import useUserFolder from "@/hooks/useUserFolder";

const FolderContents = () => {
  const [userFolder] = useUserFolder();

  const toggleCardAsterisk = useCallback((e) => {
    const cardAsterisk = e.target.closest(".cardAsterisk");
    if (!cardAsterisk) return;

    if (cardAsterisk.getAttribute("src") === "/assets/card-asterisk.svg") {
      cardAsterisk.setAttribute("src", "/assets/card-asterisk-check.svg");
    } else if (
      cardAsterisk.getAttribute("src") === "/assets/card-asterisk-check.svg"
    ) {
      cardAsterisk.setAttribute("src", "/assets/card-asterisk.svg");
    }
  }, []);

  return (
    <main className={`${styles.main}`}>
      {userFolder && (
        <div className={`${styles.hero} ${styles.inner}`}>
          <div className={`${styles.codeitAvatar}`}>
            <img
              src={userFolder?.owner?.profileImageSource}
              alt="Owner Avatar"
            />
          </div>
          <span className={`${styles.atsign}`}>@{userFolder?.owner?.name}</span>
          <span className={`${styles.marks}`}>{userFolder?.name}</span>
        </div>
      )}
      <div className={`${styles.contents}`}>
        <SearchBar />
        <div
          onClick={toggleCardAsterisk}
          className={`${styles.cardContainer} ${styles.inner}`}
        >
          {userFolder?.links?.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FolderContents;
