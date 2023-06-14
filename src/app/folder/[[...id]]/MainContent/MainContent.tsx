import React from "react";
import styles from "./MainContent.module.scss";
import FolderChip from "../FolderChip/FolderChip";
import { getFoldersByUserId, getLinksByFolderId } from "@/lib/api/folderApi";
import { Folder } from "@/app/types/types";
import LinkCardList from "@/app/components/LinkCardList/LinkCardList";
import EmptyLinks from "@/app/components/LinkCardList/EmptyLinks";
import AddFolderBtn from "../AddFolderBtn/AddFolderBtn";
import OptionList from "../OptionList/OptionList";

const getFolderList = async (userId: number) => {
  const res = await getFoldersByUserId(String(userId));
  return res.data as Folder[];
};

const getLinkProps = async (userId: number, folderId: string) => {
  const { distinctData } = await getLinksByFolderId(`${userId}`, folderId);
  return distinctData.map((data: any) => {
    return {
      id: data.id,
      href: data.url,
      thumbnailSrc: data.image_source,
      description: data.description,
      createdDate: data.created_at,
    };
  });
};
interface MainContentProps {
  folderId: string;
  userId: number;
}

const MainContent = async ({ userId, folderId }: MainContentProps) => {
  const folderList = await getFolderList(userId);
  const cardList = await getLinkProps(userId, folderId);

  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.chipListRow}>
        <ul className={styles.chipListContainer}>
          <li>
            <FolderChip
              href="/folder"
              label="전체"
              selected={folderId === ""}
            />
          </li>
          {folderList.map((folder: Folder) => {
            return (
              <li key={folder.id}>
                <FolderChip
                  href={`/folder/${folder.id}`}
                  label={folder.name}
                  selected={+folderId === folder.id}
                />
              </li>
            );
          })}
        </ul>
        <AddFolderBtn />
      </div>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>
          {folderId
            ? folderList.find((folder: Folder) => folder.id === +folderId)
                ?.name ?? "제목없음"
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
      {/* <Modal {...modalProps} /> */}
    </div>
  );
};

export default MainContent;
