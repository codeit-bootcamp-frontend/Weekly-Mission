import Link from "next/link";
import classNames from "classnames/bind";
import styles from "@/components/Button.module.css";

export function SigninButton() {
  const cx = classNames.bind(styles);

  return (
    <>
      <Link href="/signin">
        <div className={cx("button", "signin")}>로그인</div>
      </Link>
    </>
  );
}

export function AddLinkButton() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("addlink-wrapper")}>
      <Link href="">
        <div className={cx("button", "add-link")}>링크 추가하기</div>
      </Link>
    </div>
  );
}
