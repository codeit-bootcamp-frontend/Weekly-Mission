import { useRouter } from "next/router";
import styles from "./folder-chip-button.module.css";

const FolderChipButton = ({ name, isSelected }) => {
  return (
    <button className={`${styles.tabContainer} ${styles[`${isSelected}`]}`}>
      {name}
    </button>
  );
};

export default FolderChipButton;
