import Link from "next/link";
import classNames from "classnames/bind";
import styles from "@/components/Button.module.css";

const cx = classNames.bind(styles);

export function SigninButton() {
  return (
    <>
      <Link href="/signin">
        <div className={cx("button", "button-mobile", "signin")}>로그인</div>
      </Link>
    </>
  );
}

export function AddLinkButton() {
  return (
    <div className={cx("addlink-wrapper")}>
      <Link href="">
        <div className={cx("button", "button-mobile", "add-link")}>
          링크 추가하기
        </div>
      </Link>
    </div>
  );
}

export function AddButton() {
  return (
    <>
      <div className={cx("button", "add")}>추가하기</div>
    </>
  );
}

export function ModalButton({ children }) {
  return <div className={cx("button", "modal-button")}>{children}</div>;
}

export function ModalDeleteButton() {
  return <div className={cx("delete-button")}>삭제하기</div>;
}
