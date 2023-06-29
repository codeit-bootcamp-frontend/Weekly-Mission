import React from "react";
import styles from "../MainContent/MainContent.module.scss";
import { Folder } from "@/app/types/types";
import OptionList from "../OptionList/OptionList";
import { getLinksByFolderId } from "@/lib/api/folderApi";
import LinkCardList from "@/app/components/LinkCardList/LinkCardList";
import EmptyLinks from "@/app/components/LinkCardList/EmptyLinks";
import FolderName from "../FolderName/FolderName";

interface CardListContainerProps {
  folderList: Folder[];
  params: { id?: string[] };
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
  folderList,
  params,
  userId,
}: CardListContainerProps) => {
  const folderId = Number(params.id?.[0]) ?? 0;
  const cardList = await getLinkProps(userId, folderId);

  const folderName =
    folderId !== 0
      ? folderList.find((folder) => folder.id === +folderId)?.name
      : "전체";
  return (
    <>
      <div className={styles.titleRow}>
        <FolderName name={folderName!} folderId={folderId} />
        <OptionList folderId={folderId} />
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
