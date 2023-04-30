import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Container = styled.div`
  height: 100rem;
  text-align: center;
`;

function FaqPage() {
  return (
    <>
      <Helmet>
        <title>FAQ | Linkbrary</title>
      </Helmet>
      <Container>FaqPage</Container>;
    </>
  );
}

export default FaqPage;
