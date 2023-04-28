import React from "react";
import styled from "styled-components";

const BASE_SRC = "/src/assets/images";
const BASE_HREF = "https://www";

const logoMap = [
  {
    name: "facebook",
    src: `${BASE_SRC}/facebook.svg`,
    href: `${BASE_HREF}.facebook.com`,
  },
  {
    name: "twitter",
    src: `${BASE_SRC}/twitter.svg`,
    href: `${BASE_HREF}.twitter.com`,
  },
  {
    name: "youtube",
    src: `${BASE_SRC}/youtube.svg`,
    href: `${BASE_HREF}.youtube.com`,
  },
  {
    name: "instagram",
    src: `${BASE_SRC}/instagram.svg`,
    href: `${BASE_HREF}.instagram.com`,
  },
];

const Footer = () => {
  return (
    <footer>
      <SFooterWrapper>
        <SBottomNav>
          <SCopyRight id="copyright">codeit - 2023</SCopyRight>
          <div id="internal-links">
            <div>
              <a href="/privacy.html">Privacy Policy</a>
              <a id="faq-link" href="/faq.html">
                FAQ
              </a>
            </div>
          </div>
          <div id="external-links">
            <SIconBox>
              {logoMap.map((item) => {
                return (
                  <a key={item.name} href={item.href} target="_blank">
                    <img src={item.src} />
                  </a>
                );
              })}
            </SIconBox>
          </div>
        </SBottomNav>
      </SFooterWrapper>
    </footer>
  );
};

const SFooterWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: 10rem;
  padding-top: 2rem;
  padding-bottom: 6.75rem;

  @media only screen and (max-width: 767px) {
    padding: 2rem;
  }
`;

const SBottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 6.5rem;

  & > span {
    display: inline-block;
    font-size: 1rem;
    line-height: 1.15rem;
    font-weight: 400;
  }

  & > div {
    display: inline-block;
    font-size: 1rem;
    line-height: 1.15rem;
    font-weight: 400;
  }

  & > div#internal-links a#faq-link {
    margin-left: 1.875rem;
  }

  & > div#external-links a {
    margin-right: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media only screen and (max-width: 767px) {
    position: relative;
    margin: auto;

    & > div#internal-links a#faq-link {
      margin-left: 8vw;
    }
  }
`;

const SCopyRight = styled.div`
  color: #676767;

  @media only screen and (max-width: 767px) {
    position: absolute;
    top: 3.75rem;
    left: 0;
  }
`;

const SIconBox = styled.div`
  & img {
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.188rem;
  }

  @media only screen and (max-width: 767px) {
    & img {
      display: inline-block;
      vertical-align: middle;
      margin-left: 2vw;
    }
  }
`;
export default Footer;
