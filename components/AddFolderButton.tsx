"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import AddForm from "@/components/Modal/FormModal/AddForm";
import FormModal from "@/components/Modal/FormModal/FormModal";

import styles from "./AddFolderButton.module.scss";

const cx = classNames.bind(styles);

export default function AddFolderButton({
  onAddFolder,
}: {
  onAddFolder: (name: string) => void;
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
      {shownModal && (
        <FormModal
          title="폴더 추가"
          onClose={closeModal}
          formComponent={
            <AddForm onClose={closeModal} onSubmit={onAddFolder} />
          }
        />
      )}
    </>
  );
}
