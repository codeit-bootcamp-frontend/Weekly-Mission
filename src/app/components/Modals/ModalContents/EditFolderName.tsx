import React from "react";
import styles from "./EditFolderName.module.scss";

const EditFolderName = ({ folderName }: { folderName: string }) => {
  return (
    <div className={styles.inputBox}>
      <input type="text" className={styles.input} placeholder={folderName} />
    </div>
  );
};

export default EditFolderName;
