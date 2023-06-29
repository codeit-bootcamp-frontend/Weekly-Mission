"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Children } from "@/types";

const inViewGNBContext = createContext<{
  inViewGNB: boolean;
  setInViewGNB: Dispatch<SetStateAction<boolean>>;
} | null>(null);

const InViewGNBProvider = ({ children }: Children) => {
  const [inViewGNB, setInViewGNB] = useState(true);
  return (
    <inViewGNBContext.Provider value={{ inViewGNB, setInViewGNB }}>
      {children}
    </inViewGNBContext.Provider>
  );
};

const useInViewGNB = () => {
  const context = useContext(inViewGNBContext);

  if (!context) {
    throw new Error(
      "inViewGNB는 반드시 InViewGNBProvider 안에서 사용해야 합니다",
    );
  }

  const { inViewGNB } = context;
  return inViewGNB;
};

const useSetInViewGNB = () => {
  const context = useContext(inViewGNBContext);

  if (!context) {
    throw new Error(
      "setInViewGNB는 반드시 InViewGNBProvider 안에서 사용해야 합니다",
    );
  }

  const { setInViewGNB } = context;
  return setInViewGNB;
};

export { InViewGNBProvider, useInViewGNB, useSetInViewGNB };
