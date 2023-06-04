import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./Option.module.scss";

import deleteImage from "@/public/images/folder-delete.svg";
import penImage from "@/public/images/folder-pen.svg";
import shareImage from "@/public/images/folder-share.svg";

const cx = classNames.bind(styles);

export default function Option() {
  return (
    <div className={cx("container")}>
      <div className={cx("option")}>
        <Image width={18} height={18} src={shareImage} alt="폴더 공유" />
        공유
      </div>
      <div className={cx("option")}>
        <Image width={18} height={18} src={penImage} alt="폴더 이름 변경" />
        이름 변경
      </div>
      <div className={cx("option")}>
        <Image width={18} height={18} src={deleteImage} alt="폴더 삭제" />
        삭제
      </div>
    </div>
  );
}
