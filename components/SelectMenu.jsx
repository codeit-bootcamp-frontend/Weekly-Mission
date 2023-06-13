import styles from "@/styles/SelectMenu.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SelectMenu({ onDeleteClick, onAddClick }) {
  const handleDeleteLink = (e) => {
    e.stopPropagation();
    onDeleteClick(true);
  };

  const handleAddLinkToFolder = (e) => {
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
