"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Children } from "@/types";

const VisibleGNBContext = createContext<{
  visibleGNB: boolean;
  setVisibleGNB: Dispatch<SetStateAction<boolean>>;
} | null>(null);

const VisibleGNBProvider = ({ children }: Children) => {
  const [visibleGNB, setVisibleGNB] = useState(true);
  return (
    <VisibleGNBContext.Provider value={{ visibleGNB, setVisibleGNB }}>
      {children}
    </VisibleGNBContext.Provider>
  );
};

const useVisibleGNB = () => {
  const context = useContext(VisibleGNBContext);

  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다");
  }

  const { visibleGNB } = context;
  return visibleGNB;
};

const useSetVisibleGNB = () => {
  const context = useContext(VisibleGNBContext);

  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다");
  }

  const { setVisibleGNB } = context;
  return setVisibleGNB;
};

export { VisibleGNBProvider, useVisibleGNB, useSetVisibleGNB };
