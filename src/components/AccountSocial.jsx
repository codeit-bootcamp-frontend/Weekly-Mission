import styled from "styled-components";

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

  &:first-child {
    background-color: var(--white);
  }

  &:last-child {
    background-color: var(--kakaotalk-bakcground);
  }
`;

function AccountSocial({ isSignin }) {
  return (
    <Container>
      <Description>
        {isSignin ? "소셜 로그인" : "다른 방식으로 가입하기"}
      </Description>
      <IconContainer>
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon src="src/assets/link-google.png" alt="Google Icon" />
        </a>
        <a
          href="https://www.kakaocorp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon src="src/assets/link-kakaotalk.png" alt="Kakaotalk Icon" />
        </a>
      </IconContainer>
    </Container>
  );
}

export default AccountSocial;
