import styled from "styled-components";
import SearchBar from "components/SearchBar";
import CardContainer from "components/CardContainer";

const Container = styled.main`
  padding-top: 4rem;
  padding-bottom: 10rem;
  background-color: var(--white);

  @media (max-width: 767px) {
    padding-top: 2rem;
    padding-bottom: 6rem;
  }
`;

const Contents = styled.div`
  width: 106rem;
  margin: 0 auto;

  @media (min-width: 768px) and (max-width: 1099px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) {
    max-width: 32.5rem;
    width: 100%;
  }
`;

function SharedMain({ CardLinks }) {
  return (
    <Container>
      <Contents>
        <SearchBar />
        <CardContainer CardLinks={CardLinks} />
      </Contents>
    </Container>
  );
}

export default SharedMain;
