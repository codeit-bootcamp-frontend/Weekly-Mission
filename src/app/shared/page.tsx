import React from "react";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import styles from "./page.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import LinkCard from "./components/LinkCardList/LinkCard/LinkCard";
const getFolderData = () => {
  return {
    ownerName: "kenny",
    folderName: "즐겨찾기",
  };
};

const getCardDataList = () => {
  return [{}];
};

const Page = () => {
  const folderData = getFolderData();
  const cardDataList = getCardDataList();
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
        {/* <div className="card-list-wrapper">
          {cardDataList && <LinkCardList cardProps={cardDataList} />}
        </div> */}
        <LinkCard
          id={1}
          href="https://www.codeit.kr"
          description="lorem ipsrum ahfioewhobweuvuiewbouvweniofviygcoiaenlvuaeffvgieu"
          createdDate="Sat Jun 03 2023 16:54:06 GMT+0900"
        />
      </section>
    </main>
  );
};

export default Page;
