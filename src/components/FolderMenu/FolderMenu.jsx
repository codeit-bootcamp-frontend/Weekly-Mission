import FolderChipButton from "@/presentation/Button/FolderChipButton";
import styles from "./folder-menu.module.css";
import { useRouter } from "next/router";

const FolderMenu = ({ currentTab, tabs, onCurrentFolderTitle }) => {
  const router = useRouter();

  const handleClick = (tab) => {
    const { id = "", name = "전체" } = tab || {};
    router.push(`/folder/${id}`);
    onCurrentFolderTitle(name);
  };

  return (
    <div className={styles.folderMenuContainer}>
      <div className={styles.chipsContainer}>
        <div className={styles.chip}>
          <div key="total" onClick={() => handleClick()}>
            <FolderChipButton
              name="전체"
              isSelected={currentTab === undefined}
            />
          </div>
          {tabs.map((tab) => (
            <div key={tab.id} onClick={() => handleClick(tab)}>
              <FolderChipButton
                name={tab.name}
                isSelected={tab.id === Number(currentTab)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FolderMenu;
