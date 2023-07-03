import React, { useContext, useEffect } from "react";
import styles from "./folder-menu.module.css";
import { useRouter } from "next/navigation";
import FolderChipButton from "@/presentation/Button/FolderChipButton";
import AddFolderButton from "../AddFolderButton/AddFolderButton";
import { Folder } from "$/types";
import FolderTabsContext from "@/contexts/FolderTabsContext";
import AddLinkBarBottomContext from "@/contexts/AddLinkBarBottomContext";
import { redirect } from "next/navigation";

interface FolderMenuProps {
  currentTab?: string | undefined;
  onCurrentFolderTitle: (name: string) => void;
}

const FolderMenu = ({ currentTab, onCurrentFolderTitle }: FolderMenuProps) => {
  const router = useRouter();
  const tabs = useContext(FolderTabsContext);
  const { isAddLinkBarBottom } = useContext(AddLinkBarBottomContext);

  useEffect(() => {
    if (!currentTab) return;
    const foundTab = tabs?.find((tab) => tab.id === parseInt(currentTab));
    if (foundTab) {
      onCurrentFolderTitle(foundTab.name);
    }
  }, [onCurrentFolderTitle, tabs, currentTab]);

  const handleClick = (tab: Folder | undefined) => {
    const { id = "", name = "전체" } = tab || {};
    onCurrentFolderTitle(name);
    if (tab) {
      router.push(`/folder/${id}`);
    } else {
      router.push("/folder");
    }
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
          {tabs &&
            tabs.map((tab) => (
              <div key={tab.id} onClick={() => handleClick(tab)}>
                <FolderChipButton
                  name={tab.name}
                  isSelected={tab.id === Number(currentTab)}
                />
              </div>
            ))}
        </div>
      </div>
      <AddFolderButton isAddLinkBarBottom={isAddLinkBarBottom} />
    </div>
  );
};

export default FolderMenu;
