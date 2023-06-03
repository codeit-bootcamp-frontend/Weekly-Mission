import React from "react";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import styles from "./page.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import LinkCardList from "./components/LinkCardList/LinkCardList";

const getFolderData = () => {
  return {
    ownerName: "kenny",
    folderName: "즐겨찾기",
  };
};

const getCardDataList = async () => {
  return [{}];
};

const Page = async () => {
  const folderData = getFolderData();
  const cardDataList = await getCardDataList();
  return (
    <main>
      <section className={styles.introSection}>
        {folderData && <FolderInfo {...folderData}></FolderInfo>}
      </section>
      <section className={styles.cardSection}>
        <div className={styles.searchBarWrapper}>
          <SearchBar
            action={"/search/links?q=null"}
            placeholder={"원하는 링크를 검색해 보세요"}
          />
        </div>
        <div className="card-list-wrapper">
          {cardDataList && <LinkCardList cardDataList={cardDataList} />}
        </div>
      </section>
    </main>
  );
};

export default Page;
