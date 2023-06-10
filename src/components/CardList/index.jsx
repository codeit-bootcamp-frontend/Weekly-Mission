import React from "react";
import styles from "./CardList.module.css";
import Card from "@/components/Card";

function CardList({ cards, tabs }) {
  return (
    <div className={styles.cardListContainer}>
      {cards
        .filter((card) => card)
        .map((card) => (
          <Card key={card.id} card={card} tabs={tabs} />
        ))}
    </div>
  );
}

export default CardList;
