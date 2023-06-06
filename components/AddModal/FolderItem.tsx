import Image from "next/image";

import styles from "./FolderItem.module.css";

const FolderItem = ({
  folder,
  idx,
  isChecked,
  setCheckedItemId,
}: {
  folder: { name: string; length: number };
  idx: number;
  isChecked: boolean;
  setCheckedItemId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // TODO: API 받아오는 걸로 변경하면, folder prop 타입도 변경될 예정
  return (
    <div
      className={`${styles.itemWrapper} ${styles[`${isChecked}`]}`}
      onClick={() => setCheckedItemId(idx)}
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
        {folder.length}개 링크
      </div>
    </div>
  );
};

export default FolderItem;
