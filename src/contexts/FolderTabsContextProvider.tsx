"use client";
import React, { ReactNode, use, useState } from "react";
import FolderTabsContext from "@/contexts/FolderTabsContext";
import { Folder } from "$/types";
import { userId } from "@/utils/common.api";
import { fetchData } from "$/src/utils/fetchData";

const FolderTabsContextProvider = ({ children }: { children: ReactNode }) => {
  const [tabs, setTabs] = useState<Folder[]>([]);

  return (
    <FolderTabsContext.Provider value={{ tabs, setTabs }}>
      {children}
    </FolderTabsContext.Provider>
  );
};

export default FolderTabsContextProvider;
