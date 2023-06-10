import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/folder.module.css";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import DefaultLayout from "@/layouts/DefaultLayout";
import AddLinkBar from "@/components/AddLinkBar";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import FolderHeader from "@/components/FolderHeader/FolderHeader";

const BASE_URL = process.env.BASE_URL;

const FolderPage = ({ links, tabs }) => {
  const router = useRouter();
  const { slug: currentTab } = router.query;
  const [currentFolderTitle, setCurrentFolderTitle] = useState("전체");

  return (
    <>
      <div className={styles.heroSection}>
        <AddLinkBar tabs={tabs} />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
        <FolderMenu
          currentTab={currentTab}
          tabs={tabs}
          onCurrentFolderTitle={setCurrentFolderTitle}
        />
        <FolderHeader currentFolderTitle={currentFolderTitle} />
      </div>
      <div className={styles.cardWrapper}>
        {links.length !== 0 ? (
          <CardList cards={links} tabs={tabs} />
        ) : (
          <div className={styles.emptySavedLink}>저장한 링크가 없습니다</div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const userId = 1;

  const folderId = slug || "";

  const linksResponse = await fetch(
    `${BASE_URL}/api/users/${userId}/links?folderId=${folderId}`
  );
  const linksData = await linksResponse.json();
  const { distinctData: links = [] } = linksData;

  const tabsResponse = await fetch(`${BASE_URL}/api/users/${userId}/folders`);
  const tabData = await tabsResponse.json();
  const { data: tabs } = tabData;

  return {
    props: {
      links,
      tabs,
    },
  };
}

export default FolderPage;

FolderPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
