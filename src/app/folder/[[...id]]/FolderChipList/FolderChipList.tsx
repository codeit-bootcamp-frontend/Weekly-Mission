"use client";
import { Folder } from "@/app/types/types";
import React, { useEffect } from "react";
import FolderChip from "../FolderChip/FolderChip";
import { useRecoilState } from "recoil";
import { folderListState } from "@/app/recoil/atoms";

interface FolderChipListProps {
  folderList: Folder[];
  folderId: number;
}

const FolderChipList = ({ folderList, folderId }: FolderChipListProps) => {
  const [currentFolders, setCurrentFolders] = useRecoilState(folderListState);
  useEffect(() => {
    setCurrentFolders(folderList);
  }, [setCurrentFolders, folderList]);
  return (
    <>
      {currentFolders.map((folder) => {
        return (
          <li key={folder.id}>
            <FolderChip
              href={`/folder/${folder.id}`}
              label={folder.name}
              selected={+folderId === folder.id}
            />
          </li>
        );
      })}
    </>
  );
};

export default FolderChipList;
