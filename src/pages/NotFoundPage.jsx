import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

function NotFoundPage() {
  return (
    <Container>
      <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
    </Container>
  );
}

export default NotFoundPage;
