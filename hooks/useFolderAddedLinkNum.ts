import { useEffect, useState } from "react";

import { getFolders, getLinks } from "@/utils/api";
import { Folder } from "@/utils/api/types";

interface folderAddedLinkNumType extends Folder {
  linkNum: number;
}

const useFolderAddedLinkNums = (
  userId: number,
  currentFolderId: number | undefined | null,
) => {
  const [folderList, setFolderList] = useState<folderAddedLinkNumType[]>([]);

  useEffect(() => {
    const addLinkNumToFolder = async () => {
      const [folders, links] = await Promise.all([
        getFolders(userId),
        getLinks(userId),
      ]);

      const list: folderAddedLinkNumType[] = folders.map((folder) => {
        const linkNum = links.filter(
          (link) => link.folder_id === folder.id,
        ).length;

        return { ...folder, linkNum };
      });

      const filteredList = currentFolderId
        ? list.filter((folder) => {
            return (
              folder.id !== currentFolderId && folder.name !== "⭐️ 즐겨찾기"
            );
          })
        : list.filter((folder) => folder.name !== "⭐️ 즐겨찾기");

      setFolderList(filteredList);
    };

    addLinkNumToFolder();
  }, [currentFolderId, userId]);

  return folderList;
};

export default useFolderAddedLinkNums;
