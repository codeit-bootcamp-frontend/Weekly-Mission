"use client";

import { useRef } from "react";

import ModalLayout from "../ModalLayout";
import styles from "./EditFolderModal.module.scss";

interface IEditFolderModalProps {
  handleCloseModal: () => void;
  currentFolderName: string;
}

const EditFolderModal = ({
  handleCloseModal,
  currentFolderName,
}: IEditFolderModalProps) => {
  const folderEditNameRef = useRef<HTMLInputElement>(null);

  const handleClickEditFolderName = () => {
    // TODO: input 데이터로 폴더명 전송
    if (!folderEditNameRef.current) return;
    // console.log(folderEditNameRef.current.value);

    setTimeout(() => {
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
