import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebook from "/src/assets/facebook-icon.png";
import twitter from "/src/assets/twitter-icon.png";
import youtube from "/src/assets/youtube-icon.png";
import instagram from "/src/assets/instagram-icon.png";

function Footer() {
  return (
    <>
     <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.copyright}>©codeit - 2023</div>
          <div className={styles.info}>
            <Link to="/privacy" className={styles.policy}>Privacy Policy</Link>
            <Link to="/faq" className={styles.FAQ}>FAQ</Link>
          </div>
          <div className={styles.icons}> 
            <a href="https://ko-kr.facebook.com/" className={`${styles.icon} ${styles.facebook}`} 
              ><img src={facebook} alt="facebook"
            /></a>
            <a href="https://twitter.com/?lang=ko" className={`${styles.icon} ${styles.twitter}`}
              ><img src={twitter} alt="twitter"
            /></a>
            <a href="https://www.youtube.com/" className={`${styles.icon} ${styles.youtube}`}
              ><img src={youtube} alt="youtube"
            /></a>
            <a href="https://www.instagram.com/" className={`${styles.icon} ${styles.instagram}`}
              ><img src={instagram} alt="instagram"
            /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
