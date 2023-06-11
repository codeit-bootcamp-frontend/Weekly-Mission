import React from "react";
import Image from "next/image";
import styles from "./folder-menu.module.css";
import { useRouter } from "next/router";
import FolderChipButton from "@/presentation/Button/FolderChipButton";
import AddFolderButton from "../AddFolderButton/AddFolderButton";
import { Folder } from "$/types";

interface FolderMenuProps {
  currentTab: number | undefined;
  tabs: Folder[];
  onCurrentFolderTitle: (name: string) => void;
}

const FolderMenu = ({
  currentTab,
  tabs,
  onCurrentFolderTitle,
}: FolderMenuProps) => {
  const router = useRouter();

  const handleClick = (tab: Folder | undefined) => {
    const { id = "", name = "전체" } = tab || {};
    router.push(`/folder/${id}`);
    onCurrentFolderTitle(name);
  };

  return (
    <div className={styles.folderMenuContainer}>
      <div className={styles.chipsContainer}>
        <div className={styles.chip}>
          <div key="total" onClick={() => handleClick(undefined)}>
            <FolderChipButton
              name="전체"
              isSelected={currentTab === undefined}
            />
          </div>
          {tabs.map((tab) => (
            <div key={tab.id} onClick={() => handleClick(tab)}>
              {console.log(tab, currentTab)}
              <FolderChipButton
                name={tab.name}
                isSelected={tab.id === Number(currentTab)}
              />
            </div>
          ))}
        </div>
      </div>
      <AddFolderButton />
    </div>
  );
};

export default FolderMenu;
