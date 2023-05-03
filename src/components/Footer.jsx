import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebookLogo from "/src/assets/sns-logo-facebook.png";
import twitterLogo from "/src/assets/sns-logo-twitter.png";
import youtubeLogo from "/src/assets/sns-logo-youtube.png";
import instagramLogo from "/src/assets/sns-logo-instagram.png";

function Footer() {
  return (
    <footer>
      <div className={styles.copyright}>©codeit - 2023</div>
      <div className={styles.policyInfo}>
        <Link to="/policy">
          <div>Privacy Policy</div>
        </Link>
        <Link to="/faq">
          <div>FAQ</div>
        </Link>
      </div>
      <div className={styles.snsContainer}>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img
            className={styles.snsLogoImg}
            src={facebookLogo}
            alt="페이스북로고"
          />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img
            className={styles.snsLogoImg}
            src={twitterLogo}
            alt="트위터로고"
          />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img
            className={styles.snsLogoImg}
            src={youtubeLogo}
            alt="유튜브로고"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img
            className={styles.snsLogoImg}
            src={instagramLogo}
            alt="인스타그램로고"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
