"use client";
import React, { ReactNode, use } from "react";
import FolderTabsContext from "@/contexts/FolderTabsContext";
import { Folder } from "$/types";
import { userId } from "@/utils/common.api";
import { fetchData } from "$/src/utils/fetchData";

const fetchTabs = () =>
  fetchData<Folder[]>({ url: `/api/users/${userId}/folders` });

const FoderTabsContextProvider = ({ children }: { children: ReactNode }) => {
  const value = use(fetchTabs());

  return (
    <FolderTabsContext.Provider value={value}>
      {children}
    </FolderTabsContext.Provider>
  );
};

export default FoderTabsContextProvider;
