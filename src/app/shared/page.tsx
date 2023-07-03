import React from "react";
import styles from "@/styles/shared.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import CardList from "@/components/CardList/CardList";
import PageInfo from "@/components/PageInfo/PageInfo";

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
        <CardList userId={user} folderId={folder} />
      </div>
    </>
  );
}
