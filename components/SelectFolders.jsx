"use client";

import { useState } from "react";
import styles from "@/styles/SelectFolder.module.css";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

function FolderItem({ folderData, folderNumber, onClick }) {
  return (
    <li className={cx("folder-list-item", { selected: folderData.selected })}>
      <button type="button" className={cx("folder-list-item-button")} onClick={() => onClick(folderNumber)}>
        <p className={cx("folder-title")}>{folderData.name}</p>
        <p className={cx("number-of-folder")}>{folderData["n_of_links"]}개 링크</p>
        {folderData.selected && <Image className={cx("check")} src="/images/check.svg" alt="선택" width={14} height={14} />}
      </button>
    </li>
  );
}

export default function SelectFolders({ folders, onClick }) {
  return (
    <ol className={cx("folder-list")}>
      {folders.map((folder, i) => (
        <FolderItem key={folder.name} folderNumber={i} folderData={folder} onClick={onClick} />
      ))}
    </ol>
  );
}
