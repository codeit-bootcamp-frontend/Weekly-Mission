import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Container = styled.div`
  height: 100rem;
  text-align: center;
`;

function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title>비밀번호 찾기 | Linkbrary</title>
      </Helmet>
      <Container>ForgotPasswordPage</Container>;
    </>
  );
}

export default ForgotPasswordPage;
