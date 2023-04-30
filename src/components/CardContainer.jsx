import styled from "styled-components";
import Card from "components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem 2rem;
  margin-top: 4rem;

  @media (min-width: 768px) and (max-width: 1099px) {
    gap: 2.4rem;
  }

  @media (max-width: 767px) {
    gap: 2rem;
    margin-top: 3.2rem;
  }
`;

function CardContainer({ CardLinks }) {
  return (
    <Container>
      {CardLinks.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </Container>
  );
}

export default CardContainer;
