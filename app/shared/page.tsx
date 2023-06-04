import React from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

import SearchBar from "@/components/SearchBar/SearchBar";
import getFolderData from "lib/getFolderData";

import styles from "./page.module.css";

// import CardWrapper from "@/components/CardWrapper/CardWrapper";
const CardWrapper = dynamic(
  () => import("components/CardWrapper/CardWrapper"),
  { ssr: false }
);

const Shared = async () => {
  const userFolder = await getFolderData();

  return (
    <>
      <main className={styles.main}>
        <div className={`${styles.hero} ${styles.inner}`}>
          <div className={styles.codeitAvatar}>
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1199px) 100vw, 100vw"
              src={userFolder.owner.profileImageSource}
              alt="Owner Avatar"
              className={styles.image}
            />
          </div>
          <span className={styles.atsign}>@{userFolder.owner.name}</span>
          <span className={styles.marks}>{userFolder.name}</span>
        </div>

        <div className={styles.contents}>
          <SearchBar placeholder="원하는 링크를 검색해 보세요" />
          <CardWrapper links={userFolder.links} />
        </div>
      </main>
    </>
  );
};

export default Shared;
