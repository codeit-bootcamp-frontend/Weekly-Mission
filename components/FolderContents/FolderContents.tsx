"use client";

import React, { useEffect, useRef, useState } from "react";

import AddLink from "@/components/AddLink/AddLink";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import SearchBar from "@/components/SearchBar/SearchBar";
import { ILink } from "@/lib/getFolderData";

import styles from "./FolderContents.module.css";

interface ICardWrapper {
  links: ILink[];
}

const FolderContents = ({ links }: ICardWrapper) => {
  const observerTargetRefs = useRef<HTMLDivElement[]>([]);
  const [inView, setInView] = useState<boolean | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    });

    observerTargetRefs.current.forEach((ref) => io.observe(ref));

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.addLinkContainer} ${styles[`${inView}`]}`}
        ref={(el: HTMLDivElement) => (observerTargetRefs.current[0] = el)}
      >
        <AddLink />
      </div>
      <div className={styles.contents}>
        <div ref={(el: HTMLDivElement) => (observerTargetRefs.current[1] = el)}>
          <SearchBar placeholder="제목을 검색해 보세요" />
        </div>
        <CardWrapper links={links} />
      </div>
    </>
  );
};

export default FolderContents;
