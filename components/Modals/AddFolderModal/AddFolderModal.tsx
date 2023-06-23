"use client";

import { useRef } from "react";

import { useRouter } from "next/navigation";

import { createFolder } from "@/utils/axios/folderRequest";

import ModalLayout from "../ModalLayout";
import styles from "./AddFolderModal.module.scss";

interface IAddFolderModalProps {
  userId: number;
  setOpenAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddFolderModal = ({
  userId,
  setOpenAddFolderModal,
}: IAddFolderModalProps) => {
  const router = useRouter();
  const folderNameRef = useRef<HTMLInputElement>(null);

  const handleClickAddFolder = async () => {
    if (folderNameRef.current && folderNameRef.current.value.length) {
      // TODO: 유저가 작성한 이름으로 정말 생성할 건지 한번 더 확인하는 문구 작성하기
      await createFolder(folderNameRef.current.value, userId);
    }

    setTimeout(() => {
      router.refresh();
      setOpenAddFolderModal(false);
    }, 500);
  };

  return (
    <ModalLayout
      portalId="add-folder-portal"
      handleClickCloseModal={() => setOpenAddFolderModal(false)}
    >
      <h3 className={styles.title}>폴더 추가</h3>
      <input
        ref={folderNameRef}
        className={styles.input}
        type="text"
        placeholder="내용 입력"
      />
      <div className={styles.buttonWrapper}>
        <button
          className={styles.addFolderButton}
          onClick={handleClickAddFolder}
        >
          추가하기
        </button>
      </div>
    </ModalLayout>
  );
};

export default AddFolderModal;
