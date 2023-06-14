"use client";

import { useState } from "react";
import styles from "@/styles/SelectFolder.module.css";
import classNames from "classnames/bind";
import Image from "next/image";

// const MOCK_FOLDER = [
//   { name: "코딩팁", n_of_links: 7, selected: false },
//   { name: "채용 사이트", n_of_links: 12, selected: true },
//   { name: "유용한 글", n_of_links: 30, selected: false },
//   { name: "나만의 장소", n_of_links: 3, selected: false },
// ];

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
  // const [folders, setFolders] = useState(foldersData);
  // const handleChange = (folderNum) => {
  //   folders[folderNum]["selected"] = !folders[folderNum]["selected"];
  //   setFolders([...folders]);
  //   console.log(folders);
  // };

  return (
    <ol className={cx("folder-list")}>
      {folders.map((folder, i) => (
        <FolderItem key={folder.name} folderNumber={i} folderData={folder} onClick={onClick} />
      ))}
    </ol>
  );
}
