"use client";

import { useState } from "react";
import classNames from "classnames/bind";
import Modal from "./Modal";
import styles from "@/styles/ModalAdd.module.css";
import SelectFolders from "./SelectFolders";

const MOCK_FOLDERS = [
  { name: "코딩팁", n_of_links: 7, selected: false },
  { name: "채용 사이트", n_of_links: 12, selected: true },
  { name: "유용한 글", n_of_links: 30, selected: false },
  { name: "나만의 장소", n_of_links: 3, selected: false },
];

const cx = classNames.bind(styles);

export default function ModalAdd({ link = "https://www.abc.com", onClose }) {
  const [folders, setFolders] = useState(MOCK_FOLDERS);

  const handleChange = (folderNum) => {
    const foldersCopy = JSON.parse(JSON.stringify(folders));
    foldersCopy[folderNum]["selected"] = !foldersCopy[folderNum]["selected"];
    setFolders(foldersCopy);
  };

  const handleSubmit = () => {
    console.log("폴더 추가", folders);
    onClose(false);
  };

  return (
    <Modal title="폴더에 추가" onClose={onClose}>
      <p className={cx("link-title")}>{link}</p>
      <SelectFolders folders={folders} onClick={handleChange} />
      <button className={cx("add-button")} type="button" onClick={() => handleSubmit()}>
        추가하기
      </button>
    </Modal>
  );
}
