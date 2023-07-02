"use client";
import React from "react";
import Image from "next/image";
import styles from "./PageInfo.module.css";
import { getData } from "@/lib/getData";
import { User, Folder } from "$/types";

interface PageInfoProps {
  folderId: string;
  sharedUserId: string;
}

export default async function PageInfo({
  sharedUserId,
  folderId,
}: PageInfoProps) {
  const user = await getData<User[]>(`/api/users/${sharedUserId}`, "no-store");

  const {
    image_source = "/assets/images/users/codeit-avatar.png",
    name = "@코드잇",
  } = user[0] || {};

  const folderTitleData = await getData<Folder[]>(
    `/api/users/${sharedUserId}/folders/${folderId}`,
    "no-store"
  );
  const { name: folder = "" } = folderTitleData[0] ?? {};

  return (
    <div className={styles.userInfo}>
      <div className={styles.codeitAvatar}>
        <Image src={image_source} alt="Avatar" width={64} height={64} />
      </div>
      <p className={styles.userName}>{name}</p>
      <h1 className={styles.pageHeading}>{folder}</h1>
    </div>
  );
}
