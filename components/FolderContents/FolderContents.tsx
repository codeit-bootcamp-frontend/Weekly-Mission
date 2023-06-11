"use client";

import AddLinkField from "@/components/AddLinkField/AddLinkField";
import CardListOptions from "@/components/CardListOptions/CardListOptions";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import FolderChipField from "@/components/FolderChipField/FolderChipField";
import SearchBar from "@/components/SearchBar/SearchBar";
import useViewObserver from "@/hooks/useViewObserver";
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
  // TODO: 전역 상태로 inView를 관리하고, AddLink만 client component로 좁히기
  const { inView, observerTargetRefs } = useViewObserver();

  const folderList = folders.length
    ? [{ id: 0, name: "전체" }, ...folders]
    : folders;
  const currentFolder = folderList.find((folder) => folder.id === currentTab);

  return (
    <>
      <div className={`${styles.addLinkContainer} ${styles[`${inView}`]}`}>
        <AddLinkField />
      </div>
      <div className={styles.contents}>
        <div ref={(el: HTMLDivElement) => (observerTargetRefs.current[0] = el)}>
          <SearchBar placeholder="제목을 검색해 보세요" />
        </div>
        <FolderChipField
          folders={folderList}
          currentTab={currentTab}
          inView={inView}
          isLinks={links.length !== 0}
        />
        {currentFolder && <CardListOptions currentFolder={currentFolder} />}
        <CardWrapper links={links} />
      </div>
    </>
  );
};

export default FolderContents;
