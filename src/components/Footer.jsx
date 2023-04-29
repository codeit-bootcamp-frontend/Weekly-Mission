import { Link } from "react-router-dom";
import styled from "styled-components";

const GFT = styled.footer`
  background-color: var(--black);
  font-family: "Arial", sans-serif;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 3.2rem 10.4rem 3.2rem;
  max-width: 192rem;
  height: 16rem;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    align-content: space-between;
    padding: 3.2rem;
  }
`;

const FooterContents1 = styled.p`
  margin: 0;
  color: var(--footer-text1);

  @media (max-width: 767px) {
    width: 100%;
    order: 1;
  }
`;

const FooterContents2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16.3rem;

  * {
    color: var(--footer-text2);
  }
`;

const FooterContents3 = styled.div``;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 11.6rem;
`;

function Footer() {
  return (
    <GFT>
      <FooterContainer>
        <FooterContents1>@codeit-2023</FooterContents1>
        <FooterContents2>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="faq">FAQ</Link>
        </FooterContents2>
        <FooterContents3>
          <IconBox>
            <a
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="src/assets/icon-facebook.png"
                alt="Facebook Icon"
                width="18"
              />
            </a>
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="src/assets/icon-twitter.png"
                alt="Twitter Icon"
                width="19"
              />
            </a>
            <a
              href="https://youtube.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="src/assets/icon-youtube.png"
                alt="Youtube Icon"
                width="20"
              />
            </a>
            <a
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="src/assets/icon-instagram.png"
                alt="Instagram Icon"
                width="17"
              />
            </a>
          </IconBox>
        </FooterContents3>
      </FooterContainer>
    </GFT>
  );
}

export default Footer;
