import React from 'react';
import styles from '@components/GlobalFooter.module.css';

// 링크 사진
import vector from '@assets/Vector.png';
import vector1 from '@assets/Vector-1.png';
import vector2 from '@assets/Vector-2.png';
import vector3 from '@assets/Vector-3.png';
import { Link } from 'react-router-dom';

const GlobalFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className="codeit">@codeit - 2023</div>
        <div className="privacy">
          <a href="/pages/privacy.html">Privacy Policy</a>
          <a href="/pages/faq.html">FAQ</a>
        </div>
        <div className="icons">
          <Link to="https://www.facebook.com/" href="/pages/facebook.html">
            <img src={vector} />
          </Link>
          <Link to="https://twitter.com/?lang=ko">
            <img src={vector1} />
          </Link>
          <Link to="https://www.youtube.com/">
            <img src={vector2} />
          </Link>
          <Link to="https://www.instagram.com">
            <img src={vector3} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
