"use client";

import { createContext, useContext, useState } from "react";

import PropTypes from "prop-types";

const VisibleGNBContext = createContext();

const VisibleGNBProvider = ({ children }) => {
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

VisibleGNBProvider.propTypes = {
  children: PropTypes.node,
};
