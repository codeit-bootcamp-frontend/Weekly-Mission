import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 10rem;
`;

function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>개인정보 처리 방침 | Linkbrary</title>
      </Helmet>
      <Container>
        <p>
          이 페이지는 현재 작성 중이며, 곧 완성될 예정입니다.
          <br />
          개인정보 처리 방침에 대한 내용은 공지사항을 통해 안내해드리겠습니다.
        </p>
      </Container>
    </>
  );
}

export default PrivacyPage;
