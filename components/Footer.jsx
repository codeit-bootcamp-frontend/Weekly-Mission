import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from '@/public/icon-facebook.svg';
import twitterIcon from '@/public/icon-twitter.svg';
import youtubeIcon from '@/public/icon-youtube.svg';
import instagramIcon from '@/public/icon-instagram.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contents}>@codeit-2023</div>
        <div className={styles.contents}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="faq">FAQ</Link>
        </div>
        <div className={styles.contents}>
          <div className={styles.icons}>
            <Link href="https://www.google.com/" target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src={facebookIcon}
                  alt="Facebook Icon"
                />
              </div>
            </Link>
            <Link href="https://www.twitter.com/" target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src={twitterIcon}
                  alt="Twitter"
                />
              </div>
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src={youtubeIcon}
                  alt="Youtube"
                />
              </div>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src={instagramIcon}
                  alt="Instagram"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
