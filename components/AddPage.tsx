"use client";
import { useState } from "react";
import AddPageChip from "./AddPageChip";
import styles from "@components/AddPage.module.css";

const buttonChip = [
  "전체",
  "즐겨찾기",
  "코딩 팁",
  "채용 사이트",
  "유용한 글",
  "나만의 장소",
];

const AddPage = () => {
  const [isSelected, setIsSelected] = useState("전체");
  return (
    <div className={styles.page}>
      <div>
        {buttonChip.map((chip) => (
          <AddPageChip
            chip={chip}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        ))}
      </div>
      <div>
        <span>폴더 추가 +</span>
      </div>
    </div>
  );
};

export default AddPage;
