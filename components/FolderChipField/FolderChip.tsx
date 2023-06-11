import Link from "next/link";

import styles from "./FolderChip.module.scss";

interface IFolderChipProps {
  name: string;
  toRoute: number;
  isSelected: boolean;
}

const FolderChip = ({ name, toRoute, isSelected }: IFolderChipProps) => {
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

export default FolderChip;
