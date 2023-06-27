import styles from "@/styles/Footer.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("corporation")}>©codeit - 2023</div>
      <ul className={cx("more-information")}>
        <li>
          <a href="/privacy/">Privacy Policy</a>
        </li>
        <li>
          <a href="/faq/">FAQ</a>
        </li>
      </ul>
      <ul className={cx("sns-container")}>
        <li>
          <Link href="https://facebook.com/" target="_blank">
            <Image src="/images/facebook.svg" alt="페이스북" width={20} height={20} />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/" target="_blank">
            <Image src="/images/twitter.svg" alt="트위터" width={20} height={20} />
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/" target="_blank">
            <Image src="/images/youtube.svg" alt="유튜브" width={20} height={20} />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src="/images/instagram.svg" alt="인스타그램" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
