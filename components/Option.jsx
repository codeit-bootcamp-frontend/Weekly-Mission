"use client";

import classNames from "classnames/bind";
import styles from "@/styles/Option.module.css";
import Image from "next/image";
import { useState } from "react";
import ModalShare from "./ModalShare";
import ModalEdit from "./ModalEdit";
import ModalDeleteFolder from "./ModalDeleteFolder";

const cx = classNames.bind(styles);

export default function Option({ folderName }) {
  const [isModalShareOpen, setIsModalShareOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteFolderOpen, setIsModalDeleteFolderOpen] = useState(false);

  const handleModalShareOpen = () => {
    setIsModalShareOpen(!isModalShareOpen);
  };

  const handleModalEditOpen = () => {
    setIsModalEditOpen(!isModalEditOpen);
  };

  const handleModalDelteFolderOpen = () => {
    setIsModalDeleteFolderOpen(!isModalDeleteFolderOpen);
  };

  return (
    <>
      <div className={cx("option-container")}>
        <button type="button" onClick={handleModalShareOpen}>
          <Image src="/images/share.svg" alt="공유 아이콘" width={18} height={18} />
          공유
        </button>
        <button type="button" onClick={handleModalEditOpen}>
          <Image src="/images/pen.svg" alt="이름 변경 아이콘" width={18} height={18} />
          이름 변경
        </button>
        <button type="button" onClick={handleModalDelteFolderOpen}>
          <Image src="/images/delete.svg" alt="삭제 아이콘" width={18} height={18} />
          삭제
        </button>
      </div>
      {isModalShareOpen && <ModalShare folderName={folderName} onClose={setIsModalShareOpen} />}
      {isModalEditOpen && <ModalEdit folderName={folderName} onClose={setIsModalEditOpen} />}
      {isModalDeleteFolderOpen && <ModalDeleteFolder folderName={folderName} onClose={setIsModalDeleteFolderOpen} />}
    </>
  );
}
