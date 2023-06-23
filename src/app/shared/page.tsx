import React from "react";
import FolderInfo from "./FolderInfo/FolderInfo";
import styles from "./page.module.scss";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import LinkCardList from "@/app/components/LinkCardList/LinkCardList";
import { getFolderById, getLinksByFolderId } from "@/lib/api/folderApi";
import { notFound } from "next/navigation";
import { getUserById } from "@/lib/api/userApi";

const getFolderName = async (userId: string, folderId: string) => {
  const res = await getFolderById(userId, folderId);
  if (res.data.length === 0) {
    notFound();
  }
  return res.data[0].name;
};

const getFolderOwnerInfo = async (userId: string) => {
  const res = await getUserById(userId);
  if (res.data.length === 0) {
    notFound();
  }
  return {
    ownerName: res.data[0].name,
    profileImageSource: res.data[0].image_source,
  };
};

const getCardListProps = async (userId: string, folderId: string) => {
  const { data } = await getLinksByFolderId(userId, folderId);
  if (data.length === 0) {
    notFound();
  }
  return data.map((data: any) => {
    return {
      id: data.id,
      href: data.url,
      thumbnailSrc: data.image_source,
      description: data.description,
      createdDate: data.created_at,
    };
  });
};

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let { userId, folderId } = searchParams;
  if (!userId || !folderId) {
    notFound();
  }
  userId = Array.isArray(userId) ? userId.join(" ") : userId;
  folderId = Array.isArray(folderId) ? folderId.join(" ") : folderId;

  const [folderName, folderOwnerInfo, cardListProps] = await Promise.all([
    getFolderName(userId, folderId),
    getFolderOwnerInfo(userId),
    getCardListProps(userId, folderId),
  ]);

  return (
    <main>
      <section className={styles.introSection}>
        <FolderInfo folderName={folderName} {...folderOwnerInfo}></FolderInfo>
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
