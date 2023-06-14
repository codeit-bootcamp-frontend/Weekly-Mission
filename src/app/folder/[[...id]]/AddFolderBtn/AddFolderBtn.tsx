"use client";

import Modal, { ModalProps } from "@/app/components/Modals/Modal";
import AddFolder from "@/app/components/Modals/ModalContents/AddFolder";
import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./AddFolderBtn.module.scss";

const ADD_FOLDER_MODAL_PROPS = {
  type: "add",
  title: "폴더 추가",
  proceedBtnText: "추가하기",
};

const AddFolderBtn = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({
    ...ADD_FOLDER_MODAL_PROPS,
    modalRef,
    onClose: () => {},
  });
  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleClickAddFolder = () => {
    setModalProps({
      ...ADD_FOLDER_MODAL_PROPS,
      ui: <AddFolder />,
      modalRef,
      onClose: handleCloseModal,
    });
  };

  return (
    <div>
      <button
        type="button"
        className={styles.addFolderButton}
        onClick={() => {
          handleClickAddFolder();
          handleOpenModal();
        }}
      >
        <span>폴더 추가</span>
        <div className={styles.addIconBox}>
          <Image src="/addIcon.svg" alt="add icon" fill sizes="32vw" />
          <Image src="/addIcon-white.svg" alt="add icon" fill sizes="32vw" />
        </div>
      </button>
      <Modal {...modalProps} />
    </div>
  );
};

export default AddFolderBtn;
