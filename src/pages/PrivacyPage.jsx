import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Container = styled.div`
  height: 100rem;
  text-align: center;
`;

function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>개인정보 처리 방침 | Linkbrary</title>
      </Helmet>
      <Container>PrivacyPage</Container>;
    </>
  );
}

export default PrivacyPage;
