"use client";
import React, { useContext, useEffect } from "react";
import styles from "./folder-menu.module.css";
import { useRouter } from "next/navigation";
import FolderChipButton from "@/presentation/Button/FolderChipButton";
import AddFolderButton from "../AddFolderButton/AddFolderButton";
import { Folder } from "$/types";
import FolderTabsContext from "@/contexts/FolderTabsContext";
import AddLinkBarBottomContext from "@/contexts/AddLinkBarBottomContext";
import CurrentTabContext from "@/contexts/CurrentTabContext";
import { userId } from "@/utils/common.api";
import { fetchData } from "@/utils/fetchData";
import useFetch from "$/src/hooks/useFetch";

interface FolderMenuProps {
  currentTab?: string | undefined;
}

const fetchTabs = () =>
  fetchData<Folder[]>({
    url: `/api/users/${userId}/folders`,
    option: "no-store",
  });

const FolderMenu = ({ currentTab }: FolderMenuProps) => {
  const router = useRouter();

  const { tabs, setTabs } = useContext(FolderTabsContext);
  const { setCurrentFolderTitle } = useContext(CurrentTabContext);
  const { isAddLinkBarBottom } = useContext(AddLinkBarBottomContext);

  useEffect(() => {
    const fetchDataAndSetTabs = async () => {
      try {
        const data = await fetchTabs();
        const sortedTabs = data.sort((a, b) => a.id - b.id); // TODO: 백엔드에서 Update할 경우 뒤로 밀리는 현상 때문에 추가. 추후 api 수정되면 삭제
        setTabs(data);
      } catch (error) {
        console.error("Error fetching tabs:", error);
      }
    };

    fetchDataAndSetTabs();
  }, [setTabs]);

  useEffect(() => {
    if (!currentTab) return;
    const foundTab = tabs?.find((tab) => tab.id === parseInt(currentTab));
    if (foundTab) {
      setCurrentFolderTitle(foundTab.name);
    }
  }, [setCurrentFolderTitle, tabs, currentTab]);

  const handleClick = (tab: Folder | undefined) => {
    const { id = "", name = "전체" } = tab || {};
    setCurrentFolderTitle(name);
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
