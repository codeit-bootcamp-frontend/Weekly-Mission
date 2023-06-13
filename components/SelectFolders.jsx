"use client";

import styles from "@/styles/SelectFolder.module.css";
import classNames from "classnames/bind";
import Image from "next/image";

const MOCK_FOLDER = [
  { name: "코딩팁", n_of_links: 7, selected: false },
  { name: "채용 사이트", n_of_links: 12, selected: true },
  { name: "유용한 글", n_of_links: 30, selected: false },
  { name: "나만의 장소", n_of_links: 3, selected: false },
];

const cx = classNames.bind(styles);

function FolderList({ folderData }) {
  return (
    <li className={cx("folder-list-item", { selected: folderData.selected })}>
      <button type="button" className={cx("folder-list-item-button")} onClick={() => console.log("폴더 클릭")}>
        <p className={cx("folder-title")}>{folderData.name}</p>
        <p className={cx("number-of-folder")}>{folderData["n_of_links"]}개 링크</p>
        {folderData.selected && <Image className={cx("check")} src="/images/check.svg" alt="선택" width={14} height={14} />}
      </button>
    </li>
  );
}

export default function SelectFolders({ folders = MOCK_FOLDER }) {
  return (
    <ol className={cx("folder-list")}>
      {folders.map((folder) => (
        <FolderList key={folder.name} folderData={folder} />
      ))}
    </ol>
  );
}
