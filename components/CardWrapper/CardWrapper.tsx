"use client";

import { useState } from "react";

import Card from "@/components/Card/Card";
import { ILinkData } from "@/lib/getFolderData";

import styles from "./CardWrapper.module.scss";

interface ICardWrapperProps {
  links: ILinkData[];
}

const CardWrapper = ({ links }: ICardWrapperProps) => {
  const [openKebabIndex, setOpenKebabIndex] = useState<number>(-1);

  if (links.length === 0) {
    return (
      <div className={styles.nullCardWrapper}>
        <p>저장된 링크가 없습니다.</p>
      </div>
    );
  } else
    return (
      <div className={styles.cardWrapper}>
        {links.map((link, index) => (
          <Card
            key={link.id}
            link={link}
            isClickedKebab={index === openKebabIndex}
            handleClickOpenKebab={() => setOpenKebabIndex(index)}
            handleClickCloseKebab={() => setOpenKebabIndex(-1)}
          />
        ))}
      </div>
    );
};

export default CardWrapper;
