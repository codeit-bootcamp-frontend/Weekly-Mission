import styled from "styled-components";
import GoogleLinkIcon from "assets/link-google.png";
import KakaotalkLinkIcon from "assets/link-kakaotalk.png";
import { GOOGLE_LINK, KAKAOTALK_LINK } from "utils/constants";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 3.2rem;
  border: 0.1rem solid var(--gray3);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  background-color: var(--gray4);
  font-size: 1.4rem;
  color: var(--gray1);
`;

const Description = styled.p`
  margin: 0;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  line-height: 4.2rem;
`;

const Icon = styled.img`
  width: 4.2rem;
  vertical-align: middle;
  background-color: var(--white);

  &:last-child {
    background-color: var(--kakaotalk-bakcground);
  }
`;

function AccountSocialLogin({ isSignin }) {
  return (
    <Container>
      <Description>
        {isSignin ? "소셜 로그인" : "다른 방식으로 가입하기"}
      </Description>
      <IconContainer>
        <a href={GOOGLE_LINK} rel="noopener noreferrer" target="_blank">
          <Icon src={GoogleLinkIcon} alt="Google Icon" />
        </a>
        <a href={KAKAOTALK_LINK} rel="noopener noreferrer" target="_blank">
          <Icon src={KakaotalkLinkIcon} alt="Kakaotalk Icon" />
        </a>
      </IconContainer>
    </Container>
  );
}

export default AccountSocialLogin;
