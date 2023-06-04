import classNames from "classnames/bind";

import styles from "./AddFolderButton.module.scss";

const cx = classNames.bind(styles);

export default function AddFolderButton() {
  return (
    <button className={cx("button")}>
      <span>폴더 추가</span>
      <span>+</span>
    </button>
  );
}
