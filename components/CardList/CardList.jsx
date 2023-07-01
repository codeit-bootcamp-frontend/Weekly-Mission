"use client";

import styles from "./CardList.module.css";
import classNames from "classnames/bind";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLinks } from "@/api/instance";

const cx = classNames.bind(styles);

export default function CardList({ folderList, currentIdParam }) {
  const [folderName, setFolderName] = useState();
  const [cardData, setCardData] = useState();
  const USERID = "64992eec930d7d6257c06f19";

  useEffect(() => {
    const fetchCardData = async () => {
      const currentCardData = await getLinks(USERID, currentIdParam);
      setCardData(currentCardData);

      const currentFolder = folderList.filter(
        (folder) => folder._id === currentIdParam
      );
      const folderName = currentIdParam ? currentFolder[0].name : "전체";
      setFolderName(folderName);
    };
    fetchCardData();
  }, [currentIdParam, folderList]);

  return (
    <>
      <h2 className={cx("card-title")}>{folderName}</h2>
      <ul className={cx("card-list")}>
        {cardData && !cardData.length ? (
          <li className={cx("empty-data-message")}>저장된 링크가 없습니다</li>
        ) : (
          cardData?.map((card) => (
            <li key={card._id} className={cx("card")}>
              <Card card={card} />
            </li>
          ))
        )}
      </ul>
    </>
  );
}
