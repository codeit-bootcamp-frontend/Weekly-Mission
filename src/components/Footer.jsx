import styles from "./Footer.module.css";
import facebook from "@assets/img/facebook.png";
import twitter from "@assets/img/twitter.png";
import instagram from "@assets/img/instagram.png";
import youtube from "@assets/img/youtube.png";

export default function Footer() {
  return (
    <footer>
      <div className={`${styles.footerItems} ${styles.desktop}`}>
        <div className={styles.companyName}>©codeit - 2023</div>

        <div className={styles.footerCenter}>
          <a href="privacy/privacy.html">Privacy Policy</a>
          <a href="faq/faq.html">FAQ</a>s
        </div>

        <div className={styles.footerRight}>
          <a href="https://ko-kr.facebook.com/">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://twitter.com/?lang=ko">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="Youtube" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className={`${styles.footerItems} ${styles.mobile}`}>
        <div className={styles.footerTop}>
          <div className={styles.footerCenter}>
            <a href="privacy/privacy.html">Privacy Policy</a>
          </div>

          <div className={styles.footerCenter}>
            <a href="faq/faq.html">FAQ</a>
          </div>

          <div className={styles.footerRight}>
            <a href="https://ko-kr.facebook.com/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com/?lang=ko">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="Youtube" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className={styles.companyName}>©codeit - 2023</div>
      </div>
    </footer>
  );
}
