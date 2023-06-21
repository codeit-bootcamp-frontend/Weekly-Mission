import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

import styles from "@/components/Footer.module.scss";
import { arial } from "@/styles/fonts/localFont";

import facebookLogo from "@/public/images/sns-logo-facebook.png";
import instagramLogo from "@/public/images/sns-logo-instagram.png";
import twitterLogo from "@/public/images/sns-logo-twitter.png";
import youtubeLogo from "@/public/images/sns-logo-youtube.png";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={`${arial.className} ${cx("footer")}`}>
      <div className={cx("copyright")}>©codeit - 2023</div>
      <div className={cx("policyInfo")}>
        <Link href="/policy">
          <div>Privacy Policy</div>
        </Link>
        <Link href="/faq">
          <div>FAQ</div>
        </Link>
      </div>
      <div className={cx("snsContainer")}>
        <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Image width={18} height={18} src={facebookLogo} alt="페이스북로고" />
        </Link>
        <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
          <Image width={18} height={18} src={twitterLogo} alt="트위터로고" />
        </Link>
        <Link href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <Image width={18} height={18} src={youtubeLogo} alt="유튜브로고" />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width={18}
            height={18}
            src={instagramLogo}
            alt="인스타그램로고"
          />
        </Link>
      </div>
    </footer>
  );
}
