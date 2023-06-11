import styles from "./add-link-in-folder-content.module.css";
import AddLinkInFolderContentItem from "@/components/AddLinkInFolderList/AddLinkInFolderContentItem";
import { Folder } from "$/types";

interface AddLinkInFolderContentProps {
  tabs: Folder[];
  checkedItemId: number | null;
  onCheckedItemId: (id: number) => void;
}

const AddLinkInFolderContent = ({
  tabs,
  checkedItemId,
  onCheckedItemId,
}: AddLinkInFolderContentProps) => {
  const handleClick = (id: number) => {
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
