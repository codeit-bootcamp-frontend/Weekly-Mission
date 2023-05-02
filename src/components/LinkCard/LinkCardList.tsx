import LinkCardItem, { linkCardProp } from "./LinkCardItem";
import styled from "styled-components";

interface cardListProp {
  cardProps: linkCardProp[];
}

const LinkCardList = ({ cardProps }: cardListProp) => {
  return (
    <SCardListContainer>
      {cardProps &&
        cardProps.map((cardProp) => {
          return <LinkCardItem key={cardProp.id} {...cardProp} />;
        })}
    </SCardListContainer>
  );
};

const SCardListContainer = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 1.5rem 1.25rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export default LinkCardList;
