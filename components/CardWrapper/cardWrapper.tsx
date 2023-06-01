"use client";

import React from "react";

import Card from "@/components/Card/card";
import { ILink } from "@/lib/getFolderData";

import styles from "./cardWrapper.module.css";

interface ICardWrapper {
  links: ILink[];
}

const CardWrapper = ({ links }: ICardWrapper) => {
  return (
    <div className={styles.cardWrapper}>
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
};

export default CardWrapper;
