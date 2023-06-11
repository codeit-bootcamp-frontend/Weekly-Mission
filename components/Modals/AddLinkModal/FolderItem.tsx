import Image from "next/image";

import styles from "./FolderItem.module.scss";

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
  // TODO: 데이터 수정 가능한 Api 구축하면 prop 변경 예정
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
