import classNames from "classnames/bind";
import styles from "@/styles/AddLinkBar.module.css";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function AddLinkBar() {
  return (
    <div className={cx("bar-container")}>
      <Image className={cx("link-icon")} src="/images/link.svg" alt="링크 아이콘" width={20} height={20} />
      <input className={cx("input")} type="text" placeholder="링크를 추가해 보세요" />
      <button className={cx("add-button")} type="button">
        추가하기
      </button>
    </div>
  );
}
