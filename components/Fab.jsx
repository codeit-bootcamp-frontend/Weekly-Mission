import styles from "@/components/Fab.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Fab() {
  return (
    <div className={cx("fab")}>
      폴더 추가
      <img
        className={cx("add-icon", "add-colored")}
        src="/images/add-colored.svg"
      />
      <img className={cx("add-icon", "add")} src="/images/add.svg" />
    </div>
  );
}
