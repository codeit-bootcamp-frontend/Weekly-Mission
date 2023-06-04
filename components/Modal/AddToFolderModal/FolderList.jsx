"use client";

import { useState } from "react";

import { MOCK_FOLDER } from "@/utils/data";

import FolderListItem from "./FolderListItem";

export default function FolderList() {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const handleClickItem = (itemId) => {
    setSelectedItemId(itemId);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        width: "100%",
      }}
    >
      {MOCK_FOLDER.map((folder) => (
        <FolderListItem
          key={folder.id}
          folder={folder}
          selected={selectedItemId === folder.id}
          onClick={handleClickItem}
        />
      ))}
    </div>
  );
}
