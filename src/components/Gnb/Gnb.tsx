import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import UserAccountInfo from "./UserAccountInfo";

export interface GnbProps {
  username: string;
  email: string;
  profileImgSrc?: string;
}

const Gnb = (props: GnbProps | {}) => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [navHeight, setNavHeight] = useState<number>(0);
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    setCurrentScrollPosition(window.scrollY);
  };

  const handleMediaChange = () => {
    const header = document.querySelector("header");
    if (header instanceof HTMLElement) {
      setNavHeight(header.offsetHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", handleMediaChange);

    const headerElem = document.querySelector("header");
    if (headerElem instanceof HTMLElement) {
      setNavHeight(headerElem.offsetHeight);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (currentScrollPosition > prevScrollPosition) {
      setShow(false);
    } else {
      setShow(true);
    }
    setPrevScrollPosition(currentScrollPosition);
  }, [currentScrollPosition]);

  return (
    <SHeader
      show={show}
      isTop={currentScrollPosition === 0 ? true : false}
      navHeight={navHeight}
    >
      <SHeaderWrapper id="header-wrapper">
        <SNav>
          <SLogo id="logo" href="/">
            <img src="assets/images/logo.svg" />
          </SLogo>
          {"username" in props ? (
            <UserAccountInfo {...props} />
          ) : (
            <SLoginBtn>
              <Link to="/sigin">로그인</Link>
            </SLoginBtn>
          )}
        </SNav>
      </SHeaderWrapper>
    </SHeader>
  );
};

const SHeader = styled.header<{
  show: boolean;
  isTop: boolean;
  navHeight: number;
}>`
  top: ${({ show, navHeight }) => (show ? "0px" : `-${navHeight}px`)};
  ${({ isTop, show }) =>
    !isTop &&
    show &&
    css`
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `}
`;

const SHeaderWrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 5.813rem;
  padding: 1.25rem 12.5rem;
  margin: 0 auto;
  background-color: ${colors.gray1};

  @media only screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    padding: 1.5rem 0;
  }

  @media only screen and (max-width: 868px) {
    padding: 1.5rem 2rem;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 3.938rem;
    padding: 0.813rem 2rem;
    display: flex;
  }
`;
const SLogo = styled.a`
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    img {
      width: 4.849rem;
      height: 0.875rem;
    }
  }
`;

const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    width: 49.028rem;
  }
`;

const SLoginBtn = styled.button`
  width: 8rem;
  height: 3.313rem;
  border-radius: 0.5rem;
  text-decoration: none;
  padding: 1rem 2.531rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #f5f5f5;
  background-image: linear-gradient(
    90.99deg,
    ${colors.primary} 0.12%,
    #6ae3fe 101.84%
  );

  @media only screen and (max-width: 767px) {
    width: 5rem;
    height: 2.313rem;
    padding: 0.625rem 1.344rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.063rem;
  }
`;

export default Gnb;
