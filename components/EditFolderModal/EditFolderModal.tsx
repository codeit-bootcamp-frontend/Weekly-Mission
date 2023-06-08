"use client";

import { useEffect, useRef } from "react";

import ModalLayout from "components/Common/ModalLayout";
import { allowScroll, preventScroll } from "lib/modal";

import styles from "./EditFolderModal.module.scss";

interface IEditFolderModal {
  setOpenEditFolderModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentFolderName: string;
}

const EditFolderModal = ({
  setOpenEditFolderModal,
  currentFolderName,
}: IEditFolderModal) => {
  const folderEditNameRef = useRef<HTMLInputElement>(null);

  const handleClickEditFolderName = () => {
    // TODO: input 데이터로 폴더명 전송
    if (!folderEditNameRef.current) return;
    // console.log(folderEditNameRef.current.value);

    const timer = setTimeout(() => {
      setOpenEditFolderModal(false);
      clearTimeout(timer);
    }, 500);
  };

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <ModalLayout
      portalId="edit-folder-portal"
      handleClickCloseModal={() => setOpenEditFolderModal(false)}
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
