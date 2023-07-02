import styles from "./add-link-in-folder-content.module.css";
import AddLinkInFolderContentItem from "@/components/AddLinkInFolderList/AddLinkInFolderContentItem";
import { Folder } from "$/types";
import { getData } from "$/src/lib/getData";
import { userId } from "$/src/lib/common.api";

interface AddLinkInFolderContentProps {
  checkedItemId: number | null;
  onCheckedItemId: (id: number) => void;
}

const AddLinkInFolderContent = async ({
  checkedItemId,
  onCheckedItemId,
}: AddLinkInFolderContentProps) => {
  const handleClick = (id: number) => {
    onCheckedItemId(id);
  };

  const tabs = await getData<Folder[]>(`/api/users/${userId}/folders`);

  return (
    <div className={styles.Container}>
      {tabs &&
        tabs.map((tab) => {
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
