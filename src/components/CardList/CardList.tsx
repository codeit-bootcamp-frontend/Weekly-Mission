"use client";
import React, { useContext, useEffect } from "react";
import styles from "./CardList.module.css";
import Card from "@/components/Card";
import { Link } from "$/types";
import { fetchData } from "$/src/utils/fetchData";
import CardsContext from "$/src/contexts/CardsContext";

interface CardListProps {
  folderId?: string;
  userId: string | number;
}
const CardList = ({ userId, folderId }: CardListProps) => {
  const url = folderId
    ? `/api/users/${userId}/links?folderId=${folderId}`
    : `/api/users/${userId}/links`;

  const { cards, setCards } = useContext(CardsContext);

  useEffect(() => {
    const fetchDataAndSetTabs = async () => {
      try {
        const data = await fetchData<Link[]>({ url: url, option: "no-store" });
        setCards(data);
      } catch (error) {
        console.error("Error fetching tabs:", error);
      }
    };

    fetchDataAndSetTabs();
  }, [setCards, url]);

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
