import Link from 'next/link';
import styles from '@layout/GlobalFooter.module.css'

// 링크 사진
import vector from '/public/Vector.svg';
import vector1 from '/public/Vector-1.svg';
import vector2 from '/public/Vector-2.svg';
import vector3 from '/public/Vector-3.svg';
import Image from 'next/image';

const GlobalFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles.codeit}>@codeit - 2023</div>
        <div className="privacy">
          <a href="/pages/privacy.html">Privacy Policy</a>
          <a href="/pages/faq.html">FAQ</a>
        </div>
        <div className="icons">
          <Link href="https://www.facebook.com/" >
            <Image src={vector} alt="페이스북"/>
          </Link>
          <Link href="https://twitter.com/?lang=ko">
            <Image src={vector1} alt="트위터" />
          </Link>
          <Link href="https://www.youtube.com/">
            <Image src={vector2} alt="유튜브"/>
          </Link>
          <Link href="https://www.instagram.com">
            <Image src={vector3} alt="인스타그램"/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;