import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/folder.module.css";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import DefaultLayout from "@/layouts/DefaultLayout";
import AddLinkBar from "@/components/AddLinkBar";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import FolderHeader from "@/components/FolderHeader/FolderHeader";
import getData from "@/lib/getData";
import { Folder, Link } from "$/types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface FolderPageProps {
  links: Link[];
  tabs: Folder[];
}

export default function Page({
  links,
  tabs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { slug: currentTab } = router.query;
  const [currentFolderTitle, setCurrentFolderTitle] = useState<string>("전체");
  const [isAddLinkBarBottom, setIsAddLinkBarBottom] = useState<boolean>(false);
  return (
    <>
      <div className={styles.heroSection}>
        <AddLinkBar tabs={tabs} onIsAddLinkBarBottom={setIsAddLinkBarBottom} />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
        <FolderMenu
          currentTab={currentTab}
          tabs={tabs}
          onCurrentFolderTitle={setCurrentFolderTitle}
          isAddLinkBarBottom={isAddLinkBarBottom}
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
}

export const getServerSideProps: GetServerSideProps<FolderPageProps> = async (
  context
) => {
  const { slug } = context.query;
  const userId = 1;
  const folderId = slug || "";

  const linksData = await getData(
    `/api/users/${userId}/links?folderId=${folderId}`
  );
  const { distinctData: links = [] } = linksData;

  const tabData = await getData(`/api/users/${userId}/folders`);
  const { data: tabs } = tabData;

  return {
    props: {
      links,
      tabs,
    },
  };
};
