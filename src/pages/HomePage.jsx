import styled from "styled-components";
import LogoImg from "/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const Logo = styled.img`
  width: 50rem;
  object-fit: contain;
`;

function HomePage() {
  return (
    <Container>
      <Link to="/">
        <Logo src={LogoImg} alt="Logo" />
      </Link>
    </Container>
  );
}

export default HomePage;
