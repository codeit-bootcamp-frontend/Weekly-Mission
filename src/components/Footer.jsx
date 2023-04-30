import React from "react";
import styled from "styled-components";
// images
import FacebookIcon from "@/assets/images/facebook.svg";
import TwitterIcon from "@/assets/images/twitter.svg";
import YoutubeIcon from "@/assets/images/youtube.svg";
import InstaIcon from "@/assets/images/insta.svg";

const Footer = () => {
  const socialMedias = [
    {
      href: "https://ko-kr.facebook.com/",
      alt: "facebook",
      src: FacebookIcon,
    },
    {
      href: "https://twitter.com/?lang=ko",
      alt: "twitter",
      src: TwitterIcon,
    },
    {
      href: "https://www.youtube.com/?gl=KR",
      alt: "youtube",
      src: YoutubeIcon,
    },
    {
      href: "https://www.instagram.com/",
      alt: "insta",
      src: InstaIcon,
    },
  ];

  return (
    <FooterWrapper>
      <ContentWrapper>
        <Copyright>©codeit - 2023</Copyright>
        <PrivacyPolicyFAQ>
          <a className="privacy-policy" href="./privacy">
            Privacy Policy
          </a>
          <a className="faq" href="./faq">
            FAQ
          </a>
        </PrivacyPolicyFAQ>
        <SocialMediaLinks>
          {socialMedias.map((socialMedia) => (
            <a key={socialMedia.alt} href={socialMedia.href}>
              <img alt={socialMedia.alt} src={socialMedia.src} />
            </a>
          ))}
        </SocialMediaLinks>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: var(--linkbrary-black);
  font-family: "Arial";
  font-weight: 400;
  font-size: 1.6rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 192rem;
  margin: 0 auto;
  padding: 3.2rem 3.2rem 10.4rem;
  @media screen and (max-width: 767px) {
    display: grid;
    padding: 3.2rem;
    align-items: start;
    grid-template-areas:
      "privacypolicyfaq socialmedialinks"
      "copyright copyright";
    gap: 6rem 0;
  }
`;

const Copyright = styled.p`
  grid-area: copyright;
  width: 10.5rem;
  height: 1.8rem;
  color: #676767;
  margin: 0;
  @media screen and (max-width: 767px) {
    grid-row: ;
  }
`;

const PrivacyPolicyFAQ = styled.div`
  grid-area: privacypolicyfaq;
  display: flex;
  justify-content: space-between;
  gap: 30;
  a {
    color: #cfcfcf;
  }
  a:first-child {
    margin-right: 3rem;
  }
`;

const SocialMediaLinks = styled.div`
  grid-area: socialmedialinks;
  img {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1.3rem;
  }
  @media screen and (max-width: 767px) {
    justify-self: end;
  }
`;
