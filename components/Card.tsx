"use client";

import Link from "next/link";
import React, { useRef, useEffect } from "react";
import styles from "@/components/Card.module.css";
import { timeForToday } from "@/library/timeForToday";
import { getToday } from "@/library/getToday";
import { useState } from "react";
import DeleteModal from "@/layout/DeleteModal";
import AddfolderModal from "@/layout/AddFolderModal";

const popContnet = ["삭제하기", "폴더에 추가"];

interface linkType {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

const Card = ({ link }: { link: linkType }) => {
  const { created_at, url, description, image_source } = link;
  const [selectedPop, setSelectedPop] = useState("삭제하기");
  const [isClick, setIsClick] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addFolderModal, setAddFolderModal] = useState(false);

  const deleteModalHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setDeleteModal(!deleteModal);
  };

  const addFolderModalHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setAddFolderModal(!addFolderModal);
  };

  const selectedPophandler = (pop: string) => {
    if (pop === "삭제하기") {
      setDeleteModal(!deleteModal);
    } else {
      setAddFolderModal(!addFolderModal);
    }
    setSelectedPop(pop);
  };

  const popEl = useRef<any>(null);

  const handleIsClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsClick(!isClick);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (showPopOver && !popEl?.current?.contains(e.target))
      setShowPopOver(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showPopOver]);

  const popHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowPopOver(!showPopOver);
  };
  return (
    <Link href={url} className={styles.card}>
      <div className={styles["img-box"]}>
        <img
          className={styles["card-img"]}
          src={image_source || "/defaultImage.svg"}
          alt="card"
        />
        <div
          onClick={handleIsClick}
          className={isClick ? styles.click : styles.star}
        ></div>
      </div>
      <div className={styles["p-box"]}>
        <div className={styles["post-time"]}>
          <p className="postTimeComparison">{timeForToday(created_at)}</p>
          <div className={styles["kabab-box"]} ref={popEl} onClick={popHandler}>
            <img src="/kebab.svg" alt="kabab" />
            {showPopOver && (
              <div className={styles.pop}>
                {popContnet.map((pop) => (
                  <p
                    className={
                      pop === selectedPop ? styles.selected : undefined
                    }
                    onClick={() => selectedPophandler(pop)}
                    key={pop}
                  >
                    {pop}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles["post-date"]}>{getToday(created_at)}</p>
      </div>
      {deleteModal && (
        <DeleteModal
          modal={deleteModal}
          modalHandler={deleteModalHandler}
          title="폴더 삭제"
          content="폴더명"
        />
      )}
      {addFolderModal && (
        <AddfolderModal
          modal={addFolderModal}
          modalHandler={addFolderModalHandler}
          title="폴더에 추가"
          content="링크 주소"
        />
      )}
    </Link>
  );
};

export default Card;
