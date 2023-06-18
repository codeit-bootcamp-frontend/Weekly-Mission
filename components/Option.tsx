"use client";

import { useState } from "react";

import classNames from "classnames/bind";
import Image from "next/image";

import DeleteModal from "@/components/Modal/DeleteModal";
import FormModal from "@/components/Modal/FormModal";
import ShareModal from "@/components/Modal/ShareModal";

import styles from "./Option.module.scss";

import deleteImage from "@/public/images/folder-delete.svg";
import penImage from "@/public/images/folder-pen.svg";
import shareImage from "@/public/images/folder-share.svg";

const cx = classNames.bind(styles);

interface OptionProps {
  folder: { id: number; name: string };
  onEditFolder: (newName: string) => string;
  onDeleteFolder: (id: number) => number;
}
export default function Option({
  folder,
  onEditFolder,
  onDeleteFolder,
}: OptionProps) {
  const [shownEditModal, setShownEditModal] = useState(false);
  const [shownDeleteModal, setShownDeleteModal] = useState(false);
  const [shownShareModal, setShownShareModal] = useState(false);

  const openEditModal = () => {
    setShownEditModal(true);
  };

  const closeEditModal = () => {
    setShownEditModal(false);
  };

  const openDeleteModal = () => {
    setShownDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShownDeleteModal(false);
  };

  const openShareModal = () => {
    setShownShareModal(true);
  };

  const closeShareModal = () => {
    setShownShareModal(false);
  };

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("option")} onClick={openShareModal}>
          <Image width={18} height={18} src={shareImage} alt="폴더 공유" />
          공유
        </div>
        <div className={cx("option")} onClick={openEditModal}>
          <Image width={18} height={18} src={penImage} alt="폴더 이름 변경" />
          이름 변경
        </div>
        <div className={cx("option")} onClick={openDeleteModal}>
          <Image width={18} height={18} src={deleteImage} alt="폴더 삭제" />
          삭제
        </div>
      </div>
      {shownEditModal && (
        <FormModal
          folder={folder}
          onClose={closeEditModal}
          onSubmit={onEditFolder}
        />
      )}
      {shownDeleteModal && (
        <DeleteModal
          item={{ title: "폴더 삭제", id: folder.id, content: folder.name }}
          onClose={closeDeleteModal}
          onDelete={onDeleteFolder}
        />
      )}
      {shownShareModal && (
        <ShareModal folder={folder} onClose={closeShareModal} />
      )}
    </>
  );
}
