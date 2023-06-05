import { useRouter } from "next/router";
import styles from "./folder-chip-button.module.css";

const FolderChipButton = ({ name, id, isSelected }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/folder/${id}`);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${styles.tabContainer} ${styles[`${isSelected}`]}`}
      >
        {name}
      </button>
    </>
  );
};

export default FolderChipButton;
