import styles from "@/components/Options.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Options() {
  return (
    <div className={cx("option-buttons")}>
      <div className={cx("option")}>
        <img src="/images/share.svg" />
        공유
      </div>
      <div className={cx("option")}>
        <img src="/images/pen.svg" />
        이름 변경
      </div>
      <div className={cx("option")}>
        <img src="/images/delete.svg" />
        삭제
      </div>
    </div>
  );
}
