"use client";

import Card from "@/components/Card/card";
import styles from "./cardWrapper.module.css";

interface Props {
  links: Link[];
}
export interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

const CardWrapper = ({ links }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
};

export default CardWrapper;
