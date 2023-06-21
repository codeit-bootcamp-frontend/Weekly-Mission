"use client";
import { Folder } from "@/app/types/types";
import React from "react";
import FolderChip from "../FolderChip/FolderChip";

interface FolderChipListProps {
  folderList: Folder[];
  folderId: number;
}

const FolderChipList = ({ folderList, folderId }: FolderChipListProps) => {
  return (
    <>
      {folderList.map((folder) => {
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
