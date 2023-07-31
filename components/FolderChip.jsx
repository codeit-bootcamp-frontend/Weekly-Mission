import styles from "@/components/FolderChip.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function FolderChip({ folder, onSelect, selectedFolder = 0 }) {
  const handleClick = () => {
    onSelect(folder.id);
  };

  return (
    <div
      className={cx(
        "folder-chip",
        selectedFolder === folder.id && "folder-chip-selected"
      )}
      onClick={handleClick}
    >
      {folder.name}
    </div>
  );
}
