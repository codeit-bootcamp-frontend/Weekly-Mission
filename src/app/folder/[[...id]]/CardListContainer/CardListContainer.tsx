import React from "react";
import styles from "../MainContent/MainContent.module.scss";
import { Folder } from "@/app/types/types";
import OptionList from "../OptionList/OptionList";
import { getLinksByFolderId } from "@/lib/api/folderApi";
import LinkCardList from "@/app/components/LinkCardList/LinkCardList";
import EmptyLinks from "@/app/components/LinkCardList/EmptyLinks";

interface CardListContainerProps {
  folderList: Folder[];
  folderId: number;
  userId: number;
}

const getLinkProps = async (userId: number, folderId: number) => {
  const { data } = await getLinksByFolderId(
    `${userId}`,
    `${folderId ? folderId : ""}`
  );
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

const CardListContainer = async ({
  folderId,
  folderList,
  userId,
}: CardListContainerProps) => {
  const cardList = await getLinkProps(userId, folderId);
  return (
    <>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>
          {folderId
            ? folderList.find((folder) => folder.id === +folderId)?.name ??
              "제목없음"
            : "전체"}
        </h2>
        <OptionList />
      </div>
      <article className={styles.cardList}>
        {cardList.length > 0 ? (
          <LinkCardList cardDataList={cardList} />
        ) : (
          <EmptyLinks />
        )}
      </article>
    </>
  );
};

export default CardListContainer;
