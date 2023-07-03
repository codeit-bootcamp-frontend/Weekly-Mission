import React, { use } from "react";
import styles from "./CardList.module.css";
import Card from "@/components/Card";
import { Link } from "$/types";
import { getData } from "$/src/utils/getData";

interface CardListProps {
  folderId?: string;
  userId: string | number;
}
const CardList = ({ userId, folderId }: CardListProps) => {
  const url = folderId
    ? `/api/users/${userId}/links?folderId=${folderId}`
    : `/api/users/${userId}/links`;

  const cards = use(getData<Link[]>(url, "no-store"));

  return cards.length !== 0 ? (
    <div className={styles.cardListContainer}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  ) : (
    <div className={styles.emptySavedLink}>저장한 링크가 없습니다</div>
  );
};

export default CardList;
