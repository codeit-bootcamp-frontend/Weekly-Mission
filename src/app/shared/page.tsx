import React from "react";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import styles from "./page.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";
const getFolderData = () => {
  return {
    ownerName: "kenny",
    folderName: "즐겨찾기",
  };
};

const Page = () => {
  const folderData = getFolderData();
  return (
    <main>
      <section className={styles.introSection}>
        {folderData && <FolderInfo {...folderData}></FolderInfo>}
      </section>
      <section className="card-section">
        <div className="search-bar-wrapper">
          <SearchBar
            action={"/search/links?q=null"}
            placeholder={"원하는 링크를 검색해 보세요"}
          />
        </div>
        {/* <div className="card-list-wrapper">
          {cardDataList && <LinkCardList cardProps={cardDataList} />}
        </div> */}
      </section>
    </main>
  );
};

export default Page;
