"use client";
import React, { ReactNode, use } from "react";
import FolderTabsContext from "@/contexts/FolderTabsContext";
import { Folder } from "$/types";
import { userId } from "@/utils/common.api";
import { getData } from "@/utils/getData";

const FoderTabsContextProvider = ({ children }: { children: ReactNode }) => {
  const value = use(getData<Folder[]>(`/api/users/${userId}/folders`));

  return (
    <FolderTabsContext.Provider value={value}>
      {children}
    </FolderTabsContext.Provider>
  );
};

export default FoderTabsContextProvider;
