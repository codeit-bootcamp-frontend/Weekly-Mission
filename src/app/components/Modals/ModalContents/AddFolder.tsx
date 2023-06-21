import React from "react";
import styles from "./EditFolderName.module.scss";

const AddFolder = () => {
  return (
    <div className={styles.inputBox}>
      <input type="text" className={styles.input} placeholder="내용 입력" />
    </div>
  );
};

export default AddFolder;
