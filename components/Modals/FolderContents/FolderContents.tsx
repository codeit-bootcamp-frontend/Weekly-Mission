"use client";

import { useEffect, useRef, useState } from "react";

import AddLink from "@/components/AddLink/AddLink";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import SearchBar from "@/components/SearchBar/SearchBar";
import CardListOptions from "components/CardListOptions/CardListOptions";
import FolderList from "components/FolderList/FolderList";
import { ILink } from "lib/getFolderData";

import styles from "./FolderContents.module.scss";

interface ICardWrapper {
  links: ILink[];
  folders: { id: number; name: string }[];
  currentTab: number;
  searchParams?: { [key: string]: string | string[] | undefined };
}

const FolderContents = ({ links, folders, currentTab }: ICardWrapper) => {
  // TODO: prop으로 현재 탭(파일 데이터), 탭 리스트(파일 목록)을 넘겨받아서, 그 탭에 있는 링크들을 목록으로 보여주기

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
      <div className={`${styles.addLinkContainer} ${styles[`${inView}`]}`}>
        <AddLink />
      </div>
      <div className={styles.contents}>
        <div ref={(el: HTMLDivElement) => (observerTargetRefs.current[0] = el)}>
          <SearchBar placeholder="제목을 검색해 보세요" />
        </div>
        <FolderList
          folders={folders}
          currentTab={currentTab}
          inView={inView}
          isLinks={links.length}
        />
        <CardListOptions currentFolder={folders[currentTab]} />
        <CardWrapper links={links} />
      </div>
    </>
  );
};

export default FolderContents;
