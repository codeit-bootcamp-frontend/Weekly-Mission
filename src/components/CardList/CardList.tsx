"use client";
import React, { useContext, useEffect } from "react";
import styles from "./CardList.module.css";
import Card from "@/components/Card";
import { Folder, Link } from "$/types";
import { fetchData } from "$/src/utils/fetchData";
import CardsContext from "$/src/contexts/CardsContext";
import FolderTabsContext from "$/src/contexts/FolderTabsContext";
import { userId } from "$/src/utils/common.api";
import { usePathname } from "next/navigation";

interface CardListProps {
  folderId?: string;
  cardOwnerId: string | number;
}
const CardList = ({ cardOwnerId, folderId }: CardListProps) => {
  const url = folderId
    ? `/api/users/${cardOwnerId}/links?folderId=${folderId}`
    : `/api/users/${cardOwnerId}/links`;

  const { setTabs } = useContext(FolderTabsContext);
  const { cards, setCards } = useContext(CardsContext);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName !== "/shared") return;
    const fetchDataAndSetTabs = async () => {
      try {
        const data = await fetchData<Folder[]>({
          url: `/api/users/${userId}/folders`,
          option: "no-store",
        });
        const sortedTabs = data.sort((a, b) => a.id - b.id); // TODO: 백엔드에서 Update할 경우 뒤로 밀리는 현상 때문에 추가. 추후 api 수정되면 삭제
        setTabs(sortedTabs);
      } catch (error) {
        console.error("Error fetching tabs:", error);
      }
    };

    fetchDataAndSetTabs();
  }, [pathName, setTabs]);

  useEffect(() => {
    const fetchDataAndSetTabs = async () => {
      try {
        const data = await fetchData<Link[]>({ url: url, option: "no-store" });
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchDataAndSetTabs();
  }, [setCards, url]);

  return cards.length !== 0 ? (
    <div className={styles.cardListContainer}>
      {cards.map((card) => (
        <Card key={card.id} card={card} cardOwnerId={cardOwnerId} />
      ))}
    </div>
  ) : (
    <div className={styles.emptySavedLink}>저장한 링크가 없습니다</div>
  );
};

export default CardList;
