"use client";
import React, { ReactNode, useEffect, useState } from "react";
import AddLinkBarBottomContext from "./AddLinkBarBottomContext";

const AddLinkBarBottomContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isAddLinkBarBottom, setIsAddLinkBarBottom] = useState(false);
  useEffect(() => {}, [isAddLinkBarBottom]);
  return (
    <AddLinkBarBottomContext.Provider
      value={{ isAddLinkBarBottom, setIsAddLinkBarBottom }}
    >
      {children}
    </AddLinkBarBottomContext.Provider>
  );
};

export default AddLinkBarBottomContextProvider;
