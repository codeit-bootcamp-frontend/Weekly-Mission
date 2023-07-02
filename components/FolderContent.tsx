"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LineWave } from "react-loader-spinner";

import classNames from "classnames/bind";
import { useRouter } from "next/navigation";

import AddFolderButton from "@/components/AddFolderButton";
import AddLinkBar from "@/components/AddLinkBar";
import Card from "@/components/Card/Card";
import MyCardMenu from "@/components/Card/MyCardMenu";
import FolderChip from "@/components/FolderChip";
import Option from "@/components/Option";
import SearchBar from "@/components/SearchBar";
import { useSetInViewGNB } from "@/hooks/useInViewGNBContext";
import {
  deleteFolder,
  deleteLink,
  postFolder,
  postLink,
  putFolder,
} from "@/utils/api";
import { Folder, Link, SelectedFolder } from "@/utils/api/types";

import styles from "./FolderContent.module.scss";

const cx = classNames.bind(styles);

interface FolderContentProps {
  userId: string;
  initialFolders: Folder[];
  initialCurrentFolder: SelectedFolder;
  initialLinks: Link[];
}

export default function FolderContent({
  userId,
  initialFolders,
  initialCurrentFolder,
  initialLinks,
}: FolderContentProps) {
  const [folders, setFolders] = useState<Folder[]>(initialFolders);
  const [currentFolder, setCurrentFolder] =
    useState<SelectedFolder>(initialCurrentFolder);
  const [links, setLinks] = useState<Link[]>(initialLinks);
  const setInViewGNB = useSetInViewGNB();
  const { ref: addLinkRef, inView: inViewAddLink } = useInView();
  const { ref: footerRef, inView: inViewFooter } = useInView();
  const router = useRouter();
  const filteredFolders = folders.filter(
    (folder) =>
      folder.name !== "⭐️ 즐겨찾기" && folder.name !== currentFolder.name,
  );

  const onAddLink = async (
    url: string,
    userId: string,
    folderId: string | null,
  ) => {
    const linkRes = await postLink(url, userId, folderId);
    if (!linkRes) return;
    const isNew = links.every((link) => linkRes.url !== link.url);
    if (!isNew) return;
    if (linkRes.folder_id.includes(currentFolder.id) || currentFolder.id === "")
      setLinks([linkRes, ...links]);
  };

  const onAddFolder = async (name: string) => {
    const addedFolder = await postFolder(name, userId);
    setFolders([...folders, addedFolder]);
  };

  const onEditFolder = async (newName: string, id: string) => {
    await putFolder(newName, id);
    const updatedFolders = folders.map((folder) => {
      if (folder.id === id) return { ...folder, name: newName };
      return folder;
    });
    setFolders(updatedFolders);
    setCurrentFolder({ id, name: newName });
  };

  const onDeleteFolder = async (id: string) => {
    await deleteFolder(id);
    router.push("/folder");
  };

  const onDeleteLink = async (id: string, folderId?: string) => {
    await deleteLink(id, folderId);
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  };

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
          <AddLinkBar folders={filteredFolders} onAddLink={onAddLink} />
        </div>
      </div>
      <main className={cx("main", { addLinkAtBottom: !inViewAddLink })}>
        <div ref={addLinkRef} style={{ height: "0.1px" }} />
        <section className={cx("folderSection")}>
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
                    <FolderChip
                      folder={{ id: "", name: "전체" }}
                      selected={currentFolder.id === ""}
                    />
                  </div>
                  {folders.map((folder) => (
                    <div key={folder.id} className={cx("chipContainer")}>
                      <FolderChip
                        folder={{ id: folder.id, name: folder.name }}
                        selected={currentFolder.id === folder.id}
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
                    menuComponent={
                      <MyCardMenu
                        link={link}
                        folders={filteredFolders}
                        currentFolderId={currentFolder.id}
                        onDelete={onDeleteLink}
                        onAddLink={onAddLink}
                      />
                    }
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
