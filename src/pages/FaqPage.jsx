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
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Content = styled.p`
  font-size: 2rem;
`;

function FaqPage() {
  return (
    <>
      <Helmet>
        <title>FAQ | Linkbrary</title>
      </Helmet>
      <Container>
        <div>
          <Title>FAQ</Title>
          <Content>
            Q. What is Linkbrary?
            <br />
            A. Linkbrary is a web application that allows you to save and share
            links with others.
          </Content>
        </div>
      </Container>
    </>
  );
}

export default FaqPage;
