import React, { MouseEventHandler } from "react";
import styles from "./AddFolder.module.scss";

interface DeleteFolderProps {
  onDelete: MouseEventHandler;
}

const DeleteFolder = ({ onDelete }: DeleteFolderProps) => {
  return (
    <>
      <button type="button" className={styles.deleteBtn} onClick={onDelete}>
        삭제하기
      </button>
    </>
  );
};

export default DeleteFolder;
