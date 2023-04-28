import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

interface GnbProps {
  profileImgSrc?: string;
  username: string;
  email: string;
}

const Gnb: React.FC<GnbProps> = (props: GnbProps | null) => {
  return (
    <header>
      <SHeaderWrapper id="header-wrapper">
        <SNav>
          <SLogo id="logo" href="/">
            <img src="/src/assets/images/logo.svg" />
          </SLogo>
          <SLoginBtn href="signin.html"> 로그인 </SLoginBtn>
        </SNav>
      </SHeaderWrapper>
    </header>
  );
};

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

const SLoginBtn = styled.a`
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
