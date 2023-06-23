"use client";

import { useRef } from "react";

import { useRouter } from "next/navigation";

import { IFolder } from "@/types/linkbrary";
import { editFolderName } from "@/utils/axios/folderRequest";

import ModalLayout from "../ModalLayout";
import styles from "./EditFolderModal.module.scss";

interface IEditFolderModalProps {
  handleCloseModal: () => void;
  currentFolder: IFolder;
}

const EditFolderModal = ({
  handleCloseModal,
  currentFolder,
}: IEditFolderModalProps) => {
  const router = useRouter();
  const folderEditNameRef = useRef<HTMLInputElement>(null);
  const { id: currentFolderId, name: currentFolderName } = currentFolder;

  const handleClickEditFolderName = async () => {
    if (folderEditNameRef.current && folderEditNameRef.current.value) {
      await editFolderName(folderEditNameRef.current.value, currentFolderId);
    }

    setTimeout(() => {
      router.refresh();
      handleCloseModal();
    }, 500);
  };

  return (
    <ModalLayout
      portalId="edit-folder-portal"
      handleClickCloseModal={handleCloseModal}
    >
      <h3 className={styles.title}>폴더 이름 변경</h3>
      <input
        ref={folderEditNameRef}
        className={styles.input}
        type="text"
        placeholder={currentFolderName}
      />
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleClickEditFolderName}>
          변경하기
        </button>
      </div>
    </ModalLayout>
  );
};

export default EditFolderModal;
