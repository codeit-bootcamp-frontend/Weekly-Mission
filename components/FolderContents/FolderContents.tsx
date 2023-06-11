"use client";

import { useEffect, useRef, useState } from "react";

import AddLink from "@/components/AddLink/AddLink";
import CardListOptions from "@/components/CardListOptions/CardListOptions";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import FolderList from "@/components/FolderList/FolderList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { IFolder, ILink } from "@/types/linkbrary";

import styles from "./FolderContents.module.scss";

interface IFolderContentsProps {
  links: ILink[] | [];
  folders: IFolder[] | [];
  currentTab: number;
}

const FolderContents = ({
  folders,
  links,
  currentTab,
}: IFolderContentsProps) => {
  const observerTargetRefs = useRef<HTMLDivElement[]>([]);
  const [inView, setInView] = useState<boolean | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.8,
      }
    );

    observerTargetRefs.current.forEach((ref) => io.observe(ref));

    return () => {
      io.disconnect();
    };
  }, []);

  const folderList = folders.length
    ? [{ id: 0, name: "전체" }, ...folders]
    : folders;
  const currentFolder = folderList.find((folder) => folder.id === currentTab);

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
          folders={folderList}
          currentTab={currentTab}
          inView={inView}
          isLinks={links.length ? links.length : 0}
        />
        {currentFolder && <CardListOptions currentFolder={currentFolder} />}
        <CardWrapper links={links} />
      </div>
    </>
  );
};

export default FolderContents;
