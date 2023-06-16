import Image from 'next/image'
import Link from 'next/link'
import * as styles from './Footer.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.firstItem}>@codeit-2023</div>
        <div className={styles.secondItem}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <div className={styles.icons}>
            <Link href="https://www.google.com/" target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src="/icon-facebook.svg"
                  alt="Facebook Icon"
                />
              </div>
            </Link>
            <Link href="https://www.twitter.com/" target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src="/icon-twitter.svg"
                  alt="Twitter"
                />
              </div>
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src="/icon-youtube.svg"
                  alt="Youtube"
                />
              </div>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src="/icon-instagram.svg"
                  alt="Instagram"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
