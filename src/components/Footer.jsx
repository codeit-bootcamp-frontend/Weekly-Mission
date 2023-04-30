import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--black);
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 3.2rem 10.4rem 3.2rem;
  max-width: 192rem;
  height: 16rem;
  font-family: "Arial", sans-serif;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    align-content: space-between;
    padding: 3.2rem;
  }
`;

const FooterContents = styled.div`
  &:first-child {
    color: var(--footer-text1);

    @media (max-width: 767px) {
      width: 100%;
      order: 1;
    }
  }

  &:nth-child(2) {
    display: flex;
    justify-content: space-between;
    width: 16.3rem;

    * {
      color: var(--footer-text2);
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 11.6rem;
`;

function Footer() {
  const location = useLocation();
  if (["/signin", "/signup"].includes(location.pathname)) {
    return null;
  }

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContents>@codeit-2023</FooterContents>
        <FooterContents>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="faq">FAQ</Link>
        </FooterContents>
        <FooterContents>
          <IconBox>
            <a
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="icon-facebook.png" alt="Facebook Icon" width="18" />
            </a>
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="icon-twitter.png" alt="Twitter Icon" width="19" />
            </a>
            <a
              href="https://youtube.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="icon-youtube.png" alt="Youtube Icon" width="20" />
            </a>
            <a
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="icon-instagram.png" alt="Instagram Icon" width="17" />
            </a>
          </IconBox>
        </FooterContents>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
