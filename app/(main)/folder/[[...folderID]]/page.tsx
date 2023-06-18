"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import classNames from "classnames/bind";
import { useRouter } from "next/navigation";

import AddFolderButton from "@/components/AddFolderButton";
import AddLinkBar from "@/components/AddLinkBar";
import Card from "@/components/Card/Card";
import FolderChip from "@/components/FolderChip";
import Option from "@/components/Option";
import SearchBar from "@/components/SearchBar";
import { useSetVisibleGNB } from "@/hooks/useVisibleGNBContext";
import { getFolders, getLink } from "@/utils/api";

import styles from "./page.module.scss";
import { Folder, Link } from "@/types";
import { LineWave } from "react-loader-spinner";

const cx = classNames.bind(styles);

export default function Folder({ params }: { params: { folderID: string[] } }) {
  const folderIDParams = params.folderID ? Number(params.folderID[0]) : 0;
  const userID = 1; // 추후 auth 기능 추가
  const [currentFolder, setCurrentFolder] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const router = useRouter();

  const targetRef = useRef<HTMLDivElement>(null);
  const setVisibleGNB = useSetVisibleGNB();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [shownAtBottom, setShownAtBottom] = useState(false);

  const onAddFolder = (name: string) => {
    return name;
  };

  const onEditFolder = (id: number, newName: string) => {
    return [id, newName];
  };

  const onDeleteFolder = (id: number) => {
    return id;
  };

  const onDeleteLink = (id: number) => {
    return id;
  };

  useEffect(() => {
    getFolders(userID).then((res) => {
      setFolders(res);

      const foundFolder = res.find((folder) => folder.id === folderIDParams);
      if (foundFolder)
        setCurrentFolder({ id: foundFolder.id, name: foundFolder.name });
      else
        folderIDParams
          ? router.back()
          : setCurrentFolder({ id: 0, name: "전체" });
    });

    getLink(userID, folderIDParams).then((res) => {
      setLinks(res);
    });
  }, [folderIDParams, router]);

  useEffect(() => {
    const targetRefCurrent = targetRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const changeCondition =
            entry.boundingClientRect.top <= (isMobile ? 20 : 40);
          if (changeCondition) {
            setVisibleGNB(false);
            setShownAtBottom(true);
          } else {
            setVisibleGNB(true);
            setShownAtBottom(false);
          }
        });
      },
      {
        threshold: [1],
        rootMargin: `${isMobile ? "-20px" : "-40px"} 0px 0px 0px`,
      },
    );

    if (targetRefCurrent) {
      observer.observe(targetRefCurrent);
    }

    return () => {
      setVisibleGNB(true);
      observer.disconnect();
    };
  }, [isMobile, setVisibleGNB]);

  return (
    <>
      <div className={cx("addLinkSection", { shownAtBottom })}>
        <div className={cx("addLinkBarContainer")}>
          <AddLinkBar />
        </div>
      </div>
      <main>
        <section className={cx("folderSection", { shownAtBottom })}>
          <div className={cx("searchBarContainer")} ref={targetRef}>
            <SearchBar />
          </div>
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
      </main>
    </>
  );
}
