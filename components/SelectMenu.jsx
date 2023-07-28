import styles from "@/components/SelectMenu.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SelectMenu() {
  return (
    <div className={cx("select-popover")}>
      <div className={cx("select-option")}>삭제하기</div>
      <div className={cx("select-option")}>폴더에 추가</div>
    </div>
  );
}
