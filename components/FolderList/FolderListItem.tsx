import Link from "next/link";

import styles from "./FolderListItem.module.scss";

interface IFolderListItem {
  name: string;
  toRoute: number;
  isSelected: boolean;
}

const FolderListItem = ({ name, toRoute, isSelected }: IFolderListItem) => {
  return (
    <>
      <Link
        href={`/folder/${toRoute}`}
        className={`${styles.tabWrapper} ${styles[`${isSelected}`]}`}
      >
        {name}
      </Link>
    </>
  );
};

export default FolderListItem;
