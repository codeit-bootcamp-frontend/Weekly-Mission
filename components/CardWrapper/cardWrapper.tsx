"use client";

import Card from "@/components/Card/card";
import styles from "./cardWrapper.module.css";
import { ILink } from "@/lib/getFolderData";

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
