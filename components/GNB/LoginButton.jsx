import classNames from "classnames/bind";
import Link from "next/link";

import styles from "./LoginButton.module.scss";

const cx = classNames.bind(styles);

export default function LoginButton() {
  return (
    <Link href="/signin" className={cx("loginBtn")}>
      로그인
    </Link>
  );
}
