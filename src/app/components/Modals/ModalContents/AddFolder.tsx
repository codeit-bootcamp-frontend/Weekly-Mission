import React, { useState } from "react";
import styles from "./AddFolder.module.scss";

interface AddFolderProps {
  onSubmit: (folderName: string) => void;
}

const AddFolder = ({ onSubmit }: AddFolderProps) => {
  const [folderName, setFolderName] = useState("");

  return (
    <form className={styles.container}>
      <div className={styles.inputBox}>
        <input
          type="text"
          name="folderName"
          className={styles.input}
          placeholder="폴더 이름 입력"
          autoComplete="off"
          value={folderName}
          onChange={(e) => {
            setFolderName(e.target.value);
          }}
        />
      </div>
      <input
        type="submit"
        className={styles.proceedBtn}
        onClick={() => {
          onSubmit(folderName);
        }}
        value="추가하기"
      />
    </form>
  );
};

export default AddFolder;
