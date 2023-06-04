"use client";
import { useState } from "react";
import AddPageChip from "./AddPageChip";
import styles from "@components/AddPage.module.css";
import UpdateModal from "@layout/UpdateModal";

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
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };

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
        <span onClick={modalHandler}>폴더 추가 +</span>
      </div>
      {modal && (
        <UpdateModal
          modal={modal}
          modalHandler={modalHandler}
          content="폴더 추가"
          placeholder="내용 입력"
        />
      )}
    </div>
  );
};

export default AddPage;
