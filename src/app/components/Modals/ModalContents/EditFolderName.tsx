import React, { useState } from "react";
import styles from "./AddFolder.module.scss";

interface EditFolderNameProps {
  folderName: string;
  onSubmit: (newName: string) => void;
}

const EditFolderName = ({ folderName, onSubmit }: EditFolderNameProps) => {
  const [newName, setNewName] = useState("");

  return (
    <form className={styles.container}>
      <div className={styles.inputBox}>
        <input
          type="text"
          name="folderName"
          className={styles.input}
          placeholder={folderName}
          autoComplete="off"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
      </div>
      <input
        type="submit"
        className={styles.proceedBtn}
        onClick={() => {
          onSubmit(newName);
        }}
        value="변경하기"
      />
    </form>
  );
};

export default EditFolderName;
