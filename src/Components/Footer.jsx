import "../assets/stylesheets/Footer.css";
import facebook from "../assets/images/sns-icons/facebook.png";
import twitter from "../assets/images/sns-icons/twitter.png";
import youtube from "../assets/images/sns-icons/youtube.png";
import instagram from "../assets/images/sns-icons/instagram.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <footer>
          <div id="copyright">©codeit-2023</div>
          <div className="bottomLinks">
            <a className="bottomLink privacy-policy" href="/privacy">
              Privacy Policy
            </a>
            <a className="bottomLink" href="/faq">
              FAQ
            </a>
          </div>
          <div className="snsIcons">
            <a href="https://www.facebook.com">
              <img className="snsIcon" src={facebook} alt="페이스북" />
            </a>
            <a href="https://twitter.com">
              <img className="snsIcon" src={twitter} alt="트위터" />
            </a>
            <a href="https://www.youtube.com">
              <img className="snsIcon" src={youtube} alt="유튜브" />
            </a>
            <a href="https://www.instagram.com">
              <img className="snsIcon" src={instagram} alt="인스타그램" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
