import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("copyright")}>©codeit - 2023</div>
        <div className={cx("info")}>
          <Link href="/privacy" className={cx("policy")}>
            Privacy Policy
          </Link>
          <Link href="/faq" className={cx("FAQ")}>
            FAQ
          </Link>
        </div>
        <div className={cx("icons")}>
          <Link
            href="https://ko-kr.facebook.com/"
            className={cx("icon", "facebook")}
          >
            <Image
              src="/assets/facebook-icon.png"
              alt="Facebook Icon"
              width={18}
              height={19}
            />
          </Link>
          <Link
            href="https://twitter.com/?lang=ko"
            className={cx("icon", "twitter")}
          >
            <Image
              src="/assets/twitter-icon.png"
              alt="Twitter Icon"
              width={18}
              height={19}
            />
          </Link>
          <Link
            href="https://www.youtube.com/"
            className={cx("icon", "youtube")}
          >
            <Image
              src="/assets/youtube-icon.png"
              alt="Youtube Icon"
              width={18}
              height={19}
            />
          </Link>
          <Link
            href="https://www.instagram.com/"
            className={cx("icon", "instagram")}
          >
            <Image
              src="/assets/instagram-icon.png"
              alt="Instagram Icon"
              width={18}
              height={19}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
