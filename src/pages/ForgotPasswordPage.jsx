import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title>비밀번호 찾기 | Linkbrary</title>
      </Helmet>
      <Container>
        <div>
          <Title>비밀번호 찾기</Title>
          <p>계정과 이메일을 입력해 주세요.</p>
          <form>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" />
            <button type="submit">비밀번호 찾기</button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default ForgotPasswordPage;
