import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="copyright">©codeit - 2023</div>
        <div className="footer-links">
          <a href="privacy.html" className="footer-link pp" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="faq.html" className="footer-link faq" target="_blank" rel="noopener noreferrer">
            FAQ
          </a>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="fb" alt="facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="tw" alt="twitter" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} className="yt" alt="youtube" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="ig" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
