import { Folder } from "$/types";
import styles from "./add-link-in-folder-content-item.module.css";
import Image from "next/image";

interface AddLinkInFolderContentItemProps {
  tab: Folder;
  onClick: (id: number) => void;
  isClicked: boolean;
}

const AddLinkInFolderContentItem = ({
  tab,
  onClick,
  isClicked,
}: AddLinkInFolderContentItemProps) => {
  return (
    <button
      className={`${styles.tabsContainer} ${isClicked ? styles.click : ""}`}
      onClick={() => onClick(tab.id)}
    >
      <div className={styles.folderName}>{tab.name}</div>
      {/* TODO: api 생기면 변경 */}
      <div className={styles.numOfLink}>{tab.id}개 링크</div>
      {isClicked && (
        <div className={styles.checkedIcon}>
          <Image
            className={styles.image}
            fill
            src="/assets/images/checked-folder.svg"
            alt="check icon"
          />
        </div>
      )}
    </button>
  );
};

export default AddLinkInFolderContentItem;
