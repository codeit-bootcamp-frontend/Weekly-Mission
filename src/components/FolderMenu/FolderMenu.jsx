import FolderChipButton from "@/presentation/Button/FolderChipButton";
import styles from "./folder-menu.module.css";
import { useRouter } from "next/router";

const FolderMenu = ({ currentTab, MOCK_FOLDERS }) => {
  const router = useRouter();
  const handleClick = ({ id }) => {
    if (id === 0) {
      router.push("/folder");
    } else if (id === 1) {
      router.push("/folder/favorites");
    } else {
      router.push(`/folder/${id - 1}`);
    }
  };

  return (
    <div className={styles.folderMenuContainer}>
      <div className={styles.chipsContainer}>
        <div className={styles.chip}>
          {MOCK_FOLDERS.map((folder) => (
            <div key={folder.id} onClick={() => handleClick({ id: folder.id })}>
              <FolderChipButton
                name={folder.folderTitle}
                isSelected={folder.folderTitle === currentTab}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FolderMenu;
