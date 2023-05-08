import styled from "styled-components";
import notFound from "assets/not-found.png";
import LinkButton from "components/LinkButton";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  h2 {
    margin: 1rem;
    color: var(--primary);
  }

  h3 {
    margin: 0rem;
    color: var(--primary-gray);
  }
`;

const Image = styled.img`
  width: 10rem;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-top: 5rem;
  width: 30rem;
`;

function NotFoundPage() {
  return (
    <Container>
      <Image src={notFound} alt="404 Not Found Image" />
      <h2>페이지를 찾을 수 없습니다</h2>
      <h3>페이지의 주소를 잘못 입력하였거나</h3>
      <h3>
        페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
      </h3>
      <Link to="/">
        <StyledLinkButton>TASK COMM 메인으로 가기</StyledLinkButton>
      </Link>
    </Container>
  );
}

export default NotFoundPage;
