import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.copyright}`}>©codeit - 2023</div>
        <div className={`${styles.policy}`}>
          <Link to="/privacy" className={`${styles.privacy}`}>
            Privacy Policy
          </Link>
          <Link to="/faq" className={`${styles.faq}`}>
            FAQ
          </Link>
        </div>
        <div className={`${styles.sns}`}>
          <Link to="https://www.facebook.com/" className={`${styles.facebook}`}>
            <img src={'/assets/facebook-icon.svg'} alt="Facebook Icon" />
          </Link>
          <Link to="https://twitter.com/?lang=ko" className={`${styles.twitter}`}>
            <img src={'/assets/twitter-icon.svg'} alt="Twitter Icon" />
          </Link>
          <Link to="https://www.youtube.com/" className={`${styles.youtube}`}>
            <img src={'/assets/youtube-icon.svg'} alt="Youtube Icon" />
          </Link>
          <Link to="https://www.instagram.com/" className={`${styles.instagram}`}>
            <img src={'/assets/instagram-icon.svg'} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
