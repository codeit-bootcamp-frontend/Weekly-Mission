import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import twitter from "../images/twitter.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="corporation">©codeit - 2023</div>
      <ul className="more-information">
        <li>
          <a href="/privacy/">Privacy Policy</a>
        </li>
        <li>
          <a href="/faq/">FAQ</a>
        </li>
      </ul>
      <ul className="sns-container">
        <li>
          <a href="https://facebook.com/" target="_blank">
            <img src={facebook} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
