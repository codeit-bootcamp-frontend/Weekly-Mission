import { useState } from "react";
import styles from "./add-link-in-folder-content.module.css";
import AddLinkInFolderContentItem from "@/components/AddLinkInFolderList/AddLinkInFolderContentItem";

const AddLinkInFolderContent = ({ tabs, checkedItemId, onCheckedItemId }) => {
  const handleClick = (id) => {
    onCheckedItemId(id);
  };

  return (
    <div className={styles.Container}>
      {tabs.map((tab) => {
        return (
          <AddLinkInFolderContentItem
            key={tab.id}
            tab={tab}
            onClick={handleClick}
            isClicked={tab.id === checkedItemId}
          />
        );
      })}
    </div>
  );
};

export default AddLinkInFolderContent;
