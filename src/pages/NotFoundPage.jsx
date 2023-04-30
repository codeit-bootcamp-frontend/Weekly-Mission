import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Container = styled.div`
  height: 100rem;
  text-align: center;
`;

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 NotFound | Linkbrary</title>
      </Helmet>
      <Container>NotFoundPage</Container>;
    </>
  );
}

export default NotFoundPage;
