import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Arial } from "@/lib/localFont";
const Footer = () => {
  const SOCIAL_MEDIAS = [
    {
      href: "https://ko-kr.facebook.com/",
      alt: "facebook",
      src: "/assets/images/facebook.svg",
    },
    {
      href: "https://twitter.com/?lang=ko",
      alt: "twitter",
      src: "/assets/images/twitter.svg",
    },
    {
      href: "https://www.youtube.com/?gl=KR",
      alt: "youtube",
      src: "/assets/images/youtube.svg",
    },
    {
      href: "https://www.instagram.com/",
      alt: "insta",
      src: "/assets/images/insta.svg",
    },
  ];

  return (
    <div className={Arial.className}>
      <footer className={styles.footerWrapper}>
        <div className={styles.contentWrapper}>
          <p className={styles.copyright}>©codeit - 2023</p>
          <div className={styles.privacyPolicyFAQ}>
            <Link className={styles.privacyPolicy} href="./privacy">
              Privacy Policy
            </Link>
            <Link className={styles.faq} href="./faq">
              FAQ
            </Link>
          </div>
          <div className={`${styles.socialMediaLinks} ${styles.customStyles}`}>
            {SOCIAL_MEDIAS.map((socialMedia) => (
              <Link key={socialMedia.alt} href={socialMedia.href}>
                <Image
                  alt={socialMedia.alt}
                  src={socialMedia.src}
                  width={18}
                  height={18}
                />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
