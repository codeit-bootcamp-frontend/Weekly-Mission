import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "@components/Card";
import defaultCardImg from "@assets/images/default-card-img.png";

function CardList({ cards }) {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    cards && cards.length > 0
      ? setCardList(
          cards.map((card) => ({
            id: card.id,
            imageSrc: card.imageSource ?? defaultCardImg,
            description: card.description,
            date: card.createdAt,
            url: card.url,
          }))
        )
      : setCardList([]);
  }, [cards]);

  return (
    <CardListContainer>
      {cardList
        .filter((card) => card)
        .map((card) => (
          <Card key={card.id} card={card} />
        ))}
    </CardListContainer>
  );
}

export default CardList;

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 2rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2.5rem;
    margin-top: 1.2rem;
    margin-bottom: 6rem;
  }
`;
