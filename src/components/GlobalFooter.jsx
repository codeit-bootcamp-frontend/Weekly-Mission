import React from 'react';
import styles from '@components/GlobalFooter.module.css';

// 링크 사진
import vector from '@assets/Vector.png';
import vector1 from '@assets/Vector-1.png';
import vector2 from '@assets/Vector-2.png';
import vector3 from '@assets/Vector-3.png';

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
          <a href="/pages/facebook.html">
            <img src={vector} />
          </a>
          <a href="/pages/twitter.html">
            <img src={vector1} />
          </a>
          <a href="/pages/youtube.html">
            <img src={vector2} />
          </a>
          <a href="/pages/instagram.html">
            <img src={vector3} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
