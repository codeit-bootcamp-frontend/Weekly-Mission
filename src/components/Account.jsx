import { Link } from "react-router-dom";
import AccountInput from "components/AccountInput";
import AccountSocial from "components/AccountSocial";
import LinkButton from "components/LinkButton";
import styled from "styled-components";

const Container = styled.main`
  margin: 24rem auto;
  max-width: 40rem;
  text-align: center;

  @media (max-width: 767px) {
    max-width: 46.4rem;
    margin: 0 auto;
    padding: 12rem 3.2rem 10rem;
  }
`;

const Logo = styled.img`
  width: 21rem;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: 600;
  color: var(--primary);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

const ForgotPassword = styled.div`
  margin-top: 1.6rem;
  font-size: 1.4rem;
  * {
    color: var(--gray1);
  }
`;

function Account({ isSignin }) {
  return (
    <Container>
      <Link to="/">
        <Logo src="logo.png" alt="Linkbrary Logo" />
      </Link>
      <p>
        {isSignin ? "회원이 아니신가요? " : "이미 회원이신가요? "}
        <StyledLink to={isSignin ? "/signup" : "/signin"}>
          {isSignin ? "회원 가입하기" : "로그인 하기"}
        </StyledLink>
      </p>
      <Form>
        <AccountInput value="email" />
        <AccountInput value="password" />
        {isSignin || <AccountInput value="password" passwordCheck={true} />}
        <LinkButton type="submit">
          {isSignin ? "로그인" : "회원가입"}
        </LinkButton>
      </Form>
      <ForgotPassword>
        {isSignin && <Link to="/forgot-password">비밀번호 찾기</Link>}
      </ForgotPassword>
      <AccountSocial isSignin={isSignin} />
    </Container>
  );
}

export default Account;
