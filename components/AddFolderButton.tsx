"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import FormModal from "@/components/Modal/FormModal";

import styles from "./AddFolderButton.module.scss";

const cx = classNames.bind(styles);

export default function AddFolderButton({
  onAddFolder,
}: {
  onAddFolder: (name: string) => string;
}) {
  const [shownModal, setShownModal] = useState(false);

  const openModal = () => {
    setShownModal(true);
  };

  const closeModal = () => {
    setShownModal(false);
  };

  return (
    <>
      <button className={cx("button")} onClick={openModal}>
        <span>폴더 추가</span>
        <span>+</span>
      </button>
      {shownModal && <FormModal onClose={closeModal} onSubmit={onAddFolder} />}
    </>
  );
}
