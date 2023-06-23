"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LineWave } from "react-loader-spinner";

import classNames from "classnames/bind";
import { useRouter } from "next/navigation";

import AddFolderButton from "@/components/AddFolderButton";
import AddLinkBar from "@/components/AddLinkBar";
import Card from "@/components/Card/Card";
import FolderChip from "@/components/FolderChip";
import Option from "@/components/Option";
import SearchBar from "@/components/SearchBar";
import { useSetInViewGNB } from "@/hooks/useInViewGNBContext";
import { getFolder, getFolders, getLinks } from "@/utils/api";
import { Folder, Link, SelectedFolder } from "@/utils/api/types";
import convertParamToNum from "@/utils/validateParam";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export default function Folder({ params }: { params: { id: string[] } }) {
  const userID = 4; // 추후 auth 기능 추가
  const [currentFolder, setCurrentFolder] = useState<SelectedFolder | null>(
    null,
  );
  const [folders, setFolders] = useState<Folder[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const setInViewGNB = useSetInViewGNB();
  const { ref: addLinkRef, inView: inViewAddLink } = useInView();
  const { ref: footerRef, inView: inViewFooter } = useInView();
  const router = useRouter();

  const folderParam = convertParamToNum(params.id);

  const onAddFolder = (name: string) => {
    return name;
  };

  const onEditFolder = (newName: string) => {
    return newName;
  };

  const onDeleteFolder = (id: number) => {
    return id;
  };

  const onDeleteLink = (id: number) => {
    return id;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (folderParam === null) return router.push("/folder");
      const [folderRes, foldersRes, linksRes] = await Promise.all([
        getFolder(userID, folderParam),
        getFolders(userID),
        getLinks(userID, folderParam),
      ]);
      if (folderParam === 0) {
        setCurrentFolder({ id: 0, name: "전체" });
      } else {
        setCurrentFolder({ id: folderRes.id, name: folderRes.name });
      }
      setFolders(foldersRes);
      setLinks(linksRes);
    };

    fetchData();
  }, [folderParam, router]);

  useEffect(() => {
    setInViewGNB(inViewAddLink);
  }, [inViewAddLink, setInViewGNB]);

  return (
    <>
      <div
        className={cx("addLinkSection", {
          addLinkAtBottom: !inViewAddLink,
          inViewFooter,
        })}
      >
        <div className={cx("addLinkBarContainer")}>
          <AddLinkBar />
        </div>
      </div>
      <main className={cx("main", { addLinkAtBottom: !inViewAddLink })}>
        <div ref={addLinkRef} style={{ height: "0.1px" }} />
        <section className={cx("folderSection", {})}>
          <div className={cx("searchBarContainer")}>
            <SearchBar />
          </div>
          {/* TODO: Suspense 처리 */}
          {!currentFolder && <LineWave />}
          {currentFolder && (
            <div className={cx("folderContainer")}>
              <div className={cx("folderSelect")}>
                <div className={cx("folders")}>
                  <div className={cx("chipContainer")}>
                    <FolderChip folder={{ id: 0, name: "전체" }} />
                  </div>
                  {folders.map((folder) => (
                    <div key={folder.id} className={cx("chipContainer")}>
                      <FolderChip
                        folder={{ id: folder.id, name: folder.name }}
                      />
                    </div>
                  ))}
                </div>
                <AddFolderButton onAddFolder={onAddFolder} />
              </div>
              <div className={cx("folderHeader")}>
                <h2 className={cx("title")}>{currentFolder.name}</h2>
                <Option
                  folder={currentFolder}
                  onEditFolder={onEditFolder}
                  onDeleteFolder={onDeleteFolder}
                />
              </div>
              <div className={cx("cardContainer")}>
                {links.map((link) => (
                  <Card
                    key={link.id}
                    link={link}
                    folders={folders}
                    onDeleteLink={onDeleteLink}
                  />
                ))}
              </div>
              {links.length === 0 && (
                <div className={cx("notExistLink")}>
                  저장된 링크가 없습니다.
                </div>
              )}
            </div>
          )}
        </section>
        <div ref={footerRef} style={{ height: "0.1px" }} />
      </main>
    </>
  );
}
