import React from "react";
import styles from "./CardList.module.css";
import Card from "@/components/Card";
import { Link, Folder } from "$/types";
import { getData } from "$/src/lib/getData";

interface CardListProps {
  folderId: string;
  sharedUserId: string;
}
const CardList = async ({ sharedUserId, folderId }: CardListProps) => {
  const cards = await getData<Link[]>(
    `/api/users/${sharedUserId}/links?folderId=${folderId}`,
    "no-store"
  );
  console.log(cards);

  return (
    <div className={styles.cardListContainer}>
      {cards
        // .filter((card) => card)
        .map((card) => (
          <Card key={card.id} card={card} />
        ))}
    </div>
  );
};

export default CardList;
