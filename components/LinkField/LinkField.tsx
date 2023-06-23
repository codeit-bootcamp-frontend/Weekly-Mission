"use client";

import { useState } from "react";

import LinkCard from "@/components/LinkCard/LinkCard";
import { IFolder, ILink } from "@/types/linkbrary";

import styles from "./LinkField.module.scss";

interface ILinkFieldProps {
  userId: number;
  folders: IFolder[] | [];
  links: ILink[] | [];
}

const LinkField = ({ userId, folders, links }: ILinkFieldProps) => {
  const [openKebabIndex, setOpenKebabIndex] = useState<number>(-1);

  if (links.length === 0) {
    return (
      <div className={styles.nullLinkField}>
        <p>저장된 링크가 없습니다.</p>
      </div>
    );
  } else
    return (
      <div className={styles.linkField}>
        {links.map((link, index) => (
          <LinkCard
            key={link.id}
            userId={userId}
            folders={folders}
            links={links}
            link={link}
            isClickedKebab={index === openKebabIndex}
            handleClickOpenKebab={() => setOpenKebabIndex(index)}
            handleClickCloseKebab={() => setOpenKebabIndex(-1)}
          />
        ))}
      </div>
    );
};

export default LinkField;
