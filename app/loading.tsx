import classNames from "classnames/bind";
import styles from "./loading.module.css";

const cx = classNames.bind(styles);

export default function Loading() {
  return (
    <div className={cx("loading-content")}>
      <div className={cx("loading")}></div>
    </div>
  );
}
