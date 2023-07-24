import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./not-found.module.css";

const cx = classNames.bind(styles);

export default function NotFound() {
  return (
    <div className={cx("error")}>
      <div className={cx("error-content")}>
        <h1 className={cx("error-header")}>페이지가 없거나 접근할 수 없습니다.</h1>
        <Link href="/">
          <button className={cx("home-button")} type="button">
            링크브러리 홈으로 →
          </button>
        </Link>
      </div>
    </div>
  );
}
