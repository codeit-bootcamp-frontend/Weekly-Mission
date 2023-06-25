"use client";

import React from "react";
import styles from "../MainContent/MainContent.module.scss";
import { useRecoilValue } from "recoil";
import { folderListState } from "@/app/recoil/atoms";

interface FolderNameProps {
  name: string;
  folderId: number;
}

const FolderName = ({ name, folderId }: FolderNameProps) => {
  const folderList = useRecoilValue(folderListState);
  const folderName =
    folderList.find((folder) => folder.id === folderId)?.name ?? "전체";
  return <h2 className={styles.title}>{folderName}</h2>;
};

export default FolderName;
