import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/GNB.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function GNB() {
  return (
    <nav className={cx("gnb")}>
      <Link className={cx("linkbrary-logo")} href="/">
        <Image fill className={cx("linkbrary-logo-image")} src="/images/linkbrary.svg" alt="linkbrary 로고 이미지" />
      </Link>
      <Link className={cx("login-button")} href="/">
        로그인
      </Link>
    </nav>
  );
}
