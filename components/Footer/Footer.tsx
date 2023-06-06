import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copyright}>©codeit - 2023</div>
        <div className={styles.policy}>
          <Link href="/" className={styles.privacy}>
            Privacy Policy
          </Link>
          <Link href="/" className={styles.faq}>
            FAQ
          </Link>
        </div>
        <div className={styles.sns}>
          <Link href="https://www.facebook.com/" className={styles.facebook}>
            <Image
              src="/assets/facebook-icon.svg"
              alt="Facebook Icon"
              width={18}
              height={19}
            />
          </Link>
          <Link href="https://twitter.com/?lang=ko" className={styles.twitter}>
            <Image
              src="/assets/twitter-icon.svg"
              alt="Twitter Icon"
              width={20}
              height={16}
            />
          </Link>
          <Link href="https://www.youtube.com/" className={styles.youtube}>
            <Image
              src="/assets/youtube-icon.svg"
              alt="Youtube Icon"
              width={20}
              height={14}
            />
          </Link>
          <Link href="https://www.instagram.com/" className={styles.instagram}>
            <Image
              src="/assets/instagram-icon.svg"
              alt="Instagram Icon"
              width={17}
              height={18}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
