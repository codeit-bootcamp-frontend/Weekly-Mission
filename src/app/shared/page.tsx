import React from "react";
import styles from "@/styles/shared.module.css";
import SearchBar from "$/src/components/SearchBar/SearchBar";
import CardList from "$/src/components/CardList/CardList";
import PageInfo from "$/src/components/PageInfo/PageInfo";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const user = searchParams.user;
  const folder = searchParams.folder;
  return (
    <>
      <div className={styles.heroSection}>
        <PageInfo sharedUserId={user} folderId={folder} />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
        <CardList sharedUserId={user} folderId={folder} />
      </div>
    </>
  );
}
