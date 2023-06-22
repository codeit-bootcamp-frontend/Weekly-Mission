import Image from "next/image";

import { IFolder, ILink } from "@/types/linkbrary";

import styles from "./FolderItem.module.scss";

interface IFolderItemProps {
  folder: IFolder;
  links: ILink[] | [];
  index: number;
  isChecked: boolean;
  setCheckedItemId: React.Dispatch<React.SetStateAction<number>>;
}

const FolderItem = ({
  folder,
  links,
  index,
  isChecked,
  setCheckedItemId,
}: IFolderItemProps) => {
  const linkLength = links.filter(
    (link) => link.folder_id === folder.id
  ).length;

  return (
    <div
      className={`${styles.itemWrapper} ${styles[`${isChecked}`]}`}
      onClick={() => setCheckedItemId(index)}
    >
      {isChecked && (
        <div className={styles.checkedIcon}>
          <Image
            className={styles.image}
            fill
            src="/assets/checked-folder.svg"
            alt="checked folder"
          />
        </div>
      )}
      <div className={`${styles.linkName} ${styles[`${isChecked}`]}`}>
        {folder.name}
      </div>
      <div className={`${styles.linkLength} ${styles[`${isChecked}`]}`}>
        {linkLength}개 링크
      </div>
    </div>
  );
};

export default FolderItem;
