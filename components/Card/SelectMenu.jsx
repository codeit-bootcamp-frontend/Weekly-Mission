import classNames from "classnames/bind";

import styles from "./SelectMenu.module.scss";

const cx = classNames.bind(styles);

export default function SelectMenu() {
  return (
    <div className={cx("selectMenu")}>
      <div className={cx("menu")}>삭제하기</div>
      <div className={cx("menu")}>폴더에 추가</div>
    </div>
  );
}
