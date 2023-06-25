"use client";

import React, { useRef, useState } from "react";
import Option from "../Option/Option";
import Modal, { ModalProps } from "@/app/components/Modals/Modal";
import ShareFolder from "@/app/components/Modals/ModalContents/ShareFolder";
import EditFolderName from "@/app/components/Modals/ModalContents/EditFolderName";
import styles from "./OptionList.module.scss";
import DeleteFolder from "@/app/components/Modals/ModalContents/DeleteFolder";
import { deleteFolder, updateFolderName } from "@/lib/api/folderApi";
import { useRouter } from "next/navigation";

const DELETE_FOLDER_MODAL_PROPS = {
  type: "delete",
  title: "폴더 삭제",
  subtitle: "폴더명",
};

const SHARE_FOLDER_MODAL_PROPS = {
  type: "share",
  title: "폴더 공유",
  subtitle: "폴더명",
};

const EDIT_FOLDER_MODAL_PROPS = {
  type: "edit",
  title: "폴더 이름 변경",
};

const ADD_FOLDER_MODAL_PROPS = {
  type: "add",
  title: "폴더 추가",
  proceedBtnText: "추가하기",
};

interface OptionListProps {
  folderId: number;
}

const OptionList = ({ folderId }: OptionListProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({
    ...ADD_FOLDER_MODAL_PROPS,
    modalRef,
    onClose: () => {},
  });
  const router = useRouter();
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

  const handleDeleteFolder = async () => {
    await deleteFolder(folderId);
    handleCloseModal();
    router.push("/folder");
  };

  const handleEditFolderName = async (newName: string) => {
    await updateFolderName(folderId, newName);
    handleCloseModal();
  };

  const handleClickShareFolder = () => {
    setModalProps({
      ...SHARE_FOLDER_MODAL_PROPS,
      ui: (
        <ShareFolder
          folderInfo={{ title: "즐겨찾기", link: "https://www.abc.com" }}
        />
      ),
      onClose: handleCloseModal,
      modalRef,
    });
  };

  const handleClickEditFolder = () => {
    setModalProps({
      ...EDIT_FOLDER_MODAL_PROPS,
      ui: (
        <EditFolderName
          folderName="유용한 팁"
          onSubmit={handleEditFolderName}
        />
      ),
      onClose: handleCloseModal,
      modalRef,
    });
  };

  const handleClickDeleteFolder = () => {
    setModalProps({
      ...DELETE_FOLDER_MODAL_PROPS,
      ui: <DeleteFolder onDelete={handleDeleteFolder} />,
      onClose: handleCloseModal,
      modalRef,
    });
  };
  return (
    <>
      <ul className={styles.optionListContainer}>
        <li>
          <Option
            imgSrc="/shareIcon.svg"
            label="공유"
            onClick={() => {
              handleClickShareFolder();
              handleOpenModal();
            }}
          ></Option>
        </li>
        <li>
          <Option
            imgSrc="/pencilIcon.svg"
            label="이름 변경"
            onClick={() => {
              handleClickEditFolder();
              handleOpenModal();
            }}
          ></Option>
        </li>
        <li>
          <Option
            imgSrc="/deleteIcon.svg"
            label="삭제"
            onClick={() => {
              handleClickDeleteFolder();
              handleOpenModal();
            }}
          ></Option>
        </li>
      </ul>
      <Modal {...modalProps} />
    </>
  );
};

export default OptionList;
