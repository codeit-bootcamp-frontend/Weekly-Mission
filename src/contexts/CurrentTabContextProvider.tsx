"use client";
import React, { ReactNode, useState } from "react";
import CurrentTabContext from "./CurrentTabContext";

const CurrentTabContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentFolderTitle, setCurrentFolderTitle] = useState<string>("전체");
  return (
    <CurrentTabContext.Provider
      value={{ currentFolderTitle, setCurrentFolderTitle }}
    >
      {children}
    </CurrentTabContext.Provider>
  );
};

export default CurrentTabContextProvider;
