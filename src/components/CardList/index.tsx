import React from "react";
import styles from "./CardList.module.css";
import Card from "@/components/Card";
import { Link, Folder } from "$/types";

interface CardListProps {
  cards: Link[];
  tabs?: Folder[];
}

const CardList: React.FC<CardListProps> = ({ cards, tabs }) => {
  return (
    <div className={styles.cardListContainer}>
      {cards
        .filter((card) => card)
        .map((card) => (
          <Card key={card.id} card={card} tabs={tabs} />
        ))}
    </div>
  );
};

export default CardList;
