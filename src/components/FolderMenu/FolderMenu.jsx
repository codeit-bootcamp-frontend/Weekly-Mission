import FolderChipButton from "@/presentation/Button/FolderChipButton";
import styles from "./folder-menu.module.css";

const MOCK_FOLDERS = [
  { id: 0, folderTitle: "전체" },
  { id: 1, folderTitle: "⭐️ 즐겨찾기" },
  { id: 2, folderTitle: "코딩 팁" },
  { id: 3, folderTitle: "채용 사이트" },
  { id: 4, folderTitle: "유용한 글" },
  { id: 5, folderTitle: "나만의 장소" },
];

const FolderMenu = ({ currentTab }) => {
  return (
    <div className={styles.folderMenuContainer}>
      <div className={styles.chipContainer}>
        {MOCK_FOLDERS.map((folder) => (
          <FolderChipButton
            key={folder.id}
            id={folder.id}
            name={folder.folderTitle}
            isSelected={folder.id === currentTab}
          />
        ))}
      </div>
    </div>
  );
};

export default FolderMenu;
