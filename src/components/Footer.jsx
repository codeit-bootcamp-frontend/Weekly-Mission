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
