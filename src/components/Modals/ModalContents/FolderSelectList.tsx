import React, { useState } from "react";
import styles from "./FolderSelectList.module.scss";
import Image from "next/image";

type folderObj = {
  title: string;
  linkCount: number;
};

interface FolderSelectItemProps {
  option: folderObj;
  selected: boolean;
  onSelectOption: () => void;
}

interface FolderSelectProps {
  folders: folderObj[];
}

const FolderSelectItem = ({
  option,
  selected,
  onSelectOption,
}: FolderSelectItemProps) => {
  return (
    <div
      className={
        selected
          ? `${styles.itemContainer} ${styles.selected}`
          : styles.itemContainer
      }
      onClick={onSelectOption}
    >
      <div className={styles.optionContainer}>
        <span className={styles.optionTitle}>{option.title}</span>
        <span className={styles.optionDetail}>{option.linkCount}</span>
      </div>
      {selected && (
        <div className={styles.selectedIconBox}>
          <Image src="/selected-icon.svg" alt="selected" fill />
        </div>
      )}
    </div>
  );
};

const FolderSelectList = ({ folders }: FolderSelectProps) => {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const handleSelectOption = (optionIdx: number) => {
    setSelectedIdx(optionIdx);
  };
  return (
    <ul className={styles.optionListContainer}>
      {folders.map((item, idx) => (
        <li key={idx}>
          <FolderSelectItem
            option={item}
            selected={idx === selectedIdx}
            onSelectOption={() => {
              handleSelectOption(idx);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default FolderSelectList;
