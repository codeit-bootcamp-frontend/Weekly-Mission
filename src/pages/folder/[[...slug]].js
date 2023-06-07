import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/folder.module.css";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import DefaultLayout from "@/layouts/DefaultLayout";
import AddLinkBar from "@/components/AddLinkBar";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import FolderHeader from "@/components/FolderHeader/FolderHeader";

const BASE_URL = process.env.BASE_URL;

const MOCK_FOLDERS = [
  { id: 0, folderTitle: "전체" },
  { id: 1, folderTitle: "⭐️ 즐겨찾기" },
  { id: 2, folderTitle: "코딩 팁" },
  { id: 3, folderTitle: "채용 사이트" },
  { id: 4, folderTitle: "유용한 글" },
  { id: 5, folderTitle: "나만의 장소" },
];

const FolderPage = ({ links }) => {
  const router = useRouter();
  const { slug } = router.query;

  let currentTab;
  if (!slug) {
    currentTab = MOCK_FOLDERS[0].folderTitle;
  } else if (slug.length === 1) {
    if (slug[0] === "favorites") {
      currentTab = MOCK_FOLDERS[1].folderTitle;
    } else {
      currentTab = MOCK_FOLDERS[Number(slug[0]) + 1].folderTitle;
    }
  }

  return (
    <>
      <div className={styles.heroSection}>
        <AddLinkBar />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
        <FolderMenu currentTab={currentTab} MOCK_FOLDERS={MOCK_FOLDERS} />
        <FolderHeader currentTab={currentTab} />
      </div>
      <div className={styles.cardWrapper}>
        {links.length !== 0 ? (
          <CardList cards={links} />
        ) : (
          <div className={styles.emptySavedLink}>저장한 링크가 없습니다</div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { slug } = query;

  if (slug) {
    return {
      props: {
        links: [],
      },
    };
  }

  const response = await fetch(`${BASE_URL}/api/sample/folder`);
  const data = await response.json();
  const { folder: { links = [] } = {} } = data?.data ?? {};

  return {
    props: {
      links,
    },
  };
}

export default FolderPage;

FolderPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
