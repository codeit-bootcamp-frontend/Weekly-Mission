"use client";

import { useState } from "react";

import Card from "@/components/Card/Card";
import { ILink } from "lib/getFolderData";

import styles from "./CardWrapper.module.css";

interface ICardWrapper {
  links: ILink[];
}

const CardWrapper = ({ links }: ICardWrapper) => {
  const [isClickedKebab, setIsClickedKebab] = useState<number>(-1);

  if (links.length === 0) {
    return (
      <div className={styles.nullCardWrapper}>
        <p>저장된 링크가 없습니다.</p>
      </div>
    );
  } else
    return (
      <div className={styles.cardWrapper}>
        {links.map((link, idx) => (
          <Card
            key={link.id}
            link={link}
            idx={idx}
            isClicked={idx === isClickedKebab}
            setIsClickedKebab={setIsClickedKebab}
          />
        ))}
      </div>
    );
};

export default CardWrapper;
