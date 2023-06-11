import { useRouter } from "next/router";
import styles from "./folder-chip-button.module.css";

interface FolderChipButtonProps {
  name: string;
  isSelected: boolean;
}

const FolderChipButton = ({ name, isSelected }: FolderChipButtonProps) => {
  return (
    <button className={`${styles.tabContainer} ${styles[`${isSelected}`]}`}>
      {name}
    </button>
  );
};

export default FolderChipButton;
