import { Link } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "components/LinkButton";
import HeaderImage1 from "assets/homepage-header-image.png";
import ContentImage1 from "assets/homepage-body-thumb1.png";
import ContentImage2 from "assets/homepage-body-thumb2.png";
import ContentImage3 from "assets/homepage-body-thumb3.png";
import ContentImage4 from "assets/homepage-body-thumb4.png";

const Emphasis = styled.span`
  background: linear-gradient(
    90deg,
    var(--emphasis-left),
    var(--emphasis-right)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

const Emphasis2 = styled.span`
  background: linear-gradient(
    90deg,
    var(--emphasis-2-left),
    var(--emphasis-2-right)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Emphasis3 = styled.span`
  background: linear-gradient(
    90deg,
    var(--emphasis-3-left),
    var(--emphasis-3-right)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Emphasis4 = styled.span`
  background: linear-gradient(
    90deg,
    var(--emphasis-4-left),
    var(--emphasis-4-right)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HomeHeader = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0 3.2rem;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  width: 35rem;
  @media (max-width: 768px) {
    width: 20rem;
    padding: 1rem 0;
    font-size: 1.4rem;
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
  }
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

const HomeBody = styled.main`
  padding-top: 12rem;
  padding-bottom: 17rem;
  background-color: var(--white);

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-top: 8rem;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 4rem 3.2rem 8rem;
  }
`;

const ContentTitle = styled.h2`
  margin: 0;
  width: 29rem;
  font-size: 4.8rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 26.2rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    order: 0;
    font-size: 2.4rem;
  }
`;

const ContentDescription = styled.p`
  margin: 0;
  width: 29rem;
  line-height: 150%;
  font-weight: 500;
  color: var(--home-content-description);

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 26.2rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    order: 2;
    font-size: 1.5rem;
  }
`;

const ContentImage = styled.img`
  width: 55rem;
  height: 100%;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 38.5rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    order: 1;
  }
`;

const BodyContents = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  gap: 1rem;
  width: 100rem;
  height: 45rem;
  margin: 10rem auto;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(2n) {
    ${ContentImage} {
      order: -1;
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 70rem;
    height: 31.5rem;
  }

  @media (max-width: 767px) {
    gap: 2rem;
    width: 100%;
    height: auto;
    margin: 8rem 0;

    br {
      display: none;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(2n) {
      ${ContentImage} {
        order: 1;
      }
    }
  }
`;

function HomePage() {
  return (
    <>
      <HomeHeader>
        <HeaderTitle>
          <Emphasis>세상의 모든 정보</Emphasis>를<br />
          쉽게 저장하고 관리해 보세요
        </HeaderTitle>
        <Link to="/shared">
          <StyledLinkButton>링크 추가하기</StyledLinkButton>
        </Link>
        <HeaderImage src={HeaderImage1} alt="Header Image" />
      </HomeHeader>
      <HomeBody>
        <BodyContents>
          <ContentTitle>
            <Emphasis1>원하는 링크</Emphasis1>를 저장하세요
          </ContentTitle>
          <ContentDescription>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
            싶은 모든 것을 <br />한 공간에 저장하세요.
          </ContentDescription>
          <ContentImage src={ContentImage1} alt="Thumbnail" />
        </BodyContents>
        <BodyContents>
          <ContentTitle>
            링크를 폴더로 <Emphasis2>관리</Emphasis2>하세요
          </ContentTitle>
          <ContentDescription>
            나만의 폴더를 무제한으로 만들고 <br />
            다양하게 활용할 수 있습니다.
          </ContentDescription>
          <ContentImage src={ContentImage2} alt="Thumbnail" />
        </BodyContents>
        <BodyContents>
          <ContentTitle>
            저장한 링크를 <Emphasis3>공유</Emphasis3>해 보세요
          </ContentTitle>
          <ContentDescription>
            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
            쉽고 빠르게 링크를 공유해 보세요.
          </ContentDescription>
          <ContentImage src={ContentImage3} alt="Thumbnail" />
        </BodyContents>
        <BodyContents>
          <ContentTitle>
            저장한 링크를 <Emphasis4>검색</Emphasis4>해 보세요
          </ContentTitle>
          <ContentDescription>
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </ContentDescription>
          <ContentImage src={ContentImage4} alt="Thumbnail" />
        </BodyContents>
      </HomeBody>
    </>
  );
}

export default HomePage;
