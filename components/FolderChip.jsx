import classNames from "classnames/bind";
import styles from "@/styles/FolderChip.module.css";

const cx = classNames.bind(styles);

export default function FolderChip({ children, active = false }) {
  return (
    <button className={cx("chip-button", { active })} type="button">
      {children}
    </button>
  );
}
