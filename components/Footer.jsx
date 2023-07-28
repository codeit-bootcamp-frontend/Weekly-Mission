import Link from "next/link";
import styles from "@/components/Footer.module.css";
import classNames from "classnames/bind";

export default function Footer() {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx("white-space")}></div>
      <div className={cx("footer-container")}>
        <div className={cx("footer")}>
          <div className={cx("copyright")}>©codeit-2023</div>
          <div className={cx("bottom-links")}>
            <Link href="/privacy">
              <div className={cx("bottom-link")}>Privacy Policy</div>
            </Link>
            <Link href="/faq">
              <div className={cx("bottom-link")}>FAQ</div>
            </Link>
          </div>
          <div className={cx("sns-icons")}>
            <Link href="https://www.facebook.com">
              <img
                className={cx("sns-icon")}
                src="/images/sns-icons/facebook.png"
                alt="페이스북"
              />
            </Link>
            <Link href="https://twitter.com">
              <img
                className={cx("sns-icon")}
                src="/images/sns-icons/twitter.png"
                alt="트위터"
              />
            </Link>
            <Link href="https://www.youtube.com">
              <img
                className={cx("sns-icon")}
                src="/images/sns-icons/youtube.png"
                alt="유튜브"
              />
            </Link>
            <Link href="https://www.instagram.com">
              <img
                className={cx("sns-icon")}
                src="/images/sns-icons/instagram.png"
                alt="인스타그램"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
