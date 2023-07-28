import { AddButton } from "@/components/Button";
import styles from "@/components/AddLinkBar.module.css";
import classNames from "classnames/bind";

export default function AddLinkBar() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("addlink-bar-container")}>
      <div className={cx("addlink-bar")}>
        <img className={cx("link-icon")} src="/images/link.svg" />
        <input
          className={cx("addlink-input")}
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <AddButton />
      </div>
    </div>
  );
}
