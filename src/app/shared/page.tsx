import React from "react";
import FolderInfo from "./components/FolderInfo/FolderInfo";
import styles from "./page.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import LinkCardList from "@/components/LinkCardList/LinkCardList";
import { getFolderRequest } from "@/lib/api/folderApi";

const getFolderData = async () => {
  const res = await getFolderRequest();
  return res.data;
};

const getCardListProps = (dataList: any) => {
  return dataList.map((data: any) => {
    return {
      id: data.id,
      href: data.url,
      thumbnailSrc: data.imageSource,
      description: data.description,
      createdDate: data.createdAt,
    };
  });
};

const getFolderInfoProps = (folder: any) => {
  return {
    folderName: folder.name,
    ownerName: folder.owner.name,
    profileImgSrc: folder.owner.profileImageSource,
  };
};

const Page = async () => {
  const folderData = await getFolderData();
  const folderInfoProps = getFolderInfoProps(folderData.folder);
  const cardListProps = getCardListProps(folderData.folder.links);
  return (
    <main>
      <section className={styles.introSection}>
        <FolderInfo {...folderInfoProps}></FolderInfo>
      </section>
      <section className={styles.cardSection}>
        <div className={styles.searchBarWrapper}>
          <SearchBar
            action={"/search/links?q=null"}
            placeholder={"원하는 링크를 검색해 보세요"}
          />
        </div>
        <LinkCardList cardDataList={cardListProps} />
      </section>
    </main>
  );
};

export default Page;
