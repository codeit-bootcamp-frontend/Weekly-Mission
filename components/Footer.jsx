import Link from "next/link";
import styles from "@/components/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.copyright}>©codeit-2023</div>
        <div className={styles.bottomLinks}>
          <Link className={styles.link} href="/privacy">
            <div className={styles.bottomLink}>Privacy Policy</div>
          </Link>
          <Link className={styles.link} href="/faq">
            <div className={styles.bottomLink}>FAQ</div>
          </Link>
        </div>
        <div className={styles.snsIcons}>
          <Link href="https://www.facebook.com">
            <img
              className={styles.snsIcon}
              src="/images/sns-icons/facebook.png"
              alt="페이스북"
            />
          </Link>
          <Link href="https://twitter.com">
            <img
              className={styles.snsIcon}
              src="/images/sns-icons/twitter.png"
              alt="트위터"
            />
          </Link>
          <Link href="https://www.youtube.com">
            <img
              className={styles.snsIcon}
              src="/images/sns-icons/youtube.png"
              alt="유튜브"
            />
          </Link>
          <Link href="https://www.instagram.com">
            <img
              className={styles.snsIcon}
              src="/images/sns-icons/instagram.png"
              alt="인스타그램"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
