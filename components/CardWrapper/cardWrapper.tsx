"use client";

import React, { useState } from "react";

import Card from "@/components/Card/Card";
import { ILink } from "@/lib/getFolderData";

import styles from "./CardWrapper.module.css";

interface ICardWrapper {
  links: ILink[];
}

const CardWrapper = ({ links }: ICardWrapper) => {
  const [isClickedKebab, setIsClickedKebab] = useState<number>(-1);

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
