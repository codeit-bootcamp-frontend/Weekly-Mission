"use client";

import { useState } from "react";

import classNames from "classnames/bind";
import Image from "next/image";

import { Folder } from "@/utils/api/types";
import checkURLFormat from "@/utils/checkURLFormat";

import styles from "./AddLinkBar.module.scss";
import AddToFolderModal from "./Modal/AddToFolderModal/AddToFolderModal";

import copyLink from "@/public/images/copy-link.svg";

const cx = classNames.bind(styles);

interface AddLinkBarProps {
  folders: Folder[];
  onAddLink: (url: string, userId: string, folderId: string | null) => void;
}

export default function AddLinkBar({ folders, onAddLink }: AddLinkBarProps) {
  const [value, setValue] = useState("");
  const [shownAddModal, setShownAddModal] = useState(false);

  // TODO: 도메인에 한글 들어가도 괜찮게 수정
  const openAddModal = () => {
    if (!checkURLFormat(value)) {
      alert("올바른 링크 형식이 아니에요!");
      return;
    }
    setShownAddModal(true);
  };

  const closeAddModal = () => {
    setShownAddModal(false);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("inputContainer")}>
          <Image width={20} height={20} src={copyLink} alt="링크 공유" />
          <input
            className={cx("input")}
            value={value}
            placeholder="링크를 추가해 보세요"
            onChange={handleChangeInput}
          />
        </div>
        <button className={cx("button")} type="submit" onClick={openAddModal}>
          추가하기
        </button>
      </div>
      {shownAddModal && (
        <AddToFolderModal
          url={value}
          folders={folders}
          onClose={closeAddModal}
          onAddLink={onAddLink}
        />
      )}
    </>
  );
}
