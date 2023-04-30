import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Container = styled.div`
  height: 100rem;
  text-align: center;
`;

function MyLinkPage() {
  return (
    <>
      <Helmet>
        <title>내 프로필 | Linkbrary</title>
      </Helmet>
      <Container>MyLinkPage</Container>;
    </>
  );
}

export default MyLinkPage;
