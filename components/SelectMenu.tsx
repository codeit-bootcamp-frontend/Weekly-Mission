import styles from "@/styles/SelectMenu.module.css";
import classNames from "classnames/bind";

interface Props {
  onDeleteClick: (isOpen: boolean) => void;
  onAddClick: (isOpen: boolean) => void;
}

const cx = classNames.bind(styles);

export default function SelectMenu({ onDeleteClick, onAddClick }: Props) {
  const handleDeleteLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDeleteClick(true);
  };

  const handleAddLinkToFolder = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddClick(true);
  };

  return (
    <ul className={cx("menu-container")}>
      <li className={cx("delete")}>
        <button type="button" onClick={handleDeleteLink}>
          삭제하기
        </button>
      </li>
      <li className={cx("add")}>
        <button type="button" onClick={handleAddLinkToFolder}>
          폴더에 추가
        </button>
      </li>
    </ul>
  );
}
