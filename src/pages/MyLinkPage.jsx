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

function MyLinkPage() {
  return (
    <>
      <Helmet>
        <title>마이 링크 | Linkbrary</title>
      </Helmet>
      <Container>
        <div>
          <Title>마이 링크</Title>
        </div>
      </Container>
    </>
  );
}

export default MyLinkPage;
