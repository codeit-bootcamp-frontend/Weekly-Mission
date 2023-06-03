import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.bottomNav}>
        <div className={styles.copyright}>codeit - 2023</div>
        <div className={styles.internalLinks}>
          <div>
            <Link href="/privacy.html">Privacy Policy</Link>
            <Link className={styles.faqLink} href="/faq.html">
              FAQ
            </Link>
          </div>
        </div>
        <div className={styles.externalLinks}>
          <div className={styles.iconbox}>
            <Link href="https://www.facebook.com/" target="_blank">
              <Image
                src="/facebook.svg"
                width={20}
                height={20}
                alt="facebook"
              />
            </Link>
            <Link href="https://twitter.com/" target="_blank">
              <Image src="/twitter.svg" width={20} height={20} alt="twitter" />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <Image src="/youtube.svg" width={20} height={20} alt="youtube" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image
                src="/instagram.svg"
                width={20}
                height={20}
                alt="instagram"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
