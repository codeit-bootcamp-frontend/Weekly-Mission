import React from "react";
import styles from "./CardList.module.css";
import Card from "@/components/Card";

function CardList({ cards }) {
  return (
    <div className={styles.cardListContainer}>
      {cards
        .filter((card) => card)
        .map((card) => (
          <Card key={card.id} card={card} />
        ))}
    </div>
  );
}

export default CardList;
