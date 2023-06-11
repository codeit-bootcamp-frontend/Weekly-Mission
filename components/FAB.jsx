import classNames from "classnames/bind";
import Image from "next/image";
import styles from "@/styles/FAB.module.css";

const cx = classNames.bind(styles);

export default function FAB() {
  return (
    <button className={cx("folder-add-button")}>
      폴더 추가
      <Image src="/images/add.svg" alt="추가 아이콘" width={16} height={16} />
    </button>
  );
}
