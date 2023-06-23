"use client";

import CurrentFolderMenu from "@/components/CurrentFolderMenu/CurrentFolderMenu";
import FolderChipField from "@/components/FolderChipField/FolderChipField";
import LinkField from "@/components/LinkField/LinkField";
import SearchBar from "@/components/SearchBar/SearchBar";
import useViewObserver from "@/hooks/useViewObserver";
import { IFolder, ILink } from "@/types/linkbrary";

import AddLinkField from "../AddLinkField/AddLinkField";
import styles from "./FolderContents.module.scss";

interface IFolderContentsProps {
  userId: number;
  links: ILink[] | [];
  folders: IFolder[] | [];
  currentTab: number;
}

const FolderContents = ({
  userId,
  folders,
  links,
  currentTab,
}: IFolderContentsProps) => {
  // TODO: 전역 상태로 inView를 관리하고, AddLink만 client component로 좁히기
  const { inView, observerTargetRefs } = useViewObserver();

  const folderList = folders.length
    ? [{ id: 0, name: "전체", user_id: userId }, ...folders]
    : folders;
  const currentFolder = folderList.find((folder) => folder.id === currentTab);

  return (
    <>
      <AddLinkField
        userId={userId}
        folders={folders}
        links={links}
        inView={inView}
        ref={(el: HTMLDivElement) => (observerTargetRefs.current[0] = el)}
      />
      <div className={styles.contents}>
        <SearchBar placeholder="제목을 검색해 보세요" />
        <FolderChipField
          userId={userId}
          folders={folderList}
          currentTab={currentTab}
          inView={inView}
          isLinks={links.length !== 0}
        />
        {currentFolder && <CurrentFolderMenu currentFolder={currentFolder} />}
        <LinkField userId={userId} folders={folders} links={links} />
      </div>
    </>
  );
};

export default FolderContents;
