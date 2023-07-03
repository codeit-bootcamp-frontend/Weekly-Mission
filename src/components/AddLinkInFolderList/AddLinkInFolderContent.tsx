import styles from "./add-link-in-folder-content.module.css";
import AddLinkInFolderContentItem from "@/components/AddLinkInFolderList/AddLinkInFolderContentItem";
import FolderTabsContext from "@/contexts/FolderTabsContext";
import { useContext } from "react";

interface AddLinkInFolderContentProps {
  checkedItemId: number | null;
  onCheckedItemId: (id: number) => void;
  folder_id?: number | null;
}

const AddLinkInFolderContent = ({
  folder_id,
  checkedItemId,
  onCheckedItemId,
}: AddLinkInFolderContentProps) => {
  const tabs = useContext(FolderTabsContext);

  const handleClick = (id: number) => {
    onCheckedItemId(id);
  };

  return (
    <div className={styles.Container}>
      {tabs &&
        tabs
          .filter((tab) => (!tab.id && !folder_id) || tab.id !== folder_id)
          .map((tab) => {
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
