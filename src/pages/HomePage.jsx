import { Link } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "components/LinkButton";

const HomeHeader = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${LinkButton} {
    width: 35rem;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0 3.2rem;

    ${LinkButton} {
      width: 20rem;
      padding: 1rem 0;
      font-size: 1.4rem;
    }
  }
`;

const HeaderTitle = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  margin-top: 7rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 48rem;
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    width: 24rem;
    margin: 2.8rem 0 2.4rem;
    font-size: 3.2rem;
`;

const Emphasis1 = styled.span`
  background: linear-gradient(
    90deg,
    var(--emphasis-1-left),
    var(--emphasis-1-right)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderImage = styled.img`
  width: 120rem;
  margin-top: 4rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 70rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2.4rem;
  }
`;

function HomePage() {
  return (
    <>
      <HomeHeader>
        <HeaderTitle>
          <Emphasis1>세상의 모든 정보</Emphasis1>를<br />
          쉽게 저장하고 관리해 보세요
        </HeaderTitle>
        <Link to="/shared">
          <LinkButton>링크 추가하기</LinkButton>
        </Link>
        <HeaderImage
          src="src/assets/homepage-header-image.png"
          alt="Header Image"
        />
      </HomeHeader>
    </>
  );
}

export default HomePage;
